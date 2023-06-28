import React from 'react';
import './App.css';
import {Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import { getAuth} from "firebase/auth";
import Post from './store/postContext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthContext, FirebaseContext } from './store/Context';

function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  const auth=getAuth(firebase)

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
      
        <Routes>
        <Route  exact path='/' element={ <Home />}/>
        <Route path='/signup' element={ <Signup />}/>
        <Route path='/login' element={ <Login />}/>
        <Route path='/create' element={ <Create />}/>
        <Route path='/view' element={ <View />}/>
        </Routes>
        
     </Post>
        
        
      
    
      
    </div>
  );
}

export default App;
