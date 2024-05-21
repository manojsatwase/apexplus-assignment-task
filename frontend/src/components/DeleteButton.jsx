import { RiDeleteBin5Fill } from 'react-icons/ri';

const DeleteButton = ({id, handleDelete, children ,isIcon = false, }) => {
  return (
    isIcon ? (
     <td className='delete-icon' onClick={()=>handleDelete(id)}>
        <RiDeleteBin5Fill />
   </td>
    ): (
    <button className="delete-btn" onClick={handleDelete}>
      {children}
    </button>
    )
  );
};

export default DeleteButton;
