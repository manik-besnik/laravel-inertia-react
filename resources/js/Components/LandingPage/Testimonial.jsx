import React, { useState } from 'react';
import Slider from "react-slick";
import alex from '@/../../public/images/alex.png'
import kali from '@/../../public/images/kail.png'
import liam from '@/../../public/images/liam.png'
import emily from '@/../../public/images/emily.png'
import max from '@/../../public/images/max.png'

export default function Testimonial() {

    const [showReview, setShowReview] = useState({
        id: 1,
        image: "https://i.ibb.co/ZN6zpY2/Rectangle-38.png",
        name: "Alex",
        designation: 'Illustration Designer',
        text: "As an illustration designer, I rely on platforms like Maketop.me to amplify my artwork's visibility. Their services have significantly boosted my online presence, allowing my creations to reach a wider audience."
    })

    const reviews = [
        {
            id: 1,
            image: alex,
            name: "Alex",
            designation: 'Illustration Designer',
            text: "As an illustration designer, I rely on platforms like Maketop.me to amplify my artwork's visibility. Their services have significantly boosted my online presence, allowing my creations to reach a wider audience."
        },
        {
            id: 2,
            image: kali,
            name: "Kali",
            designation: 'Visual Designer',
            text: "Maketop.me has been instrumental in my success as a visual designer. With their promotion services, my design have gained popularity across social media platforms, establishing my reputation as a sought-after designer."
        },
        {
            id: 3,
            image: liam,
            name: "Liam",
            designation: 'Digital Illustrator',
            text: "As a digital illustrator, Maketop.me has been an invaluable asset in promoting my work. Their platform has helped me showcase my illustrations to a broader audience, leading to increased recognition and opportunities."
        },
        {
            id: 4,
            image: emily,
            name: "Emily",
            designation: 'Graphic Designer',
            text: "Thanks to Maketop.me, my journey as a graphic designer has taken a remarkable turn. Their promotion services have helped my designs gain traction, attracting attention from potential clients and collaborators."
        },
        {
            id: 5,
            image: max,
            name: "Max",
            designation: 'Vector Artist',
            text: "Maketop.me has been a game-changer for me as a vector artist. With their help, my vector artworks have garnered more likes, comments, and shares, ultimately propelling my career forward."
        },
    ]

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    const handleChange = (e) => {
        const current = document.querySelector('.slick-current');
        const img = current.querySelector('img');
        const src = img.getAttribute('src');
        console.log(src);
        const currentData = reviews.find(review => review.image === src)
        setShowReview(currentData)
    }

    return (
        <div id='testimonial' className='py-5 lg:py-20 site-container'>

            <h2 className='landing-title max-w-[682px]'>Voices of Success: Testimonials from Thrilled Clients</h2>

            <div className='max-w-[1000px] mx-auto'>
                <Slider {...settings} afterChange={handleChange}>
                    {reviews.map(review => <div>
                        <img src={review.image} alt="Rectangle-38" />
                    </div>)}
                </Slider>
            </div>

            <div className='max-w-[772px] mx-auto mt-6 md:mt-10'>
                <p className="text-center text-xs md:text-[21px] md:leading-[25px] font-medium text-t-secondary mb-5 md:mb-10">{showReview.text}</p>

                <div>
                    <h4 className='text-[17px] md:text-[25px] leading-[26px] md:leading-[30px] text-t-secondary mb-1 font-semibold text-center'>{showReview.name}</h4>
                    <p className='text-center text-xs md:text-[21px] md:leading-[25px] font-medium text-t-secondary'>{showReview.designation}</p>
                </div>
            </div>

        </div>
    )
}

