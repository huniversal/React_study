import axios from "axios";

export default function useAxiosInstance() {
  const instance = axios.create();

  return instance;
}