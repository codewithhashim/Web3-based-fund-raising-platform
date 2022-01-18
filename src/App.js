
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
import Featured from './pages/Featured';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/featured" element={<Featured />} />
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </div>
  );
}

export default App;
