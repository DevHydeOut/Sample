import { CopyrightIcon } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div className='mt-4 flex justify-between bg-[#B7BCB8]'>
      <h6 className="flex p-4 font-[600]">Copyright 
        <CopyrightIcon className='mx-1' /> 
        2024 - 
        <a href="/" className="">Vimal Bhatt</a></h6>
      <a className="p-4 font-[600]" href='/'>Support</a>
    </div>
  )
}
 