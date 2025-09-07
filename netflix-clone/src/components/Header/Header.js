import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
const Header = () => {
  return (
    <div className='header_outer_container'>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
        <div className='header_right'>
            <ul>
                <li><SearchIcon/></li>
                 <li><NotificationsIcon/></li>
                <li><AccountBoxIcon/></li>
                <li><ArrowDropDownCircleIcon/></li>
            </ul>
        </div>
    </div>
</div>
    )
}

export default Header

