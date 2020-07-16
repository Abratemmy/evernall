import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation/navigation';
import Router from './components/router';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/footer/footer';
import Aos from "aos";
import "aos/dist/aos.css";

const App = () =>{
  useEffect(() =>{
    Aos.init({duration: 1500});
}, []);

  return (
    <div className="App">
      <Navigation />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
