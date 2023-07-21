import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from './utils/fetchFromAPI';

const Feed = () => {
  
    const [videos,setVideos]=useState([]);
    const [selectedCategory,setSelectedCategory]=useState("New")

    console.log(selectedCategory)
    useEffect(()=>{
   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
    },[selectedCategory])
  return (
<Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
<Box sx={{height:{sx:"auto",md:"92vh"},mr:{sx:"0",md:2},borderRight:"2px solid #3d3d3d",overflowY:"auto"}}>
<Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

<Typography variant='body2' sx={{mt:{sx:"0",md:"1.5"},color:"white",mx:2}}>
    CopyRight @ 9R Yakath
</Typography>
</Box>

<Box sx={{flex:2,height:{sx:"auto",height:"95%"}}} p={2}>
<Typography variant='h3' fontWeight="700" style={{color:"white"}}>
{selectedCategory} <span style={{color:"red"}}>
    Videos
    </span>    
</Typography>

<Videos videos={videos} />
</Box>
</Stack>
  )
}

export default Feed