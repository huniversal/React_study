import { createBrowserRouter, Navigate } from "react-router";
import Home from "@pages/Home";
import About from "@pages/About";
import TodoList from "@pages/TodoList";
import TodoInfo from "@pages/TodoInfo";
import TodoEdit from "@pages/TodoEdit";
import TodoAdd from "@pages/TodoAdd";
import Layout from "@components/Layout";
import ErrorPage from "@pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    // 에러 처리 전용 라우트 
    // 요청한 URL과 일치하는 라우터가 없을 경우 보여줄 컴포넌트 지정
    errorElement: <ErrorPage />, 
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      // 루트페이지를 들어갔을때 자동으로 들어가지도록 함 리다이렉트
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "list", element: <TodoList /> },
      { 
        path: "list/:_id", 
        element: <TodoInfo />,
        children: [
          { path: "edit", element: <TodoEdit /> },
        ]
      },
      { path: "add", element: <TodoAdd /> },
    ],
  },
]);

export default router;