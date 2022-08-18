import Register from './component/Register/Register';
import Login from './component/Login/Login';
import Navbar from './component/Navbar';
import BlogList from './component/BlogList/BlogList';

import './App.css';

const UserRegisterInfo=[];
const UserLoginInfo =[];

function App() {

  const onUserInfo =(d)=>{
    UserRegisterInfo.push(d);
    console.log(UserRegisterInfo)
  }

  const onLoginInfo =(d)=>{
    UserLoginInfo.push(d);
    console.log(UserLoginInfo)
  }

  return (
   <div>
    {/* <Register getData={onUserInfo}/> */}
    {/* <Login getData = {onLoginInfo}/> */}
    <Navbar/>
    <BlogList/>
    <BlogList/>
    <BlogList/>
    <BlogList/>
    <BlogList/>
    <BlogList/>

   </div>
  );
}

export default App;
