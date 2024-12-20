"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import Navbar from "./components/Navbar";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hamburger Menu */}
      <div
        className="lg:hidden cursor-pointer p-8 pl-1 absolute left-4"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="w-6 h-0.5 bg-black mb-1 mt-2"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </div>

      {/* Main Section */}
      <div className="w-full max-w-[1240px] mx-auto flex items-center gap-16 mt-8 pl-16 text-base">
        <Image src="/shop.co.png" alt="shop" width={160} height={22} />

        {/* Navigation Menu */}
        <ul className="hidden lg:flex gap-6 text-lg bg-white">
          <li className="hover:text-gray-500 cursor-pointer relative group flex items-center gap-2">
            Shop
            <FaChevronDown className="text-sm" />
          </li>
          <li className="hover:text-gray-500 cursor-pointer">On Sale</li>
          <li className="hover:text-gray-500 cursor-pointer">New Arrivals</li>
          <li className="hover:text-gray-500 cursor-pointer">Brands</li>
        </ul>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full p-3 gap-3 shadow-sm w-[300px] hidden sm:flex pb-2">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for products"
            className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Cart Icon */}
        <Image src="/shop-trolly.png" alt="shop trolly" width={62} height={24} />
      </div>

      {/* Image and Text Section */}
      <div className="relative w-full h-[663px] bg-gray-100 mt-8">
  {/* Background Image */}
  <div className="absolute top-0 left-0 w-full h-full">
    <Image
      src="/picture.png"
      alt="picture"
      layout="fill"
      objectFit="cover"
      className="hidden sm:block" // Image visible on sm and larger screens
    />
  </div>
  
  {/* For mobile screens: */}
 
        {/* First Vector */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 pb-96 pl-4 hidden sm:block">
          <Image src="/vector.png" alt="vector" width={104} height={104} />
        </div>

        {/* Text Section */}
        <div className="absolute top-[30%] sm:top-1/2 left-4 transform -translate-y-1/2">
  <h1 className="font-satoshi font-extrabold text-[28px] leading-[34px] sm:text-[36px] sm:leading-[48px] md:text-[64px] md:leading-[64px] text-black pl-4">
    <span className="block">FIND CLOTHES</span>
    <span className="block">THAT MATCHES</span>
    <span className="block">YOUR STYLE</span>
  </h1>

  <div className="w-full max-w-full px-4 sm:w-[545px] sm:px-6">
  {/* Paragraph */}
  <p className="font-satoshi font-normal text-[rgba(0, 0, 0, 0.6)] text-[14px] leading-[20px] break-words sm:text-lg sm:leading-[22px]">
    Browse through our diverse range of meticulously
    <span className="block sm:hidden"> </span>
    crafted garments, designed to bring out your
    <span className="block sm:hidden"> </span>
    individuality and cater to your sense of style.
    <span className="block sm:hidden"> </span>
    
  </p>

            {/* Adjusted Spacing for Second Vector */}
            <div className="pt-4 pl-6 hidden sm:block">
              <Image
                src="/vector.png"
                alt="vector"
                width={56}
                height={56}
              />
            </div>

            {/* Shop Now Button */}
            <div className="w-[210px] h-[52px] rounded-full px-[16px] bg-black text-center flex items-center justify-center mt-10 ml-10">
              <button className="w-auto h-auto font-satoshi font-medium text-[16px] leading-[21.6px] text-white">
                Shop Now
              </button>
            </div>

            {/* 200+ and 2,000+ Section */}
            <div className="w-[596px] h-[74px] top-[607px] left-[100px] gap-[32px] flex flex-row items-center ml-6 ">
              {/* 200+ */}
              <div className="w-[141px] h-[74px] flex flex-col">
                <div className="w-[107px] h-[54px]">
                  <h1 className="font-satoshi font-bold text-[40px] leading-[54px] text-black mt-6">
                    200+
                  </h1>
                  <p className="font-satoshi font-normal text-[16px] leading-[22px] text-[rgba(0, 0, 0, 0.6)] whitespace-nowrap">
                    International Brands
                  </p>
                </div>
              </div>

              {/* 2,000+ */}
              <div className="w-[156px] h-[74px] flex flex-col">
                <h1 className="font-satoshi font-bold text-[40px] leading-[54px] text-black mt-6">
                  2,000+
                </h1>
                <p className="font-satoshi font-normal text-[16px] leading-[22px] text-[rgba(0, 0, 0, 0.6)]">
                High-Quality Products
                </p>
              </div>
              <div className="w-[156px] h-[74px] flex flex-col">
                <h1 className="font-satoshi font-bold text-[40px] leading-[54px] text-black mt-6">
                30,000+
                </h1>
                <p className="font-satoshi font-normal text-[16px] leading-[22px] text-[rgba(0, 0, 0, 0.6)]">
                Happy Customers
                </p>
              </div>

            </div>
          </div>
          
        </div>
      </div>
      
      <div className="w-full bg-black flex justify-start items-start py-8 pl-8 gap-x-24">
  <Image src="/versace.png" alt="versace" width={166} height={33} />
  <Image src="/zara.png" alt="zara" width={91} height={38} />
  <Image src="/gucci.png" alt="gucci" width={156} height={36} />
  <Image src="/prada.png" alt="prada" width={194} height={32} />
  <Image src="/calvin.png" alt="celvin" width={206} height={33} />
  </div>
  {/* T-shirt Section */}
  <div>
  <div className="w-full flex justify-center mt-12">
    <h2 className="font-extrabold text-[48px] leading-[57.6px] text-black">
      NEW ARRIVALS
    </h2>
  </div>
  <div className="flex flex-wrap gap-8 p-4 justify-start">
        {/* First T-shirt */}
        <div className="w-[295px] h-[298px] bg-[rgba(240, 238, 237, 1)] flex flex-col pt-20 ml-[19px]">
          <Image src="/shirt.png" alt="shirt" width={295} height={298} className="rounded-[20px]" />
          <div className="w-[225px] h-[27px]">
            <h3 className="font-satoshi font-bold text-[20px] leading-[27px] text-black pt-4 whitespace-nowrap">
              T-shirt with Tape Details
            </h3>
            <div className="flex items-center pt-2">
              <span className="text-yellow-500 text-lg">★</span>
              <span className="text-yellow-500 text-lg">★</span>
              <span className="text-yellow-500 text-lg">★</span>
              <span className="text-yellow-500 text-lg">★</span>
              <span className="text-yellow-500 text-lg">★</span>
              <span className="text-gray-400 text-lg -ml-3">★</span>
              <span className="ml-2 text-gray-700 text-sm">4.5/5</span>
            </div>
            <div className="w-[55px] h-[32px]">
              <h3 className="font-satoshi font-bold text-[24px] leading-[32.4px] text-black pt-2">$120</h3>
            </div>
          </div>
        </div>


  {/* Jeans Section */}

  <div className="w-[268px] h-[402px] bg-[rgba(240, 238, 237, 1)] flex flex-col pt-20 ml-18">
  <Image src="/jeans.png" alt="jeans" width={268} height={402} className="rounded-[20px]" />
  
  <h3 className="font-satoshi font-bold text-[20px] leading-[27px] text-black pt-4 pr-8">
    Skinny Fit Jeans
  </h3>
  
  <div className="flex items-center pt-2">
    <span className="text-yellow-500 text-lg">★</span>
    <span className="text-yellow-500 text-lg">★</span>
    <span className="text-yellow-500 text-lg">★</span>
    <span className="text-yellow-500 text-lg">★</span>
    <span className="text-gray-400 text-lg -ml-3">★</span>
    <span className="ml-2 text-gray-700 text-sm">3.5/5</span>
  </div>
  
  <div className="flex pt-2 items-center">
    <h3 className="font-satoshi font-bold text-[24px] leading-[32.4px] text-black">
      $240
    </h3>
    <h3 className="font-satoshi font-bold text-[24px] leading-[32.4px] text-gray-500 line-through pl-4">
      $260
    </h3>
    
    {/* Discount Badge */}
    <div className="flex items-center justify-center w-[58px] h-[28px] rounded-[62px] bg-red-100 ml-4">
      <h5 className="font-satoshi font-medium text-[12px] leading-[16.2px] text-red-600">
        -20%
      </h5>
    </div>
  </div>
</div>
<div className="w-[295px] h-[298px] bg-[rgba(240, 238, 237, 1)] flex flex-col pt-20 ml-18">
    <Image src="/shirt2.png" alt="shirt" width={295} height={444} className="rounded-[20px]" />
    <div className="w-[225px] h-[27px]">
      <h3 className="font-satoshi font-bold text-[20px] leading-[27px] text-black pt-4 whitespace-nowrap">
        Checkered Shirt
      </h3>
      {/* Rating Section */}
      <div className="flex items-center pt-2">
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-gray-400 text-lg -ml-3">★</span>
        <span className="ml-2 text-gray-700 text-sm">4.5/5</span>
      </div>
      <div className="w-[55px] h-[32px]">
        <h3 className="font-satoshi font-bold text-[24px] leading-[32.4px] text-black mt-2">
          $180
        </h3>
      </div>
    </div>
  </div>
  <div className="flex flex-row flex-wrap">
  <div className="w-[295px] h-[298px] bg-[rgba(240, 238, 237, 1)] flex flex-col pt-20 ml-18">
  <Image src="/shirt3.png" alt="shirt" width={296} height={444} className="rounded-[20px]" />
  
  <h3 className="font-satoshi font-bold text-[20px] leading-[27px] text-black pt-4 pr-8">
    Sleeve Striped T-shirt
  </h3>
  
  <div className="flex items-center pt-2">
    <span className="text-yellow-500 text-lg">★</span>
    <span className="text-yellow-500 text-lg">★</span>
    <span className="text-yellow-500 text-lg">★</span>
    <span className="text-yellow-500 text-lg">★</span>
    <span className="text-yellow-500 text-lg">★</span>
    <span className="text-gray-400 text-lg -ml-3">★</span>
    <span className="ml-2 text-gray-700 text-sm">4.5/5</span>
  </div>
  
  <div className="flex pt-2 items-center">
    <h3 className="font-satoshi font-bold text-[24px] leading-[32.4px] text-black">
      $130
    </h3>
    <h3 className="font-satoshi font-bold text-[24px] leading-[32.4px] text-gray-500 line-through pl-4">
      $160
    </h3>
    
    {/* Discount Badge */}
    <div className="flex items-center justify-center w-[58px] h-[28px] rounded-[62px] bg-red-100 ml-4">
      <h5 className="font-satoshi font-medium text-[12px] leading-[16.2px] text-red-600">
        -30%
      </h5>
    </div>
     </div>
    </div>
    </div>
    </div>
    </div>
    <div className="w-full flex justify-center mt-40">
  <h2 className="font-extrabold text-[48px] leading-[57.6px] text-black">
    TOP SELLING
  </h2>
</div>

<div className="flex flex-wrap gap-8 justify-start ml-6">
  {/* First T-shirt */}
  <div className="w-[295px] h-[298px] bg-[rgba(240, 238, 237, 1)] flex flex-col pt-20">
    <Image
      src="/striped shirt.png"
      alt="striped shirt"
      width={296}
      height={444}
      className="rounded-[20px]"
    />
    <div className="w-[225px] h-[27px]">
      <h3 className="font-satoshi font-bold text-[20px] leading-[27px] text-black pt-4 whitespace-nowrap">
        Vertical Striped Shirt
      </h3>
      <div className="flex items-center pt-2">
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="ml-2 text-gray-700 text-sm">5.0/5</span>
      </div>
      <div className="flex pt-2 items-center">
        <h3 className="font-satoshi font-bold text-[24px] leading-[32.4px] text-black">
          $212
        </h3>
        <h3 className="font-satoshi font-bold text-[24px] leading-[32.4px] text-gray-500 line-through pl-4">
          $232
        </h3>
        <div className="flex items-center justify-center w-[58px] h-[28px] rounded-[62px] bg-red-100 ml-4">
          <h5 className="font-satoshi font-medium text-[12px] leading-[16.2px] text-red-600">
            -20%
          </h5>
        </div>
      </div>
    </div>
  </div>

  {/* Courage Graphic T-shirt */}
  <div className="w-[295px] h-[298px] bg-[rgba(240, 238, 237, 1)] flex flex-col pt-20">
    <Image
      src="/courage shirt.png"
      alt="shirt"
      width={294}
      height={441}
      className="rounded-[20px]"
    />
    <div className="w-[225px] h-[27px]">
      <h3 className="font-satoshi font-bold text-[20px] leading-[27px] text-black pt-4 whitespace-nowrap">
        Courage Graphic T-shirt
      </h3>
      <div className="flex items-center pt-2">
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="ml-2 text-gray-700 text-sm">4.0/5</span>
      </div>
      <div className="w-[55px] h-[32px]">
        <h3 className="font-satoshi font-bold text-[24px] leading-[32.4px] text-black mt-2">
          $145
        </h3>
      </div>
    </div>
  </div>

  {/* Loose Fit Bermuda Shorts */}
  <div className="w-[295px] h-[298px] bg-[rgba(240, 238, 237, 1)] flex flex-col pt-20">
    <Image
      src="/shorts.png"
      alt="short"
      width={296}
      height={444}
      className="rounded-[20px]"
    />
    <div className="w-[225px] h-[27px]">
      <h3 className="font-satoshi font-bold text-[20px] leading-[27px] text-black pt-4 whitespace-nowrap">
        Loose Fit Bermuda Shorts
      </h3>
      <div className="flex items-center pt-2">
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="ml-2 text-gray-700 text-sm">3.0/5</span>
      </div>
      <div className="w-[55px] h-[32px]">
        <h3 className="font-satoshi font-bold text-[24px] leading-[32.4px] text-black mt-2">
          $80
        </h3>
      </div>
    </div>
  </div>
  <div className="w-[295px] h-[298px] bg-[rgba(240, 238, 237, 1)] flex flex-col pt-20">
    <Image
      src="/skinny jeans.png"
      alt="skinny jeans"
      width={252}
      height={378}
      className="rounded-[20px]"
    />
    <div className="w-[225px] h-[27px]">
      <h3 className="font-satoshi font-bold text-[20px] leading-[27px] text-black pt-4 whitespace-nowrap">
        Faded Skinny Jeans
      </h3>
      <div className="flex items-center pt-2">
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-gray-400 text-lg -ml-3">★</span>
        <span className="ml-2 text-gray-700 text-sm">4.5/5</span>
      </div>
      <div className="w-[55px] h-[32px]">
        <h3 className="font-satoshi font-bold text-[24px] leading-[32.4px] text-black mt-2">
          $210
        </h3>
      </div>
    </div>
  </div>
  </div>
  <div className="w-full flex justify-center mt-56">
  <div className="w-[218px] h-[52px] px-[16px] py-[14px] gap-[12px] text-center rounded-full border-[1px] border-solid border-[rgba(0, 0, 0, 0.1)] flex items-center justify-center mt-10">
    <button className="font-satoshi font-medium text-[16px] leading-[21.6px] text-black">
      View All
    </button>
  </div>
</div>
<div className="w-[1239px] h-[866px] top-[2417px] left-[100px] rounded-[40px] bg-[rgba(240,240,240,1)] mt-8 ml-8">
<div className="w-[687px] h-[58px] top-[70px] left-[276px]">
  <h1 className="font-Integral CF font-extrabold text-[48px] leading-[57.6px] text-center text-black whitespace-nowrap pl-52 pt-12">
  BROWSE BY DRESS STYLE
  </h1>
</div>
<div className="flex flex-row gap-4 mt-8 ml-16">
  <Image src="/man1.png" alt="man1" width={407} height={289} className="mt-28 ml-0"/>
  <Image src="/man2.png" alt="man2" width={684} height={289} className="mt-28 ml-8"/>
</div>
<div className="flex flex-row gap-4 mt-8 ml-16">
  <Image src="/man3.png" alt="man3" width={684} height={289} className="mt-8 ml-0"/>
  <Image src="/man4.png" alt="man4" width={407} height={289} className="mt-8 ml-4"/>
</div>
</div>
<div className="w-[654px] h-[58px] top-[3363px] left-[100px]">
  <h1 className="font-Integral CF font-extrabold text-[48px] leading-[57.6px] text-black mt-16 ml-24 whitespace-nowrap">
  OUR HAPPY CUSTOMERS
  </h1>
</div>
<div className="flex gap-4 mt-12 ml-20">
  {/* First div */}
  <div className="w-[400px] h-[240px] rounded-[20px] border-[1px] px-[28px] py-[32px] flex flex-col">
    <div className="w-[336px] h-[161px] justify-between">
      <div className="flex items-center pt-0">
        <span className="text-yellow-500 text-2xl">★</span>
        <span className="text-yellow-500 text-2xl">★</span>
        <span className="text-yellow-500 text-2xl">★</span>
        <span className="text-yellow-500 text-2xl">★</span>
        <span className="text-yellow-500 text-2xl">★</span>
      </div>
      <div className="w-[110px] h-[24px] gap-[4px]">
        <h4 className="font-satoshi font-bold text-[20px] leading-[22px] text-black flex items-center mt-2">
          Sarah M.
          <div className="flex items-center justify-center w-4 h-4 bg-green-500 text-white rounded-full ml-2">
            <span className="text-xs">✔</span>
          </div>
        </h4>
      </div>
      <div className="w-[336px] h-[88px]">
        <p className="font-satoshi font-normal text-[16px] leading-[22px] text-[rgba(0,0,0,0.6)] mt-4">
          "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
        </p>
      </div>
    </div>
  </div>

  {/* Second div */}
  <div className="w-[400px] h-[240px] rounded-[20px] border-[1px] px-[28px] py-[32px] flex flex-col">
    <div className="w-[336px] h-[161px] justify-between">
      <div className="flex items-center pt-0">
        <span className="text-yellow-500 text-2xl">★</span>
        <span className="text-yellow-500 text-2xl">★</span>
        <span className="text-yellow-500 text-2xl">★</span>
        <span className="text-yellow-500 text-2xl">★</span>
        <span className="text-yellow-500 text-2xl">★</span>
      </div>
      <div className="w-[110px] h-[24px] gap-[4px]">
        <h4 className="font-satoshi font-bold text-[20px] leading-[22px] text-black flex items-center mt-2">
          Alex K.
          <div className="flex items-center justify-center w-4 h-4 bg-green-500 text-white rounded-full ml-2">
            <span className="text-xs">✔</span>
          </div>
        </h4>
      </div>
      <div className="w-[336px] h-[88px]">
        <p className="font-satoshi font-normal text-[16px] leading-[22px] text-[rgba(0,0,0,0.6)] mt-4">
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
        </p>
      </div>
    </div>
  </div>
  <div className="w-[400px] h-[240px] rounded-[20px] border-[1px] px-[28px] py-[32px] flex flex-col">
    <div className="w-[336px] h-[161px] justify-between">
      <div className="flex items-center pt-0">
        <span className="text-yellow-500 text-2xl">★</span>
        <span className="text-yellow-500 text-2xl">★</span>
        <span className="text-yellow-500 text-2xl">★</span>
        <span className="text-yellow-500 text-2xl">★</span>
        <span className="text-yellow-500 text-2xl">★</span>
      </div>
      <div className="w-[110px] h-[24px] gap-[4px]">
        <h4 className="font-satoshi font-bold text-[20px] leading-[22px] text-black flex items-center mt-2">
          James L.
          <div className="flex items-center justify-center w-4 h-4 bg-green-500 text-white rounded-full ml-2">
            <span className="text-xs">✔</span>
          </div>
        </h4>
      </div>
      <div className="w-[336px] h-[88px]">
        <p className="font-satoshi font-normal text-[16px] leading-[22px] text-[rgba(0,0,0,0.6)] mt-4">
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
        </p>
      </div>
    </div>
  </div>
</div>
<div className="w-[1441px] h-[589px] top-[3781px] left-[-1px]">
  <div className="w-[1240px] h-[180px] top-[3781px] left-[100px] rounded-[20px] flex justify-between px-[36px] py-[64px] bg-black mt-16 ml-8">
    <div className="w-[551px] h-[94px]">
      <h1 className="font-Integral CF font-extrabold text-[40px] leading-[45px] text-white relative -mt-6 ">
      STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>
    </div>
    <div className="w-[349px] h-auto gap-[14px] flex flex-col">
  {/* First White Div */}
  <div className="w-[349px] h-[48px] rounded-[62px] px-[12px] py-[16px] gap-[12px] bg-white flex items-center relative -mt-6">
    <Image src="/envelope.png" alt="envelope" width={24} height={24} className="mr-4" />
    <p className="w-[173px] h-[22px] font-satoshi font-normal text-[16px] leading-[21.6px] text-[rgba(0,0,0,0.4)] whitespace-nowrap">
      Enter your email address
    </p>
  </div>

  {/* Second White Div */}
  <div className="w-[349px] h-[48px] rounded-[62px] px-[12px] py-[16px] gap-[12px] bg-white flex items-center">
    <p className="w-[173px] h-[22px] font-satoshi font-normal text-[16px] leading-[21.6px] text-[rgba(0,0,0,0.4)] whitespace-nowrap pl-20">
    Subscribe to Newsletter
    </p>
  </div>
</div>
</div>
<div className="w-[1441px] h-[499px] top-[3871px] left-[-1px] bg-[rgba(240,240,240,1)]">
  <div className="w-[1240px] h-[177px] top-[4011px] left-[100px] flex">
    {/* SHOP.CO Section */}
    <div className="w-[248px] h-[177px]">
      <div className="w-[248px] h-[114px] ml-16 mt-14">
        <h1 className="font-Integral CF font-extrabold text-[33px] leading-[40.15px] text-black mt-8 ">
          SHOP.CO
        </h1>
        <p className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] mt-4">
          We have clothes that suit your style and which you’re proud to wear. From women to men.
        </p>
        <Image
          src="/social.png"
          alt="social icon"
          width={148}
          height={28}
          className="mt-8"
        />
      </div>
    </div>

    {/* Company Section */}
    <div className="ml-40 mt-16">
      <h4 className="font-satoshi font-medium text-[16px] leading-[18px] tracking-[3px] text-black mb-4">
        COMPANY
      </h4>
      <ul className="space-y-4">
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer">
          About
        </li>
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer">
          Features
        </li>
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer">
          Works
        </li>
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer">
          Career
        </li>
        </ul>
    </div>
    <div className="ml-28 mt-16">
      <h4 className="font-satoshi font-medium text-[16px] leading-[18px] tracking-[3px] text-black mb-4">
        HELP
      </h4>
      <ul className="space-y-4">
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer whitespace-nowrap">
          Customer Support
        </li>
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer whitespace-nowrap">
          Delivery Details
        </li>
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer whitespace-nowrap">
          Terms & Conditions
        </li>
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer whitespace-nowrap">
          Privacy Policy
        </li>
        </ul>
    </div>
    <div className="ml-28 mt-16">
      <h4 className="font-satoshi font-medium text-[16px] leading-[18px] tracking-[3px] text-black mb-4">
        FAQ
      </h4>
      <ul className="space-y-4">
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer">
          Account
        </li>
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer whitespace-nowrap">
          Manage Deliveries
        </li>
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer">
          Orders
        </li>
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer">
          Payments
        </li>
        </ul>
    </div>
    <div className="ml-28 mt-16">
      <h4 className="font-satoshi font-medium text-[16px] leading-[18px] tracking-[3px] text-black mb-4">
       RESOURCES
      </h4>
      <ul className="space-y-4">
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer">
          Free eBooks
        </li>
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer whitespace-nowrap">
          Development Tutorial
        </li>
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer">
          How to -Blog
        </li>
        <li className="font-satoshi font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] hover:text-black cursor-pointer">
          Youtube Playlist
        </li>
        </ul>
    </div>
  </div>
  
</div>

</div>
<div className="w-full h-[1px] bg-[rgba(0,0,0,0.1)] -mt-24"></div>
<div className="w-full flex items-center justify-between mt-6 px-4">
  {/* Paragraph Section */}
  <p className="font-satoshi font-normal text-[14px] leading-[18.9px] text-[rgba(0,0,0,0.6)] whitespace-nowrap pl-16">
    Shop.co © 2000-2023, All Rights Reserved
  </p>

  {/* Accounts Section */}
  <div>
    <Image
      src="/accounts.png"
      alt="accounts"
      width={281.07}
      height={30.03}
      className="text-left mr-8 mt-4"
    />
  </div>
  </div>
</div>

 );
}
