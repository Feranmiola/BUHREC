import React from 'react';
import {NextUIProvider} from "@nextui-org/react";
import { PrimeReactProvider } from 'primereact/api';
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import './globals.css'
import Signupform from './_auth/forms/signupform';
import AdminSignIn from './_auth/forms/adminSignIn';
import Home from './_root/pages/Home';




import {   
  AddNewPaper,
  ManageReviewerAccounts,
  ManageReviews,
  ManageSupportQuestions,
  ReviewerAccount,
  ReviewerCompletedReviwews,
  ReviewerOverview,
  ReviewerPayments,
  ReviewerPendingReviewes,
  StudentAccount, 
  StudentAddNewPaper,
  StudentOverview,
  StudentReviews, 
} from './_root/pages';

          
import Authlayout from './_auth/authlayout';
import Rootlayout from './_root/rootlayout';
import SignedOut from './_auth/forms/SignedOut';
import { Toaster } from "@/components/ui/toaster";
import PageNotFound from './_auth/forms/PageNotFound';
import Support from './_root/pages/Support';
import ManageResearcherAccounts from './_root/pages/Admin Pages/ManageResearcherAccounts';
import UnauthorisedPage from './_auth/forms/UnauthorisedPage';



function App() {
  const isAuthenticated = true;
  const navigate = useNavigate();
  
  if(!isAuthenticated){
    navigate('/sign-in');
  }
  
  return (  
    <PrimeReactProvider>
      <NextUIProvider>
        <ChakraProvider>
          <main className='flex h-screen'>
            <Toaster/>
            <Routes>              
              {/* public routes */}
              <Route element = {<Authlayout/>}>
                
                <Route index element = { <Home/> }/>
                <Route path= "/sign-up" element = { <Signupform/> } />
                <Route path= "/adminSign-in" element = { <AdminSignIn/> } />
                <Route path='/SignedOut' element = { <SignedOut/> }/>
                <Route path='/support' element = { <Support/> }/>
                <Route path='/PageNotFound' element = { <PageNotFound/> }/>
                <Route path='/UnauthorisedPage' element = { <UnauthorisedPage/> }/>
                <Route path="*" element={<PageNotFound />} />
              
              </Route>

              {/* private routes */}

              <Route element = {<Rootlayout/>}>


                <Route path='/ReviewerAccount' element = { <ReviewerAccount/> }/>
                <Route path='/ReviewerCompletedReviwews' element = { <ReviewerCompletedReviwews/> }/>
                <Route path='/ReviewerOverview' element = { <ReviewerOverview/> }/>
                <Route path='/ReviewerPayments' element = { <ReviewerPayments/> }/>
                <Route path='/ReviewerPendingReviewes' element = { <ReviewerPendingReviewes/> }/>


                
                
                <Route path='/StudentOverview' element = { <StudentOverview/> }/>
                <Route path='/StudentAccount' element = { <StudentAccount/> }/>
                <Route path='/StudentAddNewPaper' element = { <StudentAddNewPaper/> }/>
                <Route path='/StudentReviews' element = { <StudentReviews/> }/>
                <Route path='/AddNewPaper' element = { <AddNewPaper/> }/>


                <Route path='/manageresearcheraccounts' element = { <ManageResearcherAccounts/> }/>
                <Route path='/managereviews' element = { <ManageReviews/> }/>
                <Route path='/manageSupportQuestions' element = { <ManageSupportQuestions/> }/>
                <Route path='/managerevieweraccounts' element = { <ManageReviewerAccounts/> }/>


              </Route>

            </Routes>
          </main>
          </ChakraProvider>
        </NextUIProvider>
      </PrimeReactProvider>   
  )
}

export default App
