import React, {useState} from 'react';
import {Head, router, useForm, usePage} from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout.jsx';
import TotalInfoCard from '@/Components/Admin/TotalInfoCard.jsx';
import LabelField from "@/Components/LabelField.jsx";
import InputBox from "@/Components/InputBox.jsx";
import {accountType} from "@/Components/Constant/index.js";
import Copy from "@/Components/SvgIcons/Copy.jsx";
import ErrorField from "@/Components/ErrorField.jsx";
import Error from "@/Components/Error/Error.jsx";
import Success from "@/Components/Toast/Success.jsx";
import LikeIcon from "@/Components/SvgIcons/Like.jsx";
import Select from "@/Components/Select.jsx";
import Coin from "@/Components/SvgIcons/Coin.jsx";


export default function CreateTask() {

    const taskData = usePage().props;
    const [success, setSuccess] = useState(false)
    const [user, setUser] = useState(taskData.users[0])

    const detailData = [
        {
            name: "total_users",
            title: "Total User",
            filter_key: "thirty_days_total_users",
            total: taskData.total_users,
            inc: true
        },
        {
            name: "pro_users",
            title: "Pro Users",
            filter_key: "thirty_days_pro_users",
            total: taskData.pro_users,
            inc: false
        },
        {
            name: "free_users",
            title: "Free Users",
            filter_key: "thirty_days_free_user",
            total: taskData.free_users,
            inc: false
        },
        {
            name: "active_users",
            title: "Active Users",
            filter_key: "thirty_days_active_users",
            total: taskData.active_users,
            inc: true
        },
        {
            name: "total_tasks",
            title: "Total Task",
            filter_key: "thirty_days_total_tasks",
            total: taskData.total_tasks,
            inc: false
        },
        {
            name: "total_earning",
            title: "Total Earning",
            filter_key: "thirty_days_total_earnings",
            total: taskData.total_earning,
            inc: false
        },
    ]


    const {data, setData, errors, post, progress, processing} = useForm({
        title: '',
        account_type: accountType.custom,
        task_type: '',
        allow_user: 1,
        coin: 1,
        task_url: '',
        user: user
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('admin.tasks.store'), {
            onSuccess: () => {
                setSuccess(true);
                setTimeout(() => {
                    router.get(route('admin.tasks.index'))
                }, 5000);
            }
        })
    }

    return (
        <>
            <Head title="Create Task"/>

            <AdminLayout
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Task</h2>}
            >

                <div className='grid grid-cols-3 md:grid-cols-6 gap-4 mb-[30px]'>
                    {
                        detailData.map((data, i) => <TotalInfoCard key={i} data={data}/>)
                    }
                </div>

                <p className="mb-2 font-semibold">Create Task</p>

                <form onSubmit={handleSubmit} className='max-w-[454px]'>
                    <div className='mb-4 sm:mb-6'>

                        <Select items={taskData.users}
                                selected={user}
                                setSelected={setUser}
                                classes="min-w-[454px] rounded sm:rounded-[6px] h-[26px] sm:h-[36px] bg-side-and-button px-2"
                        />

                    </div>
                    <div className='mb-4 sm:mb-6'>

                        <LabelField content="Task Title"/>

                        <InputBox
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            placeholder='Ex: Product Hunt Like'
                            iconPrev={<Copy className='h-4 sm:h-5'/>}
                        />

                        {errors.title && <ErrorField className="mt-[14px]" content={errors.title}/>}

                    </div>
                    <div className='mb-4 sm:mb-6'>

                        <LabelField content="Task Type"/>

                        <InputBox
                            value={data.task_type}
                            onChange={e => setData('task_type', e.target.value)}
                            placeholder='Ex: Give Me like at product hunt'
                            iconPrev={<Copy className='h-4 sm:h-5'/>}
                        />

                        {errors.task_type && <ErrorField className="mt-[14px]" content={errors.task_type}/>}

                    </div>

                    <div className='mb-4 sm:mb-6'>

                        <LabelField content="Task URL"/>

                        <InputBox
                            value={data.task_url}
                            onChange={e => setData('task_url', e.target.value)}
                            placeholder='https://www.example.net/example'
                            iconPrev={<Copy className='h-4 sm:h-5'/>}
                        />

                        {errors.task_url && <ErrorField className="mt-[14px]" content={errors.task_url}/>}

                    </div>

                    <div className='mb-5 sm:mb-[30px]'>

                        <LabelField content="Coin Per Task"/>

                        <InputBox
                            value={data.coin}
                            onChange={e => setData('coin', e.target.value)}
                            placeholder='4'
                            iconPrev={<Coin className='h-4 sm:h-5'/>}
                            type='number'
                            min='1'
                        />

                    </div>

                    <div className='mb-5 sm:mb-[30px]'>

                        <LabelField content="Number of Allow User"/>

                        <InputBox
                            value={data.allow_user}
                            onChange={e => setData('allow_user', e.target.value)}
                            placeholder='1'
                            iconPrev={<LikeIcon className='h-4 sm:h-5'/>}
                            type='number'
                            min='1'
                            coin={data.allow_user ? data.allow_user * data.coin : data.coin}
                        />

                    </div>


                    {taskData?.errors?.message && <Error message={taskData.errors.message}/>}
                    {success && <Success message='Task Created Successfully'/>}

                    <div className="flex justify-between items-center">
                        <button
                            className='px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] bg-side-and-button text-xs sm:text-sm leading-[14px] sm:leading-[20px] text-text-primary font-medium hover:bg-card-and-hover'
                            type="submit" disabled={processing}>Submit Task
                        </button>
                    </div>
                </form>

            </AdminLayout>


        </>
    );
}


