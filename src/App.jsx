import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "./index.css";
import Router from "./Routes";
import BackToTop from "./Components/BackToTopBtn";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      mirror: false, 
    });
    AOS.refresh(); 
  }, []);

  return (
    <BrowserRouter>
      <Router />
      <BackToTop/>
    </BrowserRouter>
  );
}

export default App;
