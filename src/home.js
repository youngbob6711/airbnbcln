import React from 'react'
import './home.css'
import Banner from './banner'
//import { Card } from '@mui/material'
import Card from './cards'

function home() {
  return (
    <div className='main_grid'>
     
    <Banner />

    <div className='grid'>

      <Card src='./airr.png' title='Online Experiences' desc='Unique Activities we can do better' />
      <Card src='./airr.png' title='Online Experiences' desc='Unique Activities we can do better' />
      <Card src='./airr.png' title='Online Experiences' desc='Unique Activities we can do better' />
      <Card src='./airr.png' title='Online Experiences' desc='Unique Activities we can do better' />
     
     
        </div>
        </div>
  )
}

export default home

