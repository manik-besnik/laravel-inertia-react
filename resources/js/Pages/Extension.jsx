import React, {useEffect} from 'react'
import {Head} from "@inertiajs/react";

const Extension = () => {

    useEffect(() => {
        const handleMessage = async (event) => {

            const {type, payload} = event.data;

            if (type === 'MAKETOP_TASK_COMPLETED') {
                alert(payload)
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);


    return (
        <>
            <Head title="Extension"/>
            <div className='min-h-screen flex items-center justify-center text-center'>

                <div className='p-5 max-w-[440px] select-none'>
                    Welcome To Maketop
                </div>

            </div>
        </>

    )
}

export default Extension
