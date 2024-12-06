import { useState } from "react";
import Image from "next/image";

export default function LearningPathSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      image: "/assets/graphic design.jpeg",
      title: "Android Developer",
    },
    {
      image: "/assets/card.jpeg",
      title: "Graphic Design",
    },
    {
      image: "/assets/code.jpg",
      title: "Fullstack Developer",
    },
    {
      image: "/assets/hr.jpg",
      title: "Human Resources",
    },
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-between">
        {/* Bagian Teks */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Learning Path</h2>
          <p className="text-gray-600 leading-relaxed">
            Mulailah perjalanan belajar Anda di Learning Path Aplus! Tingkatkan
            pengetahuan dan keterampilan dengan panduan terstruktur untuk
            mencapai tujuan Anda. Yuk, belajar bersama sekarang!
          </p>
        </div>

       
        <div className="w-full md:w-1/2 relative">
          
          <div className="flex justify-end mb-4">
            <a href="#" className="text-[#14274E] font-semibold text-sm">
              Lihat Selengkapnya
            </a>
          </div>

          
           <div className="flex space-x-4 justify-end items-start">
            
            <div className="relative w-[200px] h-[300px]">
              <Image
                src={images[currentImageIndex]?.image}
                alt={images[currentImageIndex]?.title}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-sm p-2">
                {images[currentImageIndex]?.title}
              </div>
            </div>
           
            <div className="relative w-[200px] h-[300px]">
              <Image
                src={images[(currentImageIndex + 1) % images.length]?.image}
                alt={images[(currentImageIndex + 1) % images.length]?.title}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-sm p-2 rounded-b-lg">
                {images[(currentImageIndex + 1) % images.length]?.title}
              </div>
            </div>
          </div>

         
          <div className="flex justify-center sm:justify-end mt-4 mx-2">
            <button
              onClick={handlePrevImage}
              className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={handleNextImage}
              className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full ml-2"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
