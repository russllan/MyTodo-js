import './App.css';
import Header from './Components/header/Header';
import CreateTodo from './Components/create-todo/CreateTodo';
import Todoitem from './Components/todo-item/Todoitem';
import {useEffect, useState} from "react";


function App() {

  // const arr = useState("Ruslan");

  // // const arr = useState([
  //   {text: "Hellow", age: 18},
  //   {text:"World", age:20}
  // ])

  const [arr, setArr] = useState( JSON.parse(localStorage.getItem('todo')) || [] );

  useEffect(() => {
    console.log("Hello from Effect");
  }, []);

  useEffect(() => {
    console.log("State Arr is changed");
    localStorage.setItem("todo", JSON.stringify(arr))
  }, [arr])

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

  const handleEdit = (id, newText) =>{
    const newArray = arr.map((item) => {
      if(item.id === id) {
        return {...item, text: newText}
      }
      return item
    })
    console.log(newArray);
    setArr(newArray)
  }
  
  const newArr = arr.map((item) =>{
    return <Todoitem handleDelete={handleDeleteTodo} 
    handleStatus={handleStatus}
    id={item.id} 
    text={item.text}
    boolean={item.status}
    handleEdit={handleEdit}
    />
  })

  return (
    <div className="App">
        <Header length = {arr.length} result={result}/>
        <div className='content'>
          <CreateTodo  Todo={handleAddTodo}/>
          <div className='todos-wrapper'>
              {/* <Todoitem text="Купить сахар" boolean={true}/>
              <Todoitem text="Купить колу " boolean={false}/> */}
              {
              newArr.length 
              ? newArr
              :<h2 className='waterMark'>Please add some Todo element</h2>
              }
          </div>
        </div>
    </div>
  );
}

export default App;
