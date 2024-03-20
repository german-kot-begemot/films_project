import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Categories from './components/Header/Categories/Categories';
import Home from './components/Home/Home';
import Movieinder from './components/Movieinder/Movieinder';
import SameFilm from './components/SameFilm/SameFilm';
import MyMovie from './components/MyMovie/MyMovie';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div data-testid='app' className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/movieinder' element={<Movieinder />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/sameFilm' element={<SameFilm />} />
        <Route path='/myMovie' element={<MyMovie />} />
      </Routes>
    </div>
  );
}

export default App;
