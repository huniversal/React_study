import { useEffect, useState } from "react";
import useAxiosInstance from "../hooks/useAxiosInstance";
import { TodoItem  from "./TodoItem";

interface TodoListPropType {
  itemList: TodoItem[];
}
  const [ itemList, setItemList ] = useState<TodoItemType[]>([]);



  const liList = itemList.map((item) => {
    return (
      <TodoItem key={ item._id } item={ item } fetchList = {fetchList} />
    );
  });

  return (
    <ul className="todolist">
      { liList }
    </ul>
  );
}

export default TodoList;