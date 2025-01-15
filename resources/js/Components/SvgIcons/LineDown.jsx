import React from 'react'

export default function LineDown(props) {
    return (
        <svg {...props} width="56" height="36" viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_443_13351)">
                <path d="M49 23L38 11.2667L25.5 16.6444L19.5 5.88889L7 1" stroke="#F95D6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_443_13351" x="-0.000274658" y="-0.000274658" width="56.0003" height="36.0003" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.364706 0 0 0 0 0.415686 0 0 0 0.6 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_443_13351" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_443_13351" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}
