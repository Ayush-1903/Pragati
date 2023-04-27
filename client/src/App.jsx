import React, {useState, useContext} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/sections/pages/Home";
import About from "./components/sections/pages/About";
import Auth from "./components/sections/pages/Auth";
import Features from "./components/sections/pages/Features";
import Navbar from "./components/sections/pages/Navbar";
import Sidebar from "./components/dashboard/Sidebar/Sidebar";
import Contact from "./components/sections/pages/Contact";
import ForgotPassword from "./components/sections/pages/ForgotPassword";
import ResetPassword from "./components/sections/pages/ResetPassword";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {

  const { state } = useAuthContext();

  const[loading, setLoading] = useState(true);

  const loader = document.getElementById('loader');

  if(loader){
    setTimeout(() => {
      loader.style.display="none";
      setLoading(false)
    }, 1000);
  }
  
  return (
    !loading && (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Navbar />, <Home />]} />
          <Route path="auth/reset-password/:token" element={<ResetPassword />} />
          <Route path="auth/forgot-password" element={<ForgotPassword />} />
          <Route path="auth" element={<Auth />} />
          <Route path="/about" element={[<Navbar />, <About />]} />
          <Route path="/features" element={[<Navbar />, <Features />]} />
          <Route path="/contact" element={[<Navbar />, <Contact />]} />
          <Route path="/dashboard" element={<Sidebar />}></Route>
        </Routes>
      </BrowserRouter>
    )
  );
}

export default App;
