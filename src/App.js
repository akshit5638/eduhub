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
import Courses from './components/Courses'
function App() {
  return (

    <Router>

      <ColorModeSwitcher />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
    </Router>


  );
}

export default App;
