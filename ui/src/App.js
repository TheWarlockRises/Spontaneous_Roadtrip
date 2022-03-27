import { Login, Register, Home, Profile, ProfileEdit, TravelList, AddLocation, JourneySelector } from './pages'

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
    return <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileEdit" element={<ProfileEdit />} />
        <Route path="/travelList" element={<TravelList />} />
        <Route path="/addLocation" element={<AddLocation />} />
        <Route path="/journeySelector" element={<JourneySelector />} />
    </Routes>
}

export default App;