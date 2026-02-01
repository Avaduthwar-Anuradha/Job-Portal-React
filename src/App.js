import "./App.css";
import Navbar from "./components/Navbar";
import Jobs from "./pages/Jobs";
import Favorites from "./pages/Favorites";
import Applied from "./pages/Applied";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  return (
    <BrowserRouter>
  <div className="app-wrapper">
    <Navbar />

    <div className="content">
      <Routes>
        <Route path="/" element={<Jobs favorites={favorites}setFavorites={setFavorites}appliedJobs={appliedJobs}setAppliedJobs={setAppliedJobs}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorites favorites={favorites}/>} />
        <Route path="/applied" element={<Applied appliedJobs={appliedJobs} />} />
      </Routes>
    </div>
    <Footer />
  </div>
</BrowserRouter>
  );
}

export default App;