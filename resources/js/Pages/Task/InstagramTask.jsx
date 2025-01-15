import {Head, Link, router, useForm, usePage} from '@inertiajs/react';
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
import {accountType, taskType} from "@/Components/Constant/index.js"
import InfoIcon from "@/Components/SvgIcons/Info.jsx";
import {useState} from "react";
import Error from "@/Components/Error/Error.jsx";
import Success from "@/Components/Toast/Success.jsx";

const InstagramTask = ({account}) => {

    const props = usePage().props
    const [success, setSuccess] = useState(false)


    const {data, setData, errors, post, progress, processing} = useForm({
        account_type: accountType.instagram,
        task_type: route().params.type ?? taskType.like,
        allow_user: '1',
        coin: '7',
        task_url: route().params.type === taskType.follow ? account?.account_url : null,
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
        if (data.task_type === taskType.follow) {
            return <FollowerIcon className='h-4 sm:h-5'/>
        }
        if (data.task_type === taskType.like) {
            return <LikeIcon className='h-4 sm:h-5'/>
        }
        if (data.task_type === taskType.save) {
            return <SaveIcon className='h-4 sm:h-5'/>
        }
        if (data.task_type === taskType.comment) {
            return <CommentIcon className='h-4 sm:h-5'/>
        }
    }
    return (
        <>
            <Head title="Create Instagram Task | Maketop.me"/>

            <AuthenticatedLayout
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Instagram</h2>}
            >

                <div className='flex justify-between gap-20 flex-col min-h-screen'>
                    <div>
                        <div className="flex text-xs leading-[14px] mb-[14px]">
                            <Link href='/' className='text-t-disabled'>Home/</Link>
                            <Link className='text-t-secondary'>Create Task</Link>
                        </div>

                        <h2 className='app-subtitle'>
                            Create Task for Instagram:
                        </h2>

                        <div className="flex items-center justify-start gap-[10px] mb-[30px]">
                            <Link href={route('facebook.create', {type: taskType.follow})}
                                  className={`${data.task_type === taskType.follow ? 'bg-card-and-hover' : ' bg-side-and-button'} px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                            >Followers
                            </Link>
                            <Link href={route('facebook.create', {type: taskType.like})}
                                  className={`${data.task_type === taskType.like ? 'bg-card-and-hover' : ' bg-side-and-button'} px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                            >Likes
                            </Link>
                            <Link href={route('facebook.create', {type: taskType.comment})}
                                  className={`${data.task_type === taskType.comment ? 'bg-card-and-hover' : ' bg-side-and-button'} px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                            >Comments
                            </Link>
                        </div>

                        <form onSubmit={handleSubmit} className='max-w-[454px]'>
                            <div className='mb-4 sm:mb-6'>
                                <LabelField content="Link to Facebook Profile"/>
                                <InputBox value={data.task_url} onChange={e => setData('task_url', e.target.value)}
                                          placeholder='https://www.example.net/example'
                                          iconPrev={<Copy className='h-4 sm:h-5'/>}/>
                                {errors.task_url && <ErrorField className="mt-[14px]" content={errors.task_url}/>}
                            </div>
                            <div className='mb-5 sm:mb-[30px]'>

                                <LabelField content="Number of Like"/>
                                <InputBox value={data.allow_user} onChange={e => setData('allow_user', e.target.value)}
                                          placeholder='1' iconPrev={coinIcon()}
                                          coin={data.allow_user ? data.allow_user * data.coin : data.coin}/>

                            </div>

                            {!account && <div
                                className='flex items-center justify-between mt-5 sm:mt-[30px] gap-2 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded sm:rounded-md bg-warning mb-4'>
                                <div className="flex items-center gap-1.5">
                                    <InfoIcon color='#FFFFFF' className={`w-4 h-4 md:w-5 md:h-5`} />
                                    <span className='text-xs leading-[14px] sm:text-sm text-white'>Add Your Instagram Profile URL First!</span>
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

                    <Footer/>

                </div>

            </AuthenticatedLayout>
        </>
    );
}

export default InstagramTask;
