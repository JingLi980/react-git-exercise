import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Detail() {
  const {state:{id,title,content}} = useLocation(); //连续解构赋值
  //useLocation()里包含search参数和state参数
  return (
    <ul>
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息内容：{content}</li>
    </ul>
  )
}
