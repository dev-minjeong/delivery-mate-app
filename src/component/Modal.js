import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(97, 97, 97, 0.332);
  flex-direction: column;
  align-items: center;
  * {
    color: none;
    background-color: none;
    border: none;
    margin: 0;
    padding: 0;
  }
  button {
    cursor: pointer;
  }
  .headerForm {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .headerForm h3 {
    color: #5870cb;
  }
  .headerForm button {
    font-size: large;
  }
  .modalForm {
    background-color: whitesmoke;
    max-width: 600px;
    padding: 20px;
    align-items: center;
    text-align: center;
    margin: auto 0;
  }
  .modalForm div {
    margin-bottom: 15px;
  }
  .modalForm input {
    margin-left: 10px;
  }
  .submit button {
    margin: 20px;
    background-color: rgb(208, 178, 236);
    font-weight: 600;
    padding: 6px 0px;
    width: 70px;
    border-radius: 10px;
  }
`;

function Modal({ selectedData, onCancel, onEditSubmit }) {
  const [edited, setEdited] = useState(selectedData);
  const handleCancel = () => {
    onCancel();
  };
  const handleEditChange = (e) => {
    setEdited({
      ...edited,
      [e.target.name]: e.target.value,
    });
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEditSubmit(edited);
  };
  return (
    <Container className='modal'>
      <form className='modalForm' onSubmit={handleEditSubmit}>
        <div className='headerForm'>
          <div></div>
          <h3>회원 정보 수정</h3>
          <button onClick={handleCancel}>X</button>
        </div>
        <div className='editId'>ID: {edited.id}</div>
        <div className='editName'>
          Name:
          <input
            type='text'
            name='name'
            value={edited.name}
            onChange={handleEditChange}
          ></input>
        </div>
        <div className='editEmail'>
          Email:
          <input
            type='text'
            name='email'
            value={edited.email}
            onChange={handleEditChange}
          ></input>
        </div>
        <div className='editPhone'>
          Phone:
          <input
            type='text'
            name='phone'
            value={edited.phone}
            onChange={handleEditChange}
          ></input>
        </div>
        <div className='editWebsite'>
          Website:
          <input
            type='text'
            name='website'
            value={edited.website}
            onChange={handleEditChange}
          ></input>
        </div>
        <div className='submit'>
          <button onClick={handleCancel}>cancel</button>
          <button type='submit'>edit</button>
        </div>
      </form>
    </Container>
  );
}
export default Modal;
