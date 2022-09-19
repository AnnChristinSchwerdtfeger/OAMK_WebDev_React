import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';

const Test = () =>{
  return (
    <div>
      <h1>This is a heading</h1>
      <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
       Dropdown
       </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Dropdown item</a></li>
        <li><a class="dropdown-item" href="#">Dropdown item</a></li>
        <li><a class="dropdown-item" href="#">Dropdown item</a></li>
      </ul>
    </div>
      <p>whooo</p>
    </div>
  );
}


function App() {
  return(
    <>
      <NavBar/>
      <Header/>
      <div className='container' >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contactus" element={<ContactUs />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
      </div>
    </>
    
  );
  
}

export default App;
