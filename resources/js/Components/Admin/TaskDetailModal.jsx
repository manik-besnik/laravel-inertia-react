import Close from "@/Components/SvgIcons/Close.jsx";
import Modal from "@/Components/Modal.jsx";

const TaskDetailModal =  ({show, setShow, task}) => {
    return (
        <Modal show={show} maxWidth='md' onClose={() => setShow(false)}>
            <div className="p-[30px] relative">
                <button className="absolute right-5 top-5 md:right-[30px] md:top-[30px]" onClick={() => setShow(false)}><Close
                    className="h-6 w-6"/></button>

                <div className="grid grid-cols-1 gap-[10px] mb-6">
                    <p>Task Title : {task?.title}</p>
                    <p>Task Coin : {task?.coin}</p>
                    <p>Task Url : {task?.task_url}</p>
                </div>
                <div className="flex justify-end gap-4">
                    <button type="button" onClick={() => setShow(false)} className='app-btn'>Cancel</button>

                </div>
            </div>

        </Modal>
    )
}

export default TaskDetailModal;
