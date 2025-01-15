import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import VerifySocialForm from './Partials/VerifySocialForm';
import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="flex flex-col gap-5">
                <div>
                <div className="flex text-xs leading-[14px] mb-2 md:mb-[30px]">
                <Link href='/' className='text-t-disabled'>Home/</Link>
                <Link className='text-t-secondary'>Profile</Link>
            </div>

            <div>
                <div >

                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-[932px] mb-5 md:mb-[30px]"
                    />

                    <VerifySocialForm
                        className="max-w-[932px] mb-5 md:mb-[30px]"
                    />

                    {/* <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div> */}
                </div>
            </div>
                </div>

                <Footer />

            </div>
        </AuthenticatedLayout>
    );
}
