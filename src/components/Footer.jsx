import React from 'react'

export  function Footer() {
  return (
    <>
     <div className='flex flex-col py-[48px] gap-[32px] items-center bg-primary'>

        {/* Sign in button */}
        <div
        className='text-primary font-[600] leading-[100%] rounded-full bg-brand-color px-[16px] py-[12px] '>
            Sign in for more access</div>

        <p className='text-tertiary text-[16px] leading-[100%]'>© 1990-2024 by MovieDB.com, Inc.</p>

     </div>
    </>
  )
}
