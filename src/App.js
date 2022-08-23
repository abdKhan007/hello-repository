// import components
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from './components/about/About'
import Solution from "./components/solution/Solution";
import Codes from "./components/codes/Codes";
import Awef from "./components/awef/Awef";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
// import Browser Router

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar/>
      <Hero/>
      <About/>
      <Solution/>
      <Codes/>
      <Awef/>
      <Footer/>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
