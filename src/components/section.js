import { useState } from "react";
import Image from "next/image";

export default function BootcampSection() {
  const bootcamps = [
    {
      title: "Full-stack Web Developer",
      batch: "BATCH 4",
      date: "Februari 2025",
      image: "/assets/code.jpg",
    },
    {
      title: "UI/UX Design",
      batch: "BATCH 2",
      date: "Januari 2025",
      image: "/assets/uiux.jpg",
    },
    {
      title: "Human Resources",
      batch: "BATCH 1",
      date: "Desember 2024",
      image: "/assets/hr.jpg",
    },
    {
      title: "Digital Marketer",
      batch: "BATCH 3",
      date: "Januari 2025",
      image: "/assets/marketing.jpg",
    },
    {
      title: "Android Developer",
      batch: "BATCH 3",
      date: "Januari 2025",
      image: "/assets/graphic design.jpeg",
    },
    {
      title: "Graphic Designer",
      batch: "BATCH 3",
      date: "Januari 2025",
      image: "/assets/card.jpeg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;

  const nextPage = () => {
    if (currentPage < bootcamps.length / cardsPerPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentBootcamps = bootcamps.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Bootcamp</h2>
        <p className="text-center mx-auto text-gray-600 mb-12 max-w-3xl">
          Bergabunglah dengan bootcamp kami dan tingkatkan keterampilan Anda ke
          level berikutnya! Jangan lewatkan kesempatan untuk belajar dan
          berkembang bersama para ahli di industri.
        </p>

        <div className="flex justify-end py-5">
          <a href="#" className="text-blue-600 font-semibold">
            Lihat Selengkapnya
          </a>
        </div>

        {}
        <div className="overflow-x-auto py-4">
          <div className="flex space-x-6">
            {currentBootcamps.map((bootcamp, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-[350px] min-w-[280px] sm:min-w-[300px] max-w-[350px]"
              >
                {}
                <div className="h-80 w-full overflow-hidden">
                  <Image
                    src={bootcamp.image}
                    alt={bootcamp.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {}
                <div className="p-4 bg-[#14274E] text-white flex flex-col justify-between flex-grow">
                  <h3 className="font-semibold text-lg mb-5">{bootcamp.title}</h3>
                  <p className="text-[#6BFFBF]">{bootcamp.batch}</p>
                  <p>{bootcamp.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div></div>
          <div className="flex space-x-2">
            <button onClick={prevPage} className="w-8 h-8 bg-gray-300">
              &lt;
            </button>
            <button onClick={nextPage} className="w-8 h-8 bg-gray-300">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
