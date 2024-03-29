import { OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {dark} from "@clerk/themes"

const Topbar = () => {
   
  return (
    <nav className='topbar max-h-[60px] xs:max-h-[80px]'>
       <Link href="/" className='flex items-center gap-4 w-[120px] h-[55px] xs:h-[70px] relative'>
        <Image src="/tejaslogo.png" alt="" fill priority className='object-contain'/>
        {/* <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threads</p> */}

       </Link>

       <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
              <SignedIn>
                 <SignOutButton>
                  <div className='flex cursor-pointer'>
                   <Image src="/logout.svg" width={24} height={24} alt=""/>
                  </div>
                 </SignOutButton>
              </SignedIn>
             
        </div>
        <OrganizationSwitcher
        appearance={
          {
            baseTheme:dark,
            elements:{
              organizationSwitcherTrigger:"py-2 px-4"
            }
          }
        }
        
        />
       </div>
      </nav>
  )
}

export default Topbar