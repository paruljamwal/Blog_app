
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/pages/Home/Home';
import { Login } from './components/pages/Login/Login';
import { Register } from './components/pages/Register/Register';
import { Setting } from './components/pages/Settings/Setting';
import { Single } from './components/pages/Single/single';
import { Write } from './components/pages/Write/Write';
import {Route, Routes} from "react-router-dom";
function App() {
  const user=true;
  return (
    <div className="App">
      {/* <Router> */}
    <Navbar></Navbar>
    {/* <Home></Home> */}
    {/* <Single></Single> */}
    {/* <Write></Write> */}
    {/* <Setting></Setting> */}
    {/* <Login></Login> */}
    {/* <Register></Register> */}
    {/* <AllRoutes></AllRoutes> */}
    <Routes>
      <Route exact path='/' element={<Home></Home>}></Route>
      <Route exact path='/register' element={user ? <Home></Home> : <Register></Register>}></Route>
      <Route exact path='/login' element={user ? <Home></Home> : <Login></Login>}></Route>
      <Route exact path='/write' element={user ? <Write></Write> : <Register></Register>}></Route>
      <Route exact path='/setting' element={user ? <Setting></Setting> : <Register></Register>}></Route>
      <Route exact path='/post/:id' element={<Single></Single>}></Route>
    </Routes>
    {/* </Router> */}
    </div>
  );
}

export default App;
