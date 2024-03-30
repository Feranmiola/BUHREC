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
  import { ChangePasswprdSchema } from "@/lib/validation"
  import { Input } from "@/components/ui/input"
  import { Button } from '@/components/ui/button'

const ManagePasswords = () => {
    const form = useForm<z.infer<typeof ChangePasswprdSchema>>({
        resolver: zodResolver(ChangePasswprdSchema),
        defaultValues: {
            oldpassword: "",
            nwqpassword: "",
            confirmnwqpassword: ""
        },
      })

    async function onSubmit(values: z.infer<typeof ChangePasswprdSchema>) {
        console.log(values)
    }
  return (
    <div>
    <Form {...form}>
    <div className="">
        <div className=''>
            <h2 className="font-poppins text-2xl text-center">Change Your Password </h2>
        </div>
        
    
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-4">         
            <div className='justify-center items-center ml-4'>
                <FormField
                control={form.control}
                name="oldpassword"
                render={({ field }) => (
                    <FormItem className="flex items-center">
                        <FormLabel className="body-medium">Old Password:</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="" className="shad-input ml-4 w-56" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="nwqpassword"
                render={({ field }) => (
                    <FormItem className="flex items-center">
                        <FormLabel className="body-medium">New Password:</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="" className="shad-input ml-4 w-56" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="confirmnwqpassword"
                render={({ field }) => (
                    <FormItem className="flex items-center">
                        <FormLabel className="body-medium">Confirm New Password:</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="" className="shad-input ml-4 w-56" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                
            </div>
            
            
            <Button type="submit" className="shad-button_primary mt-4 w-40 place-self-center">
                <div>Change Password</div>
            </Button>
        </form>
        </div>
    </Form>
        
    </div>
  )
}

export default ManagePasswords