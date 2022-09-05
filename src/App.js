import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Blogs from "./pages/Blog/Blogs";
import TC from "./pages/TC";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/CotactUs";
import Earn from "./pages/Earn";
import CustomerJourney from "./pages/CustomerJourney";
import TCUk2 from "./pages/TCUk2";
import PrivacyPolicyUk from "./pages/PrivacyPolicyUk";
import ContactUsUk from "./pages/ContactUsUk";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBarComp /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/tc" element={<TC />} />
          <Route path="/pp" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/uk" element={<Earn />} />
          <Route path="/processflow" element={<CustomerJourney />} />
          <Route path="/tc-uk" element={<TCUk2 />} />
          <Route path="/pp-uk" element={<PrivacyPolicyUk />} />
          <Route path="/contact-us-uk" element={<ContactUsUk />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
