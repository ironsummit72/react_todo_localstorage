import React from "react";
import './todoitem.css'


function TodoItem({todoText,line,onHandleChangeCheck,onHandleDelete,onHandleEdit}) {
  return (
    <>
      <div className="todo_card">
        <div className="todo_container">
            <input type="checkbox" className="todo_check" onChange={onHandleChangeCheck} name="" id="" />
            <h5 className={`todo_text ${line?"line":""}`}>{todoText}</h5>
        </div>
        <div className="button_container">
            <button className="edit" onClick={onHandleEdit}></button>
            <button className="delete" onClick={onHandleDelete}></button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
