// import { COUNTER_ACTION } from '@/redux/counterActionCreator.ts';
// import { COUNTER_ACTION } from '@/redux/CounterActionCreator';
import { COUNTER_ACTION } from '@/redux/counterActionCreator.ts';

// 초기 상태
const initialState = {
  count: 5
};

interface CounterAction {
  type: string;
  payload: { step: number };
}

// 이벤트가 발생하면 액션 생성자 호출
// 액션 생성자로부터 액션을 받아온다 
// 액션 생성자를 store로 전달한다 (디스패치 : store를 호출하는 함수)
// 현재 상태와 전달받은 액션을 리듀서에게 전달(store가 리듀서에게 전달한다)
// 리듀서가 액션의 타입이 뭔지, 필요한 작업을 수행하고 새로운 상태를 리턴
// 스토어에서는 리듀서에게 받은 내용을 통해 리렌더링을 진행하여 사용자에게 보여줌

//< 예시 : 새로운 사람이 도시에 이사를 왔다 >
// 부동산 계약 서류를 들고 행정복지센터에 방문
// 담당자에게 보여줬는데 잘못된 양식을 제출 -> 액션 크리에이터(직원)이 관련 서류 양식을 만들어서 훈진에게 전달
// 훈진이는 그 양식을 들고 store 담당자에게 제출, (제출하는 작업은 dispatch)
// 그 담당자가 직원에게 전입신고를 전달해서 이전 자료와 새로운 전입신고서를 주고 전입신고서를 처리하라고 전달
// 그럼 직원이 다시 새로운 정보를 입력하여 담당자에게 다시 전달
// 그럼 이제 새로운 정보가 담긴 자료를 훈진에게 다시 전달 

// 상태와 액션을 전달 받아서 작업을 수행한 후 변경된 상태를 반환하는 순수함수
// 상태가 복합 객체일 경우 immer 같은 라이브러리 사용해서 불변성 유지
const counterReducer = (state = initialState, action: CounterAction) => {
  switch(action.type){
    case COUNTER_ACTION.UP:
      // state.count += action.payload.step; 불변성 X
      return {
        ...state,
        count: state.count + action.payload.step
      };
    case COUNTER_ACTION.DOWN:
      return {
        ...state,
        count: state.count - action.payload.step
      };
    case COUNTER_ACTION.RESET:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
}

export default counterReducer;