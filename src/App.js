import Navbar from "./Componenets/Navbar/Navbar/Navbar";
import './App.css'
import Intro from "./Componenets/Navbar/Intro/Intro";
import Services from "./Componenets/Services/Services";
import Experience from "./Componenets/Experience/Experience";
import Techstacks from "./Componenets/Techstacks/Techstacks";
import Portfolio from "./Componenets/Porfolio/Portfolio";
import Contact from "./Componenets/Contact/Contact";
import Footer from "./Componenets/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import {motion} from 'framer-motion'
function App() {
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;

  return (

    <div className="App"
    
    style={{
      background : darkMode? 'black': '',
      color: darkMode? 'white': ''
    }}
    
    >
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    <Techstacks/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
