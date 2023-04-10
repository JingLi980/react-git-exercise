import React, { useState } from 'react';
import { Link,Outlet } from 'react-router-dom';

export default function Message() {
  const [messages] = useState([
    {id:'001',title:'消息1',content:'我爱世界'},
    {id:'002',title:'消息2',content:'我爱前端'},
    {id:'003',title:'消息3',content:'我爱JS'},
    {id:'004',title:'消息4',content:'我爱React'},
  ])
  return (
    <div>
      <ul>
        {
          messages.map((m)=>{
              return (
                //路由链接
                  <li key={m.id}>
                      <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>
                  </li>
              )
          })
        }
      </ul>
      <hr />
      {/* 指定路由组件展示的位置 */}
      <Outlet/>
    </div>
  )
}
