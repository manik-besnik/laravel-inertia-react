import Modal from "@/Components/Modal.jsx";
import React, {useState} from "react";
import {usePage} from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox.jsx";

const ExtensionModal = ({show, handleExtensionConfirm, task}) => {

    const {setting_data} = usePage().props;
    const extensionLink = setting_data?.extension_link ?? null


    const [isConfirm, setIsConfirm] = useState(false);

    const handleClick = async () => {
        if (isConfirm) {
            await confirmExtensionInstalled()
            handleExtensionConfirm()
        }

        const today = new Date().toISOString().split('T')[0];
        localStorage.setItem('is_confirm_today', JSON.stringify({date: today}));
        handleExtensionConfirm()
    }

    const confirmExtensionInstalled = async () => {
        try {
            await axios.get(route('extension.installed'))

        } catch (e) {

        }
    }

    return (
        <Modal show={show} maxWidth='3xl' onClose={() => handleExtensionConfirm(false)}>
            <div className="p-[30px] relative">

                <h3 className="text-[36px] font-semibold text-text-primary">Install the Extension to earn your
                    coins</h3>
                <div className="flex gap-5 mt-4 md:mt-5">
                    <a href={extensionLink} download={extensionLink}
                       target='_blank'
                       className='landing-secondary-btn cursor-pointer'>
                        Install Extension
                    </a>
                </div>

                <h3 className="text-[30px] font-medium text-text-primary mt-8">The Rules</h3>
                <div className="flex flex-col gap-y-1.5 mt-5 text-[#314252] text-[17px]">
                    <p>1. You must pin the extension to your browser to use it.</p>
                    <p>2. Prohibited actions include unfollowing users, unliking posts, or deleting comments. Violators
                        will face a permanent ban.</p>
                    <p>3. After completing a task, please allow a few seconds for verification. Completing tasks too
                        quickly may result in points not being added to your balance.</p>
                    <p>4. Tasks can only be added for followers of your profile.</p>
                    <p>5. Do not use fake accounts. Your account must include an avatar, bio, and posts to ensure
                        authenticity.</p>
                </div>

                <div className="flex gap-5 mt-4 md:mt-5">
                    <button type="button"
                            className='landing-secondary-btn cursor-pointer'
                            onClick={handleClick}>
                        I understand
                    </button>
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={isConfirm}
                            onChange={(e) => setIsConfirm(!isConfirm)}
                        />
                        <span className="text-xs md:text-sm text-text-primary font-medium ms-2">Don’t Show me this message again</span>
                    </label>
                </div>

            </div>

        </Modal>
    )
}

export default ExtensionModal;
