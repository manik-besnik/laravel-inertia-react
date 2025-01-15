import React from 'react'
import Logo from '@/Components/SvgIcons/Logo'
import {Link, usePage} from "@inertiajs/react"

export const Navbar = () => {

    const {auth, setting_data} = usePage().props;
    const mainLogo = setting_data?.logo ?? null


    return (
        <div className="absolute w-full">
            <div className='flex justify-between items-center w-full max-w-[1240px] mx-auto px-4 py-5 md:py-[30px]'>
                <Link href='/'> {mainLogo ? (<img className='w-[180px] h-auto' src={mainLogo} alt='Logo'/>) : (
                    <Logo/>)} </Link>
                {auth.user ?
                    <div className="flex items-center gap-3 lg:gap-5">
                        <Link href={route('task.index')} className='landing-primary-btn'>Dashboard</Link>
                    </div> : <div className="flex items-center gap-3 lg:gap-5">
                        <Link href={route('login')} className='landing-primary-btn'>Sign In</Link>
                        <Link href={route('register')} className='landing-secondary-btn'>Sign Up for Free</Link>
                    </div>}
            </div>
        </div>
    )
}
