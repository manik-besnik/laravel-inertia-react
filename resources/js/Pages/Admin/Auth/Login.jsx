import {useEffect} from 'react';
import Checkbox from '@/Components/Checkbox.jsx';
import {Head, useForm} from '@inertiajs/react';
import LabelField from '@/Components/LabelField.jsx';
import InputBox from '@/Components/InputBox.jsx';
import ErrorField from '@/Components/ErrorField.jsx';
import LockIcon from "@/Components/SvgIcons/Lock.jsx"
import EmailIcon from "@/Components/SvgIcons/Email.jsx"
import AdminGuestLayout from "@/Layouts/AdminGuestLayout.jsx";

export default function Login() {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.login.store'));
    };

    return (
        <AdminGuestLayout>
            <Head title="Admin Login | Maketop.me"/>

            <h3 className='text-center text-[25px] leading-[30px] text-text-primary mb-5 md:text-[43px] md:leading-[51px] md:mb-[30px] font-semibold '>Welcome
                Back</h3>

            <form onSubmit={submit}>

                <div>
                    <LabelField htmlFor="email" content="Email Address"/>

                    <InputBox
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        iconPrev={<EmailIcon className='h-4 sm:h-5'/>}
                        required
                        autoComplete="username"

                    />

                    <ErrorField className="mt-[14px]" content={errors.email}/>
                </div>

                <div className='mt-4 md:mt-5'>
                    <LabelField htmlFor="password" content="Password"/>

                    <InputBox
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        iconPrev={<LockIcon className='h-4 sm:h-5'/>}
                    />
                    {/* btn={<button type='button' onClick={togglePassword} className='flex gap-[6px] font-medium text-xs sm:text-sm leading-[14px] sm:leading-[20px] text-text-primary whitespace-nowrap justify-center items-center px-3 bg-card-and-hover h-[36px]'>
                            <EyeIcon className='h-4 sm:h-5' />
                        </button>} */}

                    <ErrorField className="mt-[14px]" content={errors.password}/>
                </div>

                <div className='flex items-center justify-between gap-4 mt-4 md:mt-5'>
                    <div className="block">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="text-xs md:text-sm text-text-primary font-medium ms-2">Remember me</span>
                        </label>
                    </div>


                </div>

                <div className="flex items-center justify-end mt-4 md:mt-5">
                    <button disabled={processing}
                            className="w-full rounded md:rounded-md bg-text-primary py-[7px] md:py-2 text-white text-xs md:text-sm ">
                        Sign In
                    </button>
                </div>


            </form>
        </AdminGuestLayout>
    );
}
