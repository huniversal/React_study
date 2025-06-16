
import TodoInput from "@pages/TodoInput";
import type { TodoItem } from "@pages/TodoItem";
import TodoList from "@pages/TodoList";

interface TodoProps {
  itemList: TodoItem[];
  addItem: (title: string) => void;
  toggleDone: (id: number) => void;
  deleteItem: (id: number) => void;
}

function Todo(props: TodoProps){
  console.log('\tTodo 렌더링');

  return (
    <div id="main">
      <div id="container">
        <TodoInput addItem={ props.addItem } />
        <TodoList itemList={ props.itemList } toggleDone={ props.toggleDone } deleteItem={ props.deleteItem } />
      </div>
    </div>
  );
}

export default Todo;