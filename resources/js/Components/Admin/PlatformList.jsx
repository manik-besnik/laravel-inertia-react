import { Link } from '@inertiajs/react';
import ArrowUp from '@/Components/SvgIcons/ArrowUp';
import ArrowRight from '@/Components/SvgIcons/ArrowRight';
import DribbbleIcon from '@/Components/SvgIcons/Dribbble';
import FacebookIcon from '@/Components/SvgIcons/Facebook';
import BehanceIcon from '@/Components/SvgIcons/Behance';
import MediumIcon from '@/Components/SvgIcons/Medium';
import YoutubeIcon from '@/Components/SvgIcons/Youtube';
import TicTokIcon from '@/Components/SvgIcons/Tiktok';
import ArtStationIcon from '@/Components/SvgIcons/Artstation';
import LinkedinIcon from '@/Components/SvgIcons/Social/LinkedinIcon';
import { taskType } from "@/Components/Constant/index.js";
import { useState } from 'react';
import { Switch } from '@headlessui/react'
import Instagram from '@/Components/SvgIcons/Instagram';
import TwitterIcon from '@/Components/SvgIcons/Social/TwitterIcon';

export default function PlatformList() {

    const [products, setProducts] = useState([
        {
            name: 'Dribbble',
            icon: <DribbbleIcon />,
            isOpen: false,
            options: [
                {
                    name: 'Followers',
                    isEnable: false,
                },
                {
                    name: 'Likes',
                    isEnable: true,
                },
                {
                    name: 'Saves',
                    isEnable: true,
                },
                {
                    name: 'Comments',
                    isEnable: false,
                },
            ]
        },
        {
            name: 'Youtube',
            icon: <YoutubeIcon />,
            isOpen: false,
            options: [
                {
                    name: 'Subscribers',
                    isEnable: true,
                },
                {
                    name: 'Likes',
                    isEnable: false,
                },
                {
                    name: 'Comments',
                    isEnable: true,
                },
            ]
        },
        {
            name: 'Tiktok',
            icon: <TicTokIcon />,
            isOpen: false,
            options: [
                {
                    name: 'Followers',
                    isEnable: false,
                },
                {
                    name: 'Likes',
                    isEnable: true,
                },
                {
                    name: 'Comments',
                    isEnable: false,
                },
            ]
        },
        {
            name: 'Facebook',
            icon: <FacebookIcon />,
            isOpen: false,
            options: [
                {
                    name: 'Followers',
                    isEnable: false,
                },
                {
                    name: 'Likes',
                    isEnable: true,
                },
                {
                    name: 'Comments',
                    isEnable: false,
                },
            ]
        },
        {
            name: 'Behance',
            icon: <BehanceIcon />,
            isOpen: false,
            options: [
                {
                    name: 'Followers',
                    isEnable: false,
                },
                {
                    name: 'Likes',
                    isEnable: true,
                },
                {
                    name: 'Saves',
                    isEnable: true,
                },
                {
                    name: 'Comments',
                    isEnable: false,
                },
            ]
        },
        {
            name: 'Artstation',
            icon: <ArtStationIcon />,
            isOpen: false,
            options: [
                {
                    name: 'Followers',
                    isEnable: false,
                },
                {
                    name: 'Likes',
                    isEnable: true,
                },
                {
                    name: 'Comments',
                    isEnable: false,
                },
            ]
        },
        {
            name: 'LinkedIn',
            icon: <LinkedinIcon className="h-5 w-5" />,
            isOpen: false,
            options: [
                {
                    name: 'Followers',
                    isEnable: false,
                },
                {
                    name: 'Likes',
                    isEnable: true,
                },
                {
                    name: 'Repost',
                    isEnable: true,
                },
                {
                    name: 'Comments',
                    isEnable: false,
                },
            ]
        },
        {
            name: 'Medium',
            icon: <MediumIcon />,
            isOpen: false,
            options: [
                {
                    name: 'Followers',
                    isEnable: true,
                },
                {
                    name: 'Claps',
                    isEnable: true,
                },
                {
                    name: 'Comments',
                    isEnable: false,
                },
            ]
        },
        {
            name: 'Instagram',
            icon: <Instagram />,
            isOpen: false,
            options: [
                {
                    name: 'Followers',
                    isEnable: false,
                },
                {
                    name: 'Likes',
                    isEnable: true,
                },
                {
                    name: 'Saves',
                    isEnable: true,
                },
                {
                    name: 'Comments',
                    isEnable: false,
                },
            ]
        },
        {
            name: 'Twitter',
            icon: <TwitterIcon className="w-5 h-5" />,
            isOpen: false,
            options: [
                {
                    name: 'Followers',
                    isEnable: false,
                },
                {
                    name: 'Likes',
                    isEnable: true,
                },
                {
                    name: 'Repost',
                    isEnable: true,
                },
                {
                    name: 'Comments',
                    isEnable: false,
                },
            ]
        },
    ])

    const handleToggle = (index) => {
        setProducts(prevProducts => {

            return prevProducts.map((product, idx) => {
                if (idx == index) {
                    return {
                        ...product,
                        isOpen: !product.isOpen
                    };

                }
                return product
            });
        });
    };

    const handleOptionToggle = (productIndex, optionIndex) => {
        setProducts(prevProducts => {
            return prevProducts.map((product, idx) => {
                if (idx === productIndex) {
                    return {
                        ...product,
                        options: product.options.map((option, optIdx) => {
                            if (optIdx === optionIndex) {
                                return {
                                    ...option,
                                    isEnable: !option.isEnable
                                };
                            }
                            return option;
                        })
                    };
                }
                return product;
            });
        });
    };

    return (

        <div className='columns-4 w-full'>

            {products.map((product, i) => <div key={i} className={`${product.isOpen && 'bg-card-and-hover border border-main-outline'} rounded-[10px] mb-1.5 hover:bg-card-and-hover inline-block w-full`}>
                <div onClick={() => handleToggle(i)} className='flex justify-between items-center gap-2 cursor-pointer p-[10px]'>
                    <div className='flex items-center gap-[10px]'>
                        {product.icon}
                        <span className={`${product.isOpen && 'font-semibold'} font-medium text-sm text-text-primary`}>{product.name}</span>
                    </div>

                    <ArrowUp class={`${product.isOpen ? 'rotate-0' : 'rotate-180'} transition-all duration-500`} />
                </div>

                {/* className={`transition-height border-t border-main-outline pt-[10px] mt-[10px] overflow-hidden ${product.isOpen ? 'max-h-screen duration-1000 ease-in-out' : 'max-h-0'}`}> */}

                <div className={`overflow-hidden`} style={{ maxHeight: product.isOpen ? '500px' : '0', transition: 'max-height 0.5s ease-in-out' }}>
                    <div className='px-2.5 pb-2.5'>
                        <hr className='border-t border-t-main-outline pb-2.5' />
                        {product.options.map((option, j) => <div key={j} className='flex justify-between items-center gap-[10px] mb-[10px] last:mb-0 text-medium text-sm text-font-medium text-text-primary'>
                            {option.name}

                            <Switch
                                checked={option.isEnable}
                                onChange={() => handleOptionToggle(i, j)}
                                className="group relative flex h-3 w-5 cursor-pointer rounded-full bg-black/20 p-0.5 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-black data-[checked]:bg-text-primary"
                            >
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none inline-block size-2 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-2"
                                />
                            </Switch>
                        </div>)}
                    </div>
                </div>

            </div>)}
        </div>

    );
}
