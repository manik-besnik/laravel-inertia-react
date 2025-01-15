import {Link, usePage} from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import GoProIcon from '@/Components/SvgIcons/GoPro';
import CoinIcon from '@/Components/SvgIcons/Coin';
import BarIcon from '@/Components/SvgIcons/Bar';
import Avatar from "@/Components/SvgIcons/Avatar.jsx";
import {useEffect, useState} from "react";

export default function NavBar({useToggleSideNav}) {


    const user = usePage().props.auth.user;


    const [userCoin, setUserCoin] = useState(user.coin)

    useEffect(() => {
        const handleMessage = async (event) => {

            const {type, payload} = event.data;

            if (event.origin === window.location.origin && type === 'COIN_UPDATE') {
                setUserCoin(payload)
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);


    return (
        <div className='flex justify-between py-1.5 px-4 lg:py-4 bg-white lg:rounded-[8px]'>

            <div className='hidden lg:flex items-center gap-[10px]'>
                <Link href={route('task.index')}
                      className={`${route().current() === 'task.index' && 'bg-card-and-hover'} px-3 py-2 text-[14px] font-medium leading-[20px] text-text-primary hover:bg-side-and-button rounded-md`}>All
                    Task
                </Link>
                <Link href={route('task.my-task')}
                      className={`${route().current() === 'task.my-task' && 'bg-card-and-hover'} px-3 py-2 text-[14px] font-medium leading-[20px] text-text-primary hover:bg-side-and-button rounded-md`}>My
                    Task
                </Link>
                <Link href={route('reward.index')}
                      className={`${route().current() === 'reward.index' && 'bg-card-and-hover'} px-3 py-2 text-[14px] font-medium leading-[20px] text-text-primary hover:bg-side-and-button rounded-md`}>Daily
                    Reward
                </Link>
            </div>

            <button className='lg:hidden' onClick={() => useToggleSideNav(true)}>
                <BarIcon/>
            </button>


            <div className='flex items-center gap-5'>
                <div
                    className='flex justify-center items-center gap-1.5 py-2 px-3 rounded-md font-medium text-xs lg:text-sm text-coin'>
                    <CoinIcon color='#FFA600' className={`w-4 h-4 md:w-5 md:h-5`}/>
                    <span>Balance:{userCoin ? userCoin : user.coin}</span>
                </div>
                <Link href={route('pricing')}
                      className='hidden md:flex justify-center items-center gap-1.5 py-2 px-3 rounded-md border border-focus-outline bg-main-and-focus font-medium text-sm text-text-primary'>
                    <GoProIcon/>
                    <span>Pro account/Points</span>
                </Link>

                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 font-medium text-xs md:text-sm text-text-primary"
                            >
                                <span>Profile</span>

                                {user.avatar ?
                                    <img className='h-5 w-5 md:h-9 md:w-9 border border-focus-outline rounded'
                                         src={user.avatar} alt={user.name}/> : <Avatar width="20" height="20"/>}
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <Dropdown.Link href={route('profile.edit')}>
                            Profile
                            <p className='text-xs text-t-secondary'>{user.email}</p>
                        </Dropdown.Link>
                        <Dropdown.Link href={route('refer.index')}>
                            Referrals
                        </Dropdown.Link>
                        <Dropdown.Link href={route('logout')} method="post" as="button">
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </div>
    );
}
