import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { z } from "zod"
  import { zodResolver } from "@hookform/resolvers/zod"
  import { useForm } from "react-hook-form"
  import { ChangeAccountInformtionSchema } from "@/lib/validation"
  import { Input } from "@/components/ui/input"
  import { Button } from '@/components/ui/button'
  import { Divider } from '@chakra-ui/react'
  import { Box } from '@chakra-ui/react'
  import { AbsoluteCenter } from '@chakra-ui/react'
  import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const AccountSettings = () => {
    const form = useForm<z.infer<typeof ChangeAccountInformtionSchema>>({
        resolver: zodResolver(ChangeAccountInformtionSchema),
        defaultValues: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          prefix: "",
          suffix: "",
          studyLevel: "",
          program: "",
          discipline: ""
        },
      })

    async function onSubmit(values: z.infer<typeof ChangeAccountInformtionSchema>) {
        console.log(values)
    }
  return (
    <div>
      <ScrollArea className='h-[600px]'>
        
        <Form {...form}>
        <div className="">
            <div className=''>
                <h2 className="font-poppins text-2xl text-center">Update Your Account </h2>
            </div>
              <Box position='relative' padding='4' className=' mt-4 bg-white'>
                <Divider borderWidth={4} />
                <AbsoluteCenter bg='white' px='4'>
                  <h2 className='font-roboto font-semibold text-xl'>Bio Data</h2>
                </AbsoluteCenter>
              </Box>
            
        
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-4">         
                <div className='justify-center items-center ml-4'>
                <div className='flex'>
                    <FormField
                      control={form.control}
                      name="prefix"
                      render={({ field }) => (
                          <FormItem className="flex items-center">
                              <FormLabel className="body-medium">Prefix:</FormLabel>
                              <FormControl>
                                  <Input type="text" placeholder="" className="shad-input ml-4 w-32" {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                      )}
                      />
                      <FormField
                      control={form.control}
                      name="suffix"
                      render={({ field }) => (
                          <FormItem className="flex items-center ml-5">
                              <FormLabel className="body-medium">Suffix:</FormLabel>
                              <FormControl>
                                  <Input type="text" placeholder="" className="shad-input ml-4 w-32" {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                      )}
                      />

                  </div>
                  <div className='flex'>
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                          <FormItem className="flex items-center">
                              <FormLabel className="body-medium">Firstname:</FormLabel>
                              <FormControl>
                                  <Input type="text" placeholder="" className="shad-input ml-4 w-56" {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                      )}
                      />

                      <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                          <FormItem className="flex items-center ml-5">
                              <FormLabel className="body-medium">Lastname:</FormLabel>
                              <FormControl>
                                  <Input type="text" placeholder="" className="shad-input ml-4 w-56" {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                      )}
                      />
                  </div>

                  <Box position='relative' padding='4' className=' mt-8 bg-white'>
                    <Divider borderWidth={4} />
                    <AbsoluteCenter bg='white' px='4'>
                      <h2 className='font-roboto font-semibold text-xl'>Contact Information</h2>
                    </AbsoluteCenter>
                  </Box>
                
                  <div className='mt-2 flex'>
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
                    name="phone"
                    render={({ field }) => (
                        <FormItem className="flex items-center ml-5">
                            <FormLabel className="body-medium">Phone:</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="" className="shad-input ml-4 w-56" {...field} />
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
                            <FormLabel className="body-medium">Address:</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="" className="shad-input ml-4 w-[550px]" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className='flex'>
                      <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                          <FormItem className="flex items-center">
                              <FormLabel className="body-medium">State:</FormLabel>
                              <FormControl>
                                  <Input type="text" placeholder="" className="shad-input ml-4 w-32" {...field} />
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
                              <FormLabel className="body-medium">City:</FormLabel>
                              <FormControl>
                                  <Input type="text" placeholder="" className="shad-input ml-4 w-32" {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                      )}
                      />

                    </div>                
                    <Box position='relative' padding='4' className=' mt-8 bg-white'>
                      <Divider borderWidth={4} />
                      <AbsoluteCenter bg='white' px='4'>
                        <h2 className='font-roboto font-semibold text-xl'>Academic Information</h2>
                      </AbsoluteCenter>
                    </Box>

                    <div className='flex mt-4'>

                      <FormField
                      control={form.control}
                      name="program"
                      render={({ field }) => (
                          <FormItem className="flex items-center">
                              <FormLabel className="body-medium">Program:</FormLabel>
                              <FormControl>
                                  <Input type="text" placeholder="" className="shad-input ml-4 w-56" {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                      )}
                      />
                      <FormField
                      control={form.control}
                      name="discipline"
                      render={({ field }) => (
                          <FormItem className="flex items-center ml-5">
                              <FormLabel className="body-medium">Discipline:</FormLabel>
                              <FormControl>
                                  <Input type="text" placeholder="" className="shad-input ml-4 w-56" {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                      )}
                      />

                    </div>
                    <FormField
                    control={form.control}
                    name="studyLevel"
                    render={({ field }) => (
                        <FormItem className="flex items-center">
                            <FormLabel className="body-medium">Study Level:</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="" className="shad-input ml-4 w-56" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />

                </div>
                
                
                
                <Button type="submit" className="shad-button_primary mt-4 w-40 place-self-center">
                    <div>Update Account</div>
                </Button>
            </form>
            </div>
        </Form>
    </ScrollArea>
        
    </div>
  )
}

export default AccountSettings