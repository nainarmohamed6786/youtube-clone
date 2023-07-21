import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from './utils/fetchFromAPI';
import { useLocation } from 'react-router-dom';

const SearchFeed = () => {
  
    const [videos,setVideos]=useState([]);

    const location=useLocation();
    const searchterm=location.pathname.split("/")[2];


    useEffect(()=>{
   fetchFromAPI(`search?part=snippet&q=${searchterm}`)
    .then((data)=>setVideos(data.items))
    },[searchterm])
  return (

<Box sx={{flex:2,height:{sx:"auto",height:"95%"}}} p={2}>
<Typography variant='h3' fontWeight="700" style={{color:"white"}}>
Search Videos For <span style={{color:"red"}}>
    Videos
    </span>    
</Typography>

<Videos videos={videos} />
</Box>
  )
}

export default SearchFeed