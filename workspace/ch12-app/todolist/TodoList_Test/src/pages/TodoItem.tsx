import React from "react";
import "./TodoItem.css"

export interface TodoItem {
  _id: number;
  title: string;
  done: boolean;
}

interface TodoItemProps {
  item: TodoItem;
  toggleDone: (_id: number) => void;
  deleteItem: (_id: number) => void;
}

// TODO 2. 컴포넌트 메모이제이션
const TodoItem = function TodoItem({ item, toggleDone, deleteItem }: TodoItemProps){
  "use no memo"
  console.log('\t\t\t\tTodoItem 렌더링', item);
  return (
    <div className='TodoItem'>
      <span className='id'>{ item._id }</span>
      <span className='content' onClick= { () => toggleDone(item._id) }>{ item.done ? <s>{ item.title }</s> : item.title }</span>
      <button type="button" onClick={ () => deleteItem(item._id) }>삭제</button>
    </div>
  );
};

export default React.memo(TodoItem);