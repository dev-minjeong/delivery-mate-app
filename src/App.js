import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Filter from './component/Filter';

/**
 * Main - 게시판 기능 만들기
 * 지도 api 연동하기
 * 카테고리 별 글 필터링하기
 * 유저페이지 만들기
 * 결제시스템 구현하기
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/filter' element={<Filter />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
