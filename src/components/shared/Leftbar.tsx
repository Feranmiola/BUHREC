import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PeopleIcon from '@mui/icons-material/People';
import Groups2Icon from '@mui/icons-material/Groups2';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Leftbar = () => {

    function useActive(path: string) {
      const location = useLocation();
      let isActive = location.pathname === path;
       return isActive ? 'text-purple-600' : '';
    }

  return (    
    <Sidebar className='fixed h-screen bg-white'>
    <div className='mx-10'>
      <div className='mt-30 py-10 items-center justify-center mx-9'>      
         <h2 className='text-purple-400 h2-bold'>Admin</h2>
      </div>
    </div>
      <Menu className=''>
        <div className='py-16'>
          <div className='items-center'>
          <div className='px-4 text-gray-500'>Your Dashboard</div>
            <MenuItem component={<Link to="/ReviewerOverview" />} icon={<PersonIcon />} className={`hover:text-purple-600 ${useActive('/ReviewerOverview')}`}>Overview</MenuItem>
            <MenuItem component={<Link to="/ReviewerPendingReviewes" />} icon={<LibraryBooksIcon />} className={`hover:text-purple-600 ${useActive('/ReviewerPendingReviewes')}`}>Pending Reviews</MenuItem>
            <MenuItem component={<Link to="/ReviewerCompletedReviwews" />} icon={<HomeIcon />} className={`hover:text-purple-600 ${useActive('/ReviewerCompletedReviwews')}`}>Completed Reviews</MenuItem>
            
            
          </div>
          <div className='items-center mt-8'>
          <div className='px-4 text-gray-500'>Your Account</div>
            <MenuItem component={<Link to="ReviewerAccount/" />} icon={<CalendarMonthIcon />} className={`hover:text-purple-600 ${useActive('/ReviewerAccount')}`}>Account</MenuItem>          
            <MenuItem component={<Link to="ReviewerPayments/" />} icon={<CalendarMonthIcon />} className={`hover:text-purple-600 ${useActive('/ReviewerPayments')}`}>Manage Payments</MenuItem>          
          </div>
        </div>
        
        
        <MenuItem component={<Link to="/SignedOut" />} icon={<LogoutIcon />} className='py-20 hover:text-purple-600'>Logout</MenuItem>
      </Menu>
    </Sidebar>
   
  )
}

export default Leftbar