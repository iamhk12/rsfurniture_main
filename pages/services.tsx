"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";
import {
  FaChair,
  FaPaintBrush,
  FaBolt,
  FaBuilding,
  FaWrench,
  FaArrowAltCircleUp,
} from "react-icons/fa";

export default function Services() {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.title = "R. S. Furniture";
  });

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    { icon: <FaChair />, name: "Furniture" },
    { icon: <FaPaintBrush />, name: "Painting" },
    { icon: <FaBolt />, name: "Electric" },
    { icon: <FaBuilding />, name: "Civil" },
    { icon: <FaWrench />, name: "Plumbing" },
    { icon: <FaArrowAltCircleUp />, name: "False Ceiling" },
  ];

  return (
    <>
      <div className="h-full w-full absolute ">
        <div className="md:p-10 p-4 w-full h-full fixed">
          <div
            className="border-[1px] shadow-slate-200  border-white w-full h-full rounded-none overflow-y-auto overflow-x-hidden  flex flex-col items-center relative"
            id="ScrollContainer"
          >
            <span ref={scrollContainerRef}></span>
            <nav className="flex justify-between p-4 md:flex-row flex-col md:w-[80%] w-[90%] mb-12 mt-4">
              <h1 className="md:text-2xl md:text-[1.5rem] text-3xl mb-5 font-medium logoCss text-center border-y-2 border-y-gray-600 py-1">
                R S FURNITURE
              </h1>
              <div className="flex flow-row md:justify-evenly justify-between items-center md:w-5/12 w-full md:text-xl text-base">
                <button onClick={() => router.push("/")}>Home</button> |
                <button className="bn9">
                  <span> Services</span>
                </button>{" "}
                |
                <button onClick={() => router.push("/contact")}>
                  Contact us
                </button>
              </div>
            </nav>

            {/*
            OUR SERVICES->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            FURNITURE
            PAINTING 
            ELECTRIC
            CIVIL
            PLUMBING
            FALSE CEILING */}

            <section className="mb-8 w-full flex flex-col items-center">
              <h2 className="md:text-5xl text-3xl font-semibold mb-10 text-rose-300">
                Our Services
              </h2>
              <div className="md:w-[50%] w-[90%] flex flex-col gap-10">
                {/* Furniture */}
                <div className="flex items-center px-7 md:rounded-sm mb-4 rounded-3xl md:-ml-12 flex-row bg-gradient-to-r from-blue-500 to-indigo-700 shadow-[0px_30px_60px_rgba(59,130,246,0.22)] md:h-36 h-48">
                  <div className="mr-4">
                    <FaChair className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl text-white">Furniture</p>
                    <p className="text-white">
                      Explore our collection of exquisite furniture pieces
                      designed for both comfort and style.
                    </p>
                  </div>
                </div>

                {/* Painting */}
                <div className="flex items-center px-7 md:rounded-sm mb-4 rounded-3xl md:-mr-12 flex-row-reverse bg-gradient-to-r from-pink-500 to-purple-700 shadow-[0px_30px_60px_rgba(219,39,119,0.22)] md:h-36 h-48">
                  <div className="ml-4">
                    <FaPaintBrush className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl text-white">Painting</p>
                    <p className="text-white">
                      Transform your space with our professional painting
                      services, adding color and vibrancy to your walls.
                    </p>
                  </div>
                </div>

                {/* Civil */}
                <div className="flex items-center px-7 md:rounded-sm mb-4 rounded-3xl md:-ml-12 flex-row bg-gradient-to-r from-green-500 to-teal-700 shadow-[0px_30px_60px_rgba(75,192,192,0.22)] md:h-36 h-48">
                  <div className="mr-4">
                    <FaBuilding className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl text-white">Civil</p>
                    <p className="text-white">
                      Benefit from our expertise in civil engineering, ensuring
                      strong and reliable structures for your projects.
                    </p>
                  </div>
                </div>

                {/* Electric */}
                <div className="flex items-center px-7 md:rounded-sm mb-4 rounded-3xl md:-mr-12 flex-row-reverse bg-gradient-to-r from-yellow-500 to-orange-700 shadow-[0px_30px_60px_rgba(253,203,110,0.22)] md:h-36 h-48">
                  <div className="ml-4">
                    <FaBolt className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl text-white">Electric</p>
                    <p className="text-white">
                      Ensure a seamless electrical setup with our electrical
                      services, providing safety and efficiency.
                    </p>
                  </div>
                </div>

                {/* Plumbing */}
                <div className="flex items-center px-7 md:rounded-sm mb-4 rounded-3xl md:-ml-12 flex-row bg-gradient-to-r from-red-500 to-pink-700 shadow-[0px_30px_60px_rgba(239,68,68,0.22)] md:h-36 h-48">
                  <div className="mr-4">
                    <FaWrench className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl text-white">Plumbing</p>
                    <p className="text-white">
                      Experience smooth water flow and drainage systems with our
                      top-notch plumbing solutions.
                    </p>
                  </div>
                </div>

                {/* False Ceiling */}
                <div className="flex items-center px-7 md:rounded-sm mb-4 rounded-3xl md:-mr-12 flex-row-reverse bg-gradient-to-r from-gray-500 to-cool-gray-700 shadow-[0px_30px_60px_rgba(169,179,194,0.22)] md:h-36 h-48">
                  <div className="ml-4">
                    <FaArrowAltCircleUp className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl text-white">False Ceiling</p>
                    <p className="text-white">
                      Elevate your space with our false ceiling solutions,
                      adding a touch of sophistication and modernity.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <button
              className="w-full mt-5 p-4 shadow-md cursor-pointer transition-all bg-gradient-to-b from-transparent to-transparent hover:bg-gradient-to-b hover:from-transparent hover:to-[#121212] bg-opacity-10 z-30"
              onClick={scrollToTop}
            >
              <div className="flex flex-col items-center ">
                <IoIosArrowUp className="h-10 w-12" />
                <p>Back to Top</p>
              </div>
            </button>

            <div className="fixed w-full bottom-0 h-40 fixedTransparentGradient"></div>
          </div>
        </div>
      </div>
    </>
  );
}
