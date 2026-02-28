export default function Home() {
  const text: string = "Wave Text Animation";

  return (
    <div className="mx-auto flex h-screen w-screen items-center justify-center bg-gray-900 gap-6">
      <button type="button" className="flex h-10 w-32 items-center justify-center rounded-full group bg-linear-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:shadow-2xl hover:shadow-purple-600/30">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-900 transition duration-300 ease-in-out group-hover:bg-linear-to-br group-hover:from-gray-700 group-hover:to=gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
          Click me
        </div>
      </button>
      <h1 className="text-4xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        Gradient Text
      </h1>
      <h1 className="text-4xl font-bold">
        {text.split("").map((char: string, index: number) => (
          <span key={index} className="inline-block animate-wave text-blue-300" style={{ animationDelay: `${index * 0.1}s` }}>
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
