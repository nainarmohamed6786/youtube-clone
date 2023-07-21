import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {Navbar,Feed,SearchFeed,ChannelDetails,VideoDetail} from './components/index'

const App = () => {
  return (
<Router>
    <Box alignItems="center" direction="flex" sx={{background:"#000"}} p={2}>
        <Navbar />

         <Routes>
         <Route exact path='/' element={<Feed />} />
        <Route path='/video/:videoId' element={<VideoDetail />} />
        <Route path='/channel/:channelId' element={<ChannelDetails />} />
        <Route path='/search/:searchterm' element={<SearchFeed />} />
         </Routes>
    </Box>
</Router>
  )
}

export default App