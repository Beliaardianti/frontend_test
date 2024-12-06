import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#14274E]-50 p-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
     
      <div className="flex items-center flex-1 relative">
  <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
  
  {}
  <div className="relative flex items-center ml-4 w-full md:w-1/2 lg:w-1/3">

    {}
    <div className="relative">
  <input
    type="text"
    placeholder="Mau belajar apa hari ini?"
    className="pl-14 p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14274E]-400"
  />
  <img
    src="/assets/search.png"
    alt="Search"
    className="absolute left-3 top-1/2 transform -translate-y-1/2"
  />
</div>

  </div>
</div>


        <button
          className="md:hidden p-3 text-[#14274E]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <ul className="flex space-x-8">
            <li>
              <button className="text-[#14274E]-900 hover:text-[#14274E]-600">Program</button>
            </li>
            <li>
              <button className="text-[#14274E]-900 hover:text-[#14274E]-600">Corporate</button>
            </li>
            <li>
              <button className="text-[#14274E]-900 hover:text-[#14274E]-600">Tentang</button>
            </li>
            <li>
              <button className="px-4 py-2 bg-[#14274E] text-white rounded hover:bg-[#14274E]-800">
                Masuk
              </button>
            </li>
            <li>
              <button className="px-4 py-2 border border-[#14274E] text-[#14274E] rounded hover:bg-[#14274E]">
                Daftar
              </button>
            </li>
          </ul>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#14274E]-50 shadow-md">
          <div className="p-4">
            <ul>
              <li className="mb-4">
                <button className="text-[#14274E] hover:text-[#14274E]">Program</button>
              </li>
              <li className="mb-4">
                <button className="text-[#14274E] hover:text-[#14274E]">Corporate</button>
              </li>
              <li className="mb-4">
                <button className="text-[#14274E] hover:text-[#14274E]">Tentang</button>
              </li>
              <li className="mb-2">
                <button className="w-full text-center px-4 py-2 bg-[#14274E] text-white rounded hover:bg-[#14274E]">
                  Masuk
                </button>
              </li>
              <li className="mb-2">
                <button className="w-full text-center px-4 py-2 border border-[#14274E] text-[#14274E] rounded hover:bg-[#14274E]">
                  Daftar
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
