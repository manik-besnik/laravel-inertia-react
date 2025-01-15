import React, {useState} from 'react'
import DocumentVerify from '@/Components/SvgIcons/DocumentVerify'
import {router} from "@inertiajs/react";

export const WelcomeModal = () => {
    const [cancel, setCancel] = useState(true)

    const handleEditProfile = () => {
        setCancel(true)
        router.visit(route('profile.edit'))
    }

    return (
        <div className={`${cancel && 'hidden'} fixed inset-0 bg-[#0000006e] z-[999]`}>
            <div
                className='absolute top-[120px] left-1/2 -translate-x-1/2 rounded-xl p-[30px] bg-white max-w-[453px] min-w-[311px]'>
                <div className='mb-2.5 flex justify-center'>
                    <DocumentVerify/>
                </div>
                <p className='text-xs text-center md:text-[17px] md:leading-[26px] font-medium text-text-primary mb-5'>To
                    create a task or complete an assignment please verify first your social accounts from your
                    maketop.me’s profile</p>

                <div className='flex items-center justify-center gap-2.5'>
                    <button onClick={() => setCancel(true)}
                            className={`bg-side-and-button px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                    >Cancel
                    </button>
                    <button onClick={handleEditProfile}
                            className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  bg-card-and-hover text-text-primary`}
                    >Go Profile
                    </button>
                </div>
            </div>
        </div>
    )
}
