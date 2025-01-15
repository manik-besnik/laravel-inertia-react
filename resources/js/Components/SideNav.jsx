import {Link, usePage} from '@inertiajs/react';
import Logo from '@/Components/SvgIcons/Logo';
import CloseIcon from '@/Components/SvgIcons/Close';
import SideNavLinks from '@/Components/SideNavLinks';
import SidebarUpgrade from '@/Components/SvgIcons/SidebarUpgrade';
import React from "react";

export default function SideNav({toggleSideNav, useToggleSideNav}) {
    const mainLogo = usePage().props?.setting_data?.logo ?? null
    const bannerLink = usePage().props?.setting_data?.sidebar_banner_link ? usePage().props?.setting_data?.sidebar_banner_link : route('pricing')

    return (
        <div className='flex justify-between flex-col w-full p-4 lg:p-5 min-h-full gap-10'>
            <div className='h-full'>
                <div className="flex justify-between items-center p-[10px] mb-5 lg:mb-[30px]">
                    <Link href={route('task.index')}>

                        {mainLogo ? (<img className='w-[180px] h-auto' src={mainLogo} alt='Logo'/>) : (<Logo/>)}
                    </Link>
                    {toggleSideNav}

                    <span onClick={() => useToggleSideNav(false)} className='lg:hidden'>
                        <CloseIcon/>
                    </span>
                </div>

                <div className='mb-5 lg:hidden'>
                    <Link href={route('task.index')}
                          className={`${route().current('task.index') && 'bg-card-and-hover'} flex items-center gap-[10px] rounded px-2.5 py-2 text-sm text-text-primary font-medium hover:bg-card-and-hover`}>
                        All Task
                    </Link>
                    <Link href={route('task.my-task')}
                          className={`${route().current('task.my-task') && 'bg-card-and-hover'} flex items-center gap-[10px] rounded px-2.5 py-2 text-sm text-text-primary font-medium hover:bg-card-and-hover`}>
                        My Task
                    </Link>
                    <Link
                        className='flex items-center gap-[10px] rounded px-2.5 py-2 text-sm text-text-primary font-medium hover:bg-card-and-hover'>
                        Daily Reward
                    </Link>
                </div>

                <div>
                    <h4 className='app-subtitle mb-5 ml-[10px]'>Create Task</h4>

                    <SideNavLinks/>

                </div>
            </div>

            <a target='_blank' href={bannerLink} className='cursor-pointer relative'>
                <SidebarUpgrade/>
            </a>
        </div>
    );
}
