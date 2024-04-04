import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'antd';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  
  import { z } from "zod"
  import { zodResolver } from "@hookform/resolvers/zod"
  import { useForm } from "react-hook-form"
  import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { SigninValidationSchema } from "@/lib/validation"
import {getCurrentUser, loginUser } from '@/_auth/forms/storeCredentials';
import { useToast } from '@/components/ui/use-toast';


const Home = () => {
    const {toast} = useToast();
    const navigare = useNavigate()
    const form = useForm<z.infer<typeof SigninValidationSchema>>({
        resolver: zodResolver(SigninValidationSchema),
        defaultValues: {
          email: "",
          password: ""
        },
      })

    async function onSubmit(values: z.infer<typeof SigninValidationSchema>) {
        let isAuthenticated;

        isAuthenticated = loginUser(values.email, values.password)
        if(isAuthenticated){
            toast({
                variant: "mydeafult",
                title: "`Login Successfull`",
                description: "Redirecting",
              })
              const currentUser = getCurrentUser();
            if(currentUser?.userType === 'Researcher'){
                navigare('/StudentOverview');
            }else{
                navigare('/ReviewerOverview');
            }
        }else{
            toast({
                variant: "mydeafult",
                title: "`Login Failed`",
                description: "Incorrect Username or Password",
              })
        }
    }

    



  return (
    <main className='w-full h-screen'>
        <section className='bgImage h-[1025px]'>
            <div className='flex px-12 justify-between py-10'>
                <div>
                    <h2 className='text-title-purple font-roboto text-2xl font-bold'><Link to='/'>BUHREC</Link></h2>
                </div>
                
                <div className='flex flex-row justify-center'>
                
                    <div className='flex space-x-8'>
                    <Dialog>
                            <DialogTrigger asChild>
                            <p className="hover:text-navbar-hover-purple body-medium cursor-pointer">Login</p>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] bg-white">
                                
                                    <Form {...form}>
                                        <div className="">
                                            <div className=''>
                                                <h2 className="font-poppins text-2xl text-center">Login to <span className='text-text-purple'>BUHREC</span> </h2>
                                            </div>
                                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-4">         
                                                <div className='justify-center items-center ml-4'>
                                                    <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem className="flex items-center">
                                                            <FormLabel className="body-medium">Email:</FormLabel>
                                                            <FormControl>
                                                                <Input type="email" placeholder="" className="shad-input ml-4 w-56" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                    />
                                                    <FormField
                                                    control={form.control}
                                                    name="password"
                                                    render={({ field }) => (
                                                        <FormItem className="flex items-center">
                                                            <FormLabel className="body-medium">Password:</FormLabel>
                                                            <FormControl>
                                                                <Input type="password" placeholder="" className="shad-input ml-4 w-56" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                    />
                                                </div>
                                                <Button type="submit" className="shad-button_primary mt-4 w-40 place-self-center">
                                                    <div>Sign In</div>
                                                </Button>
                                                <p className="text-small-regular text-dark-2 text-center mt-3">Don't have an account?
                                                <Link to = "/sign-up" className="text-highlight-purple text-small-semibold ml-1">Sign-up</Link>
                                                </p>

                                                <p className="text-small-regular text-dark-2 text-center mt-3">
                                                <Link to = "/adminSign-in" className="text-highlight-purple text-small-semibold ml-1">Admin</Link>
                                                </p>
                                            </form>
                                        </div>
                                    </Form>
                            </DialogContent>
                        </Dialog>
                        <Link to="#pricing" className="hover:text-navbar-hover-purple body-medium">Pricing</Link>
                        <Link to="#about" className="hover:text-navbar-hover-purple body-medium">About</Link>
                    </div>
                </div>
                <a href="/support" className="hover:text-navbar-hover-purple body-medium">Support</a>
            </div>
            <div className='flex flex-row justify-center items-center'>
                <div className='flex flex-1 justify-start items-start flex-col homeHeader py-44'>
                    <h2 className=' font-roboto text-7xl w-[425px]'>Welcome to <span className=' font-roboto text-title-purple'>BUHREC</span></h2>
                    <p className=' w-96 font-poppins '>We handle various categories of researches and provide guidelines for ethical clearance. Join us in our journey towards excellence and global visibility in research.</p>
                    
                    <div className=' flex mt-3 pc-3 bg-white'>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className='bg-button-bg text-white w-28 hover:bg-button-hover-bg' >Login</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] bg-white">
                                
                                    <Form {...form}>
                                        <div className="">
                                            <div className=''>
                                                <h2 className="font-poppins text-2xl text-center">Login to <span className='text-text-purple'>BUHREC</span> </h2>
                                            </div>
                                            
                                        
                                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-4">         
                                                <div className='justify-center items-center ml-4'>
                                                    <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem className="flex items-center">
                                                            <FormLabel className="body-medium">Email:</FormLabel>
                                                            <FormControl>
                                                                <Input type="email" placeholder="" className="shad-input ml-4 w-56" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                    />

                                                    <FormField
                                                    control={form.control}
                                                    name="password"
                                                    render={({ field }) => (
                                                        <FormItem className="flex items-center">
                                                            <FormLabel className="body-medium">Password:</FormLabel>
                                                            <FormControl>
                                                                <Input type="password" placeholder="" className="shad-input ml-4 w-56" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                    />
                                                    
                                                </div>
                                                
                                                
                                                <Button type="submit" className="shad-button_primary mt-4 w-40 place-self-center">
                                                    <div>Sign In</div>
                                                </Button>

                                                <p className="text-small-regular text-dark-2 text-center mt-3">Don't have an account?
                                                <Link to = "/sign-up" className="text-highlight-purple text-small-semibold ml-1">Sign-up</Link>
                                                </p>

                                                <p className="text-small-regular text-dark-2 text-center mt-3">
                                                <Link to = "/adminSign-in" className="text-highlight-purple text-small-semibold ml-1">Admin</Link>
                                                </p>
                                                
                                            </form>
                                            </div>
                                        </Form>
                            </DialogContent>
                        </Dialog>
                        <div className=' flex bg-gray-700 mx-5 w-28 rounded-full items-center justify-center'>
                            <Button className='bg-white text-black w-36 rounded-full mx-1  hover:bg-gray-700 hover:text-white '> <Link to = "/sign-up">Get Started</Link> </Button>
                        </div>
                    </div>
              
              
                </div>
            </div>
            <div id="pricing" className=' mt-20'>
            <div className='justify-center items-center flex'>
                <h3 className='font-eoboto font-semibold text-4xl text-text-purple '>Pricing Information</h3>
            </div>
            <div className='flex flex-row mt-10  '>
                <div className='py-10  w-96'>
                    <Row gutter={32}>
                        <Col span={12}>
                            <Card title="BSc" bordered={true} className=' ml-[540px] items-center justify-center border-2 border-border-purple w-60'>
                                <div>
                                    <p  className='text-text-purple font-poppins text-xl text-left px-4'>Paper Review</p>
                                    <p  className='text-text-purple font-poppins text-xl text-left px-4'>Paper Review</p>
                                    <p  className='text-text-purple font-poppins text-xl text-left px-4'>Paper Review</p>
                                    <p  className='text-text-purple font-poppins text-xl text-left px-4'>Paper Review</p>
                                    <p  className='text-text-purple font-poppins text-xl text-left px-4'>Paper Review</p>
                                </div>
                                <p className='text-title-purple font-roboto text-center text-xl'>#20,000</p>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="PhD" bordered={true} className='  ml-[600px] border-2 border-border-purple w-60'>
                                <div>
                                    <p  className='text-text-purple font-poppins text-xl text-left px-4'>Paper Review</p>
                                    <p  className='text-text-purple font-poppins text-xl text-left px-4'>Paper Review</p>
                                    <p  className='text-text-purple font-poppins text-xl text-left px-4'>Paper Review</p>
                                    <p  className='text-text-purple font-poppins text-xl text-left px-4'>Paper Review</p>
                                    <p  className='text-text-purple font-poppins text-xl text-left px-4'>Paper Review</p>
                                </div>
                                <p className='text-title-purple font-roboto text-center text-xl'>#60,000</p>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </div>
        </div>
        <div id="about" className='mt-20'>
            <div className='justify-center items-center flex'>
                <h3 className='font-eoboto font-semibold text-4xl text-text-purple '>About</h3>
            </div>
            <div className='mt-10 justify-center items-center flex'>
                <p className=' w-[900px] font-poppins text-xl text-center'>Babcock University Health Research Ethics Committee (BUHREC) is a platform dedicated to enhancing and upholding the quality of researches that originate from Babcock University. The main objective of BUHREC is to ensure that these researches meet the highest standards, thereby leading Babcock University to excellence and giving it visibility worldwide. This is achieved by adopting system thinking, which involves working cooperatively1. The platform handles various categories of researches including BSc, MSc, M.Phil, PhD, Pg. Diploma, and independent researches. It provides guidelines and standard operating procedures (SOPs) for ethical clearance, and requires all students to submit their research proposals and requests for ethical clearance, preferably during the first semester. Supervisors are also expected to ensure that students obtain ethical clearance certificates before being allowed to do their pre-field presentation1.</p>
            </div>
        </div>
        <div className='mt-20 h-10 bg-gray-600 items-center justify-center'>
            <p className='font-poppins text-center text-white pt-3'>Made By Group 27</p>
        </div>
        </section>
    </main>
  )
}

export default Home
