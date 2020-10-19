
import React from 'react'
import ReactDOM from 'react-dom'

const Header = (title) => {
  return (
    <>
      <h1>{title.course}</h1>
    </>
  )
}

const Part = (section) => {
  return (
    <>
      <p>{section.title} {section.nExercises}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part title={props.part1} nExercises={props.exercises1}/>
      <Part title={props.part2} nExercises={props.exercises2}/>
      <Part title={props.part3} nExercises={props.exercises3}/>
    </>
  )
}

const Total = (numbers) => {
  return (
    <>
      <p>Number of exercises {numbers.one + numbers.two + numbers.three}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1.name} exercises1={part1.exercises} 
        part2={part2.name} exercises2={part2.exercises} 
        part3={part3.name} exercises3={part3.exercises}
      />
      <Total 
        one={part1.exercises} 
        two={part2.exercises}
        three={part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))