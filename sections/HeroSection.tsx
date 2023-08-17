export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-6xl tracking-[4px] uppercase font-[montserrat] font-black">
        Designer's Consortium
      </h1>
      <h3 className="text-2xl mt-10 tracking-[2px] uppercase font-[poppins] font-semibold">
        Innovation Redesigned
      </h3>
      <div className="flex items-center justify-around space-x-5 mt-10">
        <button className="px-8 py-4 border border-black hover:bg-black hover:text-white duration-300 rounded-xl">
          Contact Us
        </button>
        <button className="px-8 py-4 border border-black hover:bg-black hover:text-white rounded-xl duration-300">
          Learn More -&gt;
        </button>
      </div>
    </div>
  );
}
