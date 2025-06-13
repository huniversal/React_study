
import TodoInput from "@pages/TodoInput";
import TodoList from "@pages/TodoList";
import type { TodoItem } from "@pages/TodoItem";

interface TodoProps {
  itemList: TodoItem[];
  addItem: (title: string) => void;
  toggleDone: (_id: number) => void; // 여기 타입 지정해주세요
  deleteItem: (_id: number) => void; // 여기 타입 지정해주세요
}

function Todo(props: TodoProps){
  console.log('\tTodo 렌더링');

  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>할일 목록</h2>
            <TodoInput addItem={ props.addItem } />
            <TodoList 
              itemList={ props.itemList } 
              toggleDone={ props.toggleDone } 
              deleteItem={ props.deleteItem } 
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;