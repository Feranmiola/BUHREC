import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Divider } from '@chakra-ui/react'
  import { Box } from '@chakra-ui/react'
  import { AbsoluteCenter } from '@chakra-ui/react'
  import { z } from "zod"
  import { zodResolver } from "@hookform/resolvers/zod"
  import { useForm } from "react-hook-form"
  import { AddNewCard } from "@/lib/validation"
  import { Input } from "@/components/ui/input"
  import { Button } from '@/components/ui/button'
  import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"

const PaymentSettings = () => {
    const form = useForm<z.infer<typeof AddNewCard>>({
        resolver: zodResolver(AddNewCard),
        defaultValues: {
          digits: "",
          expiry: "",
          cvv: "",
          bankName: "",
          accountNumber: ""
        },
      })

async function onSubmit(values: z.infer<typeof AddNewCard>) {
        console.log(values)
    }
  return (
    <div>
        <div className='flex-row justify-center items-center'>
            <Box position='relative' padding='4' className=' mt-4 bg-white w-[600px]'>
                <Divider borderWidth={4} />
                <AbsoluteCenter bg='white' px='4'>
                  <h2 className='font-roboto font-semibold text-xl'>Saved Cards</h2>
                </AbsoluteCenter>
              </Box>

              <Dialog>
                <DialogTrigger asChild>
                    <p className="hover:text-navbar-hover-purple body-medium cursor-pointer text-center">Add New Card</p>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[455px] h-[320px] bg-white">
                    <Form {...form}>
                        <div className="">
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-4">         
                            <h2 className='font-poppins font-semibold text-center text-xl'>Add New Card Details</h2>
                                <div className='justify-center items-center ml-4'>
                                    <FormField
                                    control={form.control}
                                    name="digits"
                                    render={({ field }) => (
                                    <FormItem className="flex items-center">
                                        <FormLabel className="body-medium">Digits:</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="---- ---- ---- ---- ----" className="shad-input ml-4 w-40" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                    />
                                <div className='flex'>
                                    <FormField
                                    control={form.control}
                                    name="expiry"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center">
                                            <FormLabel className="body-medium">Exp:</FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder="--/--" className="shad-input ml-4 w-32" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                    control={form.control}
                                    name="cvv"
                                    render={({ field }) => (
                                    <FormItem className="flex items-center ml-5">
                                        <FormLabel className="body-medium">CVV:</FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder="---" className="shad-input ml-4 w-32" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                </div>
                            </div>
                                        
                        <Button type="submit" className="shad-button_primary mt-4  w-44 place-self-center">
                            <div>Add New Card</div>
                        </Button>
                    </form>
                </div>
            </Form>
        </DialogContent>
        </Dialog>              
        </div>
        <div className='flex-row justify-center items-center'>
            <Box position='relative' padding='4' className=' mt-4 bg-white w-[600px]'>
                <Divider borderWidth={4} />
                <AbsoluteCenter bg='white' px='4'>
                  <h2 className='font-roboto font-semibold text-xl'>Saved Account Numbers</h2>
                </AbsoluteCenter>
              </Box>

              <Dialog>
                <DialogTrigger asChild>
                    <p className="hover:text-navbar-hover-purple body-medium cursor-pointer text-center">Add New Bank Account</p>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] h-[300px] bg-white">
                    <Form {...form}>
                        <div className="">
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-4">         
                            <h2 className='font-poppins font-semibold text-center text-xl'>Add New Bank Details</h2>
                                <div className='justify-center items-center ml-4'>
                                    <FormField
                                    control={form.control}
                                    name="bankName"
                                    render={({ field }) => (
                                    <FormItem className="flex items-center">
                                        <FormLabel className="body-medium">Bank Name:</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="" className="shad-input ml-4 w-40" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                    />
                                    <FormField
                                    control={form.control}
                                    name="accountNumber"
                                    render={({ field }) => (
                                    <FormItem className="flex items-center">
                                        <FormLabel className="body-medium">Account Number:</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="" className="shad-input ml-4 w-40" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                    />
                                </div>
                                        
                        <Button type="submit" className="shad-button_primary mt-4 w-48 place-self-center">
                            <div>Add New Bank Account</div>
                        </Button>
                    </form>
                </div>
            </Form>
        </DialogContent>
        </Dialog>              
        </div>
        
        
    </div>
  )
}

export default PaymentSettings