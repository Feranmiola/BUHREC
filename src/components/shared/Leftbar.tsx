import React from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Leftbar = () => {

    function useActive(path: string) {
      const location = useLocation();
      let isActive = location.pathname === path;
       return isActive ? 'text-sidebar-active-purple' : '';
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
            <MenuItem component={<Link to="/ReviewerOverview" />} icon={<MenuBookIcon />} className={`hover:text-sidebar-active-purple ${useActive('/ReviewerOverview')}`}>Overview</MenuItem>
            <MenuItem component={<Link to="/ReviewerPendingReviewes" />} icon={<HourglassBottomIcon />} className={`hover:text-sidebar-active-purple ${useActive('/ReviewerPendingReviewes')}`}>Pending Reviews</MenuItem>
            <MenuItem component={<Link to="/ReviewerCompletedReviwews" />} icon={<FactCheckIcon />} className={`hover:text-sidebar-active-purple ${useActive('/ReviewerCompletedReviwews')}`}>Completed Reviews</MenuItem>
          </div>
          <div className='items-center mt-8'>
          <div className='px-4 text-sidebar-header-purple font-roboto font-light'>Your Account</div>
          <MenuItem component={<Link to="/ReviewerAccount" />} icon={<AccountCircleIcon />} className={`hover:text-sidebar-active-purple ${useActive('/ReviewerAccount')}`}>Manage Account</MenuItem>
            <MenuItem component={<Link to="/ReviewerPayments" />} icon={<AccountBalanceWalletIcon />} className={`hover:text-sidebar-active-purple ${useActive('/ReviewerPayments')}`}>View Payments</MenuItem>
          </div>
        </div>
        <div>
          <MenuItem component={<Link to="/SignedOut" />} icon={<LogoutIcon />} className=' mt-32 hover:text-sidebar-active-purple'>Logout</MenuItem>
        </div>

      </Menu>
    </Sidebar>
   
  )
}

export default Leftbar