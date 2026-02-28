import Badge from "./components/Badge";

export default function Home() {
  return (
    <div className="flex flex-col py-4 px-2 gap-4 border rounded-2xl border-[#DDDDDD] w-full h-81.5">
      <div className="flex justify-between items-center">
        <h1 className="text-[18px] leading-7">Nickname Design Kit</h1>
        <button type="button" className="text-[12px] leading-4 text-white bg-[#7541EA] rounded-md border py-0.5 px-3">Apply</button>
      </div>
      {/* Cyan to Lime gradient */}
      <div className="flex flex-wrap gap-4 overflow-y-auto flex-1">
        <Badge
  rank={63}
  username="Longusernamee 123456789"
  icon="🌴"
  background_gradient="bg-gradient-to-r from-[#35D6ED] to-[#C9F6FF]"
/>

      {/* Blue to Cyan gradient */}
      <Badge
        rank={40}
        username="Longusername 1234567890"
        icon="🌴"
      />

      {/* Green to Light Green gradient */}
      <Badge
        rank={43}
        username="Longusername 1234567890"
        icon="🌸"
      />

      {/* Pink gradient */}
      <Badge
        rank={58}
        username="Longusername 1234567890"
        icon="🍰"
      />

      {/* Yellow to Green gradient */}
      <Badge
        rank={63}
        username="Longusernamee 123456789"
        icon="🐥"
      />
      <Badge
        rank={63}
        icon="🐥"
      />
      <Badge
        rank={63}
        icon="🐥"
      />
      <Badge
        rank={63}
        icon="🐥"
      />
      <Badge
        rank={63}
        icon="🐥"
      />
      <Badge
        rank={63}
        icon="🐥"
      />
      </div>
    </div>
  );
}
