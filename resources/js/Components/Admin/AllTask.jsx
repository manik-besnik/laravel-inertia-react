import React, {useCallback, useState} from 'react';
import Select from '@/Components/Select';
import Search from '@/Components/SvgIcons/Search';
import CoinIcon from '../SvgIcons/Coin';
import Play from '../SvgIcons/Play';
import DeleteIcon from '@/Components/SvgIcons/Delete';
import {Link, router, usePage} from '@inertiajs/react';
import Pagination from "@/Components/Admin/Pagination.jsx";
import DribbbleIcon from "@/Components/SvgIcons/Social/DribbbleIcon.jsx";
import LinkedinIcon from "@/Components/SvgIcons/Social/LinkedinIcon.jsx";
import YoutubeIcon from "@/Components/SvgIcons/Social/YoutubeIcon.jsx";
import InstagramIcon from "@/Components/SvgIcons/Social/InstagramIcon.jsx";
import BehanceIcon from "@/Components/SvgIcons/Social/BehanceIcon.jsx";
import MediumIcon from "@/Components/SvgIcons/Social/MediumIcon.jsx";
import TwitterIcon from "@/Components/SvgIcons/Social/TwitterIcon.jsx";
import ArtStationIcon from "@/Components/SvgIcons/Social/ArtStationIcon.jsx";
import Pause from "@/Components/SvgIcons/Pause.jsx";
import TaskDeleteModal from "@/Components/Admin/TaskDeleteModal.jsx";
import TaskDetailModal from "@/Components/Admin/TaskDetailModal.jsx";
import FacebookIcon from "@/Components/SvgIcons/Social/FacebookIcon.jsx";
import {debounce} from "lodash/function.js";
import TiktokIcon from "@/Components/SvgIcons/Social/TiktokIcon.jsx";
import {accountType} from "@/Components/Constant/index.js";

const taskStatuses = [
    {id: 1, name: 'All Task', value: null},
    {id: 2, name: 'Active Task', value: 1},
    {id: 3, name: 'Paused Task', value: 2},
    {id: 3, name: 'Completed Task', value: 3},
]

const showDataCount = [
    {id: 1, name: 'Show 10', value: 10},
    {id: 2, name: 'Show 20', value: 20},
    {id: 2, name: 'Show 50', value: 50},
    {id: 3, name: 'Show 100', value: 100},
    {id: 3, name: 'Show 200', value: 200},
]

