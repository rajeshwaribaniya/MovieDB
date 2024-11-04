import React from 'react'

export  function Header() {
  return (
    <>
        <div className='flex gap-[88px] bg-primary px-[16px] py-[12px] items-center'>

            {/* name */}
            <p className='text-brand-color text-[24px] font-[600]'>MovieDB</p>

            {/* Search */}
            <input 
            type="text" 
            placeholder='Search MovieDB'
            className=' flex flex-grow text-secondary text-[14px] leading-[100%] px-[16px] py-[12px] rounded-[4px] bg-[#FFFFFF]' />

            {/* Sign in + create account */}
            <div className='flex items-center gap-[16px] '>

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
