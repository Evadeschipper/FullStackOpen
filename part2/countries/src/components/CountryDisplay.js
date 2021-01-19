
/* 
If 1, show name (h1?), capital, population, languages (h2?) (in an unordered list) and the flag.

country.capital str
country.population int
country.languages [{name: ...}, {name: ...}]
country.name
country.flag str URL
*/

const CountryDisplay = (props) => {

const {filteredCountries} = props

if (filteredCountries.length === 1) {

    let country = filteredCountries[0]

    return (
        <div>
            <h1>{country.name}</h1>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h2>languages</h2>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img 
                src={country.flag} 
                alt=''
                width={160}
                height={120}
            />
        </div>
    )

} else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {

    return (
        filteredCountries.map(country => <p key={country.name}>{country.name}</p>)
    )

} else {

    return (
        <p>Too many matches, specify another filter</p>
    )

}

}

export default CountryDisplay;