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
  return instance;
}

export default useAxiosInstance
