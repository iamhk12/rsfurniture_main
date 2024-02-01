import Projects_Component from "@/_components/Projects_Component";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function Projects() {
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
              className="border-[1px] shadow-slate-200  border-white w-full h-full rounded-none overflow-y-auto overflow-x-hidden  flex flex-col items-center relative pb-8"
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
                  <span> Home</span>
                </button>

                <button className="bn9">
                  <span>Projects</span>
                </button>
                
                <button onClick={() => router.push("/services")}>
                  Services
                </button>

                <button onClick={() => router.push("/contact")}>
                  Contact Us
                </button>
              </div>
            </nav>

            <div className="w-[95%] overflow-x-auto ">
              {/* <h2 className={`lg:text-5xl text-3xl font-semibold mb-10 text-teal-300 text-center `}>Our Projects</h2> */}
              <Projects_Component/>
            </div>
            
          
            </div>
          </div>
        </div>
      </>
    );
  }
  