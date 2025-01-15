import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Copy from "@/Components/SvgIcons/Copy"
import LikeIcon from "@/Components/SvgIcons/Like"
import FollowerIcon from "@/Components/SvgIcons/Follower"
import SaveIcon from "@/Components/SvgIcons/Save"
import CommentIcon from "@/Components/SvgIcons/Comment"
import InputBox from '@/Components/InputBox';
import LabelField from '@/Components/LabelField';
import TextField from '@/Components/TextField';
import Footer from '@/Components/Footer';
import ErrorField from '@/Components/ErrorField';
import { accountType, taskType } from "@/Components/Constant/index.js"
import ArrowRight from '@/Components/SvgIcons/ArrowRight';
import CoinIcon from '@/Components/SvgIcons/Coin';
import InfoIcon from '@/Components/SvgIcons/Info';
import CloseIcon from '@/Components/SvgIcons/Close';

const TaskDetails = ({ auth }) => {
    const { data, setData, errors, post, progress, processing } = useForm({
        isError: true,
        isComplete: false,
        task_url: 'https://www.youtube.com/watch?v=LB8KwiiUGy0',
    })




    return (
        <>
            <Head title="Test Details" />

            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Test Details</h2>}
            >

                <div className='flex justify-between gap-20 flex-col min-h-screen'>
                    <div>
                        <div className="flex text-xs leading-[14px] mb-[14px]">
                            <Link href='/' className='text-t-disabled'>Home/</Link>
                            <Link className='text-t-secondary'>Task</Link>
                        </div>

                        <h2 className='app-subtitle'>Assignment: Give a Like</h2>


                        <div className='max-w-[454px]'>
                            <div className='mb-4 sm:mb-6'>
                                <TextField className={'mb-[10px] sm:mb-[14px]'} content="1. Click on The Link:" />
                                <InputBox readOnly
                                    value={data.task_url}
                                    placeholder='https://www.example.net/example'
                                    iconPrev={<Copy className='h-4 sm:h-5' />}
                                    btn={<Link href={data.task_url} className='flex gap-[6px] font-medium text-xs sm:text-sm leading-[14px] sm:leading-[20px] text-text-primary whitespace-nowrap justify-center items-center px-3 bg-card-and-hover h-[36px]'>
                                        <ArrowRight className='h-4 sm:h-5' />
                                    </Link>}
                                />
                            </div>

                            <div className={`${data.isComplete && 'hidden'} mb-5 sm:mb-[30px]`}>
                                <TextField className={'mb-4 sm:mb-6'} content="2. Give a Like of Latest Post" />
                                <TextField content="3. After Complete the Task Click on The “Earn Coin” Button." />
                                <p className='mt-2.5 sm:mt-[14px] rounded-md p-2 sm:p-2.5 text-[10px] leading-[12px] sm:text-[12px] sm:leading-[14px] text-t-secondary bg-side-and-button'>Ensure that you do not delete any likes, comments, or tasks after completing an assignment. Our team checks deletions. A lifetime ban is imposed upon deletion.</p>
                            </div>
                            
                            <button
                                className='flex items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] bg-side-and-button text-xs sm:text-sm leading-[14px] sm:leading-[20px] text-text-primary font-medium hover:bg-card-and-hover'
                                disabled={processing}>
                                <CoinIcon />
                                Earn 2.00 Coin</button>

                        </div>

                        <div className={`${data.isError ? 'flex' : 'hidden'} items-center justify-between mt-5 sm:mt-[30px] gap-2 w-[288px] sm:w-[345px] px-2 sm:px-2.5 py-1.5 sm:py-2 rounded sm:rounded-md bg-warning`}>
                            <div className="flex items-center gap-1.5">
                                <InfoIcon color='#FFFFFF' className={`w-4 h-4 md:w-5 md:h-5`} />
                                <span className='text-xs leading-[14px] sm:text-sm text-white'>Your likes were not found. try again!</span>
                            </div>

                            <button onClick={() => setData('isError', false)}><CloseIcon className="h-4 w-4 sm:h-5 sm:w-5" color='#ffffff' /></button>
                        </div>

                    </div>

                    <Footer />

                </div>

            </AuthenticatedLayout>


        </>
    );
}

export default TaskDetails;
