import React from 'react'
import {useState} from 'react'

const SearchBar = () => {

  const [searchValue, setSearchValue] = useState('');

  const list = ['Apple', 'Banana', 'Mango', 'Pomo', 'Dragon', 'Kiwi', 'Orange'];

  const handleList = list.filter((li) => (          // to view 
    li.toLowerCase().includes(searchValue.toLowerCase())  // mistake. used contains instead of includes
  ))

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  return(
    <div>
      <input
        name='list'
        placeholder="Search.."
        value={searchValue}
        onChange={handleChange}
      />

    <ul>
      {
        handleList.map((li, index) => (
          <li key={index}>{li}</li>       // mistake --> missed including this
        ))
      }
    </ul>
    </div>
  )
}

export default SearchBar