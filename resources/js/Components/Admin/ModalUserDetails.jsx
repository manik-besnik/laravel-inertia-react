import React, {useState} from 'react'
import Select from "@/Components/Select.jsx"
import {getFormattedDate} from "@/Components/Helper/index.js";
import {userStatus} from "@/Components/Constant/index.js";
import {router} from "@inertiajs/react";

const status = [
    {id: 2, name: 'Free', value: userStatus.FREE},
    {id: 2, name: 'Basic', value: userStatus.BASIC},
    {id: 3, name: 'Pro', value: userStatus.PRO},
    {id: 3, name: 'Pro Plus', value: userStatus.PRO_PLUS},
    {id: 4, name: 'Band', value: userStatus.BAND}
]
const actions = [
    {name: 'Un Block', value: 'un_block'},
    {name: 'Block', value: 'block'},
    {name: 'Delete', value: 'delete'},
    {name: 'Refresh', value: 'refresh'}
]
const ModalUserDetails = ({user}) => {

    const userActionStatus = user?.is_block ? {name: 'Block', value: 'block'} :
        {name: 'Un Block', value: 'un_block'};

    const userCurrentStatus = status.find(item => item.value === user.status);

    const [selectedStatus, setSelectedStatus] = useState(userCurrentStatus)
    const [selectedAction, setSelectedAction] = useState(userActionStatus)
    const [coin, setCoin] = useState(0)
    const [userCoin, setUserCoin] = useState(user?.coin ? user.coin : 0)

    const handleUpdateUserStatus = (status) => {
        router.post(route('admin.users.update', user?.id), {status: status.value}, {
            onSuccess: () => {
                alert('User Status Updated to ' + status.value)
            }
        })
    }

    const handleUpdateCoin = () => {
        router.post(route('admin.users.update-coin', user?.id), {coin: coin}, {
            onSuccess: () => {
                const totalCoin = parseFloat(userCoin) + parseFloat(coin);
                setUserCoin(totalCoin)
                alert('User Coin Updated')
            }
        })
    }
    const handleUpdateAction = (action) => {
        router.post(route('admin.users.update-action', user?.id), {action: action.value}, {
            onSuccess: () => {
                alert('User Action Updated to ')
            }
        })
    }

    return (
        <div>
            <h4 className='mb-6 subtitle font-semibold text-text-primary'>User Details</h4>
            <div className="flex gap-5">
                <img src={user?.avatar} alt="user-image"
                     className='h-[100px] w-[100px] rounded-2xl object-cover object-center border border-focus-outline'/>
                <div className='w-full'>
                    <div className='flex border-b border-b-focus-outline pb-3 gap-3'>
                        <p className='basis-1/3 text-sm font-medium text-text-primary'>Name: </p>
                        <p className='basis-2/3 text-sm font-medium text-text-primary'>{user?.name}</p>
                    </div>
                    <div className='flex border-b border-b-focus-outline py-3 gap-3'>
                        <p className='basis-1/3 text-sm font-medium text-text-primary'>Username: </p>
                        <p className='basis-2/3 text-sm font-medium text-text-primary'>{user?.username}</p>
                    </div>
                    <div className='flex border-b border-b-focus-outline py-3 gap-3'>
                        <p className='basis-1/3 text-sm font-medium text-text-primary'>Email: </p>
                        <p className='basis-2/3 text-sm font-medium text-text-primary'>{user?.email}</p>
                    </div>
                    <div className='flex border-b border-b-focus-outline py-3 gap-3'>
                        <p className='basis-1/3 text-sm font-medium text-text-primary'>Join Date: </p>
                        <p className='basis-2/3 text-sm font-medium text-t-disabled'>
                            {getFormattedDate(user?.created_at)}
                        </p>
                    </div>
                    <div className='flex border-b border-b-focus-outline py-3 gap-3'>
                        <p className='basis-1/3 text-sm font-medium text-text-primary'>Status: </p>
                        <div className='basis-2/3 text-sm font-medium text-green-700'>
                            <Select items={status} selected={selectedStatus} setSelected={setSelectedStatus}
                                    handleValueChange={handleUpdateUserStatus}/>
                        </div>
                    </div>
                    <div className='flex border-b border-b-focus-outline py-3 gap-3'>
                        <p className='basis-1/3 text-sm font-medium text-text-primary'>Action: </p>
                        <div className='basis-2/3 text-sm font-medium text-green-700'>
                            <Select items={actions} selected={selectedAction} setSelected={setSelectedAction}
                                    handleValueChange={handleUpdateAction}/>
                        </div>

                    </div>
                    {/*<div className='flex border-b border-b-focus-outline py-3 gap-3'>*/}
                    {/*    <p className='basis-1/3 text-sm font-medium text-text-primary'>Expire Date: </p>*/}
                    {/*    <p className='basis-2/3 text-sm font-medium text-text-primary'>14/09/2024</p>*/}
                    {/*</div>*/}
                    <div className='flex border-b border-b-focus-outline py-3 gap-3'>
                        <p className='basis-1/3 text-sm font-medium text-text-primary'>Coins: </p>
                        <p className='basis-2/3 text-sm font-medium text-text-primary'>{userCoin}</p>
                    </div>
                    <div className='flex items-center border-b border-b-focus-outline py-3 gap-3'>
                        <p className='basis-1/3 text-sm font-medium text-text-primary'>Add Coin: </p>

                        <input type="number"
                               value={coin}
                               max='100000'
                               className='block h-8 w-[200px] bg-side-and-button rounded-md text-sm placeholder:text-sm placeholder:text-t-disabled border-none outline-none focus:ring-0'
                               placeholder='Coin'
                               onChange={(e) => setCoin(e.target.value)}/>

                        <button type='button' className='bg-side-and-button text-sm rounded-md px-2 py-1.5'
                                onClick={handleUpdateCoin}>Update
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ModalUserDetails
