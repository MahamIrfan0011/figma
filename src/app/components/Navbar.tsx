import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-black w-full h-[60px] flex items-center justify-center">
      <div className="w-full sm:w-auto h-auto ml-4 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-0">
        
        {/* Text Section */}
        <p className="font-satoshi font-normal text-[12px] mr-12 sm:text-lg lg:text-[16px] leading-[20px] text-white whitespace-nowrap">
          Sign up and get 20% off your first order.{' '}
          <span className="font-satoshi font-medium text-[12px] sm:text-lg lg:text-[14px] underline decoration-solid text-white">
            Sign Up Now
          </span>
        </p>

        {/* Image Section - On Larger Screens: Image in the top-right */}
        <div className="absolute top-3 right-4 sm:right-16 p-2 hidden sm:block">
          <Image
            src="/frame.png"
            alt="frame"
            width={20} // Keep original size for large screens
            height={20}
          />
        </div>

      </div>
    </nav>
  );
}




