import {Head, Link} from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

const UserBlock = ({auth}) => {

    return (
        <>
            <Head title="Block"/>

            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Block</h2>}
            >

                <div className='flex justify-between gap-20 flex-col min-h-[500px]'>
                    <div>
                        <div className="flex text-xs leading-[14px] mb-2 md:mb-[30px]">
                            <Link href='/' className='text-t-disabled'>Home/</Link>
                            <Link className='text-t-secondary'>Block</Link>
                        </div>

                        <p>User Account Blocked. Contact with Admin</p>

                    </div>

                    <Footer/>

                </div>

            </AuthenticatedLayout>


        </>
    );
}

export default UserBlock;
