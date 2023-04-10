import React from 'react';
import { NavLink,Routes,Route } from 'react-router-dom';
//Routes相当于原来的Switch,Route是用来注册路由的
import About from './pages/About';
import Home from './pages/Home';

export default function App() {
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
          <NavLink className="list-group-item" to="/about">About</NavLink>
          <NavLink className="list-group-item" to="/home">Home</NavLink>
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
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
