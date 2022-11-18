import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countriesJson from './countries.json';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CountriesList countriesData={countriesJson} />
      <Routes>
       <Route path='/countries/:code' element={<CountryDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
