import React from "react";
import Main from "./components/Main.jsx" 
import About from "./components/About.jsx"
import Pricing from "./components/Pricing.jsx"
import History from "./components/History.jsx"
import Pricing2 from "./components/Pricing2"
import Team from "./components/Team";
import Contact from "./components/Contact"
import Footer from"./components/Footer";
function App() {
  return (
    <div>
     <Main /> 
     <About />
     <Pricing />
     <History />
     <Pricing2 />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
