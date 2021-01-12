import React from 'react'

const Total = ({ course }) => {
    const sum = course.parts.reduce((sum, part) => {return sum + part.exercises}, 0)
    return(
      <p>total of {sum} exercises</p>
    ) 
  }
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header course = {course}/>
        <Content course = {course}/>
      </div>
  
    )
  }
  
  const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => <Part part={part} key={part.id}/>)}
        <Total course = {course}/>
      </div>
    )
  }
  
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }

export default Course