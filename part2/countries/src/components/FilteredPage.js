
import CountryDisplay from './CountryDisplay'
import CountriesDisplay from './CountriesDisplay'

const FilteredPage = (props) => {

const {filteredCountries} = props

if (filteredCountries.length === 1) {

    let country = filteredCountries[0]

    return (
        <CountryDisplay country={country}/>
    )

} else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {

    return (
        <CountriesDisplay filteredCountries={filteredCountries} />
    )

} else {

    return (
        <p>Too many matches, specify another filter</p>
    )

}

}

export default FilteredPage;