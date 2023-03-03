import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/sections/pages/Home";
import About from "./components/sections/pages/About";
import Auth from "./components/sections/pages/Auth";
import Features from "./components/sections/pages/Features";
import Navbar from "./components/sections/pages/Navbar";
import Sidebar from "./components/dashboard/Sidebar/Sidebar";
import Contact from "./components/sections/pages/Contact";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
    const { state } = useAuthContext();

    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Navigate to='/home' />}/> */}
                <Route path="/" element={[<Navbar />, <Home />]} />
                <Route path="auth" element={<Auth />} />
                <Route path="/about" element={[<Navbar />, <About />]} />
                <Route path="/features" element={[<Navbar />, <Features />]} />
                <Route path="/contact" element={[<Navbar />, <Contact />]} />
                <Route path="/dashboard" element={<Sidebar />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
