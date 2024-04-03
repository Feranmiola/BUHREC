import React from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import LogoutIcon from '@mui/icons-material/Logout';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HelpIcon from '@mui/icons-material/Help';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { logoutUser } from '@/_auth/forms/storeCredentials';



const AdminLeftbar = () => {

    function useActive(path: string) {
      const location = useLocation();
      let isActive = location.pathname === path;
       return isActive ? 'text-sidebar-active-purple' : '';
    }

    const handleSignOut=()=>{
      logoutUser();
    }
  

  return (    
    <Sidebar className='fixed h-screen bg-white'>
    <div className='mx-10'>
      <div className='mt-30 py-10 items-center justify-center mx-9'>      
      <h2 className='text-title-purple font-roboto font-semibold text-2xl'><Link to='/'>BUHREC</Link> </h2>
      </div>
    </div>
      <Menu className=''>
        <div className='mt-16'>
          <div className='items-center'>
          <div className='px-4 text-sidebar-header-purple font-roboto font-light'>Your Dashboard</div>
            <MenuItem component={<Link to="/manageresearcheraccounts" />} icon={<LibraryBooksIcon />} className={`hover:text-sidebar-active-purple ${useActive('/manageresearcheraccounts')}`}>Researchers</MenuItem>
            <MenuItem component={<Link to="/managerevieweraccounts" />} icon={<HowToRegIcon />} className={`hover:text-sidebar-active-purple ${useActive('/managerevieweraccounts')}`}>Reviewers</MenuItem>
            <MenuItem component={<Link to="/managereviews" />} icon={<FactCheckIcon />} className={`hover:text-sidebar-active-purple ${useActive('/managereviews')}`}>Reviews</MenuItem>
            <MenuItem component={<Link to="/manageSupportQuestions" />} icon={<HelpIcon />} className={`hover:text-sidebar-active-purple ${useActive('/manageSupportQuestions')}`}>Support</MenuItem>
          </div>
        </div>
        <div>
          <MenuItem onClick={handleSignOut} component={<Link to="/SignedOut" />} icon={<LogoutIcon />} className=' mt-32 hover:text-sidebar-active-purple'>Logout</MenuItem>
        </div>

      </Menu>
    </Sidebar>
   
  )
}

export default AdminLeftbar