import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ChannelCard = ({channelDetail,marginTop}) => 
    (
        <Box sx={{display:"flex",justifyContent:"center",margin:"auto",height:"356px",
        alignItems:"center",textAlign:"center",color:"#fff",marginTop}}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
    <CardContent>
        <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url} alt="image" 
        sx={{width:"180px",height:"180px",borderRadius:"50%"}} />
        <Typography variant='h6' style={{color:"#fff",marginTop:"10px"}}>
            {channelDetail?.snippet?.title}
        </Typography>
   
    </CardContent>
    </Link>
        </Box>
      )

export default ChannelCard