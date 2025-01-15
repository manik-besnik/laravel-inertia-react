import {Head, usePage} from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TaskDetail from "@/Components/Task/TaskDetail.jsx";


const Show = ({task}) => {
    const user = usePage().props.auth.user;

    return (
        <>
            <Head title={task.title}/>

            <AuthenticatedLayout
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Task Details</h2>}
            >

                <TaskDetail task={task} user={user}/>

            </AuthenticatedLayout>

        </>
    );
}

export default Show;
