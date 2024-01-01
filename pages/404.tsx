import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-center absolute bg-gradient-to-b from-black to-gray-900">
        <h1>404 - Page Not Found</h1>
        <Link href="/" className="bg-white rounded-full mt-10 p-3 px-6 font-extralight text-black font-['Baloo_Bhai_2']">Back to Home</Link>
      </div>
    </>
  );
}
