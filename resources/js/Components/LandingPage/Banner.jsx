import React from 'react'
import {Link, usePage} from "@inertiajs/react"

export default function Banner() {

    const {auth, setting_data} = usePage().props;
    const extensionLink = setting_data?.extension_link ?? null
    return (
        <section
            className="site-container bg-[url('/images/banner-graph-bg-small.png')] bg-no-repeat bg-contain lg:bg-cover bg-center lg:bg-[url('/images/banner-graph-bg.png')] pt-[75px] md:pt-[110px] ">

            <div className="relative md:pb-[100px] pt-5 md:pt-[70px] mb-[50px] md:mb-0">

                <div>
                    <img className='block md:w-auto w-[38px] animate-right absolute top-0 left-0'
                         src="https://i.ibb.co/QvSw5K9/Group-25.png" alt="Group-25" border="0"/>
                    <img className='block md:w-auto w-[39px] animate-right absolute bottom-0 left-0'
                         src="https://i.ibb.co/k1ZWGX5/Group-28.png" alt="Group-28" border="0"/>
                    <img className='block md:w-auto w-[36px] animate-left absolute top-0 right-0'
                         src="https://i.ibb.co/C9LX5WF/Group-26.png" alt="Group-26" border="0"/>
                    <img className='block md:w-auto w-[40px] animate-left absolute bottom-0 right-0'
                         src="https://i.ibb.co/ypSdR6k/Group-27.png" alt="Group-27" border="0"/>
                </div>

                <div className='max-w-[335px] sm:max-w-[790px] mx-auto text-center'>
                    <h1 className='text-[21px] leading-[25px] sm:text-[42px] sm:leading-[50px] lg:text-[52px] lg:leading-[62px] font-semibold text-text-primary'>Your
                        Ultimate Destination for Free Promotion and Viral Post</h1>
                    <p className='subtitle mt-1.5 md:mt-5'>Use free promotion to make your viral post on Dribbble,
                        Facebook,
                        LinkedIn, Instagram, Youtube, Behance, Medium, Twitter, TikTok, and Artstation. Discover
                        unlimited growth with us</p>

                    <div className="flex items-center gap-5 mt-4 md:mt-[30px] justify-center">
                        <a href={extensionLink} download={extensionLink}
                           target='_blank'
                           className='landing-secondary-btn cursor-pointer'>
                            Install Extension
                        </a>
                        <Link href='#guide-to-use' className='landing-primary-btn'>Learn More</Link>
                    </div>
                </div>

            </div>
            <img className='mx-auto' src="https://i.ibb.co/hZZwX4V/banner.png" alt="banner" border="0"/>

        </section>
    )
}

