import axios from 'axios';
import { Link } from 'react-router-dom';
import './Main.css';
import Tr from './Tr';
import Post from './Post';
import { useEffect, useState, useRef } from 'react';
function Main() {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  // 고유 아이디
  const nextId = useRef(11);

  // 데이터 호출
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);
  const onSave = (data) => {
    // 데이터 수정
    if (data.id) {
      setInfo(
        info.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                name: data.name,
                email: data.email,
                phone: data.phone,
                website: data.website,
              }
            : row
        )
      );
    } else {
      // 데이터 추가
      setInfo((info) =>
        info.concat({
          id: nextId.current,
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website,
        })
      );
      nextId.current += 1;
    }
  };
  const onRemove = (id) => {
    setInfo((info) => info.filter((item) => item.id !== id));
  };
  const onEdit = (item) => {
    setModalOn(true);
    const selectData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website,
    };
    console.log(selectData);
    setSelected(selectData);
  };
  const onCancel = () => {
    setModalOn(false);
  };
  const onEditSubmit = (item) => {
    console.log(item);
    onSave(item);
    setModalOn(false);
  };
  return (
    <>
      <header>김민정님, 환영합니다!</header>
      <main>
        <aside>
          <h3>메뉴</h3>
          <ul>
            <li>
              <Link to={'/filter/korean'}>한식</Link>
            </li>
            <li>
              <Link to={'/filter/japanese'}>일식</Link>
            </li>
            <li>
              <Link to={'/filter/chinese'}>중식</Link>
            </li>
            <li>
              <Link to={'/filter/western'}>양식</Link>
            </li>
          </ul>
          <input type='text'></input>
        </aside>
        <section>
          <table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <Tr info={info} onRemove={onRemove} onEdit={onEdit}></Tr>
          </table>
          <Post handleSaveData={onSave}></Post>
          {/* {modalOn && <Modal></Modal>} */}
        </section>
      </main>
    </>
  );
}
export default Main;
