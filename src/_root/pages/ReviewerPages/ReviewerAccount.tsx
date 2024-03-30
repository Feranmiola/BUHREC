import React from 'react'
import { Tabs } from 'antd';
import AccountSettings from '@/_root/AccountSettings';
import PaymentSettings from '@/_root/PaymentSettings';
import ManagePasswords from '@/_root/ManagePasswords';

const ReviewerAccount = () => {
  return (
    <div>
      <div className='  flex justify-between items-start'>
        <h2 className='font-roboto text-dashboard-page-header-purple  text-3xl font-semibold py-16 px-16'>Manage Account</h2>
        <h2 className='font-roboto text-xl py-16 px-16'><span className='font-roboto text-highlight-purple'>Mr Kalesanwo</span> </h2>
      </div>
      <div className='flex ml-8'>
        <Tabs
          tabPosition='left'
          size="large"
          defaultActiveKey="1"
          items={[
            {
              label: 'General',
              key: '1',
              children: <AccountSettings/>,
            },
            {
              label: 'Password',
              key: '2',
              children: <ManagePasswords/>,
              
            },
            {
              label: 'Payments',
              key: '3',
              children: <PaymentSettings/>,
            },
          ]}
                
        />
          
      </div>
    </div>
  )
}

export default ReviewerAccount