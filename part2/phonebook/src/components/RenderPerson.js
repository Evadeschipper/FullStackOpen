
const RenderPerson = (props) => {

    const {person} = props

    return (
        <p>{person.name} {person.number}</p>
    )

}

export default RenderPerson