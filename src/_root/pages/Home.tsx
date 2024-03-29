import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'antd';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Toast } from 'primereact/toast';
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


const Home = () => {
    const form = useForm<z.infer<typeof SigninValidationSchema>>({
        resolver: zodResolver(SigninValidationSchema),
        defaultValues: {
          email: "",
          password: ""
        },
      })

    async function onSubmit(values: z.infer<typeof SigninValidationSchema>) {
        console.log(values)
    }

    const toast = useRef<Toast>(null);

    const showSuccess = () => {
        toast.current?.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
    }



  return (
    <main className='w-screen h-screen'>
        <div className='flex px-12 justify-between mt-8'>
            <div>
                <h2 className='text-purple-700 h3-semibold '>BUHREC</h2>
            </div>
            
            <div className='flex flex-row justify-center'>
            
                <div className='flex space-x-8'>
                    <Link to="#login" className="hover:text-purple-300 body-medium">Login</Link>
                    <Link to="#pricing" className="hover:text-purple-300 body-medium">Pricing</Link>
                    <Link to="#about" className="hover:text-purple-300 body-medium">About</Link>
                </div>
            </div>
            <a href="/support" className="hover:text-purple-300 body-medium">Support</a>
        </div>
        <div className='flex flex-row justify-center items-center'>
            <div className='flex flex-1 justify-center items-center flex-col'>
                <h2 className='h1-bold w-72'>Welcome to <span className='h1-bold text-purple-600'>BUHREC</span></h2>
                <p className=' w-72 '>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
                
                <div className=' flex mt-3 pc-3 bg-white'>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className='bg-purple-500 text-white w-28 hover:bg-purple-700' >Login</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-white">
                            
                                <Form {...form}>
                                    <div className="">
                                        <div className=''>
                                            <h2 className="h3-bold md:h2-bold text-purple-600">Login</h2>
                                            <p>Login to your account</p>
                                        </div>
                                        
                                    
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-4">         
                                            <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel>E-mail Address</FormLabel>
                                                <FormControl>
                                                    <Input type="email"  placeholder="" className="shad-input" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                            />

                                            <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem className='mt-4'>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" placeholder="" className="shad-input" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                            />
                                            <Toast ref={toast} />
                                            <Button type="submit" className="bg-purple-500 text-white hover:bg-purple-700 -y mt-4 w-40 place-self-center">
                                                <div>Sign In</div>
                                            </Button>

                                            <p className="text-small-regular text-dark-2 text-center mt-3">Don't have an account?
                                            <Link to = "/sign-up" className="text-primary-500 text-small-semibold ml-1">Sign-up</Link>
                                            </p>

                                            <p className="text-small-regular text-dark-2 text-center mt-3">
                                            <Link to = "/adminSign-in" className="text-primary-500 text-small-semibold ml-1">Admin</Link>
                                            </p>
                                            
                                        </form>
                                        </div>
                                    </Form>
                        </DialogContent>
                    </Dialog>
                    <div className=' flex bg-gray-700 mx-5 w-28 rounded-full items-center justify-center'>
                        <Button className='bg-white text-black w-25 mx-5 rounded-full hover:bg-gray-700 hover:text-white '>Get Started</Button>
                    </div>
                </div>
            </div>
            <img
            src="/assets/Frame 2.png"
            alt="logo"
            className="sideImage hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />

        </div>
        <section id="login">
            
        </section>
        <section id="pricing" className='mt-10'>
            <div className='justify-center items-center flex'>
                <h3 className='h2-bold text-purple-600 '>Pricing</h3>
            </div>
            <div className='flex flex-row mt-10 items-center justify-center '>
                <div className='py-10'>
                    <Row gutter={32}>
                        <Col span={12}>
                            <Card title="BSc" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="Msc" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
        <section id="about" className='mt-10'>
            <div className='justify-center items-center flex'>
                <h3 className='h2-bold text-purple-600 '>About</h3>
            </div>
            <div className='mt-10 justify-center items-center'>
                <p>Here is the about section</p>
                                                
            </div>
        </section>
    </main>
  )
}

export default Home
