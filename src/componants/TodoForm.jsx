import { useContext, useEffect, useRef, useState } from "react";
import { TodoContext } from "../store/todo-conrext";
import axios from "axios";
import { LoadingContext } from "../store/loading-context";

export default function TodoForm() {
  const { setAddValue, editTodo, editTask, editDescription, setEditDescription,setEditTask } = useContext(TodoContext); 
  const {startLoading, stopLoading} = useContext(LoadingContext);
  const handleAdd = () => {
      var m = new Date();
      var dateString =
      m.getUTCFullYear() + "/" + ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" + ("0" + m.getUTCDate()).slice(-2) + " " + ("0" + m.getUTCHours()).slice(-2) + ":" + ("0" + m.getUTCMinutes()).slice(-2) + ":" + ("0" + m.getUTCSeconds()).slice(-2);
      
      if(JSON.stringify(editTodo) === '{}'){
        startLoading()
        const fetchAddData = async()=>{
          await axios({
            method: "post",
            url: 'http://localhost:5209/TodoList/AddTodo',
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              id: 0,
              taskName: editTask,
              description: editDescription,
              date:dateString,
            },
          })
            .then((response) => {
              stopLoading()
              setAddValue([...response.data.data]);
              setEditTask("");
              setEditDescription("")
            })
            .catch(function (err) {
              stopLoading()
              console.log(err);
            });
       }
       fetchAddData();
      }else{
        const fetchUpdateData = async()=>{
          await axios({
            method: "put",
            url: 'http://localhost:5209/TodoList/UpdateTodo',
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              id: editTodo.id,
              taskName: editTask,
              description: editDescription,
              date:dateString,
            },
          })
            .then((response) => {
              setAddValue([...response.data.data]);
              setEditTask("");
              setEditDescription("");
            })
            .catch(function (err) {
              console.log(err);
            });
       }
       fetchUpdateData()
      }
  }
  

  function handleTask (e){
    setEditTask(e.target.value)
  }

  function handleDescription(e){
    setEditDescription(e.target.value)
  }

  return (
    <div className="d-inline-flex ">
       
        <>
          <input
            type="text"
            className="form-control mx-2"
            placeholder="Title"
            value={editTask}
            onChange={handleTask}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={editDescription}
            onChange={handleDescription}
          />
          <button className="btn btn-primary px-3 mx-1" onClick={handleAdd}>
            {editTodo ? "Add" : "Update" }
          </button>
        </>

    </div>
  );
}
