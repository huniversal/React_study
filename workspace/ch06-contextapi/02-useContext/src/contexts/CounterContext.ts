import { createContext } from 'react';

interface CounterContextType {
  count: number, 
  countUp: (step: number) => void;
}

// 1. context 생성
export const CounterContext = createContext<CounterContextType> ({
  count: 5,
  countUp: () => {
    console.log('초기화만 되었음, 실제 함수 구현 안됨')
  }
})