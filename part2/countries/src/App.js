
import CountryDisplay from './components/CountryDisplay'
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [countries, setCountries] = useState([])
  const [newFilter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })

  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const regex = RegExp(newFilter.toLowerCase())
  const filteredCountries = countries.filter(country => regex.test(country.name.toLowerCase()))

  return (
    <div>
      <p>
        find countries 
        <input 
          value={newFilter}
          onChange={handleFilterChange}
        />
      </p>
      <CountryDisplay filteredCountries={filteredCountries} />
    </div>
  );
}

export default App;
