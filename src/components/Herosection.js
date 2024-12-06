export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center lg:space-x-12">
        
      
        <div className="w-full lg:w-1/2 mt-8 md:mt-5">
          <div className="relative w-full max-w-lg mx-auto">
            
            <img
              src="assets/video_learn.png" 
              alt="Upgrade Skill"
              className="w-full h-auto"
            />
          </div>
        </div>

        
        <div className="w-full lg:w-1/2 space-y-6 px-4 md:px-8 lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#14274E] mt-6 lg:mb-4">
            Upgrade skill Anda hari ini!
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Yuk, mulai belajar di Aplus! Temukan berbagai materi menarik dan
            pelajari keterampilan baru untuk mendukung perkembangan diri Anda.
            Belajar jadi lebih mudah dan menyenangkan bersama kami!
          </p>
          <button className="bg-[#14274E] text-white px-6 py-3 rounded-lg hover:bg-[#14274E] transition">
            Belajar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
