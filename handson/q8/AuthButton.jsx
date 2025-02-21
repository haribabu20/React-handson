import {useState} from 'react'


const AuthButton = () => {

  const [isLogged, setIsLogged] = useState(false)

  const handleButton = () => {
    setIsLogged(!isLogged)
  }

  return(
    <div>
      <button onClick={handleButton}>
        {isLogged ? 'Logout':'Login'}
      </button>
    </div>
  )
}

export default AuthButton




// Wrong approach !


// import {useState} from 'react'
// const AuthButton = () => {

//   const [isLogged, setIsLogged] = useState('Login')

//   const handleButton = () => {
//     setIsLogged('Logout')
//   }

//   return(
//     <div>
//       <button onClick={handleButton}>
//         {isLogged}
//       </button>
//     </div>
//   )
// }

// export default AuthButton

