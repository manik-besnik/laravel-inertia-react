import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import TotalInfoCard from '@/Components/Admin/TotalInfoCard';
import AllTask from '@/Components/Admin/AllTask';

const detailData = [
    {
        name: "total",
        title: "Total User",
        total: '45,000',
        inc: true
    },
    {
        name: "pro",
        title: "Pro Users",
        total: '400',
        inc: true
    },
    {
        name: "free",
        title: "Free Users",
        total: '45,000',
        inc: false
    },
    {
        name: "active",
        title: "Active Users",
        total: '45,000',
        inc: true
    },
    {
        name: "task",
        title: "Total Task",
        total: '45,000',
        inc: false
    },
    {
        name: "earning",
        title: "Total Earning",
        total: '45,000',
        inc: false
    },
]

const Task = () => {

    return (
        <>
            <Head title="Users" />

            <AdminLayout
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
            >

                <div className='grid grid-cols-3 md:grid-cols-6 gap-4 mb-[30px]'>
                    {
                        detailData.map((data, i) => <TotalInfoCard key={i} data={data} />)
                    }
                </div>

                <AllTask />

            </AdminLayout>


        </>
    );
}

export default Task;
