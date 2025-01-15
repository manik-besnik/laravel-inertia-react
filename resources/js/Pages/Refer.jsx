import {Head, Link} from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import React from "react";
import LabelField from "@/Components/LabelField.jsx";
import Copy from "@/Components/SvgIcons/Copy.jsx";


const InviteUser = () => {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.91675 12.5133C11.3057 12.5133 14.1667 13.0709 14.1667 15.2246C14.1667 17.3783 11.2874 17.9173 7.91675 17.9173C4.52775 17.9173 1.66675 17.3588 1.66675 15.206C1.66675 13.0524 4.54527 12.5133 7.91675 12.5133ZM15.8326 6.25065C16.2461 6.25065 16.5817 6.59186 16.5817 7.01033V7.99054H17.5843C17.9969 7.99054 18.3334 8.33174 18.3334 8.75022C18.3334 9.16869 17.9969 9.5099 17.5843 9.5099H16.5817V10.491C16.5817 10.9094 16.2461 11.2507 15.8326 11.2507C15.4199 11.2507 15.0834 10.9094 15.0834 10.491V9.5099H14.0826C13.669 9.5099 13.3334 9.16869 13.3334 8.75022C13.3334 8.33174 13.669 7.99054 14.0826 7.99054H15.0834V7.01033C15.0834 6.59186 15.4199 6.25065 15.8326 6.25065ZM7.91675 2.08398C10.2122 2.08398 12.0523 3.94784 12.0523 6.27302C12.0523 8.59819 10.2122 10.4621 7.91675 10.4621C5.62127 10.4621 3.78122 8.59819 3.78122 6.27302C3.78122 3.94784 5.62127 2.08398 7.91675 2.08398Z"
            fill="#556575"/>
    </svg>

}

const Refer = ({refer, refer_earn, refer_code}) => {
    const handleCopy = () => {
        const copyText = route('refer.code', refer_code)
        navigator.clipboard.writeText(copyText).then(() => {
            alert('Link copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }

    return (<>
        <Head title="Refer | Maketop"/>

        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Refer</h2>}
        >

            <div className='flex justify-between gap-20 flex-col min-h-screen'>
                <div className='max-w-[454px]'>
                    <div className="flex text-xs leading-[14px] mb-2 md:mb-[30px]">
                        <Link href='/' className='text-t-disabled'>Home/</Link>
                        <Link className='text-t-secondary'>Refer</Link>
                    </div>


                    <h2 className='app-subtitle mb-2.5 sm:mb-5'>Referrals</h2>
                    <p className="text-sm text-[#556575] mb-5">With each referral you get: <span
                        className='text-[#FFA600]'>+10 points</span>, if your referral is logged
                        in, <br/> has filled their profile, and completed at least <span className='text-[#FFA600]'>5 tasks</span>.
                    </p>

                    <div className='mb-5 sm:mb-[30px]'>

                        <LabelField content="Here's your referral link:"/>
                        <div
                            className={`flex items-center rounded sm:rounded-[6px] h-[26px] sm:h-[36px] overflow-hidden`}>


                            <div
                                className='flex justify-center items-center px-1.5 sm:px-3 bg-card-and-hover h-[26px] sm:h-[36px]'>
                                <Copy className='h-4 sm:h-5'/>
                            </div>


                            <input value={route('refer.code', refer_code)} type="text"
                                   className='w-full h-[26px] sm:h-9 block border-none focus:ring-0 bg-side-and-button placeholder:text-t-secondary placeholder:text-xs sm:placeholder:text-sm placeholder:leading-[14px] sm:placeholder:leading-[20px] text-xs sm:text-sm text-t-secondary leading-[14px] sm:leading-[20px]'/>


                            <div
                                className='flex gap-[6px] font-medium text-xs sm:text-sm leading-[14px] sm:leading-[20px] text-text-primary whitespace-nowrap justify-center items-center px-3 bg-card-and-hover h-[36px]'>
                                <button type='button' onClick={handleCopy} className="flex gap-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M12.6753 5.08468C12.813 5.08429 12.9254 4.97196 12.9169 4.83443C12.814 3.18102 11.6853 2.08398 10.0495 2.08398H5.72455C3.99955 2.08398 2.84955 3.29232 2.84955 5.08398V10.659C2.84955 12.333 3.95567 13.538 5.57438 13.6504C5.71212 13.66 5.82455 13.5471 5.82455 13.409V9.34232C5.82455 6.88398 7.55788 5.09232 9.94952 5.09232L12.6753 5.08468Z"
                                              fill="#314252"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M14.2789 6.34375H9.94972C8.23223 6.34375 7.07806 7.54792 7.07806 9.34043V14.9196C7.07806 16.7113 8.23223 17.9163 9.94972 17.9163H14.2781C15.9964 17.9163 17.1506 16.7113 17.1506 14.9196V9.34043C17.1506 7.54792 15.9964 6.34375 14.2789 6.34375Z"
                                              fill="#314252"/>
                                    </svg>
                                    <span className='text-text-primary text-sm'>Copy</span>
                                </button>
                            </div>


                        </div>

                    </div>

                    <div>

                        <h2 className='app-subtitle mb-2.5 sm:mb-5'>Number of Invited Users</h2>
                        <div className="flex gap-2">
                            <InviteUser/>
                            <span className='text-sm'>{refer} User</span>
                        </div>
                    </div>


                    <div className="mt-5">

                        <h2 className='app-subtitle mb-2.5 sm:mb-5'>Earned</h2>
                        <div className="flex gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M6.87027 10.7292C7.96606 11.184 9.25764 10.925 10.0953 10.0905C10.3274 9.85922 10.7024 9.8608 10.9329 10.0921C11.1626 10.3234 11.1626 10.6984 10.9313 10.9297C10.145 11.7137 9.06974 12.1329 7.98658 12.1329C7.45369 12.1329 6.91922 12.0318 6.4171 11.8234C4.88789 11.1887 3.86079 9.65238 3.86079 8.00001C3.86079 6.34289 4.88789 4.80342 6.4171 4.16868C7.94 3.53473 9.75816 3.89236 10.9313 5.06157C11.1626 5.29289 11.1626 5.66789 10.9329 5.8992C10.7024 6.13052 10.3274 6.1321 10.0953 5.90078C9.25685 5.06631 7.96369 4.80973 6.87027 5.26289C5.77842 5.71526 5.045 6.8158 5.045 8.00001C5.045 9.17948 5.77842 10.2761 6.87027 10.7292ZM8 0.5C3.86395 0.5 0.5 3.86473 0.5 8.00001C0.5 12.1353 3.86395 15.5 8 15.5C12.1353 15.5 15.5 12.1353 15.5 8.00001C15.5 3.86473 12.1353 0.5 8 0.5Z"
                                      fill="#FFA600"/>
                            </svg>

                            <span className='text-sm'> {refer_earn * 10} Coin</span>
                        </div>
                    </div>

                </div>

                <Footer/>

            </div>

        </AuthenticatedLayout>


    </>);
}

export default Refer;
