import React, { useState } from 'react'
import { Paper,IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const [searchterm,setSearchterm]=useState('');

  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(searchterm){
      navigate(`/search/${searchterm}`);
      setSearchterm("");
    }
  }


  return (
  <Paper component="form" sx={{border:0,mr:{sx:5},pl:5,borderRadius:"20px"}} onSubmit={handleSubmit}>
    <input type="text" placeholder='Search...' style={{border:"none",padding:"5px"}} onChange={(e)=>setSearchterm(e.target.value)} />
    <IconButton>
        <SearchIcon sx={{color:"red",p:"10px"}}  />
    </IconButton>
  </Paper>
  )
}

export default SearchBar