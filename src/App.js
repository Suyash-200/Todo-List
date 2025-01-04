import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './componants/Header';
import TodoForm from './componants/TodoForm';
import TodoList from './componants/TodoList';
import Loader from './componants/Loader';

function App() {
  return (
    <center className=''>
       <Loader></Loader>
      <Header/>
      <TodoForm/>
      <TodoList/>     
    </center>
  );
}

export default App;
