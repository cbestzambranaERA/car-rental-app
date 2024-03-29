import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Cars from "../pages/Cars"
import Blogs from "../pages/Blogs"
import About from "../pages/About"
import Contact from "../pages/Contact"
import NotFound from "../pages/NotFound"


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routers