import React from 'react'
import {usePage} from "@inertiajs/react";

export default function Statistics() {

    const {tasks,users} = usePage().props;

    return (
        <section className='py-5 lg:py-20 px-3'>
            <div className="py-5 lg:py-[50px] px-[42px] lg:px-[100px] rounded-[10px] lg:rounded-2xl bg-side-and-button site-container flex justify-between items-center gap-y-[30px] gap-x-8 flex-wrap">
                <div className='text-center'>
                    <h2 className='text-[36px] lg:text-[52px] leading-[43px] lg:leading-[62px] font-semibold text-text-primary'>{users}</h2>
                    <p className='subtitle text-text-primary'>Signup Users</p>
                </div>
                <div className='text-center'>
                    <h2 className='text-[36px] lg:text-[52px] leading-[43px] lg:leading-[62px] font-semibold text-text-primary'>{tasks}+</h2>
                    <p className='subtitle text-text-primary'>Task Created</p>
                </div>
                <div className='text-center'>
                    <h2 className='text-[36px] lg:text-[52px] leading-[43px] lg:leading-[62px] font-semibold text-text-primary'>10</h2>
                    <p className='subtitle text-text-primary'>Platforms Available</p>
                </div>
                <div className='text-center'>
                    <h2 className='text-[36px] lg:text-[52px] leading-[43px] lg:leading-[62px] font-semibold text-text-primary'>24/7</h2>
                    <p className='subtitle text-text-primary'>Service provide</p>
                </div>
            </div>
        </section>
    )
}

