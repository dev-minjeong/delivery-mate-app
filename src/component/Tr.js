import Td from './Td';

function Tr({ info, onRemove, onEdit }) {
  return (
    <tbody>
      {info.map((item) => {
        return (
          <Td
            key={item.id}
            item={item}
            onRemove={onRemove}
            onEdit={onEdit}
          ></Td>
        );
      })}
    </tbody>
  );
}
export default Tr;
