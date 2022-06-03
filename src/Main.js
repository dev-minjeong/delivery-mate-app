import { Link } from 'react-router-dom';
import './Main.css';
function Main() {
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
        <section>전체 게시물</section>
      </main>
    </>
  );
}
export default Main;
