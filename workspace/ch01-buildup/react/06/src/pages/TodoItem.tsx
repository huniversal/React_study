function TodoItem({ item, toggleDone, deleteItem }){
  return (
    <li>
      <span>{ item.num }</span>
      <span onClick ={ () => toggleDone(item.num) }>{ item.done ? <s>{ item.title }</s> : item.title }</span>
      <button type="button" onClick ={ () => deleteItem(item.num) }>삭제</button>
    </li>
  );
}
export default TodoItem;