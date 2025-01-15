import React, {useState} from 'react'
import User from '@/Components/SvgIcons/User'
import LineDown from '@/Components/SvgIcons/LineDown'
import LineUp from '@/Components/SvgIcons/LineUp'
import Select from '@/Components/Select'
import Coin from '@/Components/SvgIcons/Coin'
import Check from '@/Components/SvgIcons/Check'
import List from '@/Components/SvgIcons/List'
import Money from '@/Components/SvgIcons/Money'
import CheckRegular from '@/Components/SvgIcons/CheckRegular'
import {router} from "@inertiajs/react";

const items = [
    {id: 1, name: 'All Time', value: false},
    {id: 2, name: 'Last 30 Days', value: true},
]

const TotalInfoCard = ({data}) => {

    const selectedItemIndex = route().params[data.filter_key] === "1" ? items[1] : items[0];

    const [selected, setSelected] = useState(selectedItemIndex)

    const handleSelectChange = (e) => {

        const searchParams = {
            ...route().params,
            [data.filter_key]: e.value
        };

        router.get(route('admin.index', searchParams))

    }

    const handleIcon = (name) => {
        if (name === 'total_users') {
            return <User className='fill-[#556575]'/>
        }
        if (name === 'pro_users') {
            return <Coin color='#FFA600'/>
        }
        if (name === 'free_users') {
            return <CheckRegular className=''/>
        }
        if (name === 'active_users') {
            return <Check color='#00B47D'/>
        }
        if (name === 'total_tasks') {
            return <List/>
        }
        if (name === 'total_earning') {
            return <Money/>
        }
    }

    return (
        <div className='p-4 min-w-[160px] rounded-xl bg-white'>
            <div className="flex justify-between items-center gap-5 mb-5">
                <div className="h-9 w-9 rounded-md bg-[#F5F6F6] flex items-center justify-center">
                    {handleIcon(data.name)}
                </div>

                {
                    data.inc ?
                        <LineDown className='relative top-[5px]'/> :
                        <LineUp className='relative top-[5px]'/>
                }
            </div>

            <div>
                <p className='text-sm text-text-primary font-medium mb-0.5'>{data.title}</p>
                <p className='text-[21px] leading-[25px] font-semibold text-text-primary'>
                    {data.name === 'earning' && '$'}
                    {data.total}
                </p>
            </div>

            <hr className='border-t border-t-focus-outline mt-2.5 pb-2.5'/>

            <Select items={items}
                    selected={selected}
                    setSelected={setSelected}
                    handleValueChange={handleSelectChange}/>

        </div>
    )
}

export default TotalInfoCard
