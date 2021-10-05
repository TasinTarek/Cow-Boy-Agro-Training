
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Error from './components/404/Error';
import About from './components/AboutUs/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Trainings from './components/Trainings.js/Trainings';
import image from './images/saikiran-kesari-zSn8VuwV7Kg-unsplash.jpg'

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header>
      
      </Header>
      <Switch>
        <Route path exact="/">
        <Home></Home>
        </Route>
        <Route path="/trainings">
        <Trainings></Trainings>
        </Route>
        <Route path="/about">
        <About></About>
        </Route>
        <Route path="/contact" >
          <Contact></Contact>
        </Route>
        <Route >
          <Error></Error>
        </Route>
      </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
   
  );
}

export default App;
