import React, { useState } from 'react';
import PlatformList from '@/Components/Admin/PlatformList'

const AllPlatform = () => {

    return (
        <>
            <div className='flex items-center justify-between gap-6 mb-6'>
                <p className='text-[21px] leading-[25px] font-semibold text-text-primary'>Platform</p>

                <button className="app-btn">Save Now</button>
            </div>

            <div>
                <PlatformList />
            </div>
        </>
    )
}

export default AllPlatform