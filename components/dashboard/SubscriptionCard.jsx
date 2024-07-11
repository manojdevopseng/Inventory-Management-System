import Link from 'next/link'
import React from 'react'

export default function SubscriptionCard() {
    return (
        <div className="px-1 py-10 mt-[212px]">
            <div className='rounded-lg p-2 mt-6 bg-slate-900'>
                <div className="border-b border-slate-500 pb-2">
                    <p className='text-sm border-l-2 border-orange-400 pl-2'>Your Premium plan's trial expires in {" "} <span className='text-orange-500'>13 days</span> .</p>
                </div>
                <div className="flex space-x-2 text-sm">
                    <button className='pr-2 border-r border-slate-600'>Change Plan</button>
                    <Link href={'/upgrade'}>
                    Upgrade
                    </Link>
                </div>
            </div>
        </div>
    )
}
