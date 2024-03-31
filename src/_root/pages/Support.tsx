import React from 'react'
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
  
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
  import { MakeNewComplaintSchema } from "@/lib/validation"
  import { Textarea } from "@/components/ui/textarea"
  import { Link} from "react-router-dom"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { ScrollArea } from '@/components/ui/scroll-area'
   



const Support = () => {

  const navigare = useNavigate()
    const form = useForm<z.infer<typeof MakeNewComplaintSchema>>({
        resolver: zodResolver(MakeNewComplaintSchema),
        defaultValues: {
          email: "",
          phone: "",
          complain: ""
        },
      })

    async function onSubmit(values: z.infer<typeof MakeNewComplaintSchema>) {
        console.log(values)

        navigare('/ReviewerOverview');

    }
  return (
    <div className='h-screen w-screen'>
      <ScrollArea>
        <div className=' flex justify-start items-start'>
          <div className='mt-7 ml-7'>
          <Link to = "/" className="flex">
          <img
          src="./assets/backIcon.png"
          /><h2 className="font-roboto font-semibold text-text-purple text-3xl mt-4 ml-3">Reach out to us</h2></Link>
          </div>
        </div>
        <div className='mt-10'>
        <Form {...form}>
             <div className="">
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-4">         
                  <div className='justify-start items-start ml-10'>
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem className="flex items-center">
                      <FormLabel className="body-medium">Email:</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="" className="shad-input ml-4 w-72" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                      )}
                      />
                      <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                    <FormItem className="flex items-center mt-5">
                      <FormLabel className="body-medium">Phone:</FormLabel>
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
                    <FormItem className="flex items-center mt-5">
                      <FormLabel className="body-medium">Your Question:</FormLabel>
                      <FormControl>
                        <Textarea {...field} className='shad-input w-[500px] h-[600px]'/>
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                      )}
                      />
                  </div>
                      <Button type="submit" className="shad-button_primary mt-5 w-40 ml-60">
                        <div>Submit</div>
                      </Button>
                </form>
              </div>
            </Form>                           
        </div>
        <div className='flex flex-col justify-center items-center px-12 mt-8'>
          <div className='mt-5'>
            <h2 className='text-title-purple font-roboto text-2xl font-bold'>Our FAQ</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        </div>
      </ScrollArea>
    </div>
  )
}

export default Support