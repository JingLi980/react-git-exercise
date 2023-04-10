import React from "react";
import { Link, useNavigationType, useResolvedPath } from "react-router-dom";

export default function News() {
  console.log(useNavigationType()); //pop push replace pop是指刷新或刚打开页面加载的组件
  console.log("%%%", useResolvedPath("/user?id=001&&name=tom#qwe"));
  return (
    <div>
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
        <li>
          <Link to="../message">跳转Message</Link>
        </li>
      </ul>
    </div>
  );
}
