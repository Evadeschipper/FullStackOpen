
import ListCountries from './ListCountries'
import React from 'react'

const CountriesDisplay = (props) => {

    const {filteredCountries} = props

    return (
        filteredCountries.map( (country) => {
            return <ListCountries key={country.name} country={country} />
        }
        )
    )

}

export default CountriesDisplay