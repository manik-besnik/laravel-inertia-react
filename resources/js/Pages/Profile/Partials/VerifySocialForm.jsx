import {Link, useForm, usePage} from '@inertiajs/react';
import LabelField from '@/Components/LabelField';
import InputBox from '@/Components/InputBox';
import ErrorField from '@/Components/ErrorField';
import DribbbleIcon from '@/Components/SvgIcons/Dribbble';
import FacebookIcon from '@/Components/SvgIcons/Facebook';
import InstagramIcon from '@/Components/SvgIcons/Instagram';
import BehanceIcon from '@/Components/SvgIcons/Behance';
import MediumIcon from '@/Components/SvgIcons/Medium';
import YoutubeIcon from '@/Components/SvgIcons/Youtube';
import TiktokIcon from '@/Components/SvgIcons/Tiktok';
import TwitterIcon from '@/Components/SvgIcons/Twitter';
import LinkedinIcon from '@/Components/SvgIcons/Linkedin';
import ArtstationIcon from '@/Components/SvgIcons/Artstation';
import {useRef, useState} from 'react';
import {accountType} from "@/Components/Constant/index.js";
import Success from "@/Components/Toast/Success.jsx";

export default function UpdateProfileInformation({mustVerifyEmail, status, className = ''}) {

    const passwordInput = useRef();
    const currentPasswordInput = useRef();
    const [success, setSuccess] = useState(false)

    const user = usePage().props.auth.user;

    const accounts = usePage().props.accounts;

    const {data, setData, errors, post, processing, recentlySuccessful} = useForm({
        dribbble: accounts.find(account => account.type === accountType.dribbble)?.account_url ?? null,
        facebook: accounts.find(account => account.type === accountType.facebook)?.account_url ?? null,
        behance: accounts.find(account => account.type === accountType.behance)?.account_url ?? null,
        linkedin: accounts.find(account => account.type === accountType.linkedin)?.account_url ?? null,
        medium: accounts.find(account => account.type === accountType.medium)?.account_url ?? null,
        youtube: accounts.find(account => account.type === accountType.youtube)?.account_url ?? null,
        tiktok: accounts.find(account => account.type === accountType.tiktok)?.account_url ?? null,
        twitter: accounts.find(account => account.type === accountType.twitter)?.account_url ?? null,
        instagram: accounts.find(account => account.type === accountType.instagram)?.account_url ?? null,
        artstation: accounts.find(account => account.type === accountType.artstation)?.account_url ?? null,

    });


    const submit = (e) => {

        e.preventDefault();

        post(route('accounts.store'), {
            onSuccess: () => {
                setSuccess(true)
            }
        })


    };

    return (
        <section className={className}>

            <form onSubmit={submit}>

                <h2 className='app-subtitle mb-2.5 md:mb-6'>Verify Social Accounts</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 md:gap-y-6'>
                    <div className='flex-1 min-w-[230px]'>
                        <LabelField htmlFor="dribbble" content="Dribbble Profile Link"/>

                        <div className="flex gap-x-2">
                            <InputBox
                                id="dribbble"
                                classes='w-full'
                                value={data.dribbble}
                                iconPrev={<DribbbleIcon className='h-4 sm:h-5'/>}
                                onChange={(e) => setData('dribbble', e.target.value)}
                                autoComplete="dribbble"
                            />

                        </div>

                        <ErrorField className="mt-[14px]" content={errors.dribbble}/>
                    </div>

                    <div className='flex-1 min-w-[230px]'>
                        <LabelField htmlFor="facebook" content="Facebook Profile Link"/>

                        <InputBox
                            id="facebook"
                            iconPrev={<FacebookIcon className='h-4 sm:h-5'/>}
                            value={data.facebook}
                            onChange={(e) => setData('facebook', e.target.value)}
                            autoComplete="facebook"
                        />

                        <ErrorField className="mt-[14px]" content={errors.facebook}/>
                    </div>

                    <div className='flex-1 min-w-[230px]'>
                        <LabelField htmlFor="behance" content="Behance Profile Link"/>

                        <InputBox
                            id="behance"
                            iconPrev={<BehanceIcon className='h-4 sm:h-5'/>}
                            value={data.behance}
                            onChange={(e) => setData('behance', e.target.value)}
                            autoComplete="behance"
                        />

                        <ErrorField className="mt-[14px]" content={errors.behance}/>
                    </div>

                    <div className='flex-1 min-w-[230px]'>
                        <LabelField htmlFor="instagram" content="Instagram Profile Link"/>

                        <InputBox
                            id="instagram"
                            iconPrev={<InstagramIcon className='h-4 sm:h-5'/>}
                            value={data.instagram}
                            onChange={(e) => setData('instagram', e.target.value)}
                            autoComplete="instagram"
                        />

                        <ErrorField className="mt-[14px]" content={errors.instagram}/>
                    </div>

                    <div className='flex-1 min-w-[230px]'>
                        <LabelField htmlFor="artstation" content="Artstation Profile Link"/>

                        <InputBox
                            id="artstation"
                            iconPrev={<ArtstationIcon className='h-4 sm:h-5'/>}
                            value={data.artstation}
                            onChange={(e) => setData('artstation', e.target.value)}
                            autoComplete="artstation"
                        />

                        <ErrorField className="mt-[14px]" content={errors.artstation}/>
                    </div>



                    <div className='flex-1 min-w-[230px]'>
                        <LabelField htmlFor="medium" content="Medium Profile Link"/>

                        <InputBox
                            id="medium"
                            iconPrev={<MediumIcon className='h-4 sm:h-5'/>}
                            value={data.medium}
                            onChange={(e) => setData('medium', e.target.value)}
                            autoComplete="medium"
                        />

                        <ErrorField className="mt-[14px]" content={errors.medium}/>
                    </div>

                    <div className='flex-1 min-w-[230px]'>
                        <LabelField htmlFor="youtube" content="Youtube Channel Link"/>

                        <InputBox
                            id="youtube"
                            iconPrev={<YoutubeIcon className='h-4 sm:h-5'/>}
                            value={data.youtube}
                            onChange={(e) => setData('youtube', e.target.value)}
                            autoComplete="youtube"
                        />

                        <ErrorField className="mt-[14px]" content={errors.youtube}/>
                    </div>

                    <div className='flex-1 min-w-[230px]'>
                        <LabelField htmlFor="tiktok" content="Tiktop Profile Link"/>

                        <InputBox
                            id="tiktok"
                            iconPrev={<TiktokIcon className='h-4 sm:h-5'/>}
                            value={data.tiktok}
                            onChange={(e) => setData('tiktok', e.target.value)}
                            autoComplete="tiktok"
                        />

                        <ErrorField className="mt-[14px]" content={errors.tiktok}/>
                    </div>

                    <div className='flex-1 min-w-[230px]'>
                        <LabelField htmlFor="twitter" content="Twitter Profile Link"/>

                        <InputBox
                            id="tiktok"
                            iconPrev={<TwitterIcon className='h-4 sm:h-5'/>}
                            value={data.twitter}
                            onChange={(e) => setData('twitter', e.target.value)}
                            autoComplete="twitter"
                        />

                        <ErrorField className="mt-[14px]" content={errors.twitter}/>
                    </div>

                    <div className='flex-1 min-w-[230px]'>
                        <LabelField htmlFor="linkedin" content="Linkedin Profile Link"/>

                        <InputBox
                            id="tiktok"
                            iconPrev={<LinkedinIcon className='h-4 sm:h-5'/>}
                            value={data.linkedin}
                            onChange={(e) => setData('linkedin', e.target.value)}
                            autoComplete="linkedin"
                        />

                        <ErrorField className="mt-[14px]" content={errors.linkedin}/>
                    </div>
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4 mt-[14px] md:mt-6">
                    <button disabled={processing}
                            className={`bg-side-and-button px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                    >
                        Save Now
                    </button>

                    {/* <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition> */}
                </div>
            </form>

            {success && <Success message='Profile Updated Successfully'/>}
        </section>
    );
}
