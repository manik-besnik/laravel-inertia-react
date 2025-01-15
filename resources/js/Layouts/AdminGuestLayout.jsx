import {Link} from '@inertiajs/react';
import Logo from '@/Components/SvgIcons/Logo';

export default function AdminGuestLayout({children}) {
    return (
        <div
            className="relative min-h-screen bg-[url('/assets/images/admin-login-bg.png')] bg-center bg-contain bg-no-repeat flex justify-center items-center py-6 sm:py-10 bg-main-and-focus">

            <div
                className='max-w-[457px] min-w-[343px] md:w-[457px] bg-white rounded-2xl md:rounded-3xl border border-card-and-hover px-6 py-4 md:px-10 md:py-[30px]'>

                <div className="flex justify-center mb-3 md:mb-5">
                    <Link href="/">
                        <Logo/>
                    </Link>
                </div>

                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}
