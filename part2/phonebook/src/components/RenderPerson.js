
import * as numberService from '../services/numberService'

const RenderPerson = (props) => {

    const {person, setPersons} = props

    const deleteHandler = (event) => {

        if (window.confirm(`Delete ${person.name} from your phonebook?`)) {

            numberService
            .deletePerson(person.id)
            .then(() => {
                numberService
                    .getAll()
                    .then(numbers => {
                        setPersons(numbers)
                    })
            })

        }    
            
    }

    return (
        <div>
            {person.name} {person.number} 
            <button 
                onClick={deleteHandler} 
                type="button">
                    delete
            </button>
        </div>

    )

}

export default RenderPerson