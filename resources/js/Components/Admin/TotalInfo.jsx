import React, { useState } from 'react';
import TotalInfoCard from '@/Components/Admin/TotalInfoCard';
import UserDetails from '@/Components/Admin/UserDetails';

const TotalInfo = () => {

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

    return (
        <>
            
        </>
    )
}

export default TotalInfo