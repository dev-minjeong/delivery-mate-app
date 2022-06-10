import { useState } from 'react';
import './Modal.css';

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
    <div className='modal'>
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
    </div>
  );
}
export default Modal;
