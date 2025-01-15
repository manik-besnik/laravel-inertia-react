import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import LabelField from '@/Components/LabelField';
import InputBox from '@/Components/InputBox';
import ErrorField from '@/Components/ErrorField';
import UserIcon from "@/Components/SvgIcons/User"
import LockIcon from "@/Components/SvgIcons/Lock"
import EmailIcon from "@/Components/SvgIcons/Email"
import EyeIcon from "@/Components/SvgIcons/Eye"
import EyeHiddenIcon from "@/Components/SvgIcons/EyeHidden"
import Google from '@/Components/SvgIcons/Google';

export default function Register() {
    const [showPass, setShowPass] = useState(false)

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        username: '',
        email: '',
        password: '',
        refer_by: route().params.refer_by,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register | Maketop.me" />

            <h3 className='text-center text-[25px] leading-[30px] text-text-primary mb-5 md:text-[43px] md:leading-[51px] md:mb-[30px] font-semibold '>Sign
                Up</h3>

            <form onSubmit={submit}>

                <div>
                    <LabelField htmlFor="name" content="Full Name" />

                    <InputBox
                        id="name"
                        value={data.name}
                        iconPrev={<UserIcon className='h-4 sm:h-5' />}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoComplete="name"
                    />

                    <ErrorField className="mt-[14px]" content={errors.name} />
                </div>

                <div className='mt-4 md:mt-5'>
                    <LabelField htmlFor="username" content="Username" />

                    <InputBox
                        id="username"
                        value={data.username}
                        iconPrev={<UserIcon className='h-4 sm:h-5' />}
                        onChange={(e) => setData('username', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <ErrorField className="mt-[14px]" content={errors.username} />
                </div>

                <div className='mt-4 md:mt-5'>
                    <LabelField htmlFor="email" content="Email Address" />

                    <InputBox
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        iconPrev={<EmailIcon className='h-4 sm:h-5' />}
                        required
                        autoComplete="username"

                    />

                    <ErrorField className="mt-[14px]" content={errors.email} />
                </div>

                <div className='mt-4 md:mt-5'>
                    <LabelField htmlFor="password" content="Password" />

                    <InputBox
                        id="password"
                        type={showPass ? 'text' : 'password'}
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        iconPrev={<LockIcon className='h-4 sm:h-5' />}
                        btn={<button type='button' onClick={() => setShowPass(!showPass)} className='flex gap-[6px] font-medium text-xs sm:text-sm leading-[14px] sm:leading-[20px] text-text-primary whitespace-nowrap justify-center items-center px-3 bg-card-and-hover h-[36px]'>
                            {showPass ? <EyeHiddenIcon /> : <EyeIcon className='h-4 sm:h-5' />}
                        </button>}
                    />
                    <ErrorField className="mt-[14px]" content={errors.password} />
                </div>

                <div className="flex items-center justify-end mt-4">

                    <button disabled={processing}
                        className="w-full rounded md:rounded-md bg-text-primary py-[7px] md:py-2 text-white text-xs md:text-sm ">
                        Sign Up
                    </button>
                </div>

                <div className="py-4 md:py-5 flex items-center gap-4">
                    <hr className='border-t border-t-side-and-button w-full' />
                    <span className='whitespace-nowrap small-text'>Or sign up with</span>
                    <hr className='border-t border-t-side-and-button w-full' />
                </div>

                <a href={route('google.redirect')}
                    className="w-full rounded md:rounded-md bg-side-and-button hover:bg-card-and-hover py-[7px] md:py-2 text-text-primary text-xs md:text-sm flex items-center justify-center ga-1.5">
                    <Google className="h-4 md:h-5" />
                    Sign up with Google
                </a>

                <p className='small-text mt-4 md:mt-5'>
                    Already have an account?
                    <Link href={route('login')}> Sign in</Link>
                </p>

            </form>
        </GuestLayout>
    );
}
