
import './App.css';
import Header from './Components/header/Header';
import CreateTodo from './Components/create-todo/CreateTodo';
import Todoitem from './Components/todo-item/Todoitem';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='content'>
          <CreateTodo />
          <div className='todos-wrapper'>
              <Todoitem />
              <Todoitem />
              <Todoitem />
              <Todoitem />
          </div>
        </div>
    </div>
  );
}

export default App;
