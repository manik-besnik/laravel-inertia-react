import {Head, router, usePage} from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import React, {useState} from 'react';
import SingleTask from "@/Components/Task/SingleTask.jsx";
import {VerifyAccountModal} from "@/Components/Task/VerifyAccountModal.jsx";
import Select from "@/Components/Select.jsx";
import {accountFilterData, accountType as accountTypes} from "@/Components/Constant/index.js";
import Pagination from "@/Components/Admin/Pagination.jsx";
import ExtensionModal from "@/Components/ExtensionModal.jsx";

const AllTask = ({tasks, accounts,auth}) => {

    let authUser = {is_extension_installed: false}

    authUser = {
        ...auth.user,
        is_extension_installed: auth.user.is_extension_installed
    }

    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const [activeTask, setActiveTask] = useState(null)

    const selected = route().params.account ? accountFilterData.find(item => item.value === route().params.account) : accountFilterData[0]

    const [selectedAccount, setSelectedAccount] = useState(selected)

    const handleOpenTask = (task, accountType) => {

        setActiveTask(task)
        if (authUser.is_extension_installed || getExtensionConfirm()) {
            console.log(authUser.is_extension_installed,getExtensionConfirm())
            if (accounts.includes(accountType) || accountType === accountTypes.custom) {
                router.visit(route('task.show', task.id))
            } else {
                setOpen(true)
            }
        } else {
            setShow(true)
        }


    }

    const getExtensionConfirm = () => {
        const data = localStorage.getItem('is_confirm_today');
        if (data) {
            const parsedData = JSON.parse(data);
            const today = new Date().toISOString().split('T')[0];
            if (parsedData.date === today) {
                return parsedData;
            } else {
                localStorage.removeItem('is_confirm_today');
                return false
            }
        }
        return null;
    }
    const handleExtensionConfirm = () => {
        setShow(false)
        if (accounts.includes(activeTask.account_type) || activeTask.account_type === accountTypes.custom) {
            router.visit(route('task.show', activeTask.id))
        } else {
            setOpen(true)
        }
    }
    const handleCloseModal = () => {
        setOpen(false)
    }

    const handleChangeAccount = (e) => {
        const searchParams = {
            ...route().params,
            account: e.value
        };

        router.get(route('task.index', searchParams))
    }

    return (
        <>
            <Head title="All Tasks"/>

            <AuthenticatedLayout
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All Tasks</h2>}
            >

                <div className='flex justify-between gap-20 flex-col min-h-screen'>
                    <div>
                        <div className="flex justify-between items-center mb-2 md:mb-5">
                            <h4 className='text-sm font-semibold text-text-primary md:text-[21px] leading-[25px]'>Available
                                Task</h4>

                            <div className='w-[150px] px-3 py-2 rounded-md bg-side-and-button'>
                                <Select items={accountFilterData}
                                        selected={selectedAccount}
                                        setSelected={setSelectedAccount}
                                        handleValueChange={handleChangeAccount}
                                />
                            </div>

                        </div>

                        {tasks.data?.length > 0 && tasks.data?.map((task, index) => <SingleTask
                            onClick={() => handleOpenTask(task, task.account_type)} task={task} key={index}/>)}

                        {tasks.links.length > 3 && <Pagination links={tasks.links}/>}

                        {tasks.data?.length === 0 &&
                            <p className='text-sm font-semibold text-text-primary leading-[20px] text-center'>
                                Task Not Found
                            </p>}

                    </div>

                    <Footer/>

                </div>
                <VerifyAccountModal isOpen={open} handleCloseModal={handleCloseModal}/>
                <ExtensionModal show={show} handleExtensionConfirm={handleExtensionConfirm}/>

            </AuthenticatedLayout>


        </>
    );
}

export default AllTask;
