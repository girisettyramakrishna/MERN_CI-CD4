// src/pages/AboutUs.jsx
export default function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-20">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1521791136064-7986c2920216" 
      alt="Teamwork"
      className="w-full h-full object-cover"
    />
    {/* Transparent Overlay */}
    <div className="absolute inset-0 bg-gray-300 bg-opacity-70"></div>
  </div>

  {/* Content */}
  <div className="relative container mx-auto px-6 text-center">
    <h1 className="text-gray-700 md:text-6xl font-bold mb-4">About Us</h1>
    <p className="text-gray-600 md:text-xl max-w-2xl mx-auto">
      Empowering job seekers and recruiters with a seamless platform to
      connect, grow, and achieve their goals.
    </p>
  </div>
</div>


      {/* Mission & Vision */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to bridge the gap between talented professionals and
            leading companies. We aim to create opportunities that foster growth,
            innovation, and success for both job seekers and employers.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a world where everyone has access to the right career
            opportunities. By leveraging technology, we aspire to build a global
            community that thrives on collaboration and excellence.
          </p>
        </div>
      </div>

      {/* ⭐ Top Companies Hiring */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">
            Top Companies Hiring
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {/* Company Card 1 */}
            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                alt="Microsoft"
                className="h-12 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-800">Microsoft</h3>
              <p className="text-gray-600 text-sm">Innovating for the future</p>
            </div>
            {/* Company Card 2 */}
            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon"
                className="h-12 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-800">Amazon</h3>
              <p className="text-gray-600 text-sm">Work hard, have fun, make history</p>
            </div>
            {/* Company Card 3 */}
            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                alt="Google"
                className="h-12 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-800">Google</h3>
              <p className="text-gray-600 text-sm">Organizing the world’s information</p>
            </div>
          
            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://www.vectorlogo.zone/logos/accenture/accenture-ar21.svg"
                alt="Accenture"
                className="h-12 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-800">Accenture</h3>
              <p className="text-gray-600 text-sm">Let there be change</p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAhrsHnrKR805o3v4MNNMnNzHJIYp9um6JNy5J4YAVYxWmm_FpjCqftob8zBOecWVBO0&usqp=CAU"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="data:image/jpeg;base64,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"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800">Jane Smith</h3>
              <p className="text-gray-600">Operations Head</p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmETZBkCVjdq_h-RIg32Bhgkwfjp7tHHJVBPG_TkpkSiUkcm2G5AGh-LzNiVVH5kQv78&usqp=CAU"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800">Michael Lee</h3>
              <p className="text-gray-600">Tech Lead</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="relative bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')] bg-cover bg-center py-20 text-center">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Glassmorphic Card */}
  <div className="relative z-10 container mx-auto px-6">
    <div className="max-w-2xl mx-auto bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-10 text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Ready to Build Your Future With Us?
      </h2>
      <p className="mb-8 text-lg text-gray-200 leading-relaxed">
        Join thousands of professionals and recruiters already on our platform and take the next step in your career journey.
      </p>
      <a
        href="/register"
        className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold shadow-md transform transition duration-300 hover:scale-105"
      >
        🚀 Get Started
      </a>
    </div>
  </div>
</div>

    </div>
  );
}
