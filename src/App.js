import "./App.css";
// import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import About from "./Components/About/About";
import MenuItems from "./Components/Our Menu/MenuItems";
import Form from "./Components/Booking/Form";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import Footer from "./Components/Footer/Footer";
// import NavMenu from "./Components/Navbar/NavMenu";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <NavMenu /> */}
      <ScrollTop />
      <HeroSection />
      <About />
      <MenuItems />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
