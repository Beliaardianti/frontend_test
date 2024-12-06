import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    category: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.category || !formData.message) {
      setStatus('Harap lengkapi semua field.');
      return;
    }

    
    setTimeout(() => {
      setStatus('Pesan berhasil dikirim!');
      setFormData({ email: '', category: '', message: '' });
    }, 1000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Tunggu apa lagi?</h2>
        <p className="text-center text-gray-600 mb-12">
          Tingkatkan skill Anda dengan Aplus. Hubungi kami untuk informasi lebih lanjut
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6"
        >
       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

  <div className="relative">

    <span className="absolute left-3 top-3.5 text-black">
      <img src="/assets/email.png" alt="Icon" className="w-5 h-5" />
    </span>


    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Masukkan email Anda"
      className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14274E]-500"
      required
    />
  </div>


  <div className="relative">
 
    <span className="absolute left-3 top-3.5 text-black">
      <img src="/assets/Vector.png" alt="Icon" className="w-5 h-5" />
    </span>


    <select
      name="category"
      value={formData.category}
      onChange={handleChange}
      className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14274E]-500"
      required
    >
      <option value="" disabled>
        Pilih kategori
      </option>
      <option value="langganan">Langganan</option>
      <option value="corperate">Corperate</option>

    </select>
  </div>
</div>


         
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Pesan"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14274E]-500"
              rows="4"
              required
            ></textarea>
          </div>

      
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-3 bg-[#14274E] text-white rounded-lg hover:bg-[#14274E] focus:outline-none focus:ring-2 focus:ring-[#14274E]"
            >
              Kirim
            </button>
          </div>

       
          {status && (
            <p className="text-center text-sm font-semibold text-gray-700 mt-4">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
