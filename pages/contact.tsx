import Image from "next/image";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const phoneNumber = "+918779035327";
  const emailId = "hkothari247@gmail.com"

  return (
    <>
      <div className="h-full w-full absolute">
        <div className="lg:p-10 p-4 w-full h-full fixed">
          <div className="border-[1px] shadow-slate-200  border-white w-full h-full rounded-none overflow-y-auto overflow-x-hidden  flex flex-col items-center relative pb-56">
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

                <button onClick={() => router.push("/projects")}>
                  Projects
                </button>
                
                <button onClick={() => router.push("/services")}>
                  Services
                </button>

                <button className="bn9">
                  <span>Contact Us</span>
                </button>
              </div>
            </nav>

            <div className="lg:w-3/5 w-full bg-black text-white p-8 flex flex-col items-center shadow-lg" id="contactSection">
              <h2 className="text-3xl font-extrabold mb-6 text-slate-300">Get in Touch</h2>

              <div className="mb-6 w-full flex justify-center">
                <button 
                  onClick={()=>{window.open('tel:'+phoneNumber)}}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 lg:w-[350px] w-[90%]">
                  <strong>Phone:</strong> {phoneNumber}
                </button>
              </div>

              <div className="mb-8 w-full flex justify-center">
                <button
                  onClick={()=>{window.open('mailto:'+emailId);}}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 lg:w-[350px] w-[90%]">
                  <strong>Email:</strong> {emailId}
                </button>
              </div>

              <p className="text-sm opacity-80">We look forward to hearing from you!</p>

              <Image
                  src={`/thankyou.png`}
                  alt={`Thank you very much !`}
                  width={300}
                  height={150}
                  layout="fixed"
                  className="rounded-md "

                />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
