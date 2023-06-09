import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Detail() {
  const [search,setSearch] = useSearchParams();
  //console.log(useSearchParams());  useSearchParams()是一个数组
  const id = search.get('id');
  const title = search.get('title');
  const content = search.get('content');
  return (
    <ul>
        <li>
            <button onClick={()=>setSearch('id=008&&title=哈哈&&content=嘻嘻')}>点我更新search参数</button>
        </li>
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息内容：{content}</li>
    </ul>
  )
}
