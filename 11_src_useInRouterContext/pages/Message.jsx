import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
//Navigate是一个组件，渲染到结构中视图就切换
//useNavigate是函数

export default function Message() {
  const navigate = useNavigate();
  const [messages] = useState([
    { id: "001", title: "消息1", content: "我爱世界" },
    { id: "002", title: "消息2", content: "我爱前端" },
    { id: "003", title: "消息3", content: "我爱JS" },
    { id: "004", title: "消息4", content: "我爱React" },
  ]);

  function showDetail(m) {
    //<Link to="/about"/> 这里不起作用，因为Link必须渲染到页面上形成标签才能点击跳转
    navigate("detail", {
      replace: false,
      state: {
        //navigate只能携带state参数，不可以携带props和search
        id: m.id,
        title: m.title,
        content: m.content,
      },
    });
  }
  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            //路由链接
            <li key={m.id}>
              <Link
                to="detail"
                state={{
                  id: m.id,
                  title: m.title,
                  content: m.content,
                }}
              >
                {m.title}
              </Link>
              <button onClick={() => showDetail(m)}>查看详情</button>
            </li>
          );
        })}
      </ul>
      <hr />
      {/* 指定路由组件展示的位置 */}
      <Outlet />
    </div>
  );
}
