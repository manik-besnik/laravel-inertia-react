import React, {useState} from 'react';
import {Head, Link, router, usePage} from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import TotalInfoCard from '@/Components/Admin/TotalInfoCard';
import ModalUserDetails from "@/Components/Admin/ModalUserDetails.jsx";
import ModalSocialAccounts from "@/Components/Admin/ModalSocialAccounts.jsx";


const UserDetail = () => {

    const data = usePage().props;

    const detailData = [
        {
            name: "total_users",
            title: "Total User",
            filter_key: "thirty_days_total_users",
            total: data.total_users,
            inc: true
        },
        {
            name: "pro_users",
            title: "Pro Users",
            filter_key: "thirty_days_pro_users",
            total: data.pro_users,
            inc: false
        },
        {
            name: "free_users",
            title: "Free Users",
            filter_key: "thirty_days_free_user",
            total: data.free_users,
            inc: false
        },
        {
            name: "active_users",
            title: "Active Users",
            filter_key: "thirty_days_active_users",
            total: data.active_users,
            inc: true
        },
        {
            name: "total_tasks",
            title: "Total Task",
            filter_key: "thirty_days_total_tasks",
            total: data.total_tasks,
            inc: false
        },
        {
            name: "total_earning",
            title: "Total Earning",
            filter_key: "thirty_days_total_earnings",
            total: data.total_earning,
            inc: false
        },
    ]


    const [userStatus, setUserStatus] = useState({userId: data.user.id, status: data.user.status})
    const handleSelectUserStatus = (userId, status) => {
        setUserStatus({userId: userId, status: status})
    }
    const handleUpdateUserStatus = () => {
        router.post(route('admin.users.update', userStatus.userId), {status: userStatus.status})
    }

    return (
        <>
            <Head title="Users"/>

            <AdminLayout
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
            >

                <div className='grid grid-cols-3 md:grid-cols-6 gap-4 mb-[30px]'>
                    {
                        detailData.map((data, i) => <TotalInfoCard key={i} data={data}/>)
                    }
                </div>
                <Link href={route('admin.index')} type="button" className='app-btn'>Back</Link>

                <div className="p-[30px] relative">
                    <div className="grid grid-cols-2 gap-[30px] mb-6">
                        <ModalUserDetails user={data.user}  />

                        <ModalSocialAccounts accounts={data.accounts}/>
                    </div>

                </div>

            </AdminLayout>


        </>
    );
}

export default UserDetail;
