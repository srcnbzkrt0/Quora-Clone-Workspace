import React from 'react';
import { useSelector } from 'react-redux';
import './App.css'; 
import Quora from "./compenents/Quora"
import { selectUser } from './feature/userSlice';
import Login from './compenents/auth/Login';


function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      {user ? <Quora />: <Login/>}     
    </div>
  );
}

export default App;
