import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Checkbox } from 'primereact/checkbox';

import { message } from 'antd';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { PaystackConsumer } from 'react-paystack';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";




const AddNewPaper = () => {
  
const [selectedFile, setSelectedFile] = useState<File | null>(null);

const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.files && event.target.files.length > 0) {
    setSelectedFile(event.target.files[0]);
  }
};


    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_a1d3181941fc307c96d4133ce0f6301638cea7ec',
    };
    
    // you can call this function anything
    const handleSuccess = () => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(componentProps.reference);
    };
  
    // you can call this function anything
    const handleClose = () => {};
  
    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: handleSuccess,
        onClose: handleClose
    };

    const navigate = useNavigate();

    const handleSubmit = ()=>{
        message.success(`File submitted for review.`);
        navigate('/StudentReviews')
    }
    const [checked, setChecked] = useState<boolean>(false);


  return (
    <div>
        <div className='  flex justify-between items-start'>
            <h2 className='font-roboto text-dashboard-page-header-purple  text-3xl font-semibold py-16 px-16'>Submit a New Paper</h2>
        </div>
        <div className='flex'>
            <Checkbox onChange={e => setChecked(!!e.checked)} checked={checked}></Checkbox>
            <div className='flex flex-row'>
              <label className='ml-4 font-poppins'>Click here if you have read through the ‎  </label>
              <Dialog>
                <DialogTrigger>
                <p className='font-poppins text-text-purple '>instructions</p>
                </DialogTrigger>
                <DialogContent className='bg-white'>
                  <div className=''>
                    <h2 className='text-text-purple font-poppins'>File Upload Instructions</h2>
                    <p>The fields here are in Maimum number of words count</p>
                    <p>UG- Undergraduate</p>
                    <p>PG- Post Graduate</p>
                    <TableContainer overflowY="auto" overflowX='auto' className=''>
                    <Table className="">
                      <Thead>
                        <Tr>
                        <Th className=""></Th>
                        <Th className="">UG </Th>
                        <Th className="">PG </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                          <Td className=" text-text-purple font-roboto">Title</Td>
                          <Td className="">23</Td>
                          <Td className="">23</Td>
                        </Tr>
                        <Tr>
                          <Td className=" text-text-purple font-roboto">Introduction</Td>
                          <Td className="">-</Td>
                          <Td className="">-</Td>
                        </Tr>
                        <Tr>
                          <Td className=" text-text-purple font-roboto">Background</Td>
                          <Td className="">800</Td>
                          <Td className="">1000</Td>
                        </Tr>
                        <Tr>
                          <Td className=" text-text-purple font-roboto">Scope and Limitation</Td>
                          <Td className="">120</Td>
                          <Td className="">150</Td>
                        </Tr>
                        <Tr>
                          <Td className=" text-text-purple font-roboto">Justification</Td>
                          <Td className="">100</Td>
                          <Td className="">150</Td>
                        </Tr>
                        <Tr>
                          <Td className=" text-text-purple font-roboto">Objectives</Td>
                          <Td className="">300</Td>
                          <Td className="">450</Td>
                        </Tr>
                        <Tr>
                          <Td className=" text-text-purple font-roboto">Hypothesis (if any)</Td>
                          <Td className="">100</Td>
                          <Td className="">150</Td>
                        </Tr>
                        <Tr>
                          <Td className=" text-text-purple font-roboto">Literature Review</Td>
                          <Td className="">2000</Td>
                          <Td className="">3600</Td>
                        </Tr>
                        <Tr>
                          <Td className=" text-text-purple font-roboto">Materials and Methods</Td>
                          <Td className="">3600</Td>
                          <Td className="">4400</Td>
                        </Tr>
                    </Tbody>
                    </Table>
                    </TableContainer>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
        </div>
        <div>
            {checked ? (
                <div className=''>
                    <div className=' justify-center items-center flex flex-col'>
                        <h3 className='font-poppins font-semibold text-xl'>Upload the Document</h3>
                        <div className='py-5'>
                        <div className="flex items-center justify-center w-[800px]">
                                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SDF or Word files only!! (MAX. 800x400px)</p>
                                    </div>
                                    {selectedFile && <p className="mt-2 text-sm text-gray-700">{selectedFile.name}</p>}
                                    <input type="file" className="hidden" onChange={onFileChange}/>
                                </label>
                            </div> 
                            

                        </div>
                    </div>
                    <div className=' justify-center items-center flex flex-col'>
                        <h3 className='font-poppins font-semibold text-xl'>Complete the Submission and Payment</h3>
                        <div className='mt-5 flex flex-col py-6 justify-center items-center'>
                        <PaystackConsumer {...componentProps} >
                                {({initializePayment}) => <button className='shad-button_primary w-44 text-center justify-center items-center h-11  rounded-xl' onClick={() => initializePayment(handleSuccess, handleClose)}>Pay with Paystack</button>}
                        </PaystackConsumer>
                        <Button className='bg-button-bg text-white w-44 hover:bg-button-hover-bg mt-9' onClick={handleSubmit} >Complete Submission</Button>
                            
                        </div>
                    </div>
                </div>
            ) : (
                <div className='ml-10'>
                    <p>Read the Instructions</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default AddNewPaper
