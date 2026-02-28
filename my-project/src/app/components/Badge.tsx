import React from 'react';
import Image from 'next/image';

interface BadgeProps {
  rank: number;
  icon?: string;
  username?: string;
  background_gradient?: string;
  colorrank?: string;
  textcolor?: string;
}

const Badge: React.FC<BadgeProps> = ({
  rank,
  icon,
  username,
  background_gradient = 'bg-linear-to-r from-cyan-400 to-lime-300',
  colorrank = 'bg-[#8923A8]',
  textcolor = 'text-gray-800',
}) => {
  const iconColor = colorrank.replace('bg-', 'text-');

  return (
    <div className={`inline-flex items-center justify-center
          px-6 py-4
          rounded-lg
          border
         ${username ? 'bg-white' : 'bg-[#DDDDDD]/30'} 
          border-[#DDDDDD]
          w-54.5
          h-28.5`}
          >
        <div className="relative inline-flex items-center">
      {/* Main Badge */}
      <div
        className={`
          inline-flex items-center 
          w-45 h-5.5 
          rounded-[19998px] 
          ${username ? background_gradient : 'bg-linear-to-b from-gray-600 to-gray-700'} 
          shadow-md
          ${icon ? 'pr-4' : ''} 
        `}
      >
        {/* Rank Badge */}
        <span
          className={`
            flex items-center justify-center 
            w-4 h-4 shrink-0 
            ${colorrank} 
            text-white text-[10px] leading-none font-semibold 
            [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] 
            ml-1 mr-0.75
          `}
        >
          {rank}
        </span>

        {/* Username */}
        {username ? (
          <span className={`${textcolor} text-[14px] w-37 h-5.5 truncate`}>
            {username}
          </span>
        ) : (
          <span className="w-37 h-5.5 flex items-center justify-center">
            <Image
              src="/question.png"
              width={7.75}
              height={10.73}
              alt="?"
              className={`${iconColor} transform -rotate-35 -mr-0.5 mt-1`}
            />
            <Image
              src="/question.png"
              width={11.32}
              height={16.09}
              alt="?"
              className={`${iconColor}`}
            />
            <Image
              src="/question.png"
              width={7.75}
              height={10.73}
              alt="?"
              className={`color-red-400 transform rotate-35 -ml-0.5 mt-1`}
            />
          </span>
        )}
      </div>

      {/* Icon - 1/2 overlapping badge, vertically centered */}
      {username && (
        <span
          className="
            absolute 
            right-0 
            top-1/2 
            -translate-y-1/2 
            translate-x-1/2
            text-2xl
            drop-shadow-md
          "
        >
          {icon}
        </span>
      )}
    </div>
    </div>
  );
};

export default Badge;