import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useEffect, useState } from 'react';
import Close from '@/Components/SvgIcons/Close';

const data = [
    {
        title: 'Public Offer',
        text: 'Welcome to Maketop.me! This Public Offer outlines the terms and conditions governing the use of our services. By accessing or using our website, you agree to comply with these terms.',
    },
    {
        title: 'Service Description',
        text: 'Maketop.me provides promotion services to enhance your social media presence. We offer various packages tailored to meet your needs, including likes, followers, comments, and other engagement metrics.',
    },
    {
        title: 'Payment Terms',
        text: 'Payment for our services is required upfront, and prices are clearly displayed on our website. We accept payment through secure online payment gateways. Once payment is processed, our services will be delivered promptly.',
    },
    {
        title: 'Refund Policy',
        text: 'At Maketop.me, we strive for customer satisfaction. However, due to the nature of our services, once an order has been placed and processed, we cannot issue refunds.',
    },
    {
        title: 'Intellectual Property Rights',
        text: 'All content and materials provided on Maketop.me, including text, graphics, logos, and images, are the property of Maketop.me and protected by copyright laws. You may not reproduce, distribute, or modify any content without prior written permission.',
    },
    {
        title: 'Disclaimer of Warranties',
        text: 'Maketop.me strives to provide high-quality services, but we make no warranties or representations regarding the accuracy, completeness, or reliability of the information provided. We disclaim all warranties, express or implied, including but not limited to merchantability and fitness for a particular purpose.',
    },
    {
        title: 'Limitation of Liability',
        text: 'In no event shall Maketop.me be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our services.',
    },
    {
        title: 'Contact Us',
        text: 'If you have any questions or concerns about this Public Offer, please contact us at hellomaketopme@gmail.com.',
    },
]

export default function PublicOffer() {
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
                Public Offer
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
