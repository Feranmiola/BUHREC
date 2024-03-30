import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'

const ReviewerOverview = () => {
  return (
    <div className=' justify-center items-center'>
      <div className='  flex justify-between items-start'>
        <h2 className='font-roboto text-dashboard-page-header-purple  text-3xl font-semibold py-16 px-16'>Overview</h2>
        <h2 className='font-roboto text-xl py-16 px-16'>Welcome <span className='font-roboto text-highlight-purple'>Mr Kalesanwo</span> </h2>
        
      </div>
      <div className=' justify-end items-end flex mr-36'>
        <Button className='shad-button_primary w-44'>Submit a new paper</Button>
      </div>
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='flex justify-between'>
          <Card className=' bg-grid-bg-card w-[325px] h-[263px]'>
            <CardContent className=' justify-center items-center'>
              <div>
                <h1 className='font-roboto font-bold text-header-number-purple text-8xl text-center mt-14'>3</h1>
                <p className='font-roboto text-xl text-center mt-3'>Pending Reviews</p>

              </div>
              
            </CardContent>
          </Card>
          <Card className=' bg-grid-bg-card w-[325px] h-[263px] ml-6'>
            <CardContent className=' justify-center items-center'>
              <div>
                <h1 className='font-roboto font-bold text-header-number-purple text-8xl text-center mt-14'>3</h1>
                <p className='font-roboto text-xl text-center mt-3'>Pending Reviews</p>

              </div>
              
            </CardContent>
          </Card>
          <Card className=' bg-grid-bg-card w-[325px] h-[263px]  ml-6'>
            <CardContent className=' justify-center items-center'>
              <div>
                <h1 className='font-roboto font-bold text-header-number-purple text-8xl text-center mt-14'>3</h1>
                <p className='font-roboto text-xl text-center mt-3'>Pending Reviews</p>

              </div>
              
            </CardContent>
          </Card>
        </div>
        <div className='flex justify-between mt-5'>
        <Card className=' bg-grid-bg-card w-[325px] h-[263px]'>
            <CardContent className=' justify-center items-center'>
              <div>
                <h1 className='font-roboto font-bold text-header-number-purple text-8xl text-center mt-14'>3</h1>
                <p className='font-roboto text-xl text-center mt-3'>Pending Reviews</p>

              </div>
              
            </CardContent>
          </Card>
          <Card className=' bg-grid-bg-card w-[325px] h-[263px] ml-6'>
            <CardContent className=' justify-center items-center'>
              <div>
                <h1 className='font-roboto font-bold text-header-number-purple text-8xl text-center mt-14'>3</h1>
                <p className='font-roboto text-xl text-center mt-3'>Pending Reviews</p>

              </div>
              
            </CardContent>
          </Card>
          <Card className=' bg-grid-bg-card w-[325px] h-[263px]  ml-6'>
            <CardContent className=' justify-center items-center'>
              <div>
                <h1 className='font-roboto font-bold text-header-number-purple text-8xl text-center mt-14'>3</h1>
                <p className='font-roboto text-xl text-center mt-3'>Pending Reviews</p>

              </div>
              
            </CardContent>
          </Card>
        </div>

      </div>

    </div>
  )
}

export default ReviewerOverview