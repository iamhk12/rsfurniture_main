import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
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
  return (
    <>
      <div className="h-full w-full absolute ">
        <div className="lg:p-10 p-4 w-full h-full fixed">
          <div
            className="border-[1px] shadow-slate-200  border-white w-full h-full rounded-none overflow-y-auto overflow-x-hidden  flex flex-col items-center relative"
            id="ScrollContainer"
          >
            <span ref={scrollContainerRef}></span>
            <nav
              className={`flex justify-between p-4 lg:flex-row flex-col lg:w-[80%] w-[96%] mb-12 mt-4 `}
            >
              <h1 className="lg:text-2xl lg:text-[1.5rem] text-3xl mb-5 font-medium logoCss text-center border-y-2 border-y-gray-600 py-1">
                R S FURNITURE
              </h1>
              <div className="flex flex-row lg:justify-evenly justify-between items-center lg:w-7/12 w-full lg:text-xl text-sm">
                <button onClick={() => router.push("/")}>
                   Home
                </button>

                <button onClick={() => router.push("/projects")}>
                  Projects
                </button>
                
                <button className="bn9">
                  <span>Services</span>
                </button>

                <button onClick={() => router.push("/contact")}>
                  Contact Us
                </button>
              </div>
            </nav>

            <section className="mb-8 w-full flex flex-col items-center">
              <h2 className={`lg:text-5xl text-3xl font-semibold mb-10 text-slate-300 `}>
                Our Services
              </h2>
              <div className="lg:w-[50%] w-[90%] flex flex-col gap-10 ">
                {/* Furniture */}
                <div className="flex items-center px-7 lg:rounded-sm mb-4 rounded-3xl lg:-ml-12 flex-row bg-gradient-to-r from-sky-400 to-indigo-800 shadow-[0px_30px_60px_rgba(59,130,246,0.22)] lg:h-36 py-7">
                  <div className="mr-4">
                    <FaChair className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <p className="lg:text-2xl text-xl text-white mb-4">Furniture</p>
                    <p className="text-white text-pretty text-sm">
                      Explore our collection of exquisite furniture pieces
                      designed for both comfort and style.
                    </p>
                  </div>
                </div>

                {/* Painting */}
                <div className="flex items-center px-7 lg:rounded-sm mb-4 rounded-3xl lg:-mr-12 flex-row-reverse bg-gradient-to-r from-pink-500 to-purple-700 shadow-[0px_30px_60px_rgba(219,39,119,0.22)] lg:h-36 py-7">
                  <div className="ml-4">
                    <FaPaintBrush className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <p className="lg:text-2xl text-xl text-white mb-4">Painting</p>
                    <p className="text-white text-pretty text-sm">
                      Transform your space with our professional painting
                      services, adding color and vibrancy to your walls.
                    </p>
                  </div>
                </div>

                {/* Civil */}
                <div className="flex items-center px-7 lg:rounded-sm mb-4 rounded-3xl lg:-ml-12 flex-row bg-gradient-to-r from-green-500 to-teal-700 shadow-[0px_30px_60px_rgba(75,192,192,0.22)] lg:h-36 py-7">
                  <div className="mr-4">
                    <FaBuilding className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <p className="lg:text-2xl text-xl text-white mb-4">Civil Work</p>
                    <p className="text-white text-pretty text-sm">
                      Benefit from our expertise in civil engineering, ensuring
                      strong and reliable structures for your projects.
                    </p>
                  </div>
                </div>

                {/* Electric */}
                <div className="flex items-center px-7 lg:rounded-sm mb-4 rounded-3xl lg:-mr-12 flex-row-reverse bg-gradient-to-r from-yellow-500 to-orange-700 shadow-[0px_30px_60px_rgba(253,203,110,0.22)] lg:h-36 py-7">
                  <div className="ml-4">
                    <FaBolt className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <p className="lg:text-2xl text-xl text-white mb-4">Electrical Work</p>
                    <p className="text-white text-pretty text-sm">
                      Ensure a seamless electrical setup with our electrical
                      services, providing safety and efficiency.
                    </p>
                  </div>
                </div>

                {/* Plumbing */}
                <div className="flex items-center px-7 lg:rounded-sm mb-4 rounded-3xl lg:-ml-12 flex-row bg-gradient-to-r from-red-500 to-pink-700 shadow-[0px_30px_60px_rgba(239,68,68,0.22)] lg:h-36 py-7">
                  <div className="mr-4">
                    <FaWrench className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <p className="lg:text-2xl text-xl text-white mb-4">Plumbing Services</p>
                    <p className="text-white text-pretty text-sm">
                      Experience smooth water flow and drainage systems with our
                      top-notch plumbing solutions.
                    </p>
                  </div>
                </div>

                {/* False Ceiling */}
                <div className="flex items-center px-7 lg:rounded-sm mb-4 rounded-3xl lg:-mr-12 flex-row-reverse bg-gradient-to-r from-gray-500 to-cool-gray-700 shadow-[0px_30px_60px_rgba(169,179,194,0.22)] lg:h-36 py-7">
                  <div className="ml-4">
                    <FaArrowAltCircleUp className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <p className="lg:text-2xl text-xl text-white mb-4">False Ceiling</p>
                    <p className="text-white text-pretty text-sm">
                      Elevate your space with our false ceiling solutions,
                      adding a touch of sophistication and modernity.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8 w-full flex flex-col gap-4 items-center">
              <h2 className="lg:text-4xl text-2xl text-pretty text-center font-semibold mb-6 text-rose-300 w-[80%]">
                Ready to Transform Your Space? <span className="text-emerald-300">Hire us!</span> 
              </h2>
              <p className="lg:w-2/3 text-base text-center text-slate-400 w-[80%]">
                <span className="text-2xl ">We</span> are always ready to bring your vision to life. Contact us today
                for a consultation and let{"'"}s start your project.
              </p>
              <button
                className="mt-4 p-3 px-10 bg-gradient-to-r from-[#00c3ff] to-[#0070f3] text-white font-semibold rounded-full hover:bg-blue-600 transition-all"
                onClick={() => router.push("/contact")}
              >
                Start Your Project
              </button>
            </section>

             {/* Back to Top Button */}
             <button
              className="w-full mt-5 p-4 shadow-md cursor-pointer transition-all bg-gradient-to-b from-transparent to-transparent hover:bg-gradient-to-b hover:from-transparent hover:to-[#121212] bg-opacity-10 z-30"
              onClick={scrollToTop}
            >
              <div className="flex flex-col items-center ">
                <IoIosArrowUp className="lg:h-10 lg:w-12 h-5 w-7" />
                <p className="lg:text-base text-sm">Back to Top</p>
              </div>
            </button>

            <div className="fixed w-full bottom-0 h-40 fixedTransparentGradient"></div>
          </div>
        </div>
      </div>
    </>
  );
}
