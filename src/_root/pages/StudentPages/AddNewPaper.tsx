import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Checkbox } from 'primereact/checkbox';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
const { Dragger } = Upload;
import { PaystackConsumer } from 'react-paystack';


const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      let { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      status = 'done';
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    // },
    // onDrop(e) {
    //   console.log('Dropped files', e.dataTransfer.files);
    // 
    },
  };

const AddNewPaper = () => {
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
                <DialogContent>

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
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                banned files.
                                </p>
                            </Dragger>

                        </div>
                    </div>
                    <div className=' justify-center items-center flex flex-col'>
                        <h3 className='font-poppins font-semibold text-xl'>Complete the Submission and Payment</h3>
                        <div className='mt-5 flex flex-col py-6 justify-center items-center'>
                        <PaystackConsumer {...componentProps} >
                                {({initializePayment}) => <button className='shad-button_primary w-44 text-center justify-center items-center h-11  rounded-xl' onClick={() => initializePayment(handleSuccess, handleClose)}>Pay with Paystack</button>}
                        </PaystackConsumer>
                        <Dialog>
                            <DialogTrigger asChild>
                                
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] bg-white">
                            </DialogContent>
                        </Dialog>

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