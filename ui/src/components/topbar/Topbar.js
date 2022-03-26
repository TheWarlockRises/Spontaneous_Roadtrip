import React from 'react'
import './topbar.css'
import LoginIcon from '@mui/icons-material/Login';

const Topbar = () => (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <span className='logo'>PlaceholderCompany</span>
        </div>
        <div className='topbarCenter'>
            <LoginIcon />
        </div>
        <div className='topbarRight'></div>
    </div>
  );
  
  export default Topbar;