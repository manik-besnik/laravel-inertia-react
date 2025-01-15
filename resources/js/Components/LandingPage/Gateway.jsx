import { Link } from '@inertiajs/react'
import React from 'react'

export default function Company() {

    const data = [
        {
            name: 'Dribbble',
            title: 'Dribbble Boost: Elevate Your Profile with Strategic Promotion',
            subtitle: 'Experience a surge in followers, likes, saves, and comments on your Dribbble profile through our targeted promotion services. Maximize your visibility and engagement with every shot you share!',
            image: 'https://i.ibb.co/C0kRJHH/gate1.png'
        },
        {
            name: 'Behance',
            title: 'Behance Boost: Amplify Your Presence with Strategic Promotion',
            subtitle: 'Elevate your Behance profile with our promotion services, gaining increased followers, likes, saves, and comments. Expand your reach and engagement to showcase your creative work to a wider audience.',
            image: 'https://i.ibb.co/zf28mDd/Frame-89.png'
        },
        {
            name: 'ArtStation',
            title: 'ArtStation Ascend: Propel Your Portfolio with Strategic Promotion',
            subtitle: 'Experience a surge in followers, likes, and comments on your ArtStation portfolio through our targeted promotion services. Enhance your visibility and engagement to showcase your artistic talent to a broader audience.',
            image: 'https://i.ibb.co/8922w5X/Frame-90.png'
        },
        {
            name: 'YouTube',
            title: 'TubeTrend: Ignite Your YouTube Channel with Strategic Promotion',
            subtitle: "Experience rapid growth on your YouTube channel with our promotion services, garnering subscribers, likes, and comments. Amplify your content's reach and engagement to drive success in the competitive world of online video",
            image: 'https://i.ibb.co/dtmnsBQ/Frame-90-1.png'
        },
        {
            name: 'LinkedIn',
            title: 'Unlock Your LinkedIn Profile with Strategic Promotion',
            subtitle: 'Supercharge your LinkedIn presence with our promotion services, gaining followers, likes, reposts, and comments. Elevate your professional profile and expand your network with increased visibility and engagement.',
            image: 'https://i.ibb.co/7GRZSSG/Frame-90-2.png'
        },
        {
            name: 'Medium',
            title: 'Medium Momentum: Boost Your Reach with Strategic Promotion',
            subtitle: "Gain momentum on Medium with our promotion services, increasing followers, likes, and comments on your articles. Expand your readership and engagement to elevate your content's impact.",
            image: 'https://i.ibb.co/8MmZGky/Frame-90-3.png'
        },
        {
            name: 'Instagram',
            title: 'IgBoost: Skyrocket Your Instagram Presence with Strategic Promotion',
            subtitle: "Maximize your Instagram presence with our promotion services, gaining followers, likes, saves, and comments. Elevate your profile's visibility and engagement to stand out in the vibrant world of social media.",
            image: 'https://i.ibb.co/sHzyJnT/Frame-90-4.png'
        },
        {
            name: 'Twitter',
            title: 'Tweet Thrive: Ignite Your Twitter Presence with Strategic Promotion',
            subtitle: 'Go to trend and Boost your Twitter profile with our promotion services, gaining followers, likes, reposts, and comments. Elevate your presence and engagement to make waves in the Twittersphere.',
            image: 'https://i.ibb.co/RH9Br9Y/Frame-90-5.png'
        },
        {
            name: 'Facebook',
            title: 'Facebook Buzz: Spark Virality on Facebook with Strategic Promotion',
            subtitle: "Experience viral growth on Facebook with our promotion services, gaining followers, likes, and comments. Amplify your reach and engagement to make a lasting impact in the world's largest social network.",
            image: 'https://i.ibb.co/thxTMBG/Frame-90-6.png'
        },
        {
            name: 'TikTok',
            title: 'TikTok Surge: Propel Your Presence with Strategic Promotion',
            subtitle: 'Catapult your TikTok profile and post (video)  with our promotion services, garnering followers, likes, and comments. Boost your visibility and engagement to ride the wave of TikTok virality.',
            image: 'https://i.ibb.co/MM3kBMb/Frame-90-7.png'
        },
    ]


    return (
        <div className='pb-5 md:py-20 site-container'>

            <h2 className='landing-title max-w-[960px]'>Your Gateway to Free Social Network Promotion Through Community Collaboration</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                {data.map(social => <div className="p-[10px] md:p-10 bg-side-and-button rounded-xl lg:rounded-[20px]">
                    <img className='w-full mb-5 lg:mb-[30px]' src={social.image} alt="guide1" border="0" />

                    <div>
                        <h4 className='landing-secondary-title mb-[10px] lg:mb-5'>{social.title}</h4>

                        <p className='subtitle mb-4 lg:mb-5'>{social.subtitle}</p>

                        <Link href={route('register')}  className='landing-secondary-btn inline-block'>Start for Free</Link>

                    </div>
                </div>)}
            </div>

        </div>
    )
}

