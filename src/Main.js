import axios from 'axios';
import Tr from './component/Tr';
import Post from './component/Post';
import Modal from './component/Modal';
import Menu from './component/Menu';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  header {
    background-color: #5870cb;
    height: 10vh;
    color: #c0cfff;
  }
  main {
    display: flex;
    position: absolute;
    height: 90vh;
    width: 100vw;
  }
  aside {
    background-color: #8c9eff;
    flex-shrink: 0;
    width: 200px;
    text-align: center;
  }
  aside li {
    list-style: none;
  }
  section {
    background-color: whitesmoke;
    flex-grow: 1;
  }
`;

function Main() {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  // 고유 아이디
  const nextId = useRef(1);

  // 데이터 호출
  useEffect(() => {
    // axios
    //   .get('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => setInfo(res.data))
    //   .catch((err) => console.log(err));
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
      setInfo((info) => {
        return [
          {
            id: nextId.current,
            name: data.name,
            email: data.email,
            phone: data.phone,
            website: data.website,
          },
          ...info,
        ];
      });
      nextId.current += 1;
    }
  };
  const onRemove = (id) => {
    setInfo((info) => info.filter((item) => item.id !== id));
  };
  const onEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website,
    };
    console.log(selectedData);
    setSelected(selectedData);
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
    <Container>
      <header>김민정님, 환영합니다!</header>
      <main>
        <Menu></Menu>
        <section>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <Tr info={info} onRemove={onRemove} onEdit={onEdit}></Tr>
          </table>
          <Post handleSaveData={onSave}></Post>
          {modalOn && (
            <Modal
              selectedData={selected}
              onCancel={onCancel}
              onEditSubmit={onEditSubmit}
            ></Modal>
          )}
        </section>
      </main>
    </Container>
  );
}
export default Main;
