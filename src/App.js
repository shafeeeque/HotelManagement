import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import { auth } from "./firebase";
// import Navbar from "./Components/commen/Navbar/Navbar";
// import Navbar from "./commen/Navbar/Navbar"
import Home from "./Components/pages/Home";
import About from "./Components/About/About";
import Gallery from "./Components/gallery/Gallery";
import Destinations from "./Components/Destinations/Home";
import SinglePage from "./SinglePage/SinglePage";
import Blog from "./Components/Blog/Blog";
import BlogSingle from "./Components/Blog/blog-single-page/BlogSingle";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />

          {/*shortcut  */}

          {/* <Route path='/' exact Component={Home}><Route />   */}

          <Route path="/" element={<Home name={userName} />} />
          <Route path="/about" element={<About name={userName} />} />
          <Route path="/gallery" element={<Gallery name={userName} />} />
          <Route path="/destinations" element={<Destinations name={userName} />} />
          <Route path="/singlepage/:id" element={<SinglePage name={userName} />} />
          <Route path="/blog" element={<Blog name={userName} />} />
          <Route path="/blogsingle/:id" element={<BlogSingle name={userName} />} />
          <Route path="/testimonal" element={<Testimonial name={userName} />} />
          <Route path="/contact" element={<Contact name={userName} />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
