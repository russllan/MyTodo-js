
import './App.css';
import Header from './Components/header/Header';
import CreateTodo from './Components/create-todo/CreateTodo';
import Todoitem from './Components/todo-item/Todoitem';
import {useState} from "react";


function App() {

  const [arr, setArr] = useState([
    { id: 1, text: "Купить мороженое", status: true}, 
    { id: 2, text: 'Купить что-то', status: false}, 
    { id: 3, text:"Купить воду", status:true},
    { id: 4, text: "Сделать проект на react.js",status:false},
  ]);

  // const arr = [
  //   {text: "Купить мороженое", status: true}, 
  //   {text: 'Купить что-то', status: false}, 
  //   {text:"Купить воду", status:true}
  // ]
  
  const result = arr.reduce((acc, item)=>{
    return acc + Number(item.status);
  },0);

  const handleAddTodo = (newText) => {
    setArr([...arr, {text: newText, status: false, id:Date.now()}])
  }

  const handleDeleteTodo = (id) =>{
    console.log(arr);
    alert('delete from app' + id);
    // id.filter()
    const newArray = arr.filter((item) => item.id !== id)
    console.log(newArray);
    setArr(newArray)
  }

  const handleStatus = (id) =>{
     const newArray = arr.map((item) => {
      if(item.id === id){
        return { ...item, status: !item.status }
      }
        return item
      })
     setArr(newArray)
     console.log(newArray);
  }
  
  const newArr = arr.map((item) =>{
    return <Todoitem handleDelete={handleDeleteTodo} 
    handleStatus={handleStatus}
    id={item.id} 
    text={item.text}
    boolean={item.status} />
  })

  return (
    <div className="App">
        <Header length = {arr.length} result={result}/>
        <div className='content'>
          <CreateTodo  Todo={handleAddTodo}/>
          <div className='todos-wrapper'>
              {/* <Todoitem text="Купить сахар" boolean={true}/>
              <Todoitem text="Купить колу " boolean={false}/> */}
              {newArr}
          </div>
        </div>
    </div>
  );
}

export default App;
