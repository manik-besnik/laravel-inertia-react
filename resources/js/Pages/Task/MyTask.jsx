import {Head, Link, router, usePage} from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ReloadIcon from "@/Components/SvgIcons/Reload"
import CoinIcon from '@/Components/SvgIcons/Coin';
import Footer from '@/Components/Footer';
import DeleteIcon from '@/Components/SvgIcons/Delete';
import Pause from '@/Components/SvgIcons/Pause';
import Play from '@/Components/SvgIcons/Play';
import Progress from "@/Components/Progress";
import DribbbleIcon from "@/Components/SvgIcons/Social/DribbbleIcon.jsx";
import LinkedinIcon from "@/Components/SvgIcons/Social/LinkedinIcon.jsx";
import YoutubeIcon from "@/Components/SvgIcons/Social/YoutubeIcon.jsx";
import InstagramIcon from "@/Components/SvgIcons/Social/InstagramIcon.jsx";
import BehanceIcon from "@/Components/SvgIcons/Social/BehanceIcon.jsx";
import MediumIcon from "@/Components/SvgIcons/Social/MediumIcon.jsx";
import TwitterIcon from "@/Components/SvgIcons/Social/TwitterIcon.jsx";
import ArtStationIcon from "@/Components/SvgIcons/Social/ArtStationIcon.jsx";
import Pagination from "@/Components/Admin/Pagination.jsx";
import FacebookIcon from "@/Components/SvgIcons/Social/FacebookIcon.jsx";
import TiktokIcon from "@/Components/SvgIcons/Social/TiktokIcon.jsx";
import React from "react";
import {accountType} from "@/Components/Constant/index.js";

const AllTask = ({tasks}) => {

    const {setting_data} = usePage().props

    const taskIcon = {
        dribbble: <DribbbleIcon/>,
        facebook: <FacebookIcon/>,
        linkedin: <LinkedinIcon/>,
        youtube: <YoutubeIcon/>,
        instagram: <InstagramIcon/>,
        behance: <BehanceIcon/>,
        medium: <MediumIcon/>,
        twitter: <TwitterIcon/>,
        tiktok: <TiktokIcon/>,
        artstation: <ArtStationIcon/>,
    }

    return (
        <>
            <Head title="My Tasks"/>

            <AuthenticatedLayout
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">My Tasks</h2>}
            >

                <div className='flex justify-between gap-20 flex-col min-h-screen'>
                    <div>
                        <h4 className='text-sm font-semibold text-text-primary md:text-[21px] leading-[25px] mb-[10px]'>
                            My Task
                        </h4>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-between md:items-center mb-5">
                            <p className='text-[10px] leading-[12px] md:text-sm md:leading-5 font-medium text-t-secondary truncate'>You
                                can get just 20 tasks/Per day. With
                                <Link href={route('pricing')} className='text-coin'> Pro Account </Link>
                                you don’t have any limits.</p>
                            {/*<Progress max={20} value={10} light dataHor/>*/}
                        </div>


                        {tasks.data.map((task, index) => (
                            <div key={index}
                                 className='cursor-pointer p-2 md:p-4 mb-1.5 md:mb-2.5 rounded-md md:rounded-lg bg-white flex justify-between items-center gap-2'>

                                <div className="flex items-center gap-2.5 md:gap-4"
                                     onClick={() => router.visit('task-details', task.id)}>
                                    {(task.account_type === accountType.custom && setting_data?.custom_task_icon) ? (
                                        <img className="w-9 h-9 rounded" alt="Task Icon"
                                             src={setting_data?.custom_task_icon}/>) : taskIcon[task.account_type]}
                                    <div>
                                        <p className='text-[8px] md:text-xs leading-[9px] md:leading-[14px] font-medium text-t-secondary capitalize'>{task.account_type} / {task.task}</p>
                                        <p className='text-[10px] leading-[12px] font-medium text-text-primary md:text-sm md:leading-[20px] capitalize'>{task.title}</p>
                                    </div>
                                </div>

                                <div
                                    className='flex justify-center items-center gap-1.5 whitespace-nowrap py-2 px-3 font-medium text-xs md:text-sm text-coin'>
                                    <CoinIcon color='#FFA600' className={`w-4 h-4 md:w-5 md:h-5`}/>
                                    <span>{task.coin}</span>
                                </div>

                                <Progress max={task.allow_user} value={task.allow_user - task.task_left}/>

                                <div className="flex items-center justify-start gap-[10px]">

                                    {task.is_complete &&
                                        <Link
                                            href={route('task.duplicate', task.id)}
                                            className={`flex bg-side-and-button items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                                        >
                                            <ReloadIcon className='h-4 sm:h-5'/>
                                            Again
                                        </Link>}
                                    {(task.status === 1 && !task.is_complete) &&
                                        <Link
                                            href={route('task.pause', task.id)}
                                            className={`flex bg-side-and-button items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                                        >
                                            <Pause className='h-4 sm:h-5'/>
                                            Stop
                                        </Link>}
                                    {(task.status === 2 && !task.is_complete) &&
                                        <Link
                                            href={route('task.play', task.id)}
                                            className={`flex bg-side-and-button items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                                        >
                                            <Play className='h-4 sm:h-5'/>
                                            Play
                                        </Link>}

                                    <button onClick={() => router.delete(route('task.destroy', task.id))}>
                                        <DeleteIcon className={`w-4 h-4 md:w-5 md:h-5`}/>
                                    </button>

                                </div>

                            </div>
                        ))}

                        {tasks.links.length > 3 && <Pagination links={tasks.links}/>}

                        {tasks.data?.length === 0 &&
                            <p className='text-sm font-semibold text-text-primary leading-[20px] text-center'>
                                Task Not Found
                            </p>}

                    </div>

                    <Footer/>

                </div>

            </AuthenticatedLayout>


        </>
    );
}

export default AllTask;
