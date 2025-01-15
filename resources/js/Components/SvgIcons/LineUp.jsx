import React from 'react'

export default function LineUp(props) {
    return (
        <svg {...props} width="56" height="36" viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_443_13364)">
                <path d="M7 23L18 11.2667L30.5 16.6444L36.5 5.88889L49 1" stroke="#00B47D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_443_13364" x="-7.62939e-06" y="-0.000274658" width="56.0003" height="36.0003" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.705882 0 0 0 0 0.490196 0 0 0 0.6 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_443_13364" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_443_13364" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}
