import { PricingTable } from '@clerk/clerk-react'
import React from 'react'

const Plans = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-30'>
        <div className='text-center'>
            <h2 className='text-slate-700 text-[42px] font-semibold'>Choose Your Plan</h2>
            <p className='text-slate-500 max-w-lg mx-auto '>Start For Free and Scale up as you grow . Find the perfect plan for your content creation need.</p>
        </div>
        <div className='mt-14 max-sm:mx-8'>
            <PricingTable/>
        </div>

      
    </div>
  )
}

export default Plans
