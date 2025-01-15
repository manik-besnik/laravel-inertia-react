import {forwardRef, useEffect, useRef} from 'react';
import Coin from './SvgIcons/Coin';

export default forwardRef(function InputBox({
                                                btn,
                                                iconPrev,
                                                coin,
                                                type = 'text',
                                                className = '',
                                                isFocused = false,
                                                classes,
                                                ...props
                                            }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        // <input
        //     {...props}
        //     type={type}
        //     className={
        //         'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
        //         className
        //     }
        //     ref={input}
        // />

        <div
            className={`${classes} flex items-center rounded sm:rounded-[6px] h-[26px] sm:h-[36px] overflow-hidden`}>

            {
                iconPrev ? <div
                    className='flex justify-center items-center px-1.5 sm:px-3 bg-card-and-hover h-[26px] sm:h-[36px]'>
                    {iconPrev}
                </div> : null
            }


            <input {...props} type={type}
                   className='w-full h-[26px] sm:h-9 block border-none focus:ring-0 bg-side-and-button placeholder:text-t-secondary placeholder:text-xs sm:placeholder:text-sm placeholder:leading-[14px] sm:placeholder:leading-[20px] text-xs sm:text-sm text-t-secondary leading-[14px] sm:leading-[20px]'/>

            {btn}

            {
                coin ? <div
                    className='flex gap-[6px] font-medium text-xs sm:text-sm leading-[14px] sm:leading-[20px] text-text-primary whitespace-nowrap justify-center items-center px-3 bg-card-and-hover h-[36px]'>
                    <Coin className='h-4 sm:h-5'/> Coin {coin}
                </div> : null
            }


        </div>

    );
});
