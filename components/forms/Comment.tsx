
"use client"
import { Form } from '@/components/ui/form';
import React, { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'

import { Button } from "@/components/ui/button"
import * as z from 'zod';
import {
  
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


import { Textarea } from '@/components/ui/textarea';

import { usePathname, useRouter } from 'next/navigation';
import { CommentValidation } from '@/lib/validations/thread';
import { addCommentToThread, createThread } from '@/lib/actions/thread.actions';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

interface Props{
    threadId:string,
    currentUserImg:string,
    currentUserId:string
}

const Comment = ({threadId,currentUserImg,currentUserId}:Props) => {

    const router=useRouter();
    const pathname=usePathname();
    const form=useForm<z.infer<typeof CommentValidation>>(
        {
            resolver:zodResolver(CommentValidation),
            defaultValues:{
               thread:"",
              
            }
        }
    )
 
    const onSubmit=async(values:z.infer<typeof CommentValidation>)=>{
          await addCommentToThread(
            threadId, 
            values.thread,
            JSON.parse(currentUserId),
            pathname
          )
          form.reset();
    }

  return (
    <Form {...form}>
    <form 
    onSubmit={form.handleSubmit(onSubmit)} 
    className="comment-form">
        <FormField
        control={form.control}
        name="thread"
        render={({ field }) => (
          <FormItem className='flex items-center gap-3 w-full'>
            <FormLabel>
               <Image src={currentUserImg} alt="" width={48} height={48} className='rounded-full object-cover'/>
            </FormLabel>
            <FormControl className='border-none bg-transparent'>
              <Input
              type="text"
              placeholder='Comment...'
        
              className='text-light-1 outline-none no-focus' 
              {...field}
            />
            </FormControl>
           
           
          </FormItem>
        )}
      />
      <Button type="submit" className='comment-form_btn'>Reply</Button>
        </form>
        </Form>
  )
}

export default Comment