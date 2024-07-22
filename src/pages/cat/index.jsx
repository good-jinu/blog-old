import React from 'react';

const CatPage = () => {
    return (
        <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g fill="transparent">
                <polygon id="cat-ear" points="0 -512, 90 -480, 512 512, -512 512, -90 -480"/>
                <path id="cat-nose"
                      d="M-280 -180 H280 C400 -180, 360 -100, 300 -50 L0 180 L-300 -50 C-360 -100, -400 -180, -280 -180z"
                />
                <path id="cat-eyeline"
                      d="M-500 -300 C 400 -400, 482 0, 500 300 C -400 400, -482 0, -500 -300z"
                />
                <circle id="cat-eye" cx="0" cy="0" r="300"/>
                <path id="cat-mouth"
                      d="M-500 -90 C -300 100, -200 100, 0 0 C 200 100, 300 100, 500 -90 C 200 100, 200 100, 0 0 C -200 100, -300 100, -500 -90z"
                />
                <g id="cat-mustache">
                    <line x1="-480" y1="-180" x2="480" y2="-100"/>
                    <line x1="-480" y1="50" x2="480" y2="0"/>
                    <line x1="-480" y1="300" x2="480" y2="80"/>
                </g>
            </g>
            <g transform="translate(402 90) rotate(27) scale(0.1 0.1)">
                <use href="#cat-ear" fill="white" stroke="black" strokeWidth="100"/>
            </g>
            <g transform="translate(110 90) rotate(-27) scale(0.1 0.1)">
                <use href="#cat-ear" fill="white" stroke="black" strokeWidth="100"/>
            </g>
            <ellipse cx="256" cy="256" rx="210" ry="156" stroke="black" strokeWidth="10" fill="white"/>
            <g transform="translate(160 210) rotate(0) scale(0.1 0.1)">
                <use href="#cat-eyeline" fill="white" stroke="black" strokeWidth="100"/>
                <use href="#cat-eye" fill="black"/>
            </g>
            <g transform="translate(352 210) rotate(0) scale(-0.1 0.1)">
                <use href="#cat-eyeline" fill="white" stroke="black" strokeWidth="100"/>
                <use href="#cat-eye" fill="black"/>
            </g>
            <g transform="translate(256 302) rotate(0) scale(0.125 0.125)">
                <use href="#cat-nose" fill="black"/>
            </g>
            <rect x="248" y="300" width="16" height="50" rx="10"/>
            <g transform="translate(256 345) rotate(0) scale(0.15 0.125)">
                <use href="#cat-mouth" fill="white" stroke="black" strokeWidth="100"/>
            </g>
            <g transform="translate(146 312) rotate(0) scale(0.1 0.1)">
                <use href="#cat-mustache" fill="transparent" stroke="black" strokeWidth="100" strokeLinecap="round"/>
            </g>
            <g transform="translate(366 312) rotate(0) scale(-0.1 0.1)">
                <use href="#cat-mustache" fill="transparent" stroke="black" strokeWidth="100" strokeLinecap="round"/>
            </g>
            Sorry, your browser does not support inline SVG.
        </svg>
    )
};

export default CatPage;