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
    errorElement: <ErrorPage />, // 사용자가 개발자가 원하지 않는 주소로 들어갔을경우 보여지는 사이트
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