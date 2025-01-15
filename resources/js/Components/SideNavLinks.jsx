import {Link} from '@inertiajs/react';
import ArrowUp from '@/Components/SvgIcons/ArrowUp';
import ArrowRight from '@/Components/SvgIcons/ArrowRight';
import DribbbleIcon from '@/Components/SvgIcons/Dribbble';
import BehanceIcon from '@/Components/SvgIcons/Behance';
import TwitterIcon from '@/Components/SvgIcons/Twitter';
import YoutubeIcon from '@/Components/SvgIcons/Youtube';
import FacebookIcon from '@/Components/SvgIcons/Facebook';
import InstagramIcon from '@/Components/SvgIcons/Instagram';
import ArtstationIcon from '@/Components/SvgIcons/Artstation';
import LinkedinIcon from '@/Components/SvgIcons/Linkedin';
import MediumIcon from '@/Components/SvgIcons/Medium';
import {accountType, taskType} from "@/Components/Constant/index.js";
import {useState} from 'react';
import TiktokIcon from "@/Components/SvgIcons/Tiktok";

export default function SideNavLinks() {

    const [products, setProducts] = useState([
        {
            name: 'Dribbble',
            accountType: accountType.dribbble,
            icon: <DribbbleIcon/>,
            isOpen: route().params.account_type === accountType.dribbble,
            links: [
                {
                    name: 'Follower',
                    type: taskType.follow,
                },
                {
                    name: 'Like',
                    type: taskType.like,
                },
                {
                    name: 'Save',
                    type: taskType.save,
                },
                {
                    name: 'Comments',
                    type: taskType.comment,
                },
            ]
        },
        {
            name: 'Behance',
            accountType: accountType.behance,
            icon: <BehanceIcon/>,
            isOpen: route().params.account_type === accountType.behance,
            links: [
                {
                    name: 'Follower',
                    type: taskType.follow,
                },
                {
                    name: 'Like',
                    type: taskType.like,
                },
                {
                    name: 'Save',
                    type: taskType.save,
                },
                {
                    name: 'Comments',
                    type: taskType.comment,
                },
            ]
        },
        {
            name: 'ArtStation',
            accountType: accountType.artstation,
            icon: <ArtstationIcon/>,
            isOpen: route().params.account_type === accountType.artstation,
            links: [
                {
                    name: 'Follower',
                    type: taskType.follow,
                },
                {
                    name: 'Like',
                    type: taskType.like,
                },
                {
                    name: 'Save',
                    type: taskType.save,
                },
                {
                    name: 'Comments',
                    type: taskType.comment,
                },
            ]
        },
        {
            name: 'Medium',
            accountType: accountType.medium,
            icon: <MediumIcon/>,
            isOpen: route().params.account_type === accountType.medium,
            links: [
                {
                    name: 'Follower',
                    type: taskType.follow,
                },
                {
                    name: 'Clap',
                    type: taskType.clap,
                },
                {
                    name: 'Save',
                    type: taskType.save,
                },
                {
                    name: 'Comments',
                    type: taskType.comment,
                },
            ]
        },
        {
            name: 'Youtube',
            accountType: accountType.youtube,
            icon: <YoutubeIcon/>,
            isOpen: route().params.account_type === accountType.youtube,
            links: [
                {
                    name: 'Subscriber',
                    type: taskType.subscribe,
                },
                {
                    name: 'Like',
                    type: taskType.like,
                },
                {
                    name: 'Comment',
                    type: taskType.comment,
                },
            ]
        },
        {
            name: 'Facebook',
            accountType: accountType.facebook,
            icon: <FacebookIcon/>,
            isOpen: route().params.account_type === accountType.facebook,
            links: [
                {
                    name: 'Follower',
                    type: taskType.follow,
                },
                {
                    name: 'Like',
                    type: taskType.like,
                },
                {
                    name: 'Save',
                    type: taskType.save
                },
                {
                    name: 'Comment',
                    type: taskType.comment,
                }
            ]
        },
        {
            name: 'Instagram',
            accountType: accountType.instagram,
            icon: <InstagramIcon/>,
            isOpen: route().params.account_type === accountType.instagram,
            links: [
                {
                    name: 'Follower',
                    type: taskType.follow,
                },
                {
                    name: 'Like',
                    type: taskType.like,
                },
                {
                    name: 'Save',
                    type: taskType.save
                },
                {
                    name: 'Comment',
                    type: taskType.comment,
                }
            ]
        },
        {
            name: 'Linkedin',
            accountType: accountType.linkedin,
            icon: <LinkedinIcon/>,
            isOpen: route().params.account_type === accountType.linkedin,
            links: [
                {
                    name: 'Follower',
                    type: taskType.follow,
                },
                {
                    name: 'Like',
                    type: taskType.like,
                },
                {
                    name: 'Save',
                    type: taskType.save
                },
                {
                    name: 'Comment',
                    type: taskType.comment,
                }
            ]
        },
        {
            name: 'X (Twitter)',
            accountType: accountType.twitter,
            icon: <TwitterIcon/>,
            isOpen: route().params.account_type === accountType.twitter,
            links: [
                {
                    name: 'Follower',
                    type: taskType.follow,
                },
                {
                    name: 'Like',
                    type: taskType.like,
                },
                {
                    name: 'Save',
                    type: taskType.save
                },
                {
                    name: 'Comment',
                    type: taskType.comment,
                }
            ]
        },
        {
            name: 'Tiktok',
            accountType: accountType.tiktok,
            icon: <TiktokIcon/>,
            isOpen: route().params.account_type === accountType.tiktok,
            links: [
                {
                    name: 'Follower',
                    type: taskType.follow,
                },
                {
                    name: 'Like',
                    type: taskType.like,
                    isComing: true
                },
                {
                    name: 'Save',
                    type: taskType.save,
                    isComing: true
                },
                {
                    name: 'Comment',
                    type: taskType.comment,
                    isComing: true
                }
            ]
        },
    ])

    const handleToggle = (index) => {
        setProducts(prevProducts => {

            return prevProducts.map((product, idx) => {
                if (idx !== index) {
                    return {
                        ...product,
                        isOpen: false
                    };

                } else {
                    return {
                        ...product,
                        isOpen: !product.isOpen
                    };
                }
            });
        });
    };

    return (

        <>

            {products.map((product, i) =>
                <div key={i}
                     className={`${(product.isOpen) && 'bg-card-and-hover border-main-outline'} rounded-[10px] mb-1.5 hover:bg-card-and-hover border hover:border-main-outline`}>
                    <div onClick={() => handleToggle(i)}
                         className='flex justify-between items-center gap-2 cursor-pointer p-[10px]'>
                        <div className='flex items-center gap-[10px]'>
                            {product.icon}
                            <span
                                className={`${product.isOpen || product.accountType === route().params.account_type && 'font-semibold'} font-medium text-sm text-text-primary`}>{product.name}</span>
                        </div>

                        <ArrowUp class={`${product.isOpen ? 'rotate-0' : 'rotate-180'} transition-all duration-500`}/>
                    </div>

                    {/* className={`transition-height border-t border-main-outline pt-[10px] mt-[10px] overflow-hidden ${product.isOpen ? 'max-h-screen duration-1000 ease-in-out' : 'max-h-0'}`}> */}

                    <div className={`overflow-hidden`}
                         style={{maxHeight: product.isOpen ? '500px' : '0', transition: 'max-height 0.5s ease-in-out'}}>
                        <div className='px-2.5 pb-2.5'>
                            <hr className='border-t border-t-main-outline pb-2.5'/>
                            {product.links.map((link, i) =>
                                <Link key={i} href={route('task.create',
                                    {account_type: product.accountType, task_type: link.type})}
                                      className={`${link.isComing ? 'pointer-events-none' : ''} flex items-center justify-between mb-[10px] last:mb-0 text-medium text-sm text-font-medium text-text-primary`}>

                                    <div className='flex items-center gap-[10px]'>
                                        <ArrowRight></ArrowRight>
                                        {link.name}
                                    </div>

                                    {link.isComing ?
                                        <div
                                            className='border border-main-outline bg-main-and-focus rounded py-1 px-1.5 text-[10px] leading-3 text-text-primary'>
                                            Coming Soon
                                        </div> : null
                                    }

                                </Link>)}
                        </div>
                    </div>

                </div>)}
        </>

    );
}
