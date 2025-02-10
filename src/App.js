import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routing from "./Routing";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// AOS styles
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1500,
      offset: 40,
      // disable: window.innerWidth < 1279,
      // once: true,
    });
  }, []);

  return (
    <>
      {/* <ToastContainer /> */}

      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="*" element={<Routing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
