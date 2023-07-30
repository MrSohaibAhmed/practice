import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MyNav from './components/navbar'
import Counter from './components/counter';
import Myname from './components/Name';
import Apps from './components/class';
import Message from './components/state';
import FunctionClick from './components/functionClick';
import Form from './components/form';
import Focus from './components/focus';
import Hero from './components/hero';
import Errorhandling from './components/errorhandling';
import HeadingCounter from './components/HeadingCounter';
import Postapi from './components/Postapi';
import Getapi from './components/Getapi';
import Hooks from './components/Hooks';
import Work from './components/work';
import Hookmouse from './components/Hookmouse';
import Reducerhook from './components/Reducerhook';
import { Route,Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Notfound from './components/Notfound';
import { Authorization } from './components/Authorization';
import Login from './components/Login';
import Todolists from './components/Todolists';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    document.body.classList.add('body')
})


  return (
    <>
   {/* <Authorization> */}
{/* <MyNav/> */}

MY FIRST REACT PROJECT

{/* <Todolists/> */}
  {/* <Routes> */}

   
    {/* <Route path='home'  element={<Form /> }/>
    <Route path='counter' element={<Counter/>}/>
    <Route path='profile' element={<Profile/>}/>
    <Route path='login' element={<Login/>}/>

    <Route path='*' element={<Notfound/>}/> */}


    
    

    
    {/* <Counter/> */}
    {/* <Myname /> */}

    {/* <Apps name='SOHAIB'/> */}
    {/* <Apps name='hassan'/>
    <Apps name='sohaib'/> */}
    {/* <Message/> */}
    {/* <FunctionClick/> */}
    {/* <Form/> */}
    {/* <Focus/> */}
 {/* <Errorhandling>
    <Hero  name="batman"/>
    </Errorhandling>
    <Errorhandling>
    <Hero  name="superman"/>
    </Errorhandling> */}
    {/* <Errorhandling> */}
    {/* <Hero  name="joker"/> */}
    {/* </Errorhandling> */}
    {/* <HeadingCounter/> */}
    <Postapi/>
    {/* <Getapi/> */}
    {/* <Hooks/> */}
    {/* <Work/>
    <Hookmouse/>
    <Reducerhook/> */}
    {/* </Routes> */}
    {/* </Authorization> */}
     </>
  )
}

export default App
