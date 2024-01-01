import Image from "next/image";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();

  return (
    <>
      <div className="h-full w-full absolute">
        <div className="lg:p-10 p-4 w-full h-full fixed">
          <div className="border-[1px] shadow-slate-200  border-white w-full h-full rounded-none overflow-y-auto overflow-x-hidden  flex flex-col items-center relative pb-56">
            <nav className="flex justify-between p-4 lg:flex-row flex-col lg:w-[80%] w-[90%] mb-12 mt-4">
              <h1 className="lg:text-2xl lg:text-[1.5rem] text-3xl mb-5 font-medium logoCss text-center border-y-2 border-y-gray-600 py-1">
                R S FURNITURE
              </h1>
              <div className="flex flow-row lg:justify-evenly justify-between items-center lg:w-5/12 w-full lg:text-xl text-base">
                <button onClick={() => router.push("/")}>Home</button> 
                <span className="lg:hidden">|</span>
                <button onClick={() => router.push("/services")}>Services</button> 
                <span className="lg:hidden">|</span>
                <button className="bn9">
                  <span> Contact us</span>
                </button>
              </div>
            </nav>

            <div className="lg:w-3/5 w-full">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

              <p className="mb-2">
                <strong>Phone:</strong> Your Phone Number
              </p>
              <p className="mb-2">
                <strong>Email:</strong> your@email.com
              </p>
            </div>

            <div className="fixed w-full bottom-0 h-40 fixedTransparentGradient"></div>
          </div>
        </div>
      </div>
    </>
  );
}
