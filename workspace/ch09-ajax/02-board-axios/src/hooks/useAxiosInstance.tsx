import axios from "axios";

const API_SERVER = 'https://fesp-api.koyeb.app/market';

const useAxiosInstance = () => {
  const instance = axios.create({
    baseURL: API_SERVER,  // 기본 URL
    timeout: 1000*5,
    headers: {
      'Content-Type': 'application/json', // 요청 바디의 데이터 타입 선언
      // 설정하지 않으면 크롬일 경우 application/json, text/plain 등으로 자동 설정됨
      'Accept': 'application/json', // 응답 데이터 타입이 JSON이면 좋겠다~
      'Client-ID': 'openmarket', // API 서버에 요청할 때 필요한 헤더
    },
  });

  // 요청 인터셉터 추가하기
instance.interceptors.request.use((config) => {
  // 요청이 전달되기 전에 필요한 공통 작업 수행
  config.params = {
    delay: 2000,
    ...config.params, // 기존 쿼리스트링 복사
  }

  return config;
}, (error) => {
  // 공통 에러 처리

  return Promise.reject(error);
});

// 응답 인터셉터 추가하기
instance.interceptors.response.use((response) => {
  // 2xx 범위에 있는 상태 코드는 이 함수가 호출됨
  // 응답 데이터를 이용해서 필요한 공통 작업 수행

  return response;
}, (error) => {
  // 2xx 외의 범위에 있는 상태 코드는 이 함수가 호출됨
  // 공통 에러 처리

  return Promise.reject(error);
});
  return instance;
}

export default useAxiosInstance
