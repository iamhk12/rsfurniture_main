import Image from "next/image"
import heroImage from "@/public/heroimage.webp"
import card1Image from "@/public/card1.webp"
import card2Image from "@/public/card2.webp"
import card3Image from "@/public/card3.webp"
import { AiOutlineHome } from "react-icons/ai";
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()
  return (
    <>
      <div className="h-full w-full absolute">
        <div className="md:p-10 p-4 w-full h-full fixed">
          <div className="border-[1px] shadow-slate-200  border-white w-full h-full rounded-none overflow-y-auto overflow-x-hidden  flex flex-col items-center relative pb-56">
            <nav className="flex justify-between p-4 md:flex-row flex-col md:w-[80%] w-[90%] mb-12 mt-4">
              <h1 className="md:text-2xl md:text-[1.5rem] text-3xl mb-5 font-medium logoCss text-center">R S FURNITURE</h1>
              <div className="flex flow-row md:justify-evenly justify-between md:w-5/12 w-full md:text-xl text-base"> 
                <button className="bn9"><span> Home</span></button> | 
                <button onClick={()=> router.push('/services')}> Services</button> | 
                <button onClick={()=> router.push('/contact')}> Contact Us</button> 
              </div>
            </nav>
            {/* HERO SECTION  */}
            <section className="w-[90%] p-5 flex md:flex-row flex-col items-center justify-evenly mb-14"> 
              <Image src={heroImage} alt="Hero" className="md:w-[40%] w-[100%] outline outline-offset-8 outline-white outline-2 rounded-xl mb-7"/>
              <div className="md:w-[50%] w-[90%] text-right flex flex-col md:gap-10 justify-center ">
                
                <div className="flex flex-col items-end md:text-3xl md:gap-6 text-2xl">
                  <AiOutlineHome/>
                  <h1 className=" text-['Baloo Bhai 2'] ">
                    Discover Timeless Elegance
                  </h1>
                </div>
                <h1 className="md:text-[75px] text-4xl font-['Sevillana']">
                    in Every Piece
                </h1>
              </div>
            </section>
            
            {/* EXPERIENCE SECTION  */}
            <h1 className="fontSofia text-left w-[80%] md:text-[40px] text-2xl"> EXPERIENCE . . . </h1>
            <section className="w-[90%] p-5 flex md:flex-row flex-col items-center justify-evenly mb-24"> 
              
              <div className="card bg-white shadow-md p-4 rounded-lg mb-4 md:w-[27%] w-full flex flex-col ">
                <div className="relative w-[100%] h-64 mb-4 rounded-lg overflow-hidden">
                  <Image src={card1Image} alt="Card Image" layout="fill" objectFit="cover" />
                </div>
                {/* <div className="max-w-44"> */}
                  <h2 className="text-xl font-semibold mb-2 text-black">Comfortable Designs</h2>
                  <p className="text-gray-600">Explore our collection of stylish furniture that complements your lifestyle.</p>
                {/* </div> */}
              </div>
              <div className="card bg-white shadow-md p-4 rounded-lg mb-4 md:w-[27%] w-full flex flex-col ">
                <div className="relative w-[100%] h-64 mb-4 rounded-lg overflow-hidden">
                  <Image src={card2Image} alt="Card Image" layout="fill" objectFit="cover" />
                </div>
                {/* <div className="max-w-44"> */}
                  <h2 className="text-xl font-semibold mb-2 text-black"> Affordable Solutions</h2>
                  <p className="text-gray-600">Find affordable and quality furniture solutions for every room in your home.</p>
                {/* </div> */}
              </div>
              <div className="card bg-white shadow-md p-4 rounded-lg mb-4 md:w-[27%] w-full flex flex-col ">
                <div className="relative w-[100%] h-64 mb-4 rounded-lg overflow-hidden">
                  <Image src={card3Image} alt="Card Image" layout="fill" objectFit="cover" />
                </div>
                {/* <div className="max-w-44"> */}
                  <h2 className="text-xl font-semibold mb-2 text-black"> Comfortable Designs</h2>
                  <p className="text-gray-600">Experience comfort with our thoughtfully designed furniture pieces.</p>
                {/* </div> */}
              </div>
            </section>

            {/*ABOUT Section*/}
            <h1 className="fontSofia text-right w-[80%] md:text-[43px] text-2xl">. . . ABOUT US </h1>
            <section className="w-[90%] p-5 flex md:flex-row flex-col items-center justify-evenly"> 
              
            
            </section>

            <div className="fixed w-full bottom-0 h-40 fixedTransparentGradient"></div>
          </div>
        </div>
      </div>
    </>
  )
}
