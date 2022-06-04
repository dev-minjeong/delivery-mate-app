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
      <td onClick={handleEdit}>Edit</td>
      <td onClick={handleRemove}>Remove</td>
    </tr>
  );
}
export default Td;
