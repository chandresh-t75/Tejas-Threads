"use client"

import Image from 'next/image'

import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, InstapaperIcon, InstapaperShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Props{
  id:string;
  author:string;
  content:string;
}


const Share = ({id,author,content}:Props) => {

 




  return (
    <div className='relative'>
      <Dialog >
        <DialogTrigger><Image src="/share.svg" alt="" width={24} height={24} className='relative cursor-pointer object-contain'/></DialogTrigger>
        <DialogContent className="bg-dark-2 rounded-lg p-4 px-2 xs:p-4 w-66 s:w-72 text-white  ">
        <DialogTitle>Share via...</DialogTitle>
            <div className="flex gap-4 mt-2">
            <FacebookShareButton url={`https://tejas-threads-cp.vercel.app/thread/${id}`} title={content} hashtag={author} className="text-blue-500">
              <FacebookIcon className='w-8 h-8 rounded-full' />
            </FacebookShareButton>
            <WhatsappShareButton url={`https://tejas-threads-cp.vercel.app/thread/${id}`} title={content} separator=" " className="text-blue-400">
              <WhatsappIcon className='w-8 h-8 rounded-full' />
            </WhatsappShareButton>
            <TelegramShareButton url={`https://tejas-threads-cp.vercel.app/thread/${id}`} title={content}  className="text-blue-400">
              <TelegramIcon className='w-8 h-8 rounded-full' />
            </TelegramShareButton>
            <LinkedinShareButton url={`https://tejas-threads-cp.vercel.app/thread/${id}`} title={author} summary={content} className="text-blue-400">
              <LinkedinIcon className='w-8 h-8 rounded-full' />
            </LinkedinShareButton>
            <EmailShareButton url={`https://tejas-threads-cp.vercel.app/thread/${id}`} subject={author} body={content} className="text-blue-400">
              <EmailIcon className='w-8 h-8 rounded-full' />
            </EmailShareButton>
            <TwitterShareButton url={`https://tejas-threads-cp.vercel.app/thread/${id}`} title={content}  className="text-blue-400">
              <TwitterIcon className='w-8 h-8 rounded-full' />
            </TwitterShareButton>
            {/* Add more share buttons as needed */}
          </div>
              
            
        </DialogContent>
      </Dialog>

      </div>

  )
}

export default Share