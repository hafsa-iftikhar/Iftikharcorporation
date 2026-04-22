import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // ✅ import here
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalogue from "./pages/Catalogue";
import Contact from "./pages/Contact";
import Stitched from "./pages/Stitched";
import Fabric from "./pages/Fabric";
/********stitched *****************/
import Polo from "./pages/Polo";
import Tshirts from "./pages/Tshirts";
import Pants from "./pages/Pants";
import Hoodies from "./pages/Hoodies";
import Woven from "./pages/Woven";
import Knitted from "./pages/Knitted";
import Denim from "./pages/Denim";

/************policy *************/
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsandCondition from "./pages/TermsandCondition";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ add this here */}
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalogue/:type/:item" element={<Catalogue />} />
        <Route path="/fabric" element={<Fabric />} />  
        <Route path="/stitched" element={<Stitched />} />
        
        {/* STITCHED */}
        <Route path="/tshirts" element={<Tshirts />} />
        <Route path="/polo" element={<Polo />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/hoodies" element={<Hoodies />} />  

         {/* FABRIC */}
        <Route path="/fabric/woven" element={<Woven />} />     
        <Route path="/fabric/knitted" element={<Knitted />} /> 
        <Route path="/fabric/denim" element={<Denim />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsandCondition />} />
        
      </Routes>      
      <Footer />
    </Router>
  );
}

export default App;
