import React from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const StudentLeftbar = () => {

    function useActive(path: string) {
      const location = useLocation();
      let isActive = location.pathname === path;
       return isActive ? 'text-sidebar-active-purple' : '';
    }

  return (    
    <Sidebar className='fixed h-screen bg-white'>
    <div className='mx-10'>
      <div className='mt-30 py-10 items-center justify-center mx-9'>      
         <h2 className='text-title-purple font-roboto font-semibold text-2xl'>BUHREC</h2>
      </div>
    </div>
      <Menu className=''>
        <div className='py-16'>
          <div className='items-center'>
          <div className='px-4 text-sidebar-header-purple font-roboto font-light'>Your Dashboard</div>
            <MenuItem component={<Link to="/StudentOverview" />} icon={<PersonIcon />} className={`hover:text-sidebar-active-purple ${useActive('/StudentOverview')}`}>Overview</MenuItem>
            <MenuItem component={<Link to="/StudentReviews" />} icon={<LibraryBooksIcon />} className={`hover:text-sidebar-active-purple ${useActive('/StudentReviews')}`}>Manage Reviews</MenuItem>
            
            
          </div>
          <div className='items-center mt-8'>
          <div className='px-4 text-sidebar-header-purple font-roboto font-light'>Your Account</div>
          <MenuItem component={<Link to="/studentaccount" />} icon={<CalendarMonthIcon />} className={`hover:text-sidebar-active-purple ${useActive('/studentaccount')}`}>Manage Account</MenuItem>
          </div>
        </div>
        
        
        <MenuItem component={<Link to="/SignedOut" />} icon={<LogoutIcon />} className=' mt-32 hover:text-sidebar-active-purple'>Logout</MenuItem>
      </Menu>
    </Sidebar>
   
  )
}

export default StudentLeftbar