import type { TodoItem } from '../../App';

interface TodoListProps {
  list : TodoItem[]
}

function TodoList({list}: TodoListProps){
  const itemList = list.map(item => {
    return <li key={item._id}>{ item.title } - {item.done ? 
      '완료' : '진행중'
    }</li>
  });
  return (
    <ul className="todolist">
      { itemList }
    </ul>
  )
}

export default TodoList;