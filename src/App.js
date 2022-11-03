import './App.css';
import Header from './Components/header/Header';
import CreateTodo from './Components/create-todo/CreateTodo';
import Todoitem from './Components/todo-item/Todoitem';
import { useSelector } from 'react-redux';


function App() {

  // // const arr = useState([
  //   {text: "Hellow", age: 18},
  //   {text:"World", age:20}
  // ])

  const arr = useSelector((state) => state.todos.data);

  // useEffect(() => {
  //   console.log("State Arr is changed");
  //   localStorage.setItem("todo", JSON.stringify(arr))
  // }, [arr])

  // const arr = [
  //   {text: "Купить мороженое", status: true}, 
  //   {text: 'Купить что-то', status: false}, 
  //   {text:"Купить воду", status:true}
  // ]
  
  const result = arr.reduce((acc, item)=>{
    return acc + Number(item.status);
  },0);

  // const handleAddTodo = (newText) => {
  //   setArr([...arr, {text: newText, status: false, id:Date.now()}])
  // }

  // const handleStatus = (id) =>{
  //    const newArray = arr.map((item) => {
  //     if(item.id === id){
  //       return { ...item, status: !item.status }
  //     }
  //       return item
  //     })
  //    setArr(newArray)
  //    console.log(newArray);
  // }

  // const handleEdit = (id, newText) =>{
  //   const newArray = arr.map((item) => {
  //     if(item.id === id) {
  //       return {...item, text: newText}
  //     }
  //     return item
  //   })
  //   console.log(newArray);
  //   setArr(newArray)
  // }
  
  const newArr = arr.map((item) =>{
    return <Todoitem 
    key = {item.id}
    id={item.id} 
    text={item.text}
    boolean={item.status}
    />
  })

  return (
    <div className="App">
        <Header length = {arr.length} result={result}/>
        <div className='content'>
          <CreateTodo />
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
