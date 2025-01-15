import {useState} from 'react';
import {usePage} from '@inertiajs/react';
import SideNav from '@/Components/Admin/SideNav';

export default function Authenticated({header, children}) {
    const user = usePage().props.auth.user;


    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [toggleSideNav, useToggleSideNav] = useState(false)

    return (
        <div className='flex min-h-screen'>
            <div
                className={`bg-side-and-button max-w-[268px] min-w-[242px] relative lg:block border-r border-r-[#C7BDA8] transition-all duration-900 h-screen overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-slate-300 scrollbar-track-transparent`}>

                <SideNav
                    toggleSideNav={toggleSideNav}
                    useToggleSideNav={useToggleSideNav}
                ></SideNav>
            </div>

            <div
                className='w-full bg-main-and-focus h-screen overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-slate-300 scrollbar-track-transparent'>

                <div className='p-4 sm:p-6'>
                    <h1 className='text-[21px] leading-[25px] mb-6 font-semibold text-text-primary'>Dashboard</h1>
                    {children}
                </div>
            </div>
        </div>
    );
}
