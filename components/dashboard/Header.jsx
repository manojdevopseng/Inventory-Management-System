import { Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users } from 'lucide-react'
import React from 'react'
import Search from '@/components/dashboard/Search'
import Image from 'next/image'

export default function Header() {
    return (
        <div className='bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200'>
            <div className='flex gap-3'>
                {/* Recent activities */}
                <button>
                    <History className='w-6 h-5' />
                </button>
                {/* Search */}
                <Search />
            </div>
            <div className="flex items-center gap-8">
                {/* Plus Icon */}
                <div className="pr-2 border-r border-gray-300">
                    <button className='p-1 bg-blue-600 rounded-md '>
                        <Plus className='text-slate-50 w-6 h-5' />
                    </button>
                </div>
                <div className="flex border-r border-gray-300 space-x-2">
                    <button className='p-1 hover:bg-slate-200 rounded-md '>
                        <Users className='text-slate-900 w-6 h-5' />
                    </button>
                    <button className='p-1 hover:bg-slate-200 rounded-md '>
                        <Bell className='text-slate-900 w-6 h-5' />
                    </button>
                    <button className='p-1 hover:bg-slate-200 rounded-md '>
                        <Settings className='text-slate-900 w-6 h-5' />
                    </button>
                </div>
                {/* Organization */}
                <div className="flex gap-8">
                    <button className='flex items-center justify-center'>
                        <span>Manoj</span>
                        <ChevronDown className='w-3 h-3' />
                    </button>
                    <button>
                        <Image
                        src={'/user.png'}
                        alt='user image' 
                        width={96} 
                        height={96}
                        className='w-8 h-8 rounded-full border border-slate-800'
                        />
                    </button>
                    <button>
                        <LayoutGrid className='w-6 h-6 text-slate-900' />
                    </button>
                </div>
                {/*  */}
            </div>
        </div>
    )
}
