import { useContext, useEffect } from "react"
import { TodoContext } from "../store/todo-conrext"
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export default function TodoList(){

 const {addValue, handleDelete, handleEdit} = useContext(TodoContext);

  return(
    <div className={` ${addValue.length != 0 && 'form-section'}`}>

<table class="styled-table">
      <thead>
        <tr>
        <th>Task Name</th>
        <th>Description</th>
        <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          addValue.map((item,index)=>(
            <tr>
              <td>{item.taskName}</td>
              <td>{item.description}</td>
              <td>
                <button className="my-2 button-1" onClick={() => handleEdit(item.id)}><CiEdit/></button>
                <button className="my-2 button-2" onClick={() => handleDelete(item.id)}><MdDelete /></button>
              </td>
            </tr>
          ))
        }
        <tr>
          
          
          
        </tr>
      </tbody>
     </table>
      {/* {
       addValue.map((item, index) => (
         <div key={item.id} className="d-flex justify-content-around div-1 my-2">
          <p className="para my-2">{item.taskName}</p> 
          <p className="para my-2">{item.description}</p> 
          <div>
          <button className="my-2 button-1" onClick={() => handleEdit(item.id)}><CiEdit/></button>
          <button className="my-2 button-2" onClick={() => handleDelete(item.id)}><MdDelete /></button>
          </div>
         </div>
       ))
     } */}

</div>
  )
}