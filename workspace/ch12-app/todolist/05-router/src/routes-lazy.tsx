import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";

const Layout = lazy(() => import('@components/Layout'));
const About = lazy(() => import('@pages/About'));
const Home = lazy(() => import('@pages/Home'));
const TodoList = lazy(() => import('@pages/TodoList'));
const TodoInfo = lazy(() => import('@pages/TodoInfo'));
const TodoEdit = lazy(() => import('@pages/TodoEdit'));
const TodoAdd = lazy(() => import('@pages/TodoAdd'));
const ErrorPage = lazy(() => import('@pages/ErrorPage'));



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