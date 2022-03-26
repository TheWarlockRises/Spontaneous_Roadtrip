import { Login, Register, Home, Profile } from './pages'

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
    return <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
}

export default App;