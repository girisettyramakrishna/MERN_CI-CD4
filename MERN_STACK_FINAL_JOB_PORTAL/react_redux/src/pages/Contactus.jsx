import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // ✅ modern icons

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("✅ Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-100 py-12 flex justify-center items-center">
  <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl w-full text-center border border-gray-200">
    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
      Get in Touch
    </h1>
    <p className="text-gray-600 text-base md:text-lg mb-6">
      Have questions, feedback, or partnership ideas? We’d love to hear from you!
    </p>
    <img
      src="https://cdn-icons-png.flaticon.com/512/646/646094.png"
      alt="Contact Illustration"
      className="mx-auto w-24 md:w-32 opacity-90"
    />
  </div>
</div>


      {/* Contact Info + Form */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-6">
            Reach out to us directly using the details below, or fill out the form and we’ll respond quickly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <Phone className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700 font-medium">+91 9900990099</span>
            </div>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <Mail className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700 font-medium">jobportal@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <MapPin className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700 font-medium">Hyderabad, India</span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition transform hover:scale-[1.02]"
            >
              ✉ Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
