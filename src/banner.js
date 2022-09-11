import React from 'react'
import { useState } from 'react'
import './banner.css'
import Button from '@mui/material/Button';




function Banner() {

const [showSearch, setshowSearch] = useState(false);

  return (
    <div className='pagegrid'>
        <div className='search_section'>
            {showSearch && <h1> Show available dates</h1>}
            <Button 
            onClick={() => setshowSearch(! showSearch)}
            variant='outlined'>
                Search Dates</Button>  

        </div>
        <div className='gridtexts'>
        <h1>Get out there and Stretch your imagination</h1>
        <h4>Plan a different kind of getaway to uncover the hidden gems near you</h4>
        
        <Button variant="outlined">Explore Nearby Environs</Button>
    </div>
    </div>
    
  
  )
}

export default Banner