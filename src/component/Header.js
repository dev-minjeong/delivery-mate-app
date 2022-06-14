import styled from 'styled-components';

const HeaderBox = styled.header`
  background-color: #5870cb;
  height: 10vh;
  color: #c0cfff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-size: 20px;
    font-weight: 900;
  }
  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: whitesmoke;
    color: #5870cb;
    text-align: center;
    font-size: 12px;
  }
`;

function Header() {
  return (
    <HeaderBox>
      <button>위치 설정</button>
      <h1>김민정님, 환영합니다!</h1>
      <button>로그인</button>
    </HeaderBox>
  );
}
export default Header;
