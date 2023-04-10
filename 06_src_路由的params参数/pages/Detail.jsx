import React from 'react';
import { useParams } from 'react-router-dom';  //useParams来把Params参数直接取过来
/* 在类组件中可以通过
this.props.match.params/ this.props.location.search/ this.props.location.state 
来传参，但在函数式组件没有this
*/

export default function Detail() {
  const {id,title,content} = useParams();
  return (
    <ul>
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息内容：{content}</li>
    </ul>
  )
}
