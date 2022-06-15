import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/Main';
import Filter from './component/Filter';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';

/**
 * Main - 게시판 기능 만들기
 * 지도 api 연동하기
 * 카테고리 별 글 필터링하기
 * 유저페이지 만들기
 * 결제시스템 구현하기
 */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');  
  set css
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  button {
    all: unset;
    cursor: pointer;
  }
`;
function App() {
  const [host, setHost] = useState('');

  useEffect(() => {
    _getHost();
  }, []);

  const _getHost = async () => {
    const res = await axios.get('/api/host');
    setHost(res.data.host);
  };

  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <h3>Hello {host}</h3>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/filter' element={<Filter />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
