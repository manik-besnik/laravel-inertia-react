import {Link} from "@inertiajs/react";
import ArrowRight from "@/Components/SvgIcons/ArrowRight.jsx";
import React from "react";

const NotFound = () => {
    return (
        <div className='min-h-screen flex items-center justify-center text-center'>

            <div className='p-5 max-w-[440px] select-none'>
                <img className='mb-5 pointer-events-none' src="https://maketop.me/images/error-img.png" alt="error-image" />
                <Link href='/' className='landing-secondary-btn inline-flex sm:px-5'>
                    <ArrowRight className="rotate-180" color='#fff' />
                    Back to Home
                </Link>
            </div>

        </div>
    )
}

export default NotFound
