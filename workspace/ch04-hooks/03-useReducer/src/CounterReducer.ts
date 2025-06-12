interface CounterAction {
  type: 'UP' | 'DOWN' | 'RESET';
  value: number,
}

function counterReducer(state: number, action: CounterAction): number{ // (6, { type: 'UP', value: 1 }) => 7
  let newState = state
  switch (action.type) {
    case 'UP':
      return state + action.value;
      break;
    case 'DOWN':
      return state - action.value;
      break;
    case 'RESET':
      return action.value;
      break;
    default:
      newState = state;
  }

  console.log(`${state} ${action.type} ${action.value} => ${newState}`)
  return newState;
}

export default counterReducer;