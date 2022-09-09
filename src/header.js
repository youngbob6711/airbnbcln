import React from 'react'
import './header.css'
import img from './airr.png'
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LanguageIcon from '@mui/icons-material/Language';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function header() {
  return (
    <div className='header'>
        <img 
        className="headerlogo" src={img} alt=" "/>
       <div className='headercentered'>
<input type="text"/>

<SearchIcon />

       </div>
    <div className='rightheader'>
<p>Become a member</p>
<PermIdentityIcon />
<LanguageIcon />
<MoreVertIcon />
    </div>

        </div>
  )
}

export default header