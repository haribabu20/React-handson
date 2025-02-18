import {useState} from 'react'

const ToggleDiv = () => {

  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return(
    <div>
      <button onClick={handleClick}>
        {toggle ? 'Hide':'Show'} Content
      </button>
      {toggle && (
          <div>
            <p>Hi</p>
          </div>
        )}
    </div>
  )
}

export default ToggleDiv