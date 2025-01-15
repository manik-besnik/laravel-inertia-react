import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { accountType, taskType, proPoint } from "@/Components/Constant/index.js"
import Coin from '@/Components/SvgIcons/Coin';
import ProPoint from '@/Components/ProPoint';
import ProAccount from '@/Components/ProAccount';

const Pricing = ({auth}) => {

    return (
        <>
            <Head title="Pricing" />

            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Pricing</h2>}
            >

                <div className='flex justify-between gap-20 flex-col min-h-screen'>
                    <div>
                        <div className="flex text-xs leading-[14px] mb-2 md:mb-[30px]">
                            <Link href='/' className='text-t-disabled'>Home/</Link>
                            <Link className='text-t-secondary'>Pricing</Link>
                        </div>

                        <ProPoint />
                        <ProAccount />

                    </div>

                    <Footer />

                </div>

            </AuthenticatedLayout>


        </>
    );
}

export default Pricing;
