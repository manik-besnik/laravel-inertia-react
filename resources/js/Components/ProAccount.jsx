import React, { useState } from 'react'
import { proPoint, proAccount } from "@/Components/Constant/index.js"
import Coin from '@/Components/SvgIcons/Coin';
import Checkbox from './Checkbox';

export default function ProAccount() {
    const [pro_6months, setPro_6months] = useState(false)
    const [pro_plus_6months, setPro_plus_6months] = useState(true)

    const handleProPoint = (accountType) => {
        console.log(accountType)
    }


    return (
        <>
            <h2 className='app-subtitle mb-2.5 sm:mb-5'>Get Pro-Account</h2>

            <div className="bg-white rounded-lg p-[14px] sm:rounded-2xl sm:p-6 mb-5 md:mb-[30px] flex flex-wrap sm:flex-nowrap gap-y-2.5">
                <div className='flex w-full sm:w-[67%] border border-main-outline rounded-md sm:rounded-r-none sm:rounded-l-lg overflow-hidden'>
                    <div className="w-full text-center border-r border-main-outline">
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline bg-side-and-button'>
                            <p className='app-text-primary text-t-secondary justify-center'>
                                Basic
                            </p>
                        </div>
                        <div className='py-5 md:py-[26px] px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='app-text-primary text-t-secondary justify-center'>
                                Free
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='app-text-primary text-t-secondary justify-center'>
                                <p className='text-warning'> No Bonus Coin</p>
                                <p className='text-[8px] leading-[9px] sm:text-[10px] sm:leading-[12px]'>Per completed task</p>
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='app-text-primary text-t-secondary justify-center'>
                                <span>100</span>
                                <p className='text-[8px] leading-[9px] sm:text-[10px] sm:leading-[12px]'>Fulfillment limit Per day</p>
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='app-text-primary text-t-secondary justify-center'>
                                <span>20</span>
                                <p className='text-[8px] leading-[9px] sm:text-[10px] sm:leading-[12px]'>Tasks Completion Per day</p>
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center'>
                            <button onClick={() => handleProPoint('pro')}
                                className='app-btn' >
                                Get Now
                            </button>
                        </div>
                    </div>
                    <div className="w-full text-center">
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline bg-side-and-button'>
                            <p className='app-text-primary text-t-secondary justify-center'>
                                Pro
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='app-text-primary text-t-secondary justify-center'>
                                <span>$2/monthly</span>
                                <div className='flex mt-1 h-4 items-center gap-1 justify-center text-[8px] leading-[9px] sm:text-[10px] sm:leading-[12px]'>
                                    <Checkbox small
                                        checked={pro_6months}
                                        onChange={(e) => setPro_6months(e.target.checked)}
                                    />
                                    6 months - $10
                                </div>
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='app-text-primary text-t-secondary justify-center'>
                                <p className='text-success'>+50% Bonus Coin</p>
                                <p className='text-[8px] leading-[9px] sm:text-[10px] sm:leading-[12px]'>Per completed task</p>
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='app-text-primary text-t-secondary justify-center'>
                                <span>100</span>
                                <p className='text-[8px] leading-[9px] sm:text-[10px] sm:leading-[12px]'>Fulfillment limit Per day</p>
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='app-text-primary text-t-secondary justify-center'>
                                <span>Unlimited</span>
                                <p className='text-[8px] leading-[9px] sm:text-[10px] sm:leading-[12px]'>Tasks Completion Per day</p>
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center'>
                            <button onClick={() => handleProPoint('pro')}
                                className='app-btn' >
                                Get Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex w-full sm:w-[33%] max-w-[50%] border sm:border-l-0 border-main-outline rounded-md sm:rounded-l-none sm:rounded-r-lg overflow-hidden'>
                    <div className="w-full text-center bg-side-and-button">
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline bg-focus-outline'>
                            <p className='app-text-primary text-t-secondary justify-center'>
                                Pro Plus
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='app-text-primary text-t-secondary justify-center'>
                                <span>$4/monthly</span>
                                <div className='flex mt-1 h-4 items-center gap-1 justify-center text-[8px] leading-[9px] sm:text-[10px] sm:leading-[12px]'>
                                    <Checkbox small
                                        checked={pro_plus_6months}
                                        onChange={(e) => setPro_plus_6months(e.target.checked)}
                                    />
                                    6 months - $20
                                </div>
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='app-text-primary text-t-secondary justify-center'>
                                <p className='text-success'>+50% Bonus Coin</p>
                                <p className='text-[8px] leading-[9px] sm:text-[10px] sm:leading-[12px]'>Per completed task</p>
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='app-text-primary text-t-secondary justify-center'>
                                <span>Unlimited</span>
                                <p className='text-[8px] leading-[9px] sm:text-[10px] sm:leading-[12px]'>Fulfillment limit Per day</p>
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='app-text-primary text-t-secondary justify-center'>
                                <span>Unlimited</span>
                                <p className='text-[8px] leading-[9px] sm:text-[10px] sm:leading-[12px]'>Tasks Completion Per day</p>
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center'>
                            <button onClick={() => handleProPoint('pro-plus')}
                                className='app-btn bg-white' >
                                Get Now
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
