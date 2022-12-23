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
import CollegeTodo from './components/dashboard/category/college/todo/CollegeTodo';
import SchoolTodo from './components/dashboard/category/school/todo/SchoolTodo';

function App() {

  const {user} = useAuthContext()

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/"/>
          <Route index element={[<Navbar />, <Home/>]}/>
          <Route path="about" element={[<Navbar />, <About />]}/>
          <Route path="services" element={[<Navbar />, <Services />]}/>
          <Route path="signup" element={[<SignUp />]}/>
          <Route path="category" element={[<Category />]} />
          <Route path="college-dashboard" element={<CollegeDashboard />}/>
          <Route path="college-todo" element={<CollegeTodo />}/>
          <Route path="school-dashboard" element={<SchoolDashboard />}/>
          <Route path="school-todo" element={<SchoolTodo />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
