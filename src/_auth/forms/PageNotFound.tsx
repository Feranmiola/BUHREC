import React from 'react'
import {Result } from 'antd';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className=' justify-center items-center '>
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<div className='justify-center items-center flex'><Button className='shad-button_primary'> <Link to="/">Back Home</Link></Button> </div> }
        />
    </div>
  )
}

export default PageNotFound