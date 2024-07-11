"use client"
import { CreditCard, X } from 'lucide-react'
import React, { useState } from 'react'

export default function DashboardBanner() {
    const [hidden,setHidden]=useState(false)
    return (
        <div className={`${hidden?"hidden":'grid grid-cols-12 items-center py-6 px-16 gap-3 bg-white relative'}`}>
            {/* Icon */}
            <div className="col-span-2">
                <CreditCard className='w-16 h-16 text-slate-900' />
            </div>
            {/* Text */}
            <div className="col-span-6">
                <h2 className='text-xl font-bold'>Start Accepting Online Ppayments </h2>
                <p>Businesses are moving towards online payments as they're easy, secure and fast. Try them for your business today.</p>
            </div>
            {/* Button */}
            <div className="col-span-3">
                <button className='py-2.5 
             px-8 uppercase bg-blue-500 text-sm hover:bg-blue-600 text-white rounded-lg'>Enable</button>
            </div>
            {/* Close Button */}
            <button onClick={()=>setHidden(true)} className='absolute top-4 right-20'>
                <X className='text-md text-slate-600' />
            </button>

        </div>
    )
}
