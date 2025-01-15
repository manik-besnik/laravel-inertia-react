import InfoIcon from "@/Components/SvgIcons/Info.jsx";

export default function Error({message}) {
    return (
        <div
            className='flex items-center justify-between mt-5 sm:mt-[30px] gap-2 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded sm:rounded-md bg-warning mb-4'>
            <div className="flex items-center gap-1.5">
                <InfoIcon color='#FFFFFF' className={`w-4 h-4 md:w-5 md:h-5`}/>
                <span className='text-xs leading-[14px] sm:text-sm text-white'>{message}</span>
            </div>
        </div>
    )
}
