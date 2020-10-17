
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1} 
        part2={part2} exercises2={exercises2} 
        part3={part3} exercises3={exercises3}
      />
      <Total one={exercises1} two={exercises2} three={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))