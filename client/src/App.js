import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Auth from "./components/Auth";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Sidebar from "./components/dashboard/Sidebar/Sidebar";
import Contact from "./components/Contact";
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
                <Route path="/category" element={<Category />} />
                <Route path="/dashboard" element={<Sidebar />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
