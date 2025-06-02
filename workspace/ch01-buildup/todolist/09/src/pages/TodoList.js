import Reaction from "../reaction.js"
import TodoItem from "./TodoItem.js";

function TodoList({ itemList, deleteItem, toggleDone }){
  const items = itemList.map(item => TodoItem({ item, deleteItem, toggleDone }));
  return(
    Reaction.createElement('ul', { class: 'todolist' }, items)   
  );
}

export default TodoList;