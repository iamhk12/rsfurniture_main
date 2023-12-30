import Image from "next/image"
import { useRouter } from "next/router"

export default function Contact() {
    const router = useRouter();
  return (
    <>
      <div className="h-full w-full absolute">
        <div className="md:p-10 p-4 w-full h-full fixed">
          <div className="border-[1px] shadow-slate-200  border-white w-full h-full rounded-none overflow-y-auto overflow-x-hidden  flex flex-col items-center relative pb-56">
            <nav className="flex justify-between p-4 md:flex-row flex-col md:w-[80%] w-[90%] mb-12 mt-4">
              <h1 className="md:text-2xl md:text-[1.5rem] text-xl mb-5 font-medium logoCss text-center">R S FURNITURE</h1>
              <div className="flex flow-row md:justify-evenly justify-between md:w-5/12 w-full text-xl"> 
                <button onClick={()=> router.push('/')}>Home</button>
                <button onClick={()=> router.push('/services')}>Services</button>
                <button className="bn9"><span> Contact us</span></button>
              </div>
            </nav>

            <div className="fixed w-full bottom-0 h-40 fixedTransparentGradient"></div>
          </div>
        </div>
      </div>
    </>
  )
}
