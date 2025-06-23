// 할일 1개에 대한 타입
export interface Todo {
  _id: number;
  title: string;
  done: boolean;
  content: string;
  createdAt: string;
  updatedAt: string;
}

// 할일 목록 전체 응답 타입
export interface TodoListRes {
  ok: 1;
  items: Todo[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// 상세조회 응답 타입
export interface TodoItemRes {
  ok: 1;
  item: Todo;
}

// 에러 응답 타입 (서버에서 실패했을 경우)
export interface ErrorRes {
  ok: 0;
  error: Error;
}

export type ResData = TodoListRes | TodoItemRes | ErrorRes;