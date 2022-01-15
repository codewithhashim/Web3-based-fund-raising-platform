 
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/header';
import Hero from './components/hero';
import Types from './components/apartmentTypes';
import AptPlans from './components/aptPlans';


function Home(){
  return(
    <>
    <Navbar />
    <Hero />
    <Types />
    <AptPlans />
    </>
  )
}


ReactDOM.render(
  <Home />,

  document.getElementById('root')
);


