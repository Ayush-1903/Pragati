import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Auth from './components/Auth';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Category from './components/Category';
import Sidebar from './components/dashboard/category/college/Sidebar/Sidebar';
import SchoolSidebar from './components/dashboard/category/school/Sidebar/SchoolSidebar';
import Contact from './components/Contact';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to='/home' />}/> */}
        <Route path="/" element={[<Navbar />, <Home/>]}/>
        <Route path="auth" element={<Auth />}/>
        <Route path="/about" element={[<Navbar />, <About />]}/>
        <Route path="/services" element={[<Navbar />, <Services />]}/>
        <Route path="/contact" element={[<Navbar />, <Contact />]}/>
        <Route path="/category" element={<Category />}/>
        <Route path='/college-dashboard' element={<Sidebar />}></Route>
        <Route path='/school-dashboard' element={<SchoolSidebar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;