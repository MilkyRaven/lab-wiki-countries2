import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json';
import CountryDetails from './components/CountryDetails';
import React, { useState} from 'react';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CountriesList countriesData={countries} />
      <Routes>
       <Route path='/:code' element={<CountryDetails countriesData={countries} />}/>
      </Routes>
    </div>
  );
}

export default App;
