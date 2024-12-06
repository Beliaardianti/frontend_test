import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#14274E] text-white py-10">
      <div className="container mx-auto px-4">
        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-600">
          {}
          <div>
            <h4 className="text-lg font-semibold mb-4">Program</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">Bootcamp</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Learning Path</a>
              </li>
            </ul>
          </div>
          {}
          <div>
            <h4 className="text-lg font-semibold mb-4">Corporate</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">Corporate Training</a>
              </li>
            </ul>
          </div>
          {}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tentang</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">Perusahaan</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Kontak</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Karir</a>
              </li>
            </ul>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          {}
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; Aplus 2024. Hak Cipta Dilindungi
          </p>
          {}
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="text-blue-600 hover:text-blue-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-red-600 hover:text-red-400">
              <FaYoutube />
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
