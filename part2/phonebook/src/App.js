
import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import RenderPeople from './components/RenderPeople'
import * as numberService from './services/numberService'

const App = () => {

  useEffect(() => {
    numberService
      .getAll()
      .then(initialNumbers => {
        setPersons(initialNumbers)
      })
  }, [])

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const regex = RegExp(newFilter.toLowerCase())
  const filteredPersons = persons.filter(person => regex.test(person.name.toLowerCase()))

  const addName = (event) => {
      event.preventDefault()

      if (persons.map(person => person.name).includes(newName)) {
        alert(`${newName} is already added to phonebook`)
      } else {

        const numberObject = {
            name: newName,
            number: newNumber
        }

        numberService
          .create(numberObject)
          .then(returnedNumber => {
            setPersons(persons.concat(returnedNumber))
            setNewName('')
            setNewNumber('')
          }) 


      }
  }

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input 
          value={newFilter}
          onChange={handleFilterChange}/>
      </div>
      <h2>Add a new phone number</h2>
      <Form 
        addName={addName} 
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <RenderPeople filteredPersons={filteredPersons} setPersons={setPersons} />
    </div>
  )
}

export default App