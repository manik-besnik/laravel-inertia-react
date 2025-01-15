import React from 'react'
import Logo from '@/Components/SvgIcons/Logo'
import { Link } from '@inertiajs/react'
import InstagramIcon from '@/Components/SvgIcons/Instagram'
import TelegramIcon from '@/Components/SvgIcons/Telegram'
import PrivacyPolicy from "@/Components/LandingPage/PrivacyPolicy";
import PublicOffer from '@/Components/LandingPage/PublicOffer';

export default function Footer() {
    return (
        <div className='py-5 lg:py-[50px] bg-text-primary'>

            <div className='site-container'>
                <div className='flex justify-between gap-5 flex-col md:flex-row items-center flex-wrap'>
                    <Link href='/' className="min-w-[120px]">
                        <Logo light />
                    </Link>

                    <div className='flex items-center flex-wrap sm:flex-nowrap justify-center gap-4 lg:gap-5 whitespace-pre'>
                        <Link href='#guide-to-use' className='subtitle text-main-and-focus'>How It’s Work</Link>
                        <Link href='#platforms' className='subtitle text-main-and-focus'>Platforms</Link>
                        <Link href='#principles' className='subtitle text-main-and-focus'>Safety</Link>
                        <Link href='#faq' className='subtitle text-main-and-focus'>FAQs</Link>
                        <Link href='#testimonial' className='subtitle text-main-and-focus'>Reviews</Link>
                    </div>

                    <div className="flex items-center gap-4 lg:gap-5">
                        <a target='_blank' href='https://www.instagram.com/officialmaketop.me/' className='flex items-center gap-2.5 subtitle text-main-and-focus'>
                            Follow
                            <InstagramIcon className="h-5 md:h-9 w-5 md:w-9" />
                        </a>
                        <a target='_blank' href='https://t.me/maketopme' className='flex items-center gap-2.5 subtitle text-main-and-focus'>
                            Join
                            <TelegramIcon className="h-5 md:h-9 w-5 md:w-9" />
                        </a>
                    </div>
                </div>

                <hr className='border-t border-t-t-secondary pb-5 lg:pb-10 mt-5 lg:mt-10' />

                <div className="flex justify-between flex-col md:flex-row items-center gap-5 text-center flex-wrap">
                    <p className='subtitle text-main-and-focus'>All rights reserved. Copyright © 2024 Maketop.me.</p>
                    <div className="flex gap-5 items-center">
                        <PrivacyPolicy />
                        <PublicOffer />
                    </div>
                </div>


            </div>

        </div>
    )
}

