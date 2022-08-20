import React, { useEffect, useState } from 'react'

function Search() {
    const menu = ['tea','biscuit','coffee','dosa','bajji','horlicks'];
    const [searchTerm, setSearchTerm] = useState('');
    const [searchList, setSearchList] = useState(['']);
    useEffect(()=> {
        console.log('crap thhs is happening');
        const list = menu.filter((item)=> item.includes(searchTerm))
        setSearchTerm(list);
    },[])
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }
  return (
    <div>
        <input type="text" value={searchTerm} onChange={handleSearch}/>
        <ul>
            {searchList.map((item)=> <li key={item}>{item}</li>)}
        </ul>
    </div>
  )
}

export default Search