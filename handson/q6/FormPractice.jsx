import { useState } from "react"

const FormPractice = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',

  })
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState("")


  const validationForm = () => {
    let newErrors = {}
    if(!formData.name){
      newErrors.name = "Name is Required"
    }
    if(!formData.email){
      newErrors.email = "Email ID is Requuired"
    }
    if(formData.password.length < 6){
      newErrors.password = "Password should be more than 6 character"
    }
    setError(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const {name, value, checked, type} = e.target
    setFormData((prev) => ({...prev, [name]: value})) //mistake
  }

  const handleSubmit = (e) => {
    e.preventDefault();       //mistake
    if(validationForm()){
      setSuccessMessage("Form Submitted Successfully !!! ")
      console.log(formData)
    }
    setFormData({
      name: '',
      email: '',
      password: '',
    })    
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>

        {successMessage}

        <div>
          <label/>Name: 
          <input type="text" name="name" value={formData.name} onChange={handleChange}/>
          {error.name && <p>{error.name}</p>}
        </div>

        <div>
          <label/>Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange}/>
          {error.email && <p>{error.email}</p>}
        </div>

        <div>
          <label/>Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange}/>
          {error.password && <p>{error.password}</p>}
        </div>

        <button type="submit">Submit</button> 
      </form> 
    </div>
  )

}

export default FormPractice