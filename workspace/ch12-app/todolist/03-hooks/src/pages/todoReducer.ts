import type {TodoItem} from "@pages/TodoItem";

type TodoAction =
  | {type: 'ADD'; value: TodoItem }
  | {type: 'TOGGLE' | 'DELETE'; value: { _id: number} }

// interface TodoAction {
//   type: 'ADD' | 'TOGGLE' | 'DELETE';
//   value: TodoItem | {_id: number};
// }

function todoReducer(state: TodoItem[], action: TodoAction):TodoItem[] {
  // TODO 1. 상태 관리 로직 작성
  switch (action.type) {
    case 'ADD': 
      return [...state, action.value];
    case 'TOGGLE': 
      return (
        state.map((todo) => {
          if(todo._id === (action.value._id)) {
            return {...todo, done: !todo.done}
          } return (todo)
        })
      );
    case 'DELETE':
      return state.filter((todo) => todo._id !== (action.value._id));
    default: 
      return state;
  }
}

export default todoReducer;