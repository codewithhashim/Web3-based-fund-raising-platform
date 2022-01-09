 
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/header';
import Hero from './components/hero';


function Home(){
  return(
    <>
    <Navbar />
    <Hero />
    </>
  )
}


ReactDOM.render(
  <Home />,

  document.getElementById('root')
);


