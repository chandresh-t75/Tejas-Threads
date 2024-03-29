
import { formatDateString } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import DeleteThread from '../forms/DeleteThread';

import Share from './Share';



interface Props{
    id:string,
    currentUserId:string,
    parentId:string|null,
    content:string,
    author:{
        name:string,
        image:string,
        id:string,
    }
    community:{
        id:string;
        name:string;
        image:string;
    }|null,
    createdAt:string;
    comments:{
        author:{
            image:string;
        }
    }[],
    
    
    isComment?:boolean;

}

const ThreadCard =async (
    {
        id,
        currentUserId,
        parentId,
        content,
        author,
        community,
        createdAt,
        comments,
       
        isComment
    }:Props) => {
   
      
      

  return (
    

    <article className={`flex w-full flex-col rounded-xl ${isComment ? 'px-0 xs:px-7 ':'bg-dark-2 p-7 '} `} >
        <div className='flex items-start justify-between'>
            <div className='flex w-full flex-1 flex-row gap-4'>
                <div className='flex flex-col items-center'>
                    <Link href={`/profile/${author.id}`} className='relative h-11 w-11'>
                        <Image src={author.image} alt="" fill className='cursor-pointer rounded-full'/>
                    </Link>
                    <div className='thread-card_bar'/>


                </div>
                <div className='flex w-full flex-col'>
                    <Link href={`/profile/${author.id}`} className='w-fit'>
                         <h4 className='cursor-pointer text-base-semibold text-light-1'>{author.name}</h4>
                    </Link>
                    <p className='mt-2 text-small-regular text-light-2'>{content}</p>
                    <div className={`${isComment && 'mb-10'} mt-5 flex flex-col gap-3`}>

                        <div className='flex gap-3.5 items-center'>
                            <Image  src='/heart-gray.svg'alt="" width={24} height={24} className='cursor-pointer object-contain' />
                            <Link href={`/thread/${id}`}>
                            <Image src="/reply.svg" alt="" width={24} height={24} className='cursor-pointer object-contain'/>
                            </Link>
                            
                            <Image src="/repost.svg" alt="" width={24} height={24} className='cursor-pointer object-contain'/>
                            <Share id={id} author={author.name} content={content}/>

                        </div>
                       

                        {
                            isComment && comments.length>0 && (
                                <Link href={`/thread/${id}`}>
                                    <p className='mt-1 text-subtle-medium text-gray-1' >{comments.length} repl{comments.length > 1 ? "ies" : "y"}</p>
                                </Link>
                            )
                        }


                    </div>
                </div>

            </div>
            <DeleteThread
          threadId={JSON.stringify(id)}
          currentUserId={currentUserId}
          authorId={author.id}
          parentId={parentId}
          isComment={isComment}
        />

        </div>
        {!isComment && comments.length > 0 && (
        <div className='ml-1 mt-3 flex items-center gap-2'>
          {comments.slice(0, 3).map((comment, index) => (
          
            <Image
              key={index}
              src={comment.author.image}
              alt={`user_${index}`}
              width={24}
              height={24}
              className={`${index !== 0 && "-ml-5"} rounded-full object-cover`}
            />
          ))}
          <Link href={`/thread/${id}`}>
            <p className='mt-1 text-subtle-medium text-gray-1'>
              {comments.length} repl{comments.length > 1 ? "ies" : "y"}
            </p>
          </Link>
        </div>
      )}

      <div className='flex flex-col xs:flex-row gap-2 mt-5 xs:mt-0 xs:items-center'>
    {
      !isComment && (
        <p className='xs:mt-5 text-subtle-medium text-gray-1'>
            {formatDateString(createdAt)}
           
          </p>
      )
    }

{!isComment && community && (
        <Link
          href={`/communities/${community.id}`}
          className='xs:mt-5 flex items-center'
        >
          <p className='text-subtle-medium text-gray-1'>
            
            {community && `${community.name} Community`}
          </p>
          <div className='w-[14px] h-[14px] relative'>
          <Image
            src={community.image}
            alt={community.name}
            fill priority
            className='ml-1 rounded-full object-cover'
          />

          </div>
         
        </Link>
      )}

   </div>

        
    </article>
  )
}

export default ThreadCard