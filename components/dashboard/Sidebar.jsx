"use client"
import { BarChart4, Blocks, Book, BookText, ChevronLeft, ChevronRight, FolderClosed, House, Icon, icons, ShoppingBag, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
    const pathname = usePathname()
    console.log(pathname);
    const navLinks = [
        {
            title: "Home",
            href: "/dashboard/home",
            Icon: House
        },
        {
            title: "Inventory",
            href: "/dashboard/inventory",
            Icon: Book
        },
        {
            title: "Sales",
            href: "/dashboard/sales",
            Icon: ShoppingBag
        },
        {
            title: "Puchases",
            href: "/dashboard/purchases",
            Icon: ShoppingCart
        },
        {
            title: "Integrations",
            href: "/dashboard/integration",
            Icon: BookText
        },
        {
            title: "Reports",
            href: "/dashboard/reports",
            Icon: BarChart4
        },
        {
            title: "Documents",
            href: "/dashboard/docs",
            Icon: FolderClosed
        }

    ];
    return (
        <div className='w-60 min-h-screen bg-slate-800 text-slate-50 justify-between'>
            {/* Top Part */}

            <div className="flex flex-col">
                {/* Logo */}
                <Link href={'/'}>
                    <div className="bg-slate-900 flex space-x-2 items-center py-3 px-2 rounded-lg">
                        <Book className='' />
                        
                        <span className='font-semibold text-xl'>Inventory</span>
                    </div>
                </Link>
            </div>

            {/* Links Home */}
            <nav className='flex flex-col gap-3 px-3 py-6'>
                {
                    navLinks.map((link, index) => (
                        <Link 
                        href={link.href} 
                        key={index}
                        className={`flex items-center space-x-2 ${pathname === link.href? 'bg-blue-600' : 'text-slate-50'} p-2 rounded-md hover:bg-slate-900 hover:rounded-lg`}>
                             <link.Icon className='w-6 h-6' />
                            <span>{link.title}</span>
                        </Link>
                    ))
                }
                {/* <div>
                    <Link href={'/dashboard/home'} className='flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md hover:bg-slate-900 hover:rounded-lg' >
                        <House className='w-4 h-4' />
                        <span>Home</span>
                    </Link>
                    <Link href={'/dashboard/inventory'} className='flex items-center space-x-2 text-slate-50 py-2 px-2 rounded-md hover:bg-slate-900 hover:rounded-lg' >
                        <BookText className='w-4 h-4' />
                        <span>Inventory</span>
                        <ChevronRight className='w-10 h-4' />
                    </Link>
                    <Link href={'/dashboard/sales'} className='flex items-center space-x-2 text-slate-50 py-2 px-2 rounded-md hover:bg-slate-900 hover:rounded-lg mt-3'>
                        <ShoppingCart className='w-4 h-4' />
                        <span>Sales</span>
                        <ChevronRight className='w-16 h-4' />
                    </Link>
                    <Link href={'/dashboard/purchases'} className='flex items-center space-x-2 text-slate-50 py-2 px-2 rounded-md hover:bg-slate-900 hover:rounded-lg'>
                        <ShoppingBag className='w-4 h-4' />
                        <span>Puchases</span>
                        <ChevronRight className='w-10 h-4' />
                    </Link>
                    <Link href={'/dashboard/integrations'} className='flex items-center space-x-2 text-slate-50 py-2 px-2 rounded-md hover:bg-slate-900 hover:rounded-lg mt-3'>
                        <Blocks className='w-4 h-4 ' />
                        <span>Integrations</span>
                    </Link>
                    <Link href={'/dashboard/reports'} className='flex items-center space-x-2 text-slate-50 py-2 px-2 rounded-md hover:bg-slate-900 hover:rounded-lg mt-3'>
                        <BarChart4 className='w-4 h-4' />
                        <span>Reports</span>
                    </Link>
                    <Link href={'/dashboard/documents'} className='flex items-center space-x-2  text-slate-50 py-2 px-2 rounded-md hover:bg-slate-900 hover:rounded-lg mt-3'>
                        <FolderClosed className='w-4 h-4' />
                        <span>Documents</span>
                    </Link>
                </div> */}
            </nav>
            <SubscriptionCard />
            {/* Bottom Part */}

            {/* Subscription Card */}
            {/* Footer Icon */}
            <footer>
                <div className=" flex flex-col">
                    <button>
                        <div className="bg-slate-950 flex space-x-2 items-center py-2 px-2 justify-center text-center rounded-lg">
                            <ChevronLeft className='border border-slate-700 rounded-md' />
                        </div>
                    </button>
                </div>
            </footer>
        </div>
    )
}
