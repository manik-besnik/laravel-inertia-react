import {Link} from '@inertiajs/react';
import Copy from "@/Components/SvgIcons/Copy"
import InputBox from '@/Components/InputBox';
import TextField from '@/Components/TextField';
import Footer from '@/Components/Footer';
import ArrowRight from '@/Components/SvgIcons/ArrowRight';
import CoinIcon from '@/Components/SvgIcons/Coin';
import InfoIcon from '@/Components/SvgIcons/Info';
import CloseIcon from '@/Components/SvgIcons/Close';
import {useEffect, useState} from "react";
import axios from "axios";
import Check from "@/Components/SvgIcons/Check.jsx";
import {accountType} from "@/Components/Constant/index.js";


const TaskDetail = ({task, user}) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isUrlClicked, setIsUrlClicked] = useState(false);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const handleMessage = async (event) => {

            const {type, payload} = event.data;

            if (event.origin === window.location.origin && type === 'MAKETOP_TASK') {

                const data = localStorage.getItem(type)

                if (!data) {
                    return;
                }
                const taskData = JSON.parse(atob(data))

                if (taskData?.task_type && taskData.task_type === payload.task_type && taskData.account_type === payload.account_type) {
                    const {message, coin} = await handleSubmitTask()
                    localStorage.removeItem(type)
                    window.postMessage({type: 'MAKETOP_TASK_COMPLETED', payload: message}, '*');
                    window.postMessage({type: 'COIN_UPDATE', payload: coin}, '*');
                }


            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    const submitCustomTask = async () => {
        const {message, coin} = await handleSubmitTask()
        localStorage.removeItem(type)
        window.postMessage({type: 'MAKETOP_TASK_COMPLETED', payload: message}, '*');
        window.postMessage({type: 'COIN_UPDATE', payload: coin}, '*');
    }


    const handleSubmitTask = async () => {
        setLoading(true)

        if (loading) {
            return;
        }

        const response = await axios.get(route('task.complete', task.id), {
            params: {is_clicked: isUrlClicked}
        })

        if (response.status === 200) {
            setLoading(false)
            setError(!response.data.is_success)
            setSuccess(response.data.is_success)
            setMessage(response.data.message)
        }
        setLoading(false);

        return {
            message: response?.data?.message,
            coin: response?.data?.coin,
        };
    }

    const setTaskDetails = (task) => {

        const data = {
            user_id: user.id,
            task_id: task.id,
            task_type: task.task_type,
            account_type: task.account_type,
            task_url: task.task_url,
        }

        setIsUrlClicked(true)

        const taskData = btoa(JSON.stringify(data))

        localStorage.setItem('MAKETOP_TASK', taskData)

        window.open(task.task_url, '_blank');

    }

    return (
        <>


            <div className='flex justify-between gap-20 flex-col min-h-screen'>
                <div>
                    <div className="flex text-xs leading-[14px] mb-[14px]">
                        <Link href='/' className='text-t-disabled'>Home/</Link>
                        <Link href={route('task.index')} className='text-t-secondary'>All Task</Link>
                    </div>

                    <h2 className='text-text-primary text-[17px] font-semibold leading-[20px] mb-[30px]'>Assignment: {task.title}</h2>


                    <div className='max-w-[454px]'>
                        <div className='mb-4 sm:mb-6'>
                            <TextField className={'mb-[10px] sm:mb-[14px]'} content="1. Click on The Link:"/>
                            <InputBox readOnly
                                      value={task.task_url}
                                      placeholder={task.task_url}
                                      iconPrev={<Copy className='h-4 sm:h-5'/>}
                                      btn={<button type="button" onClick={() => setTaskDetails(task)}
                                                   className='flex gap-[6px] font-medium text-xs sm:text-sm leading-[14px] sm:leading-[20px] text-text-primary whitespace-nowrap justify-center items-center px-3 bg-card-and-hover h-[36px]'>
                                          <ArrowRight className='h-4 sm:h-5'/>
                                      </button>}
                            />
                        </div>

                        <div className={`${task.is_complete && 'hidden'} mb-5 sm:mb-[30px]`}>
                            <TextField className={'mb-4 sm:mb-6'} content={"2. " + task.title}/>
                            <TextField content="3. After Complete the Task Click on The “Earn Coin” Button."/>
                            <p className='mt-2.5 sm:mt-[14px] rounded-md p-2 sm:p-2.5 text-[10px] leading-[12px] sm:text-[12px] sm:leading-[14px] text-t-secondary bg-side-and-button'>Ensure
                                that you do not delete any likes, comments, or tasks after completing an assignment.
                                Our team checks deletions. A lifetime ban is imposed upon deletion.</p>
                        </div>

                        {task.account_type === accountType.custom ? (
                            <button onClick={() => submitCustomTask()} disabled={loading}
                                    className={`${loading && 'cursor-not-allowed'}  flex items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] bg-side-and-button text-xs sm:text-sm leading-[14px] sm:leading-[20px] text-text-primary font-medium hover:bg-card-and-hover`}
                            >
                                <CoinIcon/>
                                Earn {task.coin * 0.5} Coin
                            </button>) : (
                            <button onClick={() => setTaskDetails(task)} disabled={loading}
                                    className={`${loading && 'cursor-not-allowed'}  flex items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] bg-side-and-button text-xs sm:text-sm leading-[14px] sm:leading-[20px] text-text-primary font-medium hover:bg-card-and-hover`}
                            >
                                <CoinIcon/>
                                Earn {task.coin * 0.5} Coin
                            </button>
                        )}

                    </div>

                    <div
                        className={`${error ? 'flex' : 'hidden'} items-center justify-between mt-5 sm:mt-[30px] gap-2 w-[288px] sm:w-[345px] px-2 sm:px-2.5 py-1.5 sm:py-2 rounded sm:rounded-md bg-warning`}>
                        <div className="flex items-center gap-1.5">
                            <InfoIcon color='#FFFFFF' className={`w-4 h-4 md:w-5 md:h-5`}/>
                            <span
                                className='text-xs leading-[14px] sm:text-sm text-white'>{message}</span>
                        </div>

                        <button onClick={() => setError(false)}>
                            <CloseIcon className="h-4 w-4 sm:h-5 sm:w-5" color='#ffffff'/>
                        </button>
                    </div>
                    <div
                        className={`${success ? 'flex' : 'hidden'} flex items-center justify-between mt-5 sm:mt-[30px] gap-2 w-[288px] sm:w-[345px] px-2 sm:px-2.5 py-1.5 sm:py-2 rounded sm:rounded-md bg-[#00b47d]`}>
                        <div className="flex items-center gap-1.5">
                            <Check color='#FFFFFF' className={`w-4 h-4 md:w-5 md:h-5`}/>
                            <span
                                className='text-xs leading-[14px] sm:text-sm text-white'>{message}</span>
                        </div>

                        <button onClick={() => setSuccess(false)}>
                            <CloseIcon className="h-4 w-4 sm:h-5 sm:w-5" color='#ffffff'/>
                        </button>
                    </div>

                </div>

                <Footer/>

            </div>


        </>
    );
}

export default TaskDetail;
