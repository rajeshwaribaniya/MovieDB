import React from 'react'

export  function Listing() {
  return (
    <>
    <div className='flex flex-col gap-[32px] p-[64px] w-screen'>

        <p 
        className='border-l-[8px] border-brand-color px-[12px] text-primary text-[48px] font-[600]'>
            Tiles
        </p>

        {/* all listings */}
        <div className='flex flex-col'>

            {/* first list */}
            <div className='flex gap-[12px] py-[12px] border-b border-primary'>

                {/* image part */}
                <img 
                src="https://www.hubspot.com/hubfs/Google%20Drive%20Integration/Untitled%20document-Aug-24-2023-08-02-14-0205-PM.jpeg"
                className='flex flex-shrink-0 w-[64px] rounded-[8px]' />

                {/* text part */}
                <div className='flex flex-col gap-[6px]'>
                    <p className='text-primary text-[16px] font-[600]'>Weird Science</p>
                    <p className='text-secondary text-[14px]'>1985</p>
                    <p className='text-secondary text-[14px]'>Anthony Michael Hall, Ilan Mitchell-Smith</p>
                </div>
            </div>


           


        </div>

    </div>
    </>
  )
}
