import {Link, router, usePage} from '@inertiajs/react';
import Logo from '@/Components/SvgIcons/Logo';
import React from "react";

export default function SideNav({toggleSideNav, useToggleSideNav}) {

    const admin = usePage().props.admin
    const mainLogo = usePage().props?.setting_data?.logo ?? null

    const handleLogout = () => {
        router.delete(route('admin.logout'));
    }

    return (
        <div className='flex justify-between flex-col w-full p-4 lg:p-5 min-h-full gap-10'>
            <div className='h-full'>
                <div className="flex justify-between items-center p-[10px] mb-5 lg:mb-[30px]">

                    {mainLogo ? (<img className='w-[180px] h-auto' src={mainLogo} alt='Logo'/>) : (<Logo/>)}

                </div>

                <div className='mb-5'>
                    <Link href={route('admin.index')}
                          className={`${route().current('admin.index') && 'bg-card-and-hover'} flex items-center gap-[10px] rounded px-3 py-2 mb-0.5 text-sm text-text-primary font-medium hover:bg-card-and-hover`}>
                        Users
                    </Link>
                    <Link href={route('admin.tasks.index')}
                          className={`${route().current('admin.tasks.index') && 'bg-card-and-hover'} flex items-center gap-[10px] rounded px-2.5 py-2 mb-0.5 text-sm text-text-primary font-medium hover:bg-card-and-hover`}>
                        Task
                    </Link>
                    <Link href={route('admin.setting.index')}
                          className={`${route().current('admin.setting.index') && 'bg-card-and-hover'} flex items-center gap-[10px] rounded px-2.5 py-2 mb-0.5 text-sm text-text-primary font-medium hover:bg-card-and-hover`}>
                        Setting
                    </Link>

                </div>

            </div>
            <div className="relative">
                <div className="absolute bottom-0 w-full">
                    <div className='flex justify-between'>
                        <div className="flex gap-x-2 items-center">
                            <img src={"/" + admin?.avatar} className="w-9 h-9 rounded" alt="admin-avatar"/>
                            <p>{admin?.name}</p>
                        </div>
                        <button type="button" onClick={handleLogout}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.016 7.38948V6.45648C15.016 4.42148 13.366 2.77148 11.331 2.77148H6.456C4.422 2.77148 2.772 4.42148 2.772 6.45648V17.5865C2.772 19.6215 4.422 21.2715 6.456 21.2715H11.341C13.37 21.2715 15.016 19.6265 15.016 17.5975V16.6545"
                                    stroke="#556575" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21.8095 12.0215H9.76849" stroke="#556575" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M18.8812 9.1062L21.8092 12.0212L18.8812 14.9372" stroke="#556575"
                                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}
