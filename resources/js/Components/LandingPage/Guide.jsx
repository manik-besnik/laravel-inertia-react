import { Link } from '@inertiajs/react'
import React from 'react'

export default function Company() {
    return (
        <div id='guide-to-use' className='py-[30px] lg:py-20 site-container'>

            <h2 className='landing-title max-w-[790px]'>A Guide to Using Maketop.me: Earning Points and Boosting Success</h2>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-[100px] p-[10px] md:p-[50px] bg-side-and-button rounded-[10px] md:rounded-xl lg:rounded-[20px] mb-[10px] lg:mb-[50px]">
                <div className='max-w-[480px]'>
                    <h4 className='landing-secondary-title mb-[10px] lg:mb-[30px] '>How Maketop.me Works?</h4>

                    <p className='subtitle mb-2 lg:mb-[25px]'>At Maketop.me, we connect you with a vibrant community of real users from platforms like Dribbble and Behance.</p>
                    <p className='subtitle mb-3 lg:mb-[30px]'>Through mutual engagement, you'll see a boost in likes, comments, and followers, driving genuine growth for your social media presence.</p>

                    <Link href={route('register')}  className='landing-secondary-btn inline-block'>Start for Free</Link>

                </div>

                <img className='w-full' src="https://i.ibb.co/tKDfN1d/guide1.png" alt="guide1" border="0" />
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center gap-5 lg:gap-[100px] p-[10px] md:p-[50px] bg-side-and-button rounded-[10px] md:rounded-xl lg:rounded-[20px] mb-[10px] lg:mb-[50px]">
                <img className='w-full' src="https://i.ibb.co/pxj3b2x/guide2.png" alt="guide1" border="0" />

                <div className='max-w-[480px]'>
                    <h4 className='landing-secondary-title mb-[10px] lg:mb-[30px] '>How did you earn points?</h4>

                    <p className='subtitle mb-2 lg:mb-[25px]'>Earning Points on our platform is simple and rewarding! You can acquire Points by completing tasks offered by fellow users or purchasing them directly.</p>
                    <p className='subtitle mb-2 lg:mb-[25px]'>Additionally, don't miss out on our referral program! Invite friends and colleagues to join, and with each successful referral, you'll receive a bonus of +10 points.</p>
                    <p className='subtitle mb-3 lg:mb-[30px]'>Don't forget to check in daily for even more rewarding opportunities!</p>

                    <Link href={route('register')}  className='landing-secondary-btn inline-block'>Start for Free</Link>

                </div>
            </div>

        </div>
    )
}

