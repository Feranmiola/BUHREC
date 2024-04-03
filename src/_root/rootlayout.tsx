import React from 'react';
import { Outlet } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster";
import { useNavigate } from 'react-router-dom';
import Leftbar from '@/components/shared/Leftbar';
import StudentLeftbar from '@/components/shared/StudentLeftbar';
import AdminLeftbar from '@/components/shared/AdminLeftbar';
import { getCurrentUser } from '@/_auth/forms/storeCredentials';

const Rootlayout = () => {
  const navigate = useNavigate();
 
  const currentUser = getCurrentUser();
  
  let LeftbarComponent = () => <></>; // Default to a no-op component

  if (!currentUser) {
    navigate('/')
  }else{
    if (currentUser.userType === 'Researcher') {
      LeftbarComponent = StudentLeftbar;
    } else if (currentUser.userType === 'Reviewer') {
      LeftbarComponent = Leftbar;
    } else {
      LeftbarComponent = AdminLeftbar;
    }
  }
  
  
  return (
    <>
      <div className='w-screen flex'>
        <LeftbarComponent/>
        <Toaster/>
          <main className=' bg-white w-full md:flex-grow px-10 h-screena'> 
            <Outlet/>
          </main> 
      </div>
    </>
  )
}

export default Rootlayout