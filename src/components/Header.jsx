import React from 'react'

export  function Header() {
  return (
    <>
        <div className='flex justify-between gap-[88px] bg-primary px-[16px] py-[12px] items-center w-full '>

            {/* name */}
            <p className=' text-brand-color text-[24px] font-[600]'>MovieDB</p>

            

            {/* Sign in + create account */}
            <div className='flex items-center gap-[16px]  '>

                {/* Sign in */}
                <p className='text-[#FFFFFF] text-[16px] font-[600]'>Sign In</p>

                {/* Create an account */}
                <div className='text-primary text-[16px] font-[600] leading-[100%] rounded-[4px] bg-brand-color px-[16px] py-[12px]' >
                    Create an account for free</div>

            </div>

        </div>
    </>
  )
}
