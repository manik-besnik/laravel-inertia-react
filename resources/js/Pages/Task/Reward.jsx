import {Head, router} from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ReloadIcon from "@/Components/SvgIcons/Reload"
import Footer from '@/Components/Footer';
import {useState} from 'react';
import SingleTask from "@/Components/Task/SingleTask.jsx";
import {VerifyAccountModal} from "@/Components/Task/VerifyAccountModal.jsx";

const Reward = ({tasks, accounts}) => {

    return (
        <>
            <Head title="Reward"/>

            <AuthenticatedLayout
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Reward</h2>}
            >

                <div className='flex justify-between gap-20 flex-col min-h-screen'>
                    <div>
                        <div className="flex justify-between items-center mb-2 md:mb-5">
                            <h4 className='text-sm font-semibold text-text-primary md:text-[21px] leading-[25px]'>Available
                                Task reward</h4>
                            {/* <div onClick={handleReload} className="flex items-center gap-1.5">
                                <ReloadIcon className={reload && 'animate-spin'}/>
                                <span className='text-xs md:text-sm text-t-secondary font-medium'>Reload</span>
                            </div> */}
                        </div>

                        {/* {tasks.data?.length && tasks.data?.map((task, index) => <SingleTask
                            onClick={() => handleOpenTask(task.id, task.account_type)} task={task} key={index}/>)} */}

                    </div>

                    <Footer/>

                </div>
                {/* <VerifyAccountModal isOpen={open} handleCloseModal={handleCloseModal}/> */}

            </AuthenticatedLayout>


        </>
    );
}

export default Reward;
