import './Td.css';

function Td({ item, onRemove, onEdit }) {
  const handleRemove = () => {
    onRemove(item.id);
  };
  const handleEdit = () => {
    onEdit(item);
  };
  return (
    <tr>
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
    </tr>
  );
}
export default Td;
