import { Stack } from '@mui/material'
import React from 'react';
import { logo } from './utils/Constant';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
   <Stack direction="row" alignItems="center"
    sx={{background:"#000",position:"sticky",top:"0",justifyContent:"space-between"}} p={2}
>

    <Link to="/" style={{display:"flex",alignItems:"center"}} >
        <img src={logo} alt='logo' height={85} />
    </Link>

    <SearchBar />


</Stack>

  )
}

export default Navbar