import React from "react";
import { NavLink, useRoutes, useInRouterContext } from "react-router-dom";
//router6删去Redirect，更换为Navigate
import routes from "./routes"; //路由表
import Header from "./components/Header";
//router5中通过withRouter来使得一般组件具有路由组件的三大属性，router6里没有了,也使用useNavigate

export default function App() {
  //useRoutes里面是数组，因为里面包含了多个Route，一个Route对应数组里一个元素，该元素还要是对象
  //const element是一个路由表，根据路由表生成对应的路由规则
  const element = useRoutes(routes);
  console.log("@");
  console.log(useInRouterContext()); //如果当前组件不被BrowserRouter等路由标签包裹，就会返回false
  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            {/* router6删除了activeClassName自定义类名 */}
            <NavLink className="list-group-item" to="/about">
              About
            </NavLink>
            <NavLink className="list-group-item" end to="/home">
              Home
            </NavLink>
            {/* end作用是：当点击home的子组件时，不再让home导航高亮 */}
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 在6里面必须要包裹Routes 在5里面Switch不是必须有的 */}
              {/* Routes作用和Switch一样 */}
              {/* <Routes>
                <Route path="/about" element={<About/>}/> Route5里：compoment={About} 
                <Route path="/home" element={<Home/>}/>
                <Route path='/' element={<Navigate to="/home"/>}/>  这里是重定向 
            </Routes> */}
              {element} {/* 路由表 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
