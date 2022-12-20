import './App.css';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import Category from './components/Category';
import Services from './components/Services';
import Navbar from './components/Navbar';
import { useAuthContext } from '../src/components/hooks/useAuthContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CollegeDashboard from './components/dashboard/category/college/CollegeDashboard';
import SchoolDashboard from './components/dashboard/category/school/SchoolDashboard';

function App() {

  const { user } = useAuthContext()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {[<Navbar/>, <Home />]}></Route>
        <Route path='/about' element = {[<Navbar/>, <About />]}></Route>
        <Route path='/signup' element = {<SignUp />}></Route>
        <Route path='/services' element = {[<Navbar/>, <Services />]}></Route>
        <Route path='/category' element = {<Category />}></Route>
        <Route path="/college/dashboard" element = {<CollegeDashboard />}></Route>
        <Route path="/school/dashboard" element = {<SchoolDashboard />}></Route>
          {/* <Route index element={<Main />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='subscriptions'>
            <Route index element={<List />} ></Route>
            <Route path=':userId' element={<Single />} ></Route>
            <Route path='new' element={<New inputs={userInputs} title="Add New User" />}></Route>
          </Route>
          <Route path='calendar' element={<Calendar />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
