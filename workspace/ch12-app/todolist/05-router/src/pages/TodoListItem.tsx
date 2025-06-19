import type { TodoItem } from "@pages/TodoInfo";
import { Link } from "react-router";

interface TodoListItemProps {
  item: TodoItem;
}

function TodoListItem({ item }: TodoListItemProps) {
  return (
    <li>
      <span>{ item._id }</span>
      <Link to={`/list/${item._id}`}>{ item.done ? <s>{item.title}</s>: item.title }</Link>
      <button type='button' onDoubleClick={}>삭제</button>
    </li>
  );
}

export default TodoListItem;