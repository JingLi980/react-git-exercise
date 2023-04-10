import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { NavLink, Outlet, useOutlet } from "react-router-dom";

export default function Home() {
  console.log("###", useOutlet()); //如果outlet输出的组件还没有挂载就是null，已经挂载就是该对象
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            {/* 
                    写法1：to="/home/news" 
                    写法2：to="news" 里面直接跟二级路由的地址，且不加斜杠。
                          一旦加/意味着直接从根 目录开始直接跳到news，会出错
                    写法3：to="./news" 在不破坏当前路径下
                 */}
            <NavLink className="list-group-item" to="news">
              News
            </NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="message">
              Message
            </NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="message">
              跳转至message
            </NavLink>
          </li>
        </ul>
        {/* 指定路由组件呈现的位置 */}
        <Outlet />
      </div>
    </div>
  );
}
