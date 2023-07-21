import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { demoChannelUrl, demoVideoUrl } from './utils/Constant'
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VideoCard = ({videos : { id : {videoId},snippet}}) => {
  return (
<Card sx={{width:"330px",mt:4}}>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
    <CardMedia image={snippet?.thumbnails?.high?.url} alt="images" sx={{width:{xs:"100%",sm:"354px"},height:180}} />
    </Link>

    <CardContent sx={{background:"#1E1E1E",height:"106px"}}>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant='subtitle2' sx={{color:"white"}} >
         {snippet.description.slice(0,50)}
        </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant='subtitle2' sx={{color:"gray",display:"flex",justifyContent:"start",alignItems:"center",mt:2}}>
{snippet?.channelTitle}
<CheckCircleIcon sx={{marginLeft:"15px"}} />
        </Typography>
        </Link>

    </CardContent>
</Card>
  )
}

export default VideoCard