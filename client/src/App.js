import './App.css';
import Home from './components/Home';
import About from './components/About';
import Auth from './components/Auth';
import Services from './components/Services';
import Navbar from './components/Navbar';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import CollegeDashboard from './components/dashboard/category/college/CollegeDashboard';
import CollegeTodo from './components/dashboard/category/college/todo/CollegeTodo';
import SchoolDashboard from './components/dashboard/category/school/SchoolDashboard';
import SchoolTodo from './components/dashboard/category/school/todo/SchoolTodo';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/home' />}/>
        <Route path="/home" element={[<Navbar />, <Home/>]}/>
        <Route path="auth" element={<Auth />}/>

        <Route path="/about" element={[<Navbar />, <About />]}/>
        <Route path="/services" element={[<Navbar />, <Services />]}/>
        <Route path="/contact" element={<Navigate to='/home' />}/>
        

        <Route path="/college-dashboard" element={<CollegeDashboard />}/>
        <Route path="/college-todo" element={<CollegeTodo />}/>
        <Route path="/school-dashboard" element={<SchoolDashboard />}/>
        <Route path="/school-todo" element={<SchoolTodo />}/>
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
