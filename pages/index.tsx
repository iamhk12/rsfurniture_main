import Image from "next/image";
import heroImage from "@/public/heroimage.webp";
import card1Image from "@/public/card1.webp";
import card2Image from "@/public/card2.webp";
import card3Image from "@/public/card3.webp";
import { AiOutlineHome, AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function Home() {
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

  // const [fadeIn, setFadeIn] = useState<boolean>(false);

  // useEffect(() => {
  //   setFadeIn(true);
  // }, []);

  return (
    <>
      <div className="h-full w-full absolute ">
        {/* <div className={ `lg:p-10 p-4 w-full h-full fixed opacity-0 ${fadeIn ? "fade-in" : ""}`}> */}
        <div className="lg:p-10 p-4 w-full h-full fixed">
          <div
            className="border-[1px] shadow-slate-200  border-white w-full h-full rounded-none overflow-y-auto overflow-x-hidden  flex flex-col items-center relative"
            id="ScrollContainer"
          >
            <span ref={scrollContainerRef}></span>
            <nav
              className={`flex justify-between p-4 lg:flex-row flex-col lg:w-[80%] w-[96%] mb-12 lg:mb-16 mt-4 `}
            >
              <h1 className="lg:text-2xl lg:text-[1.5rem] text-3xl mb-5 font-medium logoCss text-center border-y-2 border-y-gray-600 py-1">
                R S FURNITURE
              </h1>
              <div className="flex flex-row lg:justify-evenly justify-between items-center lg:w-7/12 w-full lg:text-xl text-sm">
                <button className="bn9">
                  <span> Home</span>
                </button>

                <button onClick={() => router.push("/projects")}>
                  Projects
                </button>
                
                <button onClick={() => router.push("/services")}>
                  Services
                </button>

                <button onClick={() => router.push("/contact")}>
                  Contact Us
                </button>
              </div>
            </nav>
            {/* HERO SECTION  */}
            <section
              className={`w-[90%] p-5 flex lg:flex-row flex-col items-center justify-evenly `}
            >
              <Image
                src={heroImage}
                alt="Hero"
                className="lg:w-[40%] w-[100%] rounded-xl mb-7"
              />
              <div className="lg:w-[50%] w-[90%] text-right flex flex-col lg:gap-10 justify-center ">
                <div className="flex flex-col items-end lg:text-3xl lg:gap-6 text-2xl">
                  <AiOutlineHome />
                  <h1 className=" text-['Baloo Bhai 2'] ">
                    Discover Timeless Elegance
                  </h1>
                </div>
                <h1 className="lg:text-[75px] text-4xl font-['Sevillana']">
                  in Every Piece
                </h1>
              </div>
            </section>

            <button
              onClick={() => router.push("/services")}
              className="border-2 max-w-[90%] text-base border-white my-10 rounded-full p-5 font-medium px-10 hover:bg-white hover:text-black transition-all hover:shadow-[10px_0px_120px_rgba(25,171,255,0.8)]"
            >
              <span className="flex flex-row items-center gap-4">
                <span className="text-left text-pretty">
                  Check out the services we provide
                </span>
                <span>
                  <AiOutlineArrowRight />
                </span>
              </span>
            </button>

            {/* EXPERIENCE SECTION  */}
            <h1 className="font-[Poppins] text-left lg:w-[85%] w-[90%] lg:text-[40px] text-4xl lg:mb-14 mt-10">
              EXPERIENCE . . .
            </h1>
            <section className="w-[100%] p-5 flex lg:flex-row flex-col  items-center justify-evenly">
              <div className="card bg-white shadow-md p-4 rounded-lg mb-4 lg:w-[27%] w-full flex flex-col lg:hover:scale-110 transition-all">
                <div className="relative w-[100%] h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={card1Image}
                    alt="Card Image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                {/* <div className="max-w-44"> */}
                <h2 className="text-xl font-semibold mb-2 text-black">
                  Comfortable Designs
                </h2>
                <p className="text-gray-600">
                  Explore our collection of stylish furniture that complements
                  your lifestyle.
                </p>
                {/* </div> */}
              </div>
              <div className="card bg-white shadow-md p-4 rounded-lg mb-4 lg:w-[27%] w-full flex flex-col lg:hover:scale-110 transition-all">
                <div className="relative w-[100%] h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={card2Image}
                    alt="Card Image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                {/* <div className="max-w-44"> */}
                <h2 className="text-xl font-semibold mb-2 text-black">
                  Affordable Solutions
                </h2>
                <p className="text-gray-600">
                  Find affordable and quality furniture solutions for every room
                  in your home.
                </p>
                {/* </div> */}
              </div>
              <div className="card bg-white shadow-md p-4 rounded-lg mb-4 lg:w-[27%] w-full flex flex-col lg:hover:scale-110 transition-all">
                <div className="relative w-[100%] h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={card3Image}
                    alt="Card Image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                {/* <div className="max-w-44"> */}
                <h2 className="text-xl font-semibold mb-2 text-black">
                  Comfortable Designs
                </h2>
                <p className="text-gray-600">
                  Experience comfort with our thoughtfully designed furniture
                  pieces.
                </p>
                {/* </div> */}
              </div>
            </section>

            <h1 className="font-[Poppins] text-center w-[90%] lg:text-[43px]  font-bold text-3xl my-14">
              ABOUT US
            </h1>
            <section className="w-full p-5 flex lg:flex-row flex-col items-center justify-evenly text-center">
              <div className="lg:w-[30%] w-[90%] text-white mb-10">
                <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold mb-3 text-rose-300 leading-tight">
                  Stories
                </h2>
                <p className="text-gray-400 leading-loose">
                  Welcome to R. S. Furniture, where each piece whispers a unique
                  story. Founded in year{" "}
                  <span className="text-slate-300 font-medium">1998</span> by{" "}
                  <span className="text-slate-300 font-medium">
                    Ramsilan Yadav
                  </span>
                  , we transform spaces into living narratives, crafting
                  artifacts that resonate with the poetry of life.
                </p>
              </div>
              <div className="lg:w-[30%] w-[90%] text-white mb-10">
                <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold mb-3 text-blue-300 leading-tight">
                  Comfort, and You
                </h2>
                <p className="text-gray-400 leading-loose">
                  At R. S. Furniture, we go beyond aesthetics; we design
                  comfort, elegance, and a haven for your soul. Each creation is
                  a fusion of timeless design and contemporary living,
                  reflecting your unique style.
                </p>
              </div>
            </section>

            {/* CONTACT Section */}
            <section className="w-full p-5 flex lg:flex-row flex-col items-center justify-evenly text-center">
              <div className="lg:w-[50%] w-[90%] text-white">
                <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold mb-3 text-teal-400 leading-tight">
                  Get in Touch
                </h2>
                <p className="text-gray-400 leading-loose">
                  We{"'"}d love to hear from you! Whether you have questions
                  about our products, want to discuss a custom order, or just
                  want to say hello, we{"'"}re here for you.
                </p>
                {/* Button to navigate to the /contact page */}
                <button
                  className="outline outline-2 max-w-[90%] text-base outline-white my-10 rounded-full p-5 font-medium px-10 transition-all hover:outline-[4px] shadow-[0px_30px_60px_rgba(255,255,255,0.3)] inline-flex flex-row items-center  gap-4 hover:gap-5"
                  onClick={() => router.push("/contact")}
                >
                  <span className="text-left">Contact Us</span>
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </button>
              </div>
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
