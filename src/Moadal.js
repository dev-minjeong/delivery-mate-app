import { useState } from 'react';
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
    <div>
      <div>
        <h3>회원 정보 수정</h3>
        <lable onClick={onCancel}>x</lable>
      </div>
      <form onSubmit={handleEditSubmit}>
        <div>
          <div></div>
        </div>
      </form>
    </div>
  );
}
export default Modal;
