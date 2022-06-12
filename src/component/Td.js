import styled from 'styled-components';

const Container = styled.tr`
  .button {
    cursor: pointer;
    color: #8c9eff;
  }
`;

function Td({ item, onRemove, onEdit }) {
  const handleRemove = () => {
    onRemove(item.id);
  };
  const handleEdit = () => {
    onEdit(item);
  };
  return (
    <Container>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.website}</td>
      <td className='button' onClick={handleEdit}>
        Edit
      </td>
      <td className='button' onClick={handleRemove}>
        Remove
      </td>
    </Container>
  );
}
export default Td;
