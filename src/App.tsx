import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// 定义接口来表示请求返回的 JSON 数据结构
interface UserData {
  name: string;
  age: number;
}

function App() {
  const [userData,setUserData]=useState<UserData | null>(null)

  useEffect(()=>{
    const fetchData = async () => {
      // 假设服务器返回的 JSON 数据为上面的示例数据
      const response = await fetch('/api/user');
      // const data: UserData = await response.json();
      const data: UserData = {name:"test",age:10};
      setUserData(data);
    };
    fetchData();
  },[])
  return (
    <div className="App">
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Age: {userData.age}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
