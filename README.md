## 1. useNavigate 跳转 传值

```
https://reactrouter.com/en/main/hooks/use-navigate
The useNavigate hook returns a function that lets you navigate
        //1.js写法
          let navigate = useNavigate();
          function handleClick() {
            navigate("/home");
          }
        //2.组件写法
          function App() {
             return <Navigate to="/home" replace state={state} />;
          }
        //3.替代原有的go goBack和goForward
         <button onClick={() => navigate(-2)}>
            Go 2 pages back
          </button>
          <button onClick={() => navigate(-1)}>Go back</button>
          <button onClick={() => navigate(1)}>
            Go forward
          </button>
          <button onClick={() => navigate(2)}>
            Go 2 pages forward
          </button>
        //4.跳转传值
            import { useNavigate } from 'react-router-dom'
            const navigate = useNavigate();
             function clickCityHandle(city) {
                navigate('/home', { state: { name: 'zhou' } })
              }

```

## 2. Navigate 重定向

```
1.作用：只要`<Navigate>`组件被渲染，就会修改路径，切换视图。
2.`replace`属性用于控制跳转模式（push 或 replace，默认是push）
```

## 3.useRoutes 路由注册

```
1.useRoutes里面是数组，因为里面包含了多个Route，一个Route对应数组里一个元素，该元素还要是对象
2.const element = useRoutes(routes) 就是路由注册过程
```

## 4.useEffect

```
1.在 React 更新 DOM 之后运行一些额外的代码，也就是执行副作用操作，比如请求数据，设置订阅以及手动更改 React 组件中的 DOM 等。
```

## 5.双层花括号

```
1.外面的花括号是说：我这里面写的是js语句
                  (jsx需要用大括号来引用任何JS变量或表达式。)
2.内部的花括号是说：我里面的不是要显示的文字，而是变量，我要把变量的值解析放在这
```

## 6.useLocation

```
1.useNavigate是跳转传值    useLocation是接收跳转传过来的值
      // 接收跳转传过来的值
      import { useLocation } from 'react-router-dom'
      const location = useLocation()
      const { state } = location
      console.log(location, state);
2.获取当前 location 信息，对标5.x中的路由组件的`location`属性
      location:
          pathname: "/about"
          search: ""
          state: undefined
```

## 7.函数组件 路由跳转问题 route6

```
1.生成路由表，不需要在每一个路由组件里声明路由
  1.1 路由表生成在routes文件下
  1.2 App组件中，引入useRoutes，和routes文件下路由表
      const element = useRoutes(routes); 生成路由表
      {element}放在声明路由的位置
  1.3 二级路由组件中引入 Outlet，将<Outlet />放在声明路由的位置，后代如此

2.路由跳转
   2.1 正常路由跳转都是在路由表里编写实现
   2.2 编程式路由使用 useNavigate跳转 const navigate = useNavigate();

3.路由跳转传值
   3.1传递props参数
      a.路由链接里 to={`detail/${m.id}/${m.title}/${m.content}`}
      b.路由表里 path: "detail/:id/:title/:content"
      c.detail里 const {id,title,content} = useParams();
   3.2传递search参数
      a.路由链接里 to={`detail?id=${m.id}&&title=${m.title}&&content=${m.content}`}
      b.路由表里 无需改动
      c.detail里 const [search,setSearch] = useSearchParams();
                 const id = search.get('id');
                 const title = search.get('title');
                 const content = search.get('content');
   3.3传递state参数
      a.路由链接里 在Link连接里添加state参数
         state={{ id: m.id, title: m.title, content: m.content
      b.路由表里 无需改动
      c.detail里 const {state:{id,title,content}} = useLocation()
   3.4编程式路由导航跳转并传值 只能传递state参数 不能传递props search
      message组件向detail跳转传值
      message组件：
        const navigate = useNavigate();
        navigate("detail", {
          replace: false,
          state: { id: m.id,title: m.title,content: m.content},
        });
      detail组件：
        const {state:{id,title,content}} = useLocation()
```
