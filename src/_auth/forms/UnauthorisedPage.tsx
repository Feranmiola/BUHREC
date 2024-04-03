import React from 'react'
import { FrownOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';


const UnauthorisedPage = () => {
  return (
    <Result
    icon={<FrownOutlined />}
    title="Off Limits"
    extra={ <Link to='/'><Button className='shad-button_primary bg-button-bg'>Back Home</Button></Link>}
  />
  )
}

export default UnauthorisedPage