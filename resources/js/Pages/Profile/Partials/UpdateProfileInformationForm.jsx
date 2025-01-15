import {Link, useForm, usePage} from '@inertiajs/react';
import LabelField from '@/Components/LabelField';
import InputBox from '@/Components/InputBox';
import ErrorField from '@/Components/ErrorField';
import UserIcon from "@/Components/SvgIcons/User"
import LockIcon from "@/Components/SvgIcons/Lock"
import EmailIcon from "@/Components/SvgIcons/Email"
import {useRef, useState} from 'react';
import Avatar from "@/Components/SvgIcons/Avatar.jsx";
import InfoIcon from "@/Components/SvgIcons/Info.jsx";
import CloseIcon from "@/Components/SvgIcons/Close.jsx";
import Check from "@/Components/SvgIcons/Check.jsx";

export default function UpdateProfileInformation({mustVerifyEmail, status, className = ''}) {
    const user = usePage().props.auth.user;
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const [avatar, setAvatar] = useState(user?.avatar)
    const [avatarFile, setAvatarFile] = useState(user?.avatar)
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState(null);

    const {data, setData, patch, errors, processing, recentlySuccessful} = useForm({
        name: user.name,
        email: user.email,
        username: user.username,
        current_password: '',
        password: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        patch(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    const submit = (e) => {

        e.preventDefault();

        patch(route('profile.update'));

        updatePassword()
    };

    const handleChange = (e) => {

        const file = e.target.files[0]

        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg', 'image/webp', 'image/jpg'];
            if (!validTypes.includes(file.type)) {
                setError(true);
                setMessage('Please select a valid image.');
                setAvatarFile(null);
                setAvatar(user?.avatar);
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader?.result);
            };

            setAvatarFile(file)
            reader.readAsDataURL(file);
        } else {
            setAvatar(user?.avatar);
        }
    }

    const handleProfileUpload = async () => {

        if (!avatarFile) {
            setError(true)
            setMessage("Image Not Selected")
            return;
        }
        const formDate = new FormData();
        formDate.append('file', avatarFile)
        const response = await axios.post(route('profile.avatar'), formDate)
        if (response.status === 200) {
            if (response.data.success) {
                setSuccess(true)
                setMessage(response.data.message)
            } else {
                setError(true)
                setMessage(response.data.message)
            }
        }
    }

    return (
        <section className={className}>
            <header>
                <h2 className='app-subtitle mb-2.5 md:mb-6'>Profile</h2>

                <div className='flex items-center gap-3 md:gap-4 mb-5 md:mb-[30px]'>
                    {avatar ?
                        <img className='h-[68px] w-[68px] md:h-[106px] md:w-[106px] rounded-lg md:rounded-[14px]'
                             src={avatar} alt="profile-image"/>
                        : <Avatar height={68} width={68}/>}
                    <div>
                        <div className='mb-3 md:mb-4'>
                            <h5 className='text-xs md:text-sm text-text-primary font-semibold'>{data.name}</h5>
                            <p className='text-[10px] leading-[12px] md:text-sm text-text-primary'>{data.username}</p>
                        </div>

                        <div className='flex items-center gap-2.5'>
                            <label
                                className={`bg-side-and-button px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                            >Change
                                <input type="file" className="hidden" onChange={(e) => handleChange(e)}/>
                            </label>
                            <button onClick={handleProfileUpload}
                                    className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  bg-card-and-hover text-text-primary`}
                            >Upload
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="my-2">
                <div
                    className={`${error ? 'flex' : 'hidden'} items-center justify-between mt-5 sm:mt-[30px] gap-2 w-[420px] px-2 sm:px-2.5 py-1.5 sm:py-2 rounded sm:rounded-md bg-warning`}>
                    <div className="flex items-center gap-1.5">
                        <InfoIcon color='#FFFFFF' className={`w-4 h-4 md:w-5 md:h-5`}/>
                        <span
                            className='text-xs leading-[14px] sm:text-sm text-white'>{message}</span>
                    </div>

                    <button onClick={() => setError(false)}>
                        <CloseIcon className="h-4 w-4 sm:h-5 sm:w-5" color='#ffffff'/>
                    </button>
                </div>
                <div
                    className={`${success ? 'flex' : 'hidden'} flex items-center justify-between mt-5 sm:mt-[30px] gap-2 w-[420px] px-2 sm:px-2.5 py-1.5 sm:py-2 rounded sm:rounded-md bg-[#00b47d]`}>
                    <div className="flex items-center gap-1.5">
                        <Check color='#FFFFFF' className={`w-4 h-4 md:w-5 md:h-5`}/>
                        <span
                            className='text-xs leading-[14px] sm:text-sm text-white'>{message}</span>
                    </div>

                    <button onClick={() => setSuccess(false)}>
                        <CloseIcon className="h-4 w-4 sm:h-5 sm:w-5" color='#ffffff'/>
                    </button>
                </div>
            </div>
            <form onSubmit={submit}>

                <h2 className='app-subtitle mb-2.5 md:mb-6'>Basic Edit</h2>

                <div className="flex gap-2.5 md:gap-6 flex-wrap mb-2.5 md:mb-6">
                    <div className='flex-1 min-w-[230px]'>
                        <LabelField htmlFor="name" content="Name"/>

                        <InputBox
                            id="name"
                            value={data.name}
                            iconPrev={<UserIcon className='h-4 sm:h-5'/>}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            autoComplete="name"
                        />

                        <ErrorField className="mt-[14px]" content={errors.name}/>
                    </div>

                    <div className='flex-1 min-w-[230px]'>
                        <LabelField htmlFor="email" content="Email"/>

                        <InputBox
                            id="email"
                            type="email"
                            iconPrev={<EmailIcon className='h-4 sm:h-5'/>}
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoComplete="username"
                        />

                        <ErrorField className="mt-[14px]" content={errors.email}/>
                    </div>
                </div>
                <div className="flex gap-2.5 md:gap-6 flex-wrap mb-2.5 md:mb-6">
                    <div className='flex-1 min-w-[230px]'>
                        <LabelField htmlFor="current_password" content="Current Password"/>

                        <InputBox
                            id="current_password"
                            ref={currentPasswordInput}
                            iconPrev={<LockIcon className='h-4 sm:h-5'/>}
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            type="password"
                            autoComplete="current-password"
                        />

                        <ErrorField className="mt-[14px]" content={errors.current_password}/>
                    </div>

                    <div className='flex-1 min-w-[230px]'>
                        <LabelField htmlFor="password" content="New Password"/>

                        <InputBox
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            type="password"
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            iconPrev={<LockIcon className='h-4 sm:h-5'/>}
                        />

                        <ErrorField className="mt-[14px]" content={errors.password}/>
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

        </section>
    );
}
