import { useState } from 'react'
import './App.css'
import JSONDATA from './MOCK_DATA.json'
function App() {
  const [search,setSearch]=useState('')

  return (
 <div className='app'>
  <input type='text' placeholder='searching...' onChange={(event)=>{
    setSearch(event.target.value)
  }}/>  
  {JSONDATA.filter((value)=>{
    if(search==""){
      return value; 
    }else if (value.first_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
      return value;
    }
    return null;
  }).map((value,key)=>{
    return <div className='user'key={key}><p>{value.first_name}</p></div>
  })}
 </div>

  )
}

export default App
