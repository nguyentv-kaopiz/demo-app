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

  const iconColor = rankColor.replace('bg-', 'text-');

  return (
    <div className={`inline-flex items-center justify-center
          px-6 py-4
          rounded-lg
          border
         ${(level > rank) ? 'bg-white' : 'bg-[#DDDDDD]/30 '} 
          border-[#DDDDDD]
          w-54.5
          h-28.5`}
          >
        <div className="relative inline-flex items-center">
      {/* Main Badge */}
       {!(level > rank) && <div className='absolute
        w-45 h-5.5 max-w-xl
        rounded-full
        bg-[#454c57]
        opacity-100
        blur-[1px]
        z-10
        pointer-events-none'/>}
      <div
  className={`
    relative flex items-center 
    w-45 h-5.5 
    rounded-[19998px] 
    overflow-hidden
    pr-4
  `}
>
  {/* 🎨 Background Color Layer (bottom) */}
  {/* <div
    className={`
      absolute inset-0 
      ${(level > rank) ? background_color : 'bg-[#444c55]'}
    `}
  /> */}

  {(level > rank) && (<div className={`absolute inset-0 ${background_color}`}/>)}
  {!(level > rank) && (<div className='absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-45 h-5.5  max-w-xl
        rounded-full
        bg-black opacity-1
        z-10
        flex items-center justify-center'/>)}
  

  {/* 🖼 Background Image Layer (middle) */}
  {(level > rank) && background_images && (
  <div className="absolute inset-0 flex z-10">
    {background_images.map((bg, index) => (
      <div
        key={index}
        className={`
          flex-1
          ${bg}
        `}
      />
    ))}
  </div>
)}

  {/* ✍️ Content Layer (top) */}
  <div className="relative z-20 flex items-center w-full">
    
    {/* Rank */}
    <span
      className={`
        flex items-center justify-center 
        w-4 h-4 shrink-0 
        ${rankColor} 
        text-white text-[10px] leading-none font-semibold 
        [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] 
        ml-1 mr-0.75
      `}
    >
      {rank}
    </span>

    {/* Username */}
    {(level > rank) ? (
      <span className={`${textcolor} text-[14px] w-37 h-5.5 truncate`}>
        {username}
      </span>
    ) : (
      <span className="w-37 h-5.5 flex items-center justify-center">
        <Image
          src={questionIcon}
          width={7.75}
          height={10.73}
          alt="?"
          className={`${iconColor} -rotate-35 -mr-0.5 mt-1`}
        />
        <Image
          src={questionIcon}
          width={11.32}
          height={16.09}
          alt="?"
          className={`${iconColor}`}
        />
        <Image
          src={questionIcon}
          width={7.75}
          height={10.73}
          alt="?"
          className="rotate-35 -ml-0.5 mt-1"
        />
      </span>
    )}
  </div>
</div>

      {/* Icon - 1/2 overlapping badge, vertically centered */}
      {(level > rank) && (
        <span
          className="
            absolute 
            right-0 
            top-1/2 
            -translate-y-1/2 
            translate-x-1/2
            text-2xl
            drop-shadow-md
            z-30
          "
        >
          <Image src={iconImage} width={22} height={22} alt="Badge Icon" className={style_icon}/>
        </span>
      )}
    </div>
    </div>
  );
};

export default Badge;