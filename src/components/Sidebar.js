import React from 'react';
import { categories } from './utils/Constant'; 
import { Stack } from '@mui/material';


const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
<Stack sx={{height:{sx:"auto",md:"95%"},overflowY:"auto",mx:2}}>
{categories.map((category)=>{
    return(
        <button key={category.name}
        onClick={()=>setSelectedCategory(category.name)}
        className='category-btn' style={{background:category.name===selectedCategory && "#Fc1503",color:"white"}}>
            <span style={{color:category.name===selectedCategory ? "white" :"red",marginRight:"15px"}}>{category.icon}</span>
            <span >{category.name}</span>
        </button>
    )
})}
</Stack>
  )
}

export default Sidebar