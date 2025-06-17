import { useEffect, useState } from "react";
import axios from "axios";


// API 서버 엔드포인트 주소 상수 정의
const API_SERVER = 'https://fesp-api.koyeb.app/todo';
axios.defaults.baseURL = API_SERVER;
// 세팅 시간 이후로 데이터를 못 받으면 에러 처리
axios.defaults.timeout = 5000;  

// fetch 함수 호출시 필요한 파라미터 타입 정의
interface AxiosParams {
  url: string;
}

// 응답 데이터 타입 정의
type ResData = TodoListRes | TodoItemRes | ErrorRes;

function useAxios<T>(axiosParams: AxiosParams) {
  // Todo 목록을 저장할 상태 (초기값: null)
  const [data, setData] = useState<T | null>(null);

  // 에러 메시지를 저장할 상태 (초기값: null)
  const [error, setError] = useState<Error | null>(null);
  
  // 로딩 상태를 저장할 상태 (초기값: false)
  const [isLoading, setIsLoading] = useState(false);

  // 컴포넌트가 마운트될 때 Todo 목록을 가져오기
  useEffect(() => {
    // axios로 API 호출
    requestAxios(axiosParams);
  }, []); // 빈 배열을 전달하여 마운트시 한번만 실행되도록 설정

  // Todo API 서버에 데이터를 요청하는 비동기 함수
  const requestAxios = async (params: AxiosParams) => {
    console.log('requestAxios 함수 호출됨', params);
    try {
      setIsLoading(true);

      // axios API를 사용하여 서버에 GET 요청
      const res = await axios.get<T>(params.url);
      console.log('파싱된 데이터:', res.data);

      setData(res.data)
    }catch(err){
      // 네트워크 오류 등 예외 발생시 처리
      console.error('에러 발생:', err);
      setError(err as Error);
      setData(null);
    }finally{
      // 성공/실패 여부와 관계없이 로딩 상태를 false로 설정
      setIsLoading(false);
    }
  };
  return { isLoading, error, data };
}

export default useAxios;