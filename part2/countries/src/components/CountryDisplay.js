
const CountryDisplay = (props) => {

    const {country} = props

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
}

export default CountryDisplay