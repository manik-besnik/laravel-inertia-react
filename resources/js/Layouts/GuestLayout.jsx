import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import ArrowRight from '@/Components/SvgIcons/ArrowRight';
import Logo from '@/Components/SvgIcons/Logo';

export default function Guest({ children }) {
    return (
        <div className="relative min-h-screen flex justify-center items-center py-6 sm:py-10 bg-main-and-focus">
            <button onClick={() => window.history.back()} className='absolute top-5 left-4 md:top-10 md:left-10 btn-primary'>
                <ArrowRight className="rotate-180" />
                Back
            </button>

            <div className='max-w-[457px] min-w-[343px] md:w-[457px] bg-white rounded-2xl md:rounded-3xl border border-card-and-hover px-6 py-4 md:px-10 md:py-[30px]'>

                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}
