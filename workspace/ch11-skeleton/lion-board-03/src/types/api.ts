// 데이터 검증 실패 메시지
export interface ServerValidationError {
  type: string, 
  valye: string, 
  msg: string, 
  location: string
}

// Record<K, T>: K(key)로 이루어진 객체의 각 속성의 타입을 T로 지정하는 유틸리티 타입
// Partial<T>: T의 모든 속성을 옵셔널로 지정하는 유틸리티 타입
// E: 검증에 사용될 속성값을 가지고 있는 타입
// 예) 검증에 사용될 속성값을 가지고 있는 타입이 { title: string, content: string } 이면, 
// keyof E의 타입은 "title" | "content"
export type ServerValidationErrors<E> = Partial<Record<keyof E, ServerValidationError>>;

// API 서버의 응답
// E = never: E가 생략되면 errors 속성도 없음

// 🔥 서버 응답이 성공인지 실패인지 구분해서 타입을 나눈 것
export type ApiRes<T, E = never> = 
// 🔥 서버 응답 형태를 정의하는 타입
// 🔥 성공(ok: 1) -> 실제 데이터가 item에 담겨옴
// 🔥 실패(ok: 0) -> message가 에러 메시지, errors에 검증 에러가 있을 수 있음
  | { ok: 1; item: T }
  | { ok: 0; message: string, errors?: ServerValidationErrors<E> }

// 서버 함수에서 반환할 타입(Promise를 반환해야 함)
export type ApiResPromise<T> = Promise<ApiRes<T>>;
// 🔥 서버 응답을 await하면, ApiRes<T> 형태의 데이터 도착