import { Link } from 'react-router-dom';
function Menu() {
  return (
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
  );
}
export default Menu;
