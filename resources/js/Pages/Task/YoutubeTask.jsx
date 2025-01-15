import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Copy from "@/Components/SvgIcons/Copy"
import LikeIcon from "@/Components/SvgIcons/Like"
import CommentIcon from "@/Components/SvgIcons/Comment"
import SubscribeIcon from "@/Components/SvgIcons/Subscribe"
import InputBox from '@/Components/InputBox';
import LabelField from '@/Components/LabelField';
import TextField from '@/Components/TextField';
import Footer from '@/Components/Footer';
import ErrorField from '@/Components/ErrorField';
import { accountType, taskType } from "@/Components/Constant/index.js"
import InfoIcon from "@/Components/SvgIcons/Info.jsx";
import Error from "@/Components/Error/Error.jsx";
import { useState } from "react";
import Success from "@/Components/Toast/Success.jsx";
import { getTaskCoin } from "@/Components/Helper/index.js";

const tabs = [
    {
        name: 'Subscribers',
        typeOfTask: taskType.subscribe,
        isComing: false
    },
    {
        name: 'Likes',
        typeOfTask: taskType.like,
        isComing: false
    },
    {
        name: 'Comments',
        typeOfTask: taskType.comment,
        isComing: false
    },
]

const YoutubeTask = ({ account }) => {

    const props = usePage().props;

    const [success, setSuccess] = useState(false)

    const { data, setData, errors, post, progress, processing } = useForm({
        account_type: accountType.youtube,
        task_type: route().params.type ?? taskType.subscribe,
        allow_user: '1',
        coin: getTaskCoin(route().params.type),
        task_url: route().params.type === taskType.subscribe ? account?.account_url : null,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('task.store'), {
            onSuccess: () => {
                setSuccess(true);
                setTimeout(() => {
                    router.get(route('task.index'))
                }, 5000);
            }
        })
    }


    const coinIcon = () => {

        if (data.task_type === taskType.like) {
            return <LikeIcon className='h-4 sm:h-5' />
        }
        if (data.task_type === taskType.comment) {
            return <CommentIcon className='h-4 sm:h-5' />
        }
        if (data.task_type === taskType.subscribe) {
            return <SubscribeIcon className='h-4 sm:h-5' />
        }
    }
    return (
        <>
            <Head title="Youtube Task | Maketop.me" />

            <AuthenticatedLayout
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Youtube</h2>}
            >

                <div className='flex justify-between gap-20 flex-col min-h-screen'>
                    <div>
                        <div className="flex text-xs leading-[14px] mb-[14px]">
                            <Link href='/' className='text-t-disabled'>Home/</Link>
                            <Link className='text-t-secondary'>Create Task</Link>
                        </div>

                        <h2 className='app-subtitle'>Create Task for Youtube:</h2>

                        <div className="flex items-center justify-start gap-[10px] mb-[30px]">

                            {
                                tabs.map((tab, idx) => (
                                    <Link key={idx} href={tab.isComing ? '' : route('youtube.create', { type: tab.typeOfTask })}
                                        className={`${data.task_type === tab.typeOfTask ? 'bg-card-and-hover' : ' bg-side-and-button'} ${tab.isComing && 'cursor-not-allowed'} group relative px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                                    >
                                        {tab.name}

                                        {
                                            tab.isComing ?
                                                <div className='absolute bottom-[110%] left-1/2 -translate-x-1/2 whitespace-nowrap hidden group-hover:block border border-main-outline bg-main-and-focus rounded py-1 px-1.5 text-[10px] leading-3 text-text-primary'>
                                                    Coming Soon
                                                </div> : null
                                        }
                                    </Link>
                                ))
                            }
                        </div>

                        <form onSubmit={handleSubmit} className='max-w-[454px]'>
                            <div className='mb-4 sm:mb-6'>
                                <LabelField content="Link to Youtube Channel" />
                                <InputBox value={data.task_url} onChange={e => setData('task_url', e.target.value)}
                                    placeholder='https://www.example.net/example'
                                    iconPrev={<Copy className='h-4 sm:h-5' />} />
                                {errors.task_url && <ErrorField className="mt-[14px]" content={errors.task_url} />}
                            </div>
                            <div className='mb-5 sm:mb-[30px]'>

                                <LabelField content="Number of Like" />
                                <InputBox value={data.allow_user} onChange={e => setData('allow_user', e.target.value)}
                                    placeholder='1' iconPrev={coinIcon()}
                                    coin={data.allow_user ? data.allow_user * data.coin : data.coin} />

                            </div>
                            {!account && <div
                                className='flex items-center justify-between mt-5 sm:mt-[30px] gap-2 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded sm:rounded-md bg-warning mb-4'>
                                <div className="flex items-center gap-1.5">
                                    <InfoIcon color='#FFFFFF' className={`w-4 h-4 md:w-5 md:h-5`} />
                                    <span className='text-xs leading-[14px] sm:text-sm text-white'>Add Your Youtube Channel First!</span>
                                </div>
                            </div>}

                            {props?.errors?.message && <Error message={props.errors.message} />}
                            {success && <Success message='Task Created Successfully' />}

                            <div className="flex justify-between items-center">
                                <TextField content="50% of that is commission of website" />
                                {account &&
                                    <button
                                        className='px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] bg-side-and-button text-xs sm:text-sm leading-[14px] sm:leading-[20px] text-text-primary font-medium hover:bg-card-and-hover'
                                        type="submit" disabled={processing}>Submit Task
                                    </button>}
                            </div>
                        </form>
                    </div>

                    <Footer />

                </div>

            </AuthenticatedLayout>

        </>
    );
}

export default YoutubeTask;
