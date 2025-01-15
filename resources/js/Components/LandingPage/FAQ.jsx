import { Link } from '@inertiajs/react'
import React from 'react'

export default function Company() {

    const faqs = [
        {
            question: "Is Maketop.me safe for my profile?",
            answer: "Absolutely! Maketop.me prioritizes the safety and security of your profile. We use only ethical and legitimate methods to promote your content, ensuring compliance with platform guidelines and safeguarding your account."
        },
        {
            question: "How can I promote for free?",
            answer: "Promoting for free is easy with Maketop.me! Simply engage with our community by completing tasks like liking, commenting, and following others' content. In return, you'll receive promotion from fellow users, helping to boost your profile organically."
        },
        {
            question: "Are the likes/followers I receive from real users?",
            answer: "Yes! At Maketop.me, we pride ourselves on providing genuine engagement from real users. Our community consists of authentic individuals who engage with each other's content, ensuring that the likes and followers you receive are from real people."
        },
        {
            question: "Do I have to give you my password?",
            answer: "Absolutely not! We never require access to your account password. Your privacy and security are paramount to us, and we operate solely based on the information you provide voluntarily, such as your post or profile link."
        },
        {
            question: "How does it work?",
            answer: "Maketop.me operates on a mutual assistance model. By participating in community tasks such as liking, commenting, and following, you earn points that can be used to promote your own content. It's a win-win scenario where everyone helps each other grow their social media presence organically."
        },
    ]

    return (
        <div id='faq' className='py-5 lg:py-20 max-w-[803px] mx-auto p-3 '>

            <h2 className='landing-title max-w-[542px]'>Here are Some FAQs About Maketop.me</h2>

            <div className="mb-[30px] lg:mb-[50px]">
                {faqs.map(faq => <div className='mb-5 lg:mb-[30px]'>
                    <h4 className='landing-secondary-title mb-4 lg:mb-5'>{faq.question}</h4>
                    <p className='subtitle'>{faq.answer}</p>
                </div>)}
            </div>

            <div className="text-center">
                <Link href={route('register')} className='landing-secondary-btn inline-block'>Start for Free</Link>

            </div>
        </div>
    )
}

