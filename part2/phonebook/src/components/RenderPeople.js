
import RenderPerson from './RenderPerson'

const RenderPeople = (props) => {

    const {filteredPersons} = props

    return (
        <div>
            {filteredPersons.map(person => <RenderPerson key={person.name} person={person}/>)}
        </div>
    )
}

export default RenderPeople