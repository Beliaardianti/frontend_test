import Image from "next/image";

export default function WhyUsSection() {
  const items = [
    {
      image: "/assets/learning.png", 
      title: "Belajar lebih fleksibel",
      description:
        "Belajar kapan pun, di mana pun, secara mandiri. Bebas memilih kelas sesuai minat belajar.",
      bgColor: "bg-[#14274E]",
      textColor: "text-white",
    },
    {
      image: "/assets/educator.png", 
      title: "Materi ter-up to date",
      description:
        "Kurikulum dikembangkan bersama perusahaan dan pemilik teknologi dunia sesuai kebutuhan industri terkini.",
      bgColor: "bg-green-200",
      textColor: "text-[#14274E]",
    },
    {
      image: "/assets/curriculum.png", 
      title: "Mentor berpengalaman",
      description:
        "Pengajar dengan pengalaman nyata sebagai praktisi mampu membuat Anda lebih mengenal industri.",
      bgColor: "bg-[#14274E]",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-[#14274E]-900 mb-4">
                {item.title}
              </h3>
              <div className="w-40 h-40 mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div
                className={`p-8 w-full ${item.bgColor} ${item.textColor} rounded-md`}
              >
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
