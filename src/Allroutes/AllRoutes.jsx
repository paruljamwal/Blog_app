import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/pages/Home/Home'
import { Login } from '../components/pages/Login/Login'
import { Register } from '../components/pages/Register/Register'
import { Setting } from '../components/pages/Settings/Setting'
import { Single } from '../components/pages/Single/single'
import { Write } from '../components/pages/Write/Write'


export const AllRoutes = () => {
    const user=false;
  return (
      <>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}>{user ? <Home></Home> : <Register></Register>}</Route>
        <Route path='/login' element={<Login></Login>}>{user ? <Home></Home> : <Login></Login>}</Route>
        <Route path='/setting' element={<Setting></Setting>}>{user ? <Setting></Setting> : <Register></Register>}</Route>
        <Route path='/write' element={<Write></Write>}>{user ? <Write></Write> : <Register></Register>}</Route>
        <Route path='/post/:id' element={<Single></Single>}></Route>
    </Routes>
    </>
  )
}
