import Badge from "./components/badge/Badge";
import { BadgeProps } from "./components/badge/types";

export default function Home() {
  const badges: BadgeProps[] = [
    {
      rank: 40,
      username: "Longusername 1234567890",
      level: 100,
      iconImage: "/tree.png",
      background_color: "bg-linear-to-r from-[#35D6ED] to-[#C9F6FF]",
      background_images: [
        "bg-[url('/BG-1.png')] bg-[length:80%_100%] opacity-20",
      ],
    },
    {
      rank: 43,
      username: "sodro",
      level: 100,
      iconImage: "/flower.png",
      background_color: "bg-linear-to-r from-[#FFBBD0] to-[#CCFFC4]",
      background_images: [
        "bg-[url('/Pink.png')] bg-[length:80%_100%] bg-no-repeat bg-[position:10%_50%]",
        "bg-[url('/Pink.png')] bg-[length:80%_100%] bg-no-repeat bg-[position:10%_50%]",
        "bg-[url('/BG.png')] bg-[length:80%_100%] bg-no-repeat bg-[position: 10%_50%]",
        "bg-[url('/BG.png')] bg-[length:80%_100%] bg-no-repeat bg-[position: 10%_50%]",
        "bg-[url('/BG.png')] bg-[length:80%_100%] bg-no-repeat bg-[position: 10%_50%]",
        "bg-[url('/BG.png')] bg-[length:80%_100%] bg-no-repeat bg-[position: 10%_50%]",
      ],
    },
    {
      rank: 46,
      username: "Longusername 1234567890",
      level: 100,
      iconImage: "/star.png",
      textcolor: "text-[#FFDC64]",
      background_images: [
        "bg-[url('/bg-night.png')] bg-repeat-y bg-cover"
      ],
      style_icon: "rotate-35"
    },
    {
      rank: 49,
      username: "Longusername 1234567890",
      level: 100,
      iconImage: "/flower2.png",
      textcolor: "text-[#0A491B]",
      background_color: "bg-linear-to-r from-[#59C408] to-[#C9F543]",
      style_icon: "rotate-35",
      background_images: [
        "bg-[url('/BG-4.png')] bg-[length:80%_900%] bg-no-repeat bg-[position:-250%_30%]",
        "bg-[url('/BG-4.png')] bg-[length:90%_90%] bg-no-repeat bg-[position:-660%_200%] -rotate-180",
      ]
    },
    {
      rank: 52,
      username: "Longusername 1234567890",
      level: 100,
      iconImage: "/rainbow.png",
      textcolor: "text-[#3A0E47]",
      background_color: "bg-linear-to-r from-[#EA2F87] via-[#EF9C09] via-[#F9E000] via-[#93E221] via-[#1BC1DB] via-[#25ABD9] via-[#4170D4] to-[#4A3C9E]"
    },
    {
      rank: 58,
      username: "Longusername 1234567890",
      level: 100,
      iconImage: "/cake.png",
      textcolor: "text-[#FF008F]",
      background_color: "bg-[#FFBBE1]",
      style_icon: "rotate-14",
      background_images: [
        "bg-[url('/StrawberryCake.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/StrawberryCake.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/StrawberryCake.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/StrawberryCake.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/StrawberryCake.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/StrawberryCake.png')] bg-[length:30px_22px] bg-no-repeat",
      ]
    },
    {
      rank: 63,
      username: "Longusername 1234567890",
      level: 100,
      iconImage: "/lemon.png",
      textcolor: "text-[#FF008F]",
      background_color: "bg-linear-to-r from-[#00CAFC] to-[#FADB0F]",
      background_images: [
        "bg-[url('/b1.png')] bg-repeat-y bg-cover bg-[position:90%_50%] opacity-25",
        "bg-[url('/b2.png')] bg-repeat-y bg-cover bg-[position:90%_50%] opacity-25",
        "bg-[url('/b3.png')] bg-repeat-y bg-cover bg-[position:90%_50%] opacity-25",
        "bg-[url('/b4.png')] bg-repeat-y bg-cover bg-[position:90%_50%] opacity-25",
        "bg-[url('/b5.png')] bg-repeat-y bg-cover bg-[position:90%_50%] opacity-25",
        "bg-[url('/b6.png')] bg-repeat-y bg-cover bg-[position:90%_50%] opacity-25",
      ],
    },
    {
      rank: 67,
      username: "Longusername 1234567890",
      level: 100,
      iconImage: "/can.png",
      textcolor: "text-[#FFDA0A]",
      background_color: "bg-[#621016]",
      background_images: [
        "bg-[url('/Cola.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Cola.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Cola.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Cola.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Cola.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Cola.png')] bg-[length:30px_22px] bg-no-repeat",
      ],
      style_icon: "rotate-10 fill"
    },
    {
      rank: 72,
      username: "Longusername 1234567890",
      level: 100,
      iconImage: "/candy.png",
      textcolor: "text-[#4F1D1D]",
      background_color: "bg-linear-to-r from-[#FF74B1] via-[#FFEB76] to-[#A6EAFF]",
      style_icon: "-rotate-25 fill"
    },
    {
      rank: 78,
      username: "Longusername 1234567890",
      level: 100,
      iconImage: "/popcorn.png",
      textcolor: "text-[#FFDA0A]",
      background_color: "bg-[#C54823]",
      background_images: [
        "bg-[url('/Popcorn1.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Popcorn4.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Popcorn4.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Popcorn4.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Popcorn4.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Popcorn5.png')] bg-[length:30px_22px] bg-no-repeat",
      ],
      style_icon: "rotate-9 fill"
    },
    {
      rank: 78,
      username: "Longusername 1234567890",
      level: 75,
      iconImage: "/popcorn.png",
      textcolor: "text-[#FFDA0A]",
      background_color: "bg-[#C54823]",
      background_images: [
        "bg-[url('/Popcorn1.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Popcorn4.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Popcorn4.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Popcorn4.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Popcorn4.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Popcorn5.png')] bg-[length:30px_22px] bg-no-repeat",
      ],
      style_icon: "rotate-9 fill"
    },
    {
      rank: 45,
      username: "Longusername 1234567890",
      level: 40,
      iconImage: "/popcorn.png",
      textcolor: "text-[#FFDA0A]",
      background_color: "bg-[#C54823]",
      background_images: [
        "bg-[url('/Popcorn1.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Popcorn4.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Popcorn4.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Popcorn4.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Popcorn4.png')] bg-[length:30px_22px] bg-no-repeat",
        "bg-[url('/Popcorn5.png')] bg-[length:30px_22px] bg-no-repeat",
      ],
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
