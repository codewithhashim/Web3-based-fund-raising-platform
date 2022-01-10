 
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/header';
import Hero from './components/hero';
import Types from './components/apartmentTypes';


function Home(){
  return(
    <>
    <Navbar />
    <Hero />
    <Types />
    </>
  )
}


ReactDOM.render(
  <Home />,

  document.getElementById('root')
);


