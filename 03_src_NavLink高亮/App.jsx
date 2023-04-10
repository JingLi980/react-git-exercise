import React from 'react';
import { NavLink,Routes,Route,Navigate } from 'react-router-dom';
//router6删去Redirect，更换为Navigate
import About from './pages/About';
import Home from './pages/Home';

export default function App() {
  //{isActive}是解构赋值 className里是函数，函数的形参就是isActive
  function computedClassName({isActive}){
    return isActive ? 'list-group-item lijing':'list-group-item'
  }
  /* function computedClassName(a){
    console.log(a); //a是{isActive: false, isPending: false}
  } */
  return (
    <div>
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><h2>React Router Demo</h2></div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
            {/* 路由链接 */}
            {/* router6删除了activeClassName自定义类名 */}
          <NavLink className={computedClassName} to="/about">About</NavLink>
          <NavLink className={computedClassName} to="/home">Home</NavLink>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            {/* 注册路由 在6里面必须要包裹Routes 在5里面Switch不是必须有的 */}
            {/* Routes作用和Switch一样 */}
            <Routes>
                <Route path="/about" element={<About/>}/> {/*Route5里：compoment={About} */}
                <Route path="/home" element={<Home/>}/>
                <Route path='/' element={<Navigate to="/home"/>}/> {/* 这里是重定向 */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
