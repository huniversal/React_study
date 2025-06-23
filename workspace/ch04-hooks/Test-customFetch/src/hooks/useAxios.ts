import { useEffect, useState } from "react";
import axios from "axios";

// API 기본 설정
const API_SERVER = 'https://fesp-api.koyeb.app/todo';
axios.defaults.baseURL = API_SERVER;
axios.defaults.timeout = 5000;

// 파라미터 타입 정의
interface AxiosParams {
  url: string;
}

// custom hook 정의
function useAxios<T>(axiosParams: AxiosParams) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const requestAxios = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get<T>(axiosParams.url);
        setData(res.data);
      } catch (err){
        setError(err as Error);
        setData(null);
      } finally{
        setIsLoading(false);
      } 
    };
    requestAxios();
  }, [axiosParams.url])
  return { isLoading, error, data };
}

export default useAxios;