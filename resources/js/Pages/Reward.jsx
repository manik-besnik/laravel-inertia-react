import Progress from "@/Components/Progress.jsx";

import {Head, Link, router, usePage} from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import React from "react";
import {dailyRewards} from "@/Components/Constant/index.js";
import InfoIcon from "@/Components/SvgIcons/Info.jsx";
import Check from "@/Components/SvgIcons/Check.jsx";


const CoinIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
                <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M15.1843 15.1833C13.9097 16.4535 11.9439 16.8418 10.2821 16.1518C8.62031 15.4617 7.50781 13.7952 7.50781 11.9958C7.50781 10.1964 8.62031 8.52988 10.2821 7.83984C11.9439 7.14981 13.9097 7.53816 15.1843 8.80831"
                    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        </svg>

    )
}

const LockIcon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.98729 1.66602C12.5446 1.66602 14.6023 3.67834 14.6023 6.16269V7.44047C16.0375 7.88848 17.0833 9.1878 17.0833 10.7397V14.8538C17.0833 16.775 15.4905 18.3327 13.5268 18.3327H6.47399C4.50945 18.3327 2.91666 16.775 2.91666 14.8538V10.7397C2.91666 9.1878 3.96328 7.88848 5.39773 7.44047V6.16269C5.4062 3.67834 7.46388 1.66602 9.98729 1.66602ZM9.99576 11.1529C9.5893 11.1529 9.25906 11.4759 9.25906 11.8734V13.7118C9.25906 14.1176 9.5893 14.4405 9.99576 14.4405C10.4107 14.4405 10.7409 14.1176 10.7409 13.7118V11.8734C10.7409 11.4759 10.4107 11.1529 9.99576 11.1529ZM10.0042 3.11522C8.28526 3.11522 6.88807 4.47333 6.8796 6.14612V7.26077H13.1204V6.16269C13.1204 4.48161 11.7232 3.11522 10.0042 3.11522Z"
                fill="#314252"/>
        </svg>


    )
}
const RewardCard = ({claimCoin, allowedDay, dailyReward, completed, claimed = false}) => {


    return (
        <div
            className={`relative w-[72px] h-[100px] ${allowedDay && "bg-[url('/assets/images/reward-bg.png')] bg-center bg-cover rounded-lg"}`}>
            <div
                className={`relative group rounded-lg p-[6px] cursor-pointer app-text-primary ${allowedDay ? 'bg-[#FFA600]/80 text-white ' : 'bg-white'} `}>
                <div className="text-center">
                    <p>{claimed ? "Claimed" : "Day " + dailyReward.day}</p>
                    <p className="flex items-center justify-center my-1 z-10"> {allowedDay &&
                        <CoinIcon/>}</p>
                    <p className={`${!allowedDay && "mt-[28px]"}`}>+{dailyReward.coin}</p>
                    <p>Coins</p>
                </div>
                {(allowedDay && !claimed)
                    &&
                    <button disabled={completed < 5} type="button" onClick={() => claimCoin(dailyReward.day)}
                            className='absolute w-full hidden group-hover:flex group-hover:justify-center app-text-primary gap-1 bg-[#EFE9DB] p-2 rounded-md left-0 -bottom-9'>
                        {(completed < 5) && <LockIcon/>}
                        <span>Claim</span>
                    </button>

                }

            </div>
        </div>)
}

const Reward = ({reward, completed}) => {

    const response = usePage().props.response ?? [];
    const handleClaimCoin = (day) => {
        router.get(route('reward.store', day))
    }
    const getAllowedDay = (day) => {

        const givenDate = new Date(reward.last_complete_date);

        const currentDate = new Date();

        const yesterdayDate = new Date(currentDate);
        yesterdayDate.setDate(currentDate.getDate() - 1);

        const givenDateOnly = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate());
        const yesterdayDateOnly = new Date(yesterdayDate.getFullYear(), yesterdayDate.getMonth(), yesterdayDate.getDate());
        const todayDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

        if (givenDateOnly.getTime() === yesterdayDateOnly.getTime() && day === reward.last_completed_day + 1) {
            return true
        }
        if (givenDateOnly.getTime() === todayDateOnly.getTime() && day === reward.last_completed_day) {
            return true
        } else {
            return givenDateOnly.getTime() !== todayDateOnly.getTime() && givenDateOnly.getTime() !== yesterdayDateOnly.getTime() && day === 1;
        }


    }


    return (<>
        <Head title="Daily Reward | Maketop"/>

        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Daily Reward</h2>}
        >

            <div className='flex justify-between gap-x-20 flex-col min-h-screen'>
                <div>
                    <div className='max-w-[454px]'>
                        <div className="flex text-xs leading-[14px] mb-2 md:mb-[30px]">
                            <Link href='/' className='text-t-disabled'>Home/</Link>
                            <Link className='text-t-secondary'>Daily Reward</Link>
                        </div>


                        <div>
                            <h2 className='app-subtitle mb-2.5 sm:mb-5'>
                                Complete at last 5 Task to unlock your today's Reward!
                            </h2>
                            <Progress value={completed > 5 ? 5 : completed} max="5" light dataHor/>
                        </div>

                        <div className="mt-5">
                            <h2 className='app-subtitle mb-2.5 sm:mb-5'>
                                Daily Reward
                            </h2>
                            <p className='app-text-primary'>Come back every day to get better rewards!</p>
                        </div>
                    </div>
                    <div className="flex gap-[10px] mt-5">
                        {dailyRewards.map((dailyReward, index) => (
                            <RewardCard key={index}
                                        dailyReward={dailyReward}
                                        claimed={reward.last_completed_day >= dailyReward.day}
                                        allowedDay={getAllowedDay(dailyReward.day)}
                                        completed={completed}
                                        claimCoin={handleClaimCoin}/>))}
                    </div>
                    <div
                        className={`${!(response['success'] ?? true) ? 'flex' : 'hidden'} items-center justify-between mt-5 sm:mt-[30px] gap-2 w-[420px] px-2 sm:px-2.5 py-1.5 sm:py-2 rounded sm:rounded-md bg-warning`}>
                        <div className="flex items-center gap-1.5">
                            <InfoIcon color='#FFFFFF' className={`w-4 h-4 md:w-5 md:h-5`}/>
                            <span
                                className='text-xs leading-[14px] sm:text-sm text-white'>{response['message']}</span>
                        </div>

                    </div>
                    <div
                        className={`${(response['success'] ?? false) ? 'flex' : 'hidden'} flex items-center justify-between mt-5 sm:mt-[30px] gap-2 w-[420px] px-2 sm:px-2.5 py-1.5 sm:py-2 rounded sm:rounded-md bg-[#00b47d]`}>
                        <div className="flex items-center gap-1.5">
                            <Check color='#FFFFFF' className={`w-4 h-4 md:w-5 md:h-5`}/>
                            <span
                                className='text-xs leading-[14px] sm:text-sm text-white'>{response['message']}</span>
                        </div>

                    </div>
                </div>

                <Footer/>


            </div>

        </AuthenticatedLayout>


    </>);
}

export default Reward;
