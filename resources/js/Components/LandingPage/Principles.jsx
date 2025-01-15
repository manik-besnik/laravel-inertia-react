import { Link } from '@inertiajs/react'
import React from 'react'

export default function Principles() {

    return (
        <div id='principles' className="py-[30px] md:py-20 site-container bg-[url('/images/banner-graph-bg-small.png')] bg-no-repeat bg-contain lg:bg-cover lg:bg-[url('/images/banner-graph-bg.png')] bg-center">

            <h2 className='landing-title max-w-[560px]'>Guaranteed Satisfaction: <br /> Our Core Principles</h2>

            <div className="flex gap-5 justify-between items-center flex-wrap sm:flex-nowrap">

                <div className='max-w-[356px] '>
                    <img className='w-[70px] md:w-auto ms-[-10px] md:ms-[-18px]' src="https://i.ibb.co/Cbm2C9c/p-1.png" alt="" />
                    <h4 className='landing-secondary-title mb-2 md:mb-3 lg:mb-5 max-w-[320px]'>Lightning-Speed Services at No Cost</h4>
                    <p className='subtitle'>Free and fast promotion! Skip the spending and zoom ahead with our speedy services.</p>
                </div>

                <div className='max-w-[356px] '>
                    <img className='w-[70px] md:w-auto ms-[-10px] md:ms-[-18px]' src="https://i.ibb.co/hBzTV43/p-2.png" alt="" />
                    <h4 className='landing-secondary-title mb-2 md:mb-3 lg:mb-5 max-w-[320px]'>Ensuring Safety in Every Step</h4>
                    <p className='subtitle'>Your security guaranteed: No account access required, no worries.</p>
                </div>

                <div className='max-w-[356px] '>
                    <img className='w-[70px] md:w-auto ms-[-10px] md:ms-[-18px]' src="https://i.ibb.co/RvQjGbC/p-3.png" alt="" />
                    <h4 className='landing-secondary-title mb-2 md:mb-3 lg:mb-5 max-w-[320px]'>Human-Centric: No Bots Allowed!</h4>
                    <p className='subtitle'>Genuine Engagement. 100% Real Likes and Followers, No Bots Involved.</p>
                </div>

            </div>

            <div className='text-center mt-[30px] lg:mt-[50px]'>
                <Link href={route('register')} className='landing-secondary-btn mx-auto inline-block'>Start for Free</Link>
            </div>

        </div>
    )
}

