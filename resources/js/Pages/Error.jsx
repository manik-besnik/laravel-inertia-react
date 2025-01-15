import React from 'react'
import errorImg from '@/../../public/images/error-img.png'
import ArrowRight from '@/Components/SvgIcons/ArrowRight'
import { Link } from '@inertiajs/react'

const Error = () => {
    return (
        <div className='min-h-screen flex items-center justify-center text-center'>

            <div className='p-5 max-w-[500px] select-none'>
                <img className='mb-5 pointer-events-none' src={errorImg} alt="error-image" />
                <Link href='/' className='landing-secondary-btn inline-flex sm:px-5'>
                    <ArrowRight className="rotate-180" color='#fff' /> 
                    Back to Home
                </Link>
            </div>

        </div>
    )
}

export default Error