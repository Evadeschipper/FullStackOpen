
import CountryDisplay from './CountryDisplay'
import React from 'react'

const ToggleCountry = (props) => {

    const {showCountry, country} = props
    
    if (showCountry === true) {
        return (
            <CountryDisplay country={country}/>
        )
    } else {
        return null
    }

}

export default ToggleCountry