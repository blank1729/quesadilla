import React, { useEffect, useState } from 'react'

function Search() {
    const menu = ['tea','biscuit','coffee','dosa','bajji','horlicks'];
    const [searchTerm, setSearchTerm] = useState('');
    const [searchList, setSearchList] = useState(['']);
    
    const handleSearch = (e: any) => {
        setSearchTerm(e.target.value)
    }
  return (
    <div>
        <input type="text" value={searchTerm} onChange={handleSearch}/>
    </div>
  )
}

export default Search