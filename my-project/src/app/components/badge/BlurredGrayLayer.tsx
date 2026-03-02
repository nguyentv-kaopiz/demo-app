export default function FullPageBlurPillOverlaySameSize() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Layer 1: viên thuốc nền đen */}
      <div className="
        absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[60vw] max-w-xl h-[120px]
        rounded-full
        bg-gray-100 opacity-10
        z-0
        flex items-center justify-center
      " />

      {/* Layer 2: màu xám blur, đúng size như viên thuốc đen */}
      <div className="
        absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[70vw] max-w-xl h-[140px]
        rounded-full
        bg-gray-800
        opacity-70
        blur-xs
        z-10
        pointer-events-none
      " />

      {/* Chữ nổi trên cùng */}
      <div className="
        absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        z-30
        flex items-center justify-center w-[60vw] max-w-xl h-[120px] rounded-full
      ">
        <span className="text-white text-2xl font-bold">
          Chữ nổi trên tất cả!
        </span>
      </div>
    </div>
  );
}