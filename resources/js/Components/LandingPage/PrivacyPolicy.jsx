import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useEffect, useState } from 'react';
import Close from '@/Components/SvgIcons/Close';

const data = [
    {
        title: 'Privacy Policy',
        text: 'At Maketop.me, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit or interact with our website.',
    },
    {
        title: 'Information We Collect',
        text: 'We collect limited personal information provided voluntarily by users, such as name, email address, and social media Profile link, to provide our services effectively. We may also gather non-personal information automatically, such as browser type and IP address, for analytics purposes.',
    },
    {
        title: 'How We Use Your Information',
        text: 'We use the information collected to enhance your user experience, provide personalized content, and improve our services. Your data may be used to communicate with you, respond to inquiries, and send updates about our platform. We do not sell or share your information with third parties for marketing purposes.',
    },
    {
        title: 'Data Security',
        text: 'We implement industry-standard security measures to safeguard your personal information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, while we strive to protect your data, we cannot guarantee absolute security.',
    },
    {
        title: 'Third-Party Links',
        text: 'Our website may contain links to third-party sites or services. These external sites have their own privacy policies, and we are not responsible for their content or practices. We encourage you to review the privacy policies of these sites before providing any personal information.',
    },
    {
        title: 'Changes to This Privacy Policy',
        text: 'We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on this page. Your continued use of our website after such modifications constitutes your acknowledgment and acceptance of the updated policy.',
    },
    {
        title: 'Contact Us',
        text: 'If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at hellomaketopme@gmail.com.',
    },
]

export default function PrivacyPolicy() {
    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    if (isOpen) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }


    return (
        <>
            <Button
                onClick={open}
                className="subtitle text-main-and-focus"
            >
                Privacy Policy
            </Button>

            <Transition appear show={isOpen}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-text-primary">
                        <div className="flex min-h-full items-center justify-center px-5 lg:px-[50px]">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-[1000px] h-full relative rounded-xl bg-white pr-5 lg:pr-[100px]">
                                    <Button className="absolute right-5 top-5 md:right-[30px] md:top-[30px]" onClick={close}><Close className="h-6 w-6" /> </Button>

                                    <div className="px-5 py-[50px] md:p-[50px] max-h-[90vh] overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-slate-300 scrollbar-track-transparent">
                                        {
                                            data.map((part, i) => <div key={i} className="mb-4 md:mb-[30px]">
                                                <h4 className='text-sm md:text-[21px] md:leading-[25px] font-medium text-text-primary mb-2 md:mb-4'>{part.title}</h4>
                                                <p className="subtitle">
                                                    {part.text}
                                                </p>
                                            </div>)
                                        }

                                        <p className='subtitle mt-4'>Last Updated: 01/04/2024</p>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
