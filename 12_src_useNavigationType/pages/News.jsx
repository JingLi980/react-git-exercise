import React from "react";
import { useNavigationType } from "react-router-dom";

export default function News() {
  console.log(useNavigationType()); //pop push replace pop是指刷新或刚打开页面加载的组件
  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  );
}
