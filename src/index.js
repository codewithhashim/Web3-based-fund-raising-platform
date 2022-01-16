 
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/header';
import Hero from './components/hero';
import Types from './components/apartmentTypes';
import AptPlans from './components/aptPlans';
import Footer from './components/footer';


function Home(){
  return(
    <>
    <Navbar />
    <Hero />
    <Types />
    <AptPlans />

    <Footer />
    </>
  )
}


ReactDOM.render(
  <Home />,

  document.getElementById('root')
);


