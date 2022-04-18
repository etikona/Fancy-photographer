import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Home/Contact/Contact';
import Home from './Home/Home/Home';
import Services from './Home/Services/Services';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import CheckOut from './Pages/CheckOut/CheckOut';
import Login from './Pages/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';
import Signin from './Pages/Signin/Signin';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
       <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/services" element={<Services></Services>}/>
       <Route path="/contact" element={<Contact></Contact>}></Route>
       <Route path="/signin" element={<Signin></Signin>} />
       <Route path="/login" element={<Login></Login>} />
       <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path="/checkout" element={
        <RequiredAuth>
          <CheckOut></CheckOut>
        </RequiredAuth>
      }></Route>
      <Route path="/about" element={<AboutMe></AboutMe>}></Route>
      <Route path="*" element={<Notfound></Notfound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
