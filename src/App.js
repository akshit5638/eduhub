import React from 'react';
import {
  ChakraProvider,
  theme,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import ForgetPassword from './components/Forgetpassword';
import Contactus from './components/Contactus';

import About from './components/About';
import Request from './components/Request';
import Subscribe from './components/Subscribe';
import Paymentsucess from './components/Paymentsucess';
import Paymentfail from './components/Paymentfail';
import Notfound from './components/Notfound';
import CoursePage from './components/CoursePage';

function App() {
  return (

    <Router>

      <ColorModeSwitcher />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword' element={<Register />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/request' element={<Request />} />
        <Route path='/about' element={<About />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/paymentsucess' element={<Paymentsucess />} />
        <Route path='/paymentfail' element={<Paymentfail />} />
        <Route path='/coursepage' element={<CoursePage />} />
        <Route path='*' element={<Notfound />} />

      </Routes>
      <Footer />
    </Router>


  );
}

export default App;
