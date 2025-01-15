import React, {useCallback, useState} from 'react';
import Select from '@/Components/Select';
import Search from '@/Components/SvgIcons/Search';
import Pagination from '@/Components/Admin/Pagination';
import {Link, router, usePage} from '@inertiajs/react';
import {getFormattedDate} from "@/Components/Helper/index.js";
import {userStatus} from "@/Components/Constant/index.js";
import {debounce} from "lodash/function.js";

const usersStatus = [
    {id: 1, name: 'All Users', value: null},
    {id: 2, name: 'Free Users', value: userStatus.FREE},
    {id: 2, name: 'Basic', value: userStatus.BASIC},
    {id: 3, name: 'Pro Users', value: userStatus.PRO},
    {id: 3, name: 'Pro Plus Users', value: userStatus.PRO_PLUS},
    {id: 4, name: 'Band Users', value: userStatus.BAND},
]
const showDataCount = [
    {id: 1, name: 'Show 10', value: 10},
    {id: 2, name: 'Show 20', value: 20},
    {id: 2, name: 'Show 50', value: 50},
    {id: 3, name: 'Show 100', value: 100},
    {id: 3, name: 'Show 200', value: 200},
]
const UserDetails = () => {

    const users = usePage().props.users

    const perPage = route()?.params?.per_page ? showDataCount.find(item => item.value === Number(route().params.per_page)) : showDataCount[0]

    const searchStatus = route()?.params?.status ? usersStatus.find(item => item.value === route().params.status) : usersStatus[0]

    const [selectedUser, setSelectedUser] = useState(searchStatus)
    const [selectedShowData, setSelectedShowData] = useState(perPage)
    const [search, setSearch] = useState(route().params.search ?? '')

    const handleChangeUserStatus = (e) => {
        const searchParams = {
            ...route().params,
            status: e.value
        };

        router.get(route('admin.index', searchParams))
    }
    const handleChangePerPage = (e) => {
        const searchParams = {
            ...route().params,
            per_page: e.value
        };

        router.get(route('admin.index', searchParams))
    }

    const handleDebouncedSearch = useCallback(
        debounce((value) => {
            const searchParams = {
                ...route().params,
                search: value,
            };
            router.get(route('admin.index', searchParams));
        }, 1000),
        []
    );

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        handleDebouncedSearch(value);
    };


    return (
        <>
            <div className='flex items-center justify-between mb-6'>
                <div className='flex items-center gap-6 '>
                    <p className='text-[21px] leading-[25px] font-semibold text-text-primary'>Users</p>

                    <div className='w-[150px] px-3 py-2 rounded-md bg-side-and-button'>
                        <Select items={usersStatus}
                                selected={selectedUser}
                                setSelected={setSelectedUser}
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
                               placeholder='Search user' onChange={handleChange}/>
                        <Search className="absolute right-2.5 top-2.5"/>
                    </div>
                </div>
                <a href={route('admin.users.export')} className="app-btn">Export</a>
            </div>

            <div className="overflow-x-auto mb-3">
                <table className='w-full'>
                    <thead>
                    <tr className='border-b border-b-focus-outline text-sm font-medium text-t-secondary'>
                        <td className='pb-3'>No</td>
                        <td className='pb-3'></td>
                        <td className='pb-3'>Name</td>
                        <td className='pb-3'>Username</td>
                        <td className='pb-3'>Email</td>
                        <td className='pb-3'>Join Date</td>
                        <td className='pb-3'>Status</td>
                        <td className='pb-3'>Action</td>
                    </tr>
                    </thead>
                    <tbody>
                    {users.data.map((user, index) => (
                        <tr key={index}
                            className='border-b border-b-focus-outline text-sm font-medium text-t-secondary'>
                            <td className='py-3'>{user.id}</td>
                            <td className='py-3'>
                                <img className='h-6 w-6 rounded object-cover object-center' src={user.avatar} alt=""/>
                            </td>
                            <td className='py-3'>{user.name}</td>
                            <td className='py-3'>{user.username}</td>
                            <td className='py-3'>{user.email}</td>
                            <td className='py-3'>{getFormattedDate(user.created_at)}</td>
                            <td className='py-3 capitalize'>{user.status}</td>
                            <td className='py-3'>
                                <Link href={route('admin.users.show', user.id)} className='app-btn'>Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {users.links.length > 3 && <Pagination links={users.links}/>}

        </>
    )
}

export default UserDetails
