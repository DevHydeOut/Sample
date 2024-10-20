import React from 'react'
import styles from "@/components/styles.module.css"
import Image from 'next/image'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Separator } from './ui/separator'
  

export default function Header () {
  return (
    <div className={styles.outer}>
        <div className="w-full flex justify-between px-6 py-4">
            <div className={styles.second}>
                <h3 className="text-xl font-[500]">     
                    Welcome Vimal Bhatt -
                    <span className="text-[16px]"> Dasmesh Mechanical Works</span>
                </h3>
            </div>
            <div className={styles.third}>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Image src="/progress.png" alt='' width={25} height={25} className='shadow-2xl outline-none              border-none'/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-[200px] mr-[4rem] boxShadow rounded-[20px] p-1 bg-[#E0E1DB]'>
                        <div className="h-[100%] p-2 rounded-[20px] innerShadow">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem><a href="" className=''>Profile</a></DropdownMenuItem>
                            <Separator className="w-[100%] bg-[#B7BCB8]"/>
                            <DropdownMenuItem><a href="" className='mt-3'>Billing</a></DropdownMenuItem>
                            <Separator className="w-[100%] bg-[#B7BCB8]"/>
                            <DropdownMenuItem><a href="" className='mt-3'>Team</a></DropdownMenuItem>
                            <Separator className="w-[100%] bg-[#B7BCB8]"/>
                            <DropdownMenuItem><a href="" className='mt-3'>Subscription</a></DropdownMenuItem>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    </div>
  )
}
