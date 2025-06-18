import { Link } from "react-router";

function TodoListItem() {
  return (
    <li>
      <span>1</span>
      <Link to="/list/1">잠자기</Link>
      <Link to="/list">삭제</Link>
    </li>
  );
}

export default TodoListItem;