import { Box, Card, CardContent, CardMedia, Stack } from '@mui/material'
import React from 'react'
import { demoVideoUrl } from './utils/Constant'
import { Link } from 'react-router-dom'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos}) => {

    console.log(videos)
  return (
<Stack direction="row" flexWrap="wrap" justifyContent="start"  alignItems="start" gap={2}>
    {videos.map((item,idx)=>{
        return(
            <Box key={idx}>
            {item.id.videoId && <VideoCard videos={item} />}    
             {item.id.channelId && <ChannelCard channelDetail={item} /> }   
            </Box>
        )
    })}
</Stack>
  )
}

export default Videos