import {usePage} from "@inertiajs/react";
import CoinIcon from "@/Components/SvgIcons/Coin.jsx";
import CheckIcon from "@/Components/SvgIcons/Check.jsx";
import FollowerIcon from "@/Components/SvgIcons/Follower.jsx";
import LikeIcon from "@/Components/SvgIcons/Like.jsx";
import SaveIcon from "@/Components/SvgIcons/Save.jsx";
import SubscribeIcon from "@/Components/SvgIcons/Subscribe.jsx";
import CommentIcon from "@/Components/SvgIcons/Comment.jsx";
import DribbbleIcon from "@/Components/SvgIcons/Social/DribbbleIcon.jsx";
import LinkedinIcon from "@/Components/SvgIcons/Social/LinkedinIcon.jsx";
import YoutubeIcon from "@/Components/SvgIcons/Social/YoutubeIcon.jsx";
import InstagramIcon from "@/Components/SvgIcons/Social/InstagramIcon.jsx";
import BehanceIcon from "@/Components/SvgIcons/Social/BehanceIcon.jsx";
import MediumIcon from "@/Components/SvgIcons/Social/MediumIcon.jsx";
import TwitterIcon from "@/Components/SvgIcons/Social/TwitterIcon.jsx";
import ArtStationIcon from "@/Components/SvgIcons/Social/ArtStationIcon.jsx";
import FacebookIcon from "@/Components/SvgIcons/Social/FacebookIcon.jsx";
import TiktokIcon from "@/Components/SvgIcons/Social/TiktokIcon.jsx";
import {accountType} from "@/Components/Constant/index.js";

export default function SingleTask({task,onClick}) {

    const {setting_data} = usePage().props

    const isCompleted = () => {
        return usePage().props.completed.includes(task.id);
    }

    const taskButton = {
        follow: {
            icon: <FollowerIcon className='h-4 sm:h-5'/>,
            text: 'Follow'
        },
        clap: {
            icon: <LikeIcon className='h-4 sm:h-5'/>,
            text: 'Clap'
        },
        like: {
            icon: <LikeIcon className='h-4 sm:h-5'/>,
            text: 'Like'
        },
        save: {
            icon: <SaveIcon className='h-4 sm:h-5'/>,
            text: 'Save'
        },
        comment: {
            icon: <CommentIcon className='h-4 sm:h-5'/>,
            text: 'Comment'
        },
        subscribe: {
            icon: <SubscribeIcon className='h-4 sm:h-5'/>,
            text: 'Subscribe'
        }

    }

    const taskIcon = {
        dribbble: <DribbbleIcon/>,
        facebook: <FacebookIcon/>,
        linkedin: <LinkedinIcon/>,
        youtube: <YoutubeIcon/>,
        instagram: <InstagramIcon/>,
        behance: <BehanceIcon/>,
        medium: <MediumIcon/>,
        twitter: <TwitterIcon/>,
        tiktok: <TiktokIcon/>,
        artstation: <ArtStationIcon/>,
    }

    return (
        <div onClick={onClick}
            className='cursor-pointer p-2 md:p-4 mb-1.5 md:mb-2.5 rounded-md md:rounded-lg bg-white flex justify-between items-center gap-6'>

            <div className="flex items-center gap-2.5 md:gap-4">
                {(task.account_type === accountType.custom && setting_data?.custom_task_icon) ? (
                    <img className="w-9 h-9 rounded" alt="Task Icon"
                         src={setting_data?.custom_task_icon}/>) : taskIcon[task.account_type]}

                <div>
                    <p className='text-[8px] md:text-xs leading-[9px] md:leading-[14px] font-medium text-t-secondary capitalize'>{task.account_type} </p>
                    <p className='text-[10px] leading-[12px] font-medium text-text-primary md:text-sm md:leading-[20px] capitalize'>{task.task_type}</p>
                </div>
            </div>

            <div
                className='flex justify-center items-center gap-1.5 whitespace-nowrap py-2 px-3 font-medium text-xs md:text-sm text-coin'>
                <CoinIcon color='#FFA600' className={`w-4 h-4 md:w-5 md:h-5`}/>
                <span>{isCompleted() && 'Earned'} {task.coin/2}</span>
            </div>

            <div className="flex items-center justify-start gap-[10px]">
                <button
                    className={`${isCompleted() ? 'hidden' : 'flex'}  bg-side-and-button items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                >
                    {taskButton[task.task_type] ? taskButton[task.task_type]?.icon : ''}
                    {taskButton[task.task_type] ? taskButton[task.task_type]?.text : task.task_type}
                </button>

                <button disabled={true}
                        className={`${isCompleted() ? 'flex' : 'hidden'} bg-side-and-button items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium cursor-not-allowed text-text-primary opacity-70`}>
                    <CheckIcon/>
                    Completed
                </button>

            </div>

        </div>
    )
}
