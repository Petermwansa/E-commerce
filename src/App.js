import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddProducts from './components/AddProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/addproducts' element={<AddProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
