
import RenderPerson from './RenderPerson'

const RenderPeople = (props) => {

    const {filteredPersons, setPersons} = props

    return (
        <div>
            {filteredPersons.map(person => <RenderPerson key={person.name} person={person} setPersons={setPersons}/>)}
        </div>
    )
}

export default RenderPeople