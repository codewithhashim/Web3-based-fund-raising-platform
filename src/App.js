
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
}
from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Listing from './pages/Listing';
import Footer from './components/Footer';
import ThankYou from './pages/ThankYou';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/thankyou" element={< ThankYou />} />

      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </div>
  );
}

export default App;
