import React from "react";
import Image from "next/image";
import { BadgeProps } from "./types";

const Badge: React.FC<BadgeProps> = ({
    rank,
    iconImage,
    userName,
    level,
    background_color = "bg-linear-to-r from-cyan-400 to-lime-300",
    background_images = '',
    background_icons = [],
    textcolor = "text-gray-800",
    style_icon = "",
}) => {
    const levelRanks = [
        { min: 40, max: 60, color: "bg-[#8923A8]", questionicon: "/question.png" },
        { min: 61, max: 80, color: "bg-linear-to-r from-[#FFD501] to-[#FFB501]", questionicon: "/question2.png" },
    ];

    const getProperty = (rank: number) => {
        const found = levelRanks.find((level) => rank >= level.min && rank <= level.max);
        return found ? { rankColor: found.color, questionIcon: found.questionicon } : { rankColor: "bg-gray-400", questionIcon: '/question.png' };
    }

    const { rankColor, questionIcon } = getProperty(rank);
    const isUnlocked = level > rank;

    return (
        <div className={`inline-flex items-center justify-center px-6 py-4 rounded-lg border border-[#DDDDDD] w-54.5 h-28.5
            ${isUnlocked ? 'bg-white' : 'bg-[#DDDDDD]/30'}
        `}>
            <div className="relative inline-flex items-center">
                {/* Main Badge */}
                {!isUnlocked && <div className="absolute w-45 h-5.5 rounded-full bg-[#454c57] opacity-100 blur-[1px] z-10"/>}
                <div className="relative flex items-center w-45 h-5.5 rounded-[19998px] overflow-hidden pr-4">
                    {/* 🎨 Background Color Layer (bottom) */}
                    {isUnlocked && <div className={`absolute inset-0 ${background_color}`}/>}
                    {!isUnlocked && <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-45 h-5.5 bg-black opacity-1 z-10"/>}

                    {/* 🖼 Background Image Layer (middle) */}
                    {isUnlocked && (
                        <div className="absolute inset-0 flex">
                            <div className={`absolute inset-0 z-10 ${background_images}`}/>
                            {background_icons.length > 0 && (
                                <div className="absolute inset-0 flex z-20">
                                    {background_icons.map((bg, index) => (
                                        <div key={index} className={`flex-1 ${bg}`}/>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* ✍️ Content Layer (top) */}
                    <div className="relative flex z-20 items-center w-full">
                        {/* Rank */}
                        <span className={`${rankColor} flex items-center justify-center w-4 h-4 shrink-0 text-white text-[10px] leading-none font-semibold ml-1 mr-0.75 [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]`}>
                            {rank}
                        </span>

                        {/* Username */}
                        {isUnlocked && (
                            <span className={`${textcolor} text-[14px] w-37 h-5.5 truncate`}>
                                {userName}
                            </span>
                        )}
                        {!isUnlocked && (
                            <span className="w-37 h-5.5 flex items-center justify-center">
                                <Image src={questionIcon} width={7.75} height={10.73} alt="?" className="-rotate-35 -mr-0.5 mt-1"/>
                                <Image src={questionIcon} width={11.32} height={16.09} alt="?"/>
                                <Image src={questionIcon} width={7.75} height={10.73} alt="?" className="rotate-35 -ml-0.5 mt-1"/>
                            </span>
                        )}
                    </div>
                </div>
                {/* Icon - 1/2 overlapping badge, vertically centered */}
                {isUnlocked && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-2xl z-30">
                        <Image src={iconImage} width={22} height={22} alt="Badge Icon" className={style_icon}/>
                    </span>
                )}
            </div>
        </div>
    );
}

export default Badge;