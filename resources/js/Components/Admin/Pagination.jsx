import {Link} from '@inertiajs/react'
import React from 'react'
import ArrowLong from '@/Components/SvgIcons/ArrowLong';

const pagiClasses = 'bg-side-and-button hover:bg-card-and-hover rounded-md px-2.5 h-[30px] flex items-center text-xs text-text-primary'

const Pagination = ({links}) => {

    let pageLink = <Link className={`${pagiClasses} opacity-60`}>
        <ArrowLong className="rotate-180"/>
    </Link>

    const linkWithParams = (url) => {
        if(route().params.account){
            return url + "&account="+route().params.account
        }

        return url
    }

    const getLink = (link, index) => {

        if (link.label.includes("&laquo;")) {
            pageLink =
                <Link href={linkWithParams(link?.url)} key={index} className={`${pagiClasses} ${!link?.url ? 'opacity-60' : ''}`}>
                    <ArrowLong className="rotate-180"/>
                </Link>

        }
        if (link.label.includes("Next")) {
            pageLink =
                <Link key={index} href={linkWithParams(link?.url)} className={`${pagiClasses} ${!link?.url ? 'opacity-60' : ''}`}>
                    <ArrowLong/>
                </Link>
        }
        if (!link.label.includes("Next") && !link.label.includes("&laquo;")) {
            pageLink =
                <Link key={index} href={linkWithParams(link?.url)} className={`${pagiClasses}`}>
                    {link.label}
                </Link>
        }
        return pageLink;
    }
    return (
        <div className='flex items-center gap-3'>
            {links.map((link, index) => (
                getLink(link, index)
            ))
            }
        </div>
    )
}

export default Pagination
