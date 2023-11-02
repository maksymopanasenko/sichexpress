import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from './pages/MainPage/MainPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

import './App.css';
import Layout from './pages/Layout/Layout';
import NoPage from './pages/NoPage/NoPage';
import StartPage from './pages/StartPage/StartPage';

function App() {
  const [products, setProducts] = useState([]);

  function addProduct(product) {
    setProducts(products => [...products, product]);
  }

  function deleteItem(i) {
    setProducts(products => products.filter(item => item !== products[i]))
  }

  return (
    <div className='app'>
        <Routes>
            <Route path='/' element={<Layout quantity={products.length}/>}>
                <Route index element={<StartPage />} />
                <Route path='/shops/*' element={<Main addProduct={addProduct} quantity={products}/>} />
                <Route path='/cart' element={<ShoppingCart products={products} deleteItem={deleteItem}/>}/>

                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;