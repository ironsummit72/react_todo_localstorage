import {useRef,useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Todoinput from "./Components/TodoInput/Todoinput";
import TodoItem from "./Components/Todo/TodoItem";
import { addLocalStorageData, createLocalStorage, createTodo, getLocalStorageData } from "./apis/TodoLocalStorage";
const LocalStorageKey = "TODODB";

function App() {
  const handleInputRef=useRef();
  const [todoItems, settodoItems]=useState(getLocalStorageData(LocalStorageKey)===null ?[]:getLocalStorageData(LocalStorageKey))
  let InputValue=undefined
  if (localStorage.getItem(LocalStorageKey) === null) {
    console.log(localStorage.getItem(LocalStorageKey));
    createLocalStorage(LocalStorageKey);
  }
 
  
  const HandleInput=(e)=>{
  InputValue=e.target.value

  }
  const HandleAddBtn=()=>{
    console.log(InputValue);
    if(InputValue!==undefined)
    {
      const todoData= new createTodo(InputValue,false)
      addLocalStorageData(LocalStorageKey,todoData)
      settodoItems(getLocalStorageData(LocalStorageKey))
      handleInputRef.current.value=''
   
    }
  }
  return (
    <>
      <Navbar />
      <div class="app_container">
        <Todoinput onHandleClickAdd={HandleAddBtn} onChangeInput={HandleInput} inputRef={handleInputRef}/>
        {
          todoItems.map((items,index)=>{
             return <TodoItem key={index} todoText={items.todo} line={false} onHandleChangeCheck={()=>{}} onHandleDelete={()=>{}} onHandleEdit={()=>{}}/>
            
          })
        }
      </div>
    </>
  );
}

export default App;
