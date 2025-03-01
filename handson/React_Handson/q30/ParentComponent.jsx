import React, { useCallback } from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'
import { useState } from 'react'

const ParentComponent = () => {

  const [age, setAge] = useState(21)
  const [salary, setSalary] = useState(23000)

  const handleAge = useCallback(() => {
    setAge((prevAge)=>prevAge+1)
  },[])

  const handleSalary = useCallback(() => {
    setSalary((prevSalary)=>prevSalary+1000)
  },[])

// if we give age in dependency, then for salary change, this button will be rendered. 
  // const handleAge = useCallback(() => {
  //   setAge(age+1)
  // },[age])

// if we give salary in dependency, then for salary change, this button will be rendered. 
  // const handleSalary = useCallback(() => {
  //   setSalary(salary+1000)
  // },[salary])
  
  return (
    <div>
      <Title clr="red"/>
      <Count text="Age" count={age}></Count>
      <Button handleClick={handleAge}>Increment Age</Button>
      <Count text="Salary" count={salary}/>
      <Button handleClick={handleSalary}>Increment Salary</Button>
    </div>
  )

}


export default ParentComponent