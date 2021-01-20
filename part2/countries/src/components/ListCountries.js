
import React, { useState } from 'react'
import ToggleCountry from './ToggleCountry'

const ListCountries = (props) => {

    const {country} = props
    const [showCountry, setShowCountry] = useState(false)

    const showHandler = (event) => {
        
        setShowCountry(!showCountry)

    }

    return (
        <div key={country.name}>
            {country.name} 
            <button 
                onClick={showHandler} 
                type="button">
                    {showCountry ? 'Hide' : 'Show'}
            </button>
            <ToggleCountry showCountry={showCountry} country={country}/>
        </div>
    )

}

export default ListCountries