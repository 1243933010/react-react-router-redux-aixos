import React from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom'
import './assets/css/App.css';//样式
import axios from 'axios';//引入axios
import Tab from './component/tab'//引入tab组件
import store from './store/reducers/userReducer' //引入redux逻辑函数
import {setMsg } from './store/actions/userType' //引入判断type
import Routes from './routes/index' //引入路由地址

axios.get('/user.json').then((response)=>{
  store.dispatch({type:setMsg.type,value:response.data})
})



function App() {
  return (
    <Router>
    <div className="App">
       <Tab /> 
       <div>
       {
         Routes.map((route,key)=>{
           return(
             <Route 
             key={key} 
             path={route.path} 
             render={props=>(<route.component {...props} Routes={route.routes} />)} />
           )
         })
       }
       </div>
    </div>
    </Router>
  );
}

export default App;
