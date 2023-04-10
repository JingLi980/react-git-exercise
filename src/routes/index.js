import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";
import { Navigate } from "react-router-dom";
import Detail from "../pages/Detail";

export default [
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      //下边可以不加斜杠
      {
        path: "news",
        element: <News />,
        /* children: [
          {
            path: "message",
            element: <Message />,
          },
        ], */
      },
      {
        path: "message",
        element: <Message />,
        children: [
          {
            path: "detail",
            element: <Detail />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/about" />,
  },
];
