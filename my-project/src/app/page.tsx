import Badge from "./components/badge/Badge";
import { BadgeProps } from "./components/badge/types";

export default function Home() {
  const badges: BadgeProps[] = [
    {
      rank: 40,
      userName: "Longusername 1234567890",
      level: 100,
      iconImage: "/tree.png",
      background_color: "bg-linear-to-r from-[#35D6ED] to-[#C9F6FF]",
      background_images: "bg-[url('/BG-1.png')] bg-[length:80%_100%] opacity-20",
    },
    {
      rank: 43,
      userName: "sodro",
      level: 100,
      iconImage: "/flower.png",
      background_color: "bg-linear-to-r from-[#FFBBD0] to-[#CCFFC4]",
      background_images: "bg-[url('/Pink.png')] bg-[length:20%_90%] bg-[position:-4%_10%]",
    },
    {
      rank: 46,
      userName: "Longusername 1234567890",
      level: 100,
      iconImage: "/star.png",
      textColor: "text-[#FFDC64]",
      background_images: "bg-[url('/bg-night.png')] bg-repeat-y bg-cover",
      style_icon: "rotate-35"
    },
    {
      rank: 49,
      userName: "Longusername 1234567890",
      level: 100,
      iconImage: "/flower2.png",
      textColor: "text-[#0A491B]",
      background_color: "bg-linear-to-r from-[#59C408] to-[#C9F543]",
      style_icon: "rotate-35",
      background_icons: [
        "bg-[url('/BG-4.png')] bg-[length:80%_900%] bg-no-repeat bg-[position:-250%_30%]",
        "bg-[url('/BG-4.png')] bg-[length:90%_90%] bg-no-repeat bg-[position:-660%_200%] -rotate-180",
      ]
    },
    {
      rank: 52,
      userName: "Longusername 1234567890",
      level: 100,
      iconImage: "/rainbow.png",
      textColor: "text-[#3A0E47]",
      background_color: "bg-linear-to-r from-[#EA2F87] via-[#EF9C09] via-[#F9E000] via-[#93E221] via-[#1BC1DB] via-[#25ABD9] via-[#4170D4] to-[#4A3C9E]"
    },
    {
      rank: 58,
      userName: "Longusername 1234567890",
      level: 100,
      iconImage: "/cake.png",
      textColor: "text-[#FF008F]",
      background_color: "bg-[#FFBBE1]",
      style_icon: "rotate-14",
      background_images: "bg-[url('/StrawberryCake.png')] bg-[length:30px_22px] bg-repeat"
    },
    {
      rank: 63,
      userName: "Longusername 1234567890",
      level: 100,
      iconImage: "/lemon.png",
      textColor: "text-[#FF008F]",
      background_color: "bg-linear-to-r from-[#00CAFC] to-[#FADB0F]",
      background_images: "bg-[url('/b1.png')] bg-[length:30%_160%] bg-repeat bg-[position:25%_50%] opacity-25",
    },
    {
      rank: 67,
      userName: "Longusername 1234567890",
      level: 100,
      iconImage: "/can.png",
      textColor: "text-[#FFDA0A]",
      background_color: "bg-[#621016]",
      background_images: "bg-[url('/Cola.png')] bg-[length:30px_22px] bg-repeat",
      style_icon: "rotate-10 fill"
    },
    {
      rank: 72,
      userName: "Longusername 1234567890",
      level: 100,
      iconImage: "/candy.png",
      textColor: "text-[#4F1D1D]",
      background_color: "bg-linear-to-r from-[#FF74B1] via-[#FFEB76] to-[#A6EAFF]",
      style_icon: "-rotate-25 fill"
    },
    {
      rank: 78,
      userName: "Longusername 1234567890",
      level: 100,
      iconImage: "/popcorn.png",
      textColor: "text-[#FFDA0A]",
      background_color: "bg-[#C54823]",
      background_images: "bg-[url('/Popcorn4.png')] bg-[length:30px_22px] bg-repeat",
      style_icon: "rotate-9 fill",
      background_icons: [
        "bg-[url('/pow.png')] bg-[length:23px_14px] bg-[position:0%_-70%] bg-no-repeat",
        "bg-[url('/pow.png')] bg-[length:32px_23px] bg-[position:110%_-1000%] bg-no-repeat"
      ],
    },
    {
      rank: 78,
      userName: "Longusername 1234567890",
      level: 75,
      iconImage: "/popcorn.png",
      textColor: "text-[#FFDA0A]",
      background_color: "bg-[#C54823]",
      background_images: "bg-[url('/Popcorn1.png')] bg-[length:30px_22px] bg-no-repeat",
      style_icon: "rotate-9 fill"
    },
    {
      rank: 45,
      userName: "Longusername 1234567890",
      level: 40,
      iconImage: "/popcorn.png",
      textColor: "text-[#FFDA0A]",
      background_color: "bg-[#C54823]",
      background_images: "bg-[url('/Popcorn1.png')] bg-[length:30px_22px] bg-no-repeat",
      style_icon: "rotate-9 fill"
    }
  ];

  return (
    <div className="flex flex-col py-4 px-2 gap-4 border rounded-2xl border-[#DDDDDD] w-full h-81.5">
      <div className="flex justify-between items-center">
        <h1 className="text-[18px] leading-7">Nickname Design Kit</h1>
        <button type="button" className="text-[12px] leading-4 text-white bg-[#7541EA] rounded-md border py-0.5 px-3">Apply</button>
      </div>
      {/* Cyan to Lime gradient */}
      <div className="grid grid-cols-5 gap-4 overflow-y-auto flex-1">

      {/* Blue to Cyan gradient */}
      {/* badges.map((badge,)) */}
      {badges.map((badge, index) => (
        <Badge key={index} {...badge} />
      ))}
      </div>
    </div>
  );
}