import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { LoadingContext } from "./loading-context";

export const TodoContext = createContext({
  addValue : [],
  editTodo: {},
  editDescription:"",
  editTask:"",
  setEditTask:() => {},
  setEditDescription: () => {},
  setAddValue: () => {},
  handleDelete: () => {},
  setEditTodo: () =>{},
  handleEdit: () =>{}
});

const TodoContextProvider = ({ children }) => {
  const [addValue, setAddValue] = useState([]);
  const [editTodo, setEditTodo] = useState({});
  const [editTask, setEditTask] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const {startLoading, stopLoading} = useContext(LoadingContext);
  useEffect(() => {
    startLoading()
    const fetchData = async()=>{
      await axios({
             method:'get',
             url: 'http://localhost:5209/TodoList/GetTodos',
             headers:{
               'Content-Type':'application/json'
             }
           })
           .then((response)=>{
            stopLoading()
             setAddValue([...response.data.data]) 
             console.log(response.data.data)
           })
           .catch(function(err){
            stopLoading()
             console.log(err)
           })
   }
   fetchData()
  },[]);


  const handleDelete = (id) =>{
    startLoading()
    const fetchDeleteData = async()=>{
      await axios({
             method:'delete',
             url: 'http://localhost:5209/TodoList/DeleteTodo/' + id,
             headers:{
               'Content-Type':'application/json'
             }
           })
           .then((response)=>{
            stopLoading() 
             setAddValue([...response.data.data]) 
           })
           .catch(function(err){
            stopLoading()
             console.log(err)
           })
   }
   fetchDeleteData()
   }
   
   const handleEdit = (id) =>{
    const edit = addValue.find((itm) => itm.id === id)
    setEditTodo(edit);
    setEditTask(edit.taskName)
    setEditDescription(edit.description)
   }

  return (
    <TodoContext.Provider
      value={{
        addValue,
        editTodo,
        editTask,
        editDescription,
        setAddValue,
        handleDelete,
        handleEdit,
        setEditTask,
        setEditDescription,
        setEditTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
 