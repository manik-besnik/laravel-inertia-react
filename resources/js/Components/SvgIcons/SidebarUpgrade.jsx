import React from 'react'
import proImg from '../../../../public/images/pro-image.png'
import {usePage} from '@inertiajs/react';

export default function SidebarUpgrade(props) {

    const logo = usePage().props?.setting_data?.sidebar_banner ? usePage().props?.setting_data?.sidebar_banner : proImg

    return (
        <>
            <img className='w-full' src={logo} alt="pro"/>
        </>

    )
}
