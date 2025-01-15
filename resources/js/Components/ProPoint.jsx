import React from 'react'
import { proPoint } from "@/Components/Constant/index.js"
import Coin from '@/Components/SvgIcons/Coin';

export default function ProPoint() {

    const handleProPoint = (clickContent) => {
        console.log(clickContent)
    }


    return (
        <>
            <h2 className='app-subtitle mb-2.5 sm:mb-5'>Get Pro-Point</h2>

            <div className="bg-white rounded-lg p-[14px] sm:rounded-2xl sm:p-6 mb-5 md:mb-[30px] flex flex-wrap gap-y-2.5">

                <div className='flex w-full xl:w-[40%] border border-main-outline lg:border-r-0 rounded-lg xl:rounded-r-none'>
                    {proPoint.map((pro, i) => <div key={i}
                        className={`
                            ${pro.recommended && 'bg-side-and-button'}
                            ${i > 1 && 'hidden'} 
                            ${i == 1 && 'border-r-0'}
                            w-full text-center border-r border-main-outline`}>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='flex items-center gap-1.5 app-text-primary text-t-secondary justify-center'>
                                <Coin color='#FFA600' className='h-4 md:h-5' />
                                {pro.coin} Coins
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='flex items-center gap-1.5 app-text-primary text-t-secondary justify-center'>
                                Per Coin {pro.perCoin}
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='flex items-center gap-1.5 app-text-primary text-t-secondary justify-center'>
                                {pro.discount}% Discount
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='flex items-center gap-1.5 app-text-primary text-t-secondary justify-center'>
                                {pro.completion}
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='flex items-center gap-1.5 app-text-primary text-t-secondary justify-center'>
                                <span className='line-through text-t-disabled'>{pro.price !== pro.discountPrice && `$${pro.price}`}</span> {`$${pro.discountPrice}`}
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center'>
                            <button onClick={() => handleProPoint(pro)}
                                className={`${pro.recommended && 'bg-white'} app-btn`}
                            >
                                Get Now
                            </button>
                        </div>
                    </div>)}
                </div>
                <div className='flex w-full xl:w-[40%] border border-main-outline xl:border-r-0 rounded-lg xl:rounded-none'>
                    {proPoint.map((pro, i) => <div key={i}
                        className={`${pro.recommended && 'bg-side-and-button'} 
                            ${i < 2 && 'hidden'}
                            ${i > 3 && 'hidden'}
                            ${i == 3 && 'border-r-0'}
                            w-full text-center border-r border-main-outline`}>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='flex items-center gap-1.5 app-text-primary text-t-secondary justify-center'>
                                <Coin color='#FFA600' className='h-4 md:h-5' />
                                {pro.coin} Coins
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='flex items-center gap-1.5 app-text-primary text-t-secondary justify-center'>
                                Per Coin {pro.perCoin}
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='flex items-center gap-1.5 app-text-primary text-t-secondary justify-center'>
                                {pro.discount}% Discount
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='flex items-center gap-1.5 app-text-primary text-t-secondary justify-center'>
                                {pro.completion}
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='flex items-center gap-1.5 app-text-primary text-t-secondary justify-center'>
                                <span className='line-through text-t-disabled'>{pro.price !== pro.discountPrice && `$${pro.price}`}</span> {`$${pro.discountPrice}`}
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center'>
                            <button onClick={() => handleProPoint(pro)}
                                className={`${pro.recommended && 'bg-white'} app-btn`}
                            >
                                Get Now
                            </button>
                        </div>
                    </div>)}
                </div>
                <div className='flex w-full xl:w-[20%] max-w-[50%] border border-r-0 border-main-outline rounded-lg xl:rounded-l-none overflow-hidden'>
                    {proPoint.map((pro, i) => <div key={i} className={`${pro.recommended && 'bg-side-and-button'} ${i < 4 && 'hidden'} w-full text-center border-r border-main-outline`}>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='flex items-center gap-1.5 app-text-primary text-t-secondary justify-center'>
                                <Coin color='#FFA600' className='h-4 md:h-5' />
                                {pro.coin} Coins
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='flex items-center gap-1.5 app-text-primary text-t-secondary justify-center'>
                                Per Coin {pro.perCoin}
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='flex items-center gap-1.5 app-text-primary text-t-secondary justify-center'>
                                {pro.discount}% Discount
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='flex items-center gap-1.5 app-text-primary text-t-secondary justify-center'>
                                {pro.completion}
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center border-b border-main-outline'>
                            <p className='flex items-center gap-1.5 app-text-primary text-t-secondary justify-center'>
                                <span className='line-through text-t-disabled'>{pro.price !== pro.discountPrice && `$${pro.price}`}</span> {`$${pro.discountPrice}`}
                            </p>
                        </div>
                        <div className='py-2.5 md:py-4 px-4 md:px-5 text-center'>
                            <button onClick={() => handleProPoint(pro)}
                                className={`${pro.recommended && 'bg-white'} app-btn`}
                            >
                                Get Now
                            </button>
                        </div>
                    </div>)}
                </div>

            </div>
        </>
    )
}