const AllTask = () => {

    const {tasks,setting_data} = usePage().props

    let selectedStatus = route()?.params.status ? taskStatuses.find(item => item.value === Number(route()?.params.status)) : taskStatuses[0];

    let taskPerPage = route()?.params.per_page ? showDataCount.find(item => item.value === Number(route()?.params.per_page)) : showDataCount[0];

    const [pinToTop, setPinToTop] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showDetailModal, setShowDetailModal] = useState(false)
    const [deleteTaskId, setDeleteTaskId] = useState(null)
    const [task, setTask] = useState(null)
    const [selectedTask, setSelectedTask] = useState(selectedStatus)
    const [selectedShowData, setSelectedShowData] = useState(taskPerPage)
    const [search, setSearch] = useState(route().params.search ?? '')


    const handleChangeUserStatus = (e) => {
        const searchParams = {
            ...route().params,
            status: e.value
        };

        router.get(route('admin.tasks.index', searchParams))
    }
    const handleChangePerPage = (e) => {
        const searchParams = {
            ...route().params,
            per_page: e.value
        };

        router.get(route('admin.tasks.index', searchParams))
    }

    const handleDebouncedSearch = useCallback(
        debounce((value) => {
            const searchParams = {
                ...route().params,
                search: value,
            };
            router.get(route('admin.tasks.index', searchParams));
        }, 1000),
        []
    );

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        handleDebouncedSearch(value);
    };

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

    const handleDeleteTask = (taskId) => {
        setDeleteTaskId(taskId)
        setShowDeleteModal(true);
    }

    const handleConfirmDelete = () => {

        setShowDeleteModal(false);

        if (!deleteTaskId) {
            return;
        }

        router.delete(route('admin.tasks.delete', deleteTaskId))
    }

    const handleShowDetail = (task) => {
        setTask(task);
        setShowDetailModal(true);
    }

    return (
        <>
            <div className="flex justify-between">
                <div className='flex items-center gap-6 mb-6'>
                    <p className='text-[21px] leading-[25px] font-semibold text-text-primary'>Task</p>

                    <div className='w-[150px] px-3 py-2 rounded-md bg-side-and-button'>
                        <Select items={taskStatuses}
                                selected={selectedTask}
                                setSelected={setSelectedTask}
                                handleValueChange={handleChangeUserStatus}
                        />
                    </div>
                    <div className='w-[150px] px-3 py-2 rounded-md bg-side-and-button'>
                        <Select items={showDataCount}
                                selected={selectedShowData}
                                setSelected={setSelectedShowData}
                                handleValueChange={handleChangePerPage}
                        />
                    </div>

                    <div className="relative">
                        <input type="text"
                               value={search}
                               className='block h-9 w-[250px] bg-side-and-button rounded-md text-sm placeholder:text-sm placeholder:text-t-disabled border-none outline-none focus:ring-0'
                               placeholder='Search Tasks' onChange={handleChange}/>
                        <Search className="absolute right-2.5 top-2.5"/>
                    </div>
                </div>
                <Link href={route('admin.tasks.create')} className="app-btn mb-6">
                    Create Task
                </Link>
            </div>

            <div className="overflow-x-auto mb-3">

                {tasks.data.length > 0 && tasks.data.map((task, index) => (
                    <div key={index} className="flex items-center md:mb-2.5 gap-5 mb-3">
                        <p className='text-sm font-medium text-t-secondary'>{index + 1}</p>
                        <div
                            className='cursor-pointer p-2 md:p-4 rounded-md md:rounded-lg bg-white flex justify-between items-center gap-2 w-full'>

                            <div className="flex items-center gap-2.5 md:gap-4">
                                {(task.account_type === accountType.custom && setting_data?.custom_task_icon) ? (
                                    <img className="w-9 h-9 rounded" alt="Task Icon"
                                         src={setting_data?.custom_task_icon}/>) : taskIcon[task.account_type]}
                                <div>
                                    <p className='text-[8px] md:text-xs leading-[9px] md:leading-[14px] font-medium text-t-secondary capitalize'>
                                        {task.account_type}
                                        / {task.task_type}</p>
                                    <p className='text-[10px] leading-[12px] font-medium text-text-primary md:text-sm md:leading-[20px] truncate max-w-[450px]'>
                                        {task.title}
                                    </p>
                                </div>
                            </div>

                            <div
                                className='flex justify-center items-center gap-1.5 whitespace-nowrap py-2 px-3 font-medium text-xs md:text-sm text-coin'>
                                <CoinIcon color='#FFA600' className={`w-4 h-4 md:w-5 md:h-5`}/>
                                <span>{task.coin * 0.5}</span>
                            </div>

                            <div className="flex items-center justify-start gap-4">

                                {/*<button onClick={() => setPinToTop(false)}*/}
                                {/*        className={pinToTop ? 'inline-block' : 'hidden'}>*/}
                                {/*    <Pin/>*/}
                                {/*</button>*/}
                                {/*<button onClick={() => setPinToTop(true)}*/}
                                {/*        className={pinToTop ? 'hidden' : 'inline-block'}>*/}
                                {/*    <Unpin/>*/}
                                {/*</button>*/}

                                <button onClick={() => handleShowDetail(task)} className='app-btn'>Details</button>


                                {task.status === 1 && <Link href={route('admin.tasks.update.status', task.id)}
                                                            className={`flex bg-side-and-button items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                                >
                                    <Pause className='h-4 sm:h-5'/>
                                    Stop
                                </Link>}
                                {task.status === 2 && <Link href={route('admin.tasks.update.status', task.id)}
                                                            className={`flex bg-side-and-button items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                                >
                                    <Play className='h-4 sm:h-5'/>
                                    Play
                                </Link>}

                                <button type="button" onClick={() => handleDeleteTask(task.id)}>
                                    <DeleteIcon className={`w-4 h-4 md:w-5 md:h-5`}/>
                                </button>

                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {tasks.links.length > 3 && <Pagination links={tasks.links}/>}
            <TaskDeleteModal show={showDeleteModal} setShow={setShowDeleteModal}
                             handleConfirmDelete={handleConfirmDelete}/>
            <TaskDetailModal show={showDetailModal} setShow={setShowDetailModal} task={task}/>

        </>
    )
}

export default AllTask
