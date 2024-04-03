import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link} from "react-router-dom"
import { Button } from '@/components/ui/button'
import { SignupValidationSchema, SigninValidationSchema } from "@/lib/validation"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { loginUser, checkEmail, storeCredentials, getCurrentUser } from "./storeCredentials";




const SignupForm = () => {
  
  // const isLoading = false;
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const navigate = useNavigate();
  const {toast} = useToast();

  const form = useForm<z.infer<typeof SignupValidationSchema>>({
    resolver: zodResolver(SignupValidationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      sex: "",
      address: "",
      city: "",
      state: "",
      prefix: "",
      suffix: "",
      preferrdRole: "",
      studyLevel: "",
      program: "",
      discipline: "",
      password: "",
      confirmPassword: ""
    },
  })
  

  async function onLogin(values: z.infer<typeof SigninValidationSchema>) {
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
            navigate('/StudentOverview');
        }else{
            navigate('/ReviewerOverview');
        }
    }else{
        toast({
            variant: "mydeafult",
            title: "`Login Failed`",
            description: "Incorrect Username or Password",
          })
    }
}


  
  async function onSubmit(values: z.infer<typeof SignupValidationSchema>) {
    if(checkEmail(values.email)){
      toast({
        variant: "mydeafult",
        title: "Account Creation Failed",
        description: "Account with email already exoists",
      })
    }else{
      if(values.password != values.confirmPassword){
        toast({
          variant: "mydeafult",
          title: "Account Creation Failed",
          description: "Re-type your pasword",
        })
      }else{
          let isSuccessfull;
          
          if (values.preferrdRole == 'Researcher'){
            isSuccessfull = storeCredentials({ 
            
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email, 
              password: values.password, 
              userType: 'Researcher', 
              userPrefix: values.prefix, 
              userSuffix : values.suffix ,
              
            });
      
          }else{
            isSuccessfull = storeCredentials({ 
            
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email, 
              password: values.password, 
              userType: 'Reviewer', 
              userPrefix: values.prefix, 
              userSuffix : values.suffix ,
              
            });
          }
      
          if(isSuccessfull){
            toast({
              variant: "mydeafult",
              title: "Account Creation Successfull",
              description: "Please Login",
            })
            setIsAccountCreated(isSuccessfull);
          }else{
            toast({
              variant: "mydeafult",
              title: "`Account Creation Failed`",
              description: "Retry",
            })
          }
      }

    }
}


  return (
    
  <div className="  py-6">
    <div className=" flex justify-start items-start -ml-8 -mt-5">
    <Link to = "/" className="flex">
      <img
      src="./assets/backIcon.png"
      /><h2 className="font-roboto font-semibold text-text-purple text-3xl mt-4 ml-3">Create a new account</h2></Link>
      
    </div>
    
      <div className="flex mt-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex-row">         
              <div className="grid grid-cols-2 gap-4">
                <div className="border-4 border-border-purple rounded-lg p-4 w-[585px] h-[615px]">
                <h2> <strong className="font-poppins text-xl">Bio Data</strong> </h2>
                  <div className="ml-5 mt-3">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="flex items-center">
                          <FormLabel className="body-medium font-poppins ">Firstname:</FormLabel>
                          <FormControl>
                            <Input type="text" placeholder="" className="shad-input ml-4 w-72" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="flex items-center">
                          <FormLabel className="body-medium font-poppins">Lastname:</FormLabel>
                          <FormControl>
                            <Input type="text" placeholder="" className="shad-input ml-4 w-72" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex items-center">
                          <FormLabel className="body-medium font-poppins">Email:</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="" className="shad-input ml-4 w-72" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (

                          <FormItem className="flex items-center">
                          <FormLabel className="body-medium font-poppins">Phone:</FormLabel>
                          <FormControl>
                            <Input type="text" placeholder="" className="shad-input ml-4 w-56" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>

                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="sex"
                        render={({ field }) => (

                          <FormItem className="flex items-center mx-4"> 
                          <FormLabel className="body-medium font-poppins">Sex:</FormLabel>
                          <FormControl>
                          <div className=" w-24 ml-4">
                            <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="w-full shad-select bg-white border-2">
                                  <SelectValue placeholder="Sex" />
                                </SelectTrigger>
                                  <SelectContent className="bg-white">
                                    <SelectItem value="male" className="hover:bg-gray-200">Male</SelectItem>
                                    <SelectItem value="female" className="hover:bg-gray-Researcher">Female</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem className="flex items-center">
                        <FormLabel className="body-medium font-poppins">Address:</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="" className="shad-input ml-4 w-72" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      )}
                    />
                    <div className="flex">
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem className="flex items-center">
                          <FormLabel className="body-medium font-poppins">State:</FormLabel>
                          <FormControl>
                            <Input type="text" placeholder="" className="shad-input ml-4 w-44" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem className="flex items-center ml-5">
                          <FormLabel className="body-medium font-poppins">City:</FormLabel>
                          <FormControl>
                            <Input type="text" placeholder="" className="shad-input ml-4 w-44" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                        )}
                      />
                    </div>
                  </div>
                    <div className="mt-4">
                      <h2> <strong className="font-poppins text-xl">Password</strong> </h2>
                      <div className="ml-5">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem className="flex items-center">
                                <FormLabel className="body-medium font-poppins">Password:</FormLabel>
                                <FormControl>
                                  <Input type="password" placeholder="" className="shad-input ml-4 w-72" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                              <FormItem className="flex items-center">
                                <FormLabel className="body-medium font-poppins">Confirm Password:</FormLabel>
                                <FormControl>
                                  <Input type="password" placeholder="" className="shad-input ml-4 w-72" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                      </div>
                    </div>
                </div>
                <div className=" border-4 border-border-purple rounded-lg p-4 w-[585px] mx-4">
                <h2> <strong className="font-poppins text-xl">Academic Information</strong> </h2>
                <div className="ml-4 mt-3">
                  <div className="flex">
                    <FormField
                        control={form.control}
                        name="prefix"
                        render={({ field }) => (
                          <FormItem className="flex items-center">
                            <FormLabel className="body-medium font-poppins">Prefix:</FormLabel>
                            <FormControl>
                              <Input type="text" placeholder="" className="shad-input ml-4 w-40" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="suffix"
                        render={({ field }) => (
                          <FormItem className="flex items-center ml-4">
                            <FormLabel className="body-medium font-poppins">Suffix:</FormLabel>
                            <FormControl>
                              <Input type="text" placeholder="" className="shad-input ml-4 w-40" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                  </div>

                  <FormField
                    control={form.control}
                    name="preferrdRole"
                    render={({ field }) => (
                      <FormItem className="flex items-center">
                        <FormLabel className="body-medium font-poppins">Preferred Role:</FormLabel>
                        <FormControl>
                          <div className=" w-48 ml-4">
                            <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="w-full shad-select bg-white border-2">
                                  <SelectValue placeholder="Select Your Role" />
                                </SelectTrigger>
                                  <SelectContent className="bg-white">
                                    <SelectItem value="Reviewer" className="hover:bg-gray-200">Reviewer</SelectItem>
                                    <SelectItem value="Researcher" className="hover:bg-gray-Researcher">Researcher</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="studyLevel"
                    render={({ field }) => (
                      <FormItem className="flex items-center">
                        <FormLabel className="body-medium font-poppins">Study Level:</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="" className="shad-input ml-4 w-72" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="program"
                    render={({ field }) => (
                      <FormItem className="flex items-center">
                        <FormLabel className="body-medium font-poppins">Program:</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="" className="shad-input ml-4 w-72" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="discipline"
                    render={({ field }) => (
                      <FormItem className="flex items-center">
                        <FormLabel className="body-medium font-poppins">Discipline:</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="" className="shad-input ml-4 w-72" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  </div>
                </div>
              </div>
              <div className=" justify-center items-center flex">
                <Dialog>
                  <DialogTrigger>
                    <Button type="submit" className="shad-button_primary mt-4 w-40 place-self-center">
                    <div>Sign Up</div>
                </Button>
                </DialogTrigger>
                <DialogContent className="bg-white justify-center items-center w-96">
                {isAccountCreated? (
                  <div className="flex flex-col justify-center items-center py-5">
                    <div className="">
                      <h2 className="font-poppins text-highlight-purple font-semibold text-xl">All Done!</h2>
                    </div>
                      <img
                      src="/assets/completePNG.png"
                      className="mt-3"/>
                      <div className="flex flex-center pt-5">
                        <p className="font-poppins text-xl">Proceed to</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="shad-button_primary w-32  ml-5">Login</Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px] bg-white  h-[350px] justify-center items-center">
                            <Form {...form}>
                              <div className="">
                                <div className=''>
                                  <h2 className="font-poppins text-2xl text-center">Login to <span className='text-text-purple'>BUHREC</span> </h2>
                                </div>
                                <form onSubmit={form.handleSubmit(onLogin)} className="flex flex-col mt-4">         
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
                                    <Button type="submit" className="shad-button_primary mt-4 w-40 place-self-center">Sign In</Button>
                                  </form>
                                </div>
                              </Form>
                            </DialogContent>
                          </Dialog>
                    </div>                  
                  </div>                     
                ):(
                      <div className="flex flex-col justify-center items-center">
                        <div className="">
                          <h2 className="font-poppins text-red-400 font-semibold text-xl">Hold Up!</h2>
                        </div>
                          <img
                          src="/assets/failedPNG.png"
                          className="mt-3"/>
                          <div className="flex flex-center">
                            <p className="font-poppins text-xl">Something wen't wrong</p>
                            <DialogClose asChild >
                              <Button className=" text-highlight-purple font-poppins text-xl  ">
                                Try Again
                              </Button>
                            </DialogClose>
                          </div>
                      </div>                      
                )}  
                  </DialogContent>
                </Dialog>
              </div>
            </form>
        </Form>
      </div>
  
    </div>
    
    
  )
              
}

export default SignupForm