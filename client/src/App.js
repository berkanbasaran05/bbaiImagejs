import logo from './logo.svg';
import './App.css';
import './index.css'
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home';
import CreatePost from './Pages/CreatePost';
import  Footer  from './Components/Footer';

function App() {
  return (
   <BrowserRouter>
   <Header></Header>

   
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/create-post'  element={<CreatePost/>} />

    </Routes>

    <Footer></Footer>
   </BrowserRouter>
   
  );
}

export default App;
