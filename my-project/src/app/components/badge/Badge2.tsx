import React from 'react';
import Image from 'next/image';
import { BadgeProps } from './types';

const Badge: React.FC<BadgeProps> = ({
    rank,
    iconImage,
    username,
    level,
    background_color = 'bg-linear-to-r from-cyan-400 to-lime-300',
    background_images = [],
    textcolor = 'text-gray-800',
    style_icon = '',
}) => {
    const levelRanks = [
        { min: 40, max: 60, color: 'bg-[#8923A8]', questionicon: '/question.png' },
        { min: 61, max: 80, color: 'bg-linear-to-r from-[#FFD501] to-[#FFB501]', questionicon: '/question2.png' },
    ];

    const getRankColor = (rank: number) => {
        const found = levelRanks.find((level) => rank >= level.min && rank <= level.max);
        return found ? found.color : "bg-gray-400";
    }

    const getQuestionIcon = (rank: number) => {
        const found = levelRanks.find((level) => rank >= level.min && rank <= level.max);
        return found ? found.questionicon : '/question.png';
    }

    const rankColor = getRankColor(rank);
    const questionIcon = getQuestionIcon(rank);

    return (
        <div className={`
            inline-flex
            items-center
            justify-center
            px-6
            py-4
            border
            border-[#DDDDDD]
            w-54.5
            h-28.5
            ${(level > rank) ? 'bg-white' : 'bg-[#DDDDDD]/30'}
        `}>
            <div className='
                relative
                inline-flex
                items-center
            '>
                <div className={`
                    relative
                    inline-flex
                    items-center
                    w-45
                    h-5.5
                    rounded-[19998px]
                    overflow-hidden
                    shadow-md
                    pr-4    
                `}>
                <div className={`
                    absolute
                    inset-0
                    ${(level > rank) ? background_color : 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-xl h-30 rounded-full bg-gray-100 opacity-10  z-0 flex items-center justify-center'}
                `}/>
                </div>
                {(level > rank) && background_images && (
                    <div className='absolute inset-0 flex z-10'>
                        {background_images.map((bg, index) => (
                            <div key={index} className={`flex-1 ${bg}`}/>
                        ))}
                    </div>
                )}
                {!(level > rank) && (
                    <div className='
                        absolute
                        left-1/2
                        top-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        w-[70vw]
                        max-w-xl
                        h-35
                        rounded-full
                        bg-gray-800
                        opacity-70
                        blur-xs
                        z-10
                        pointer-events-none
                    '/>
                )}
                <div className='relative z-30 flex items-center w-full'>
                    <span className={`
                        flex
                        items-center
                        justify-center
                        w-4
                        h-4
                        shrink-0
                        text-white
                        text-[10px]
                        leading-none
                        font-semibold
                        ml-1
                        mr-0.75
                        [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] 
                        ${rankColor}
                    `}>
                        {rank}
                    </span>
                    {(level > rank) && (
                        <span className={`
                            text-[14px]
                            w-37
                            h-5.5
                            truncate
                            ${textcolor}
                        `}>
                            {username}
                        </span>
                    )}
                    {!(level > rank) && (
                        <span className='
                            w-37
                            h-5.5
                            flex
                            items-center
                            justify-center
                        '>
                            <Image
                                src={questionIcon}
                                width={7.75}
                                height={10.73}
                                alt='?'
                                className='-rotate-35 -mr-0.5 mt-1'
                            />
                            <Image
                                src={questionIcon}
                                width={11.32}
                                height={16.09}
                                alt='?'
                            />
                            <Image
                                src={questionIcon}
                                width={7.75}
                                height={10.73}
                                alt='?'
                                className='rotate-35 -ml-0.5 mt-1'
                            />
                        </span>
                    )}
                </div>
            </div>
            {(level > rank) && (
                <span className='
                    absolute
                    right-0
                    top-1/2
                    -translate-y-1/2
                    translate-x-1/2
                    text-2xl
                    drop-shadow-md
                    z-30
                '>
                    <Image
                        src={iconImage}
                        width={22}
                        height={22}
                        alt='Badge Icon'
                        className={style_icon}
                    />
                </span>
            )}
        </div>
    );
};

export default Badge;