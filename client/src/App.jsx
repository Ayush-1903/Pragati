import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/sections/pages/Home";
import About from "./components/sections/pages/About";
import Auth from "./components/sections/pages/Auth";
import Services from "./components/sections/pages/Services";
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
                <Route path="/services" element={[<Navbar />, <Services />]} />
                <Route path="/contact" element={[<Navbar />, <Contact />]} />
                <Route path="/dashboard" element={<Sidebar />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
