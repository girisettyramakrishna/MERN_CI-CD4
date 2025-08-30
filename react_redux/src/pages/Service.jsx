function Services() {
  const services = [
    {
      title: "Job Search",
      description:
        "Browse thousands of job listings tailored to your skills and location.",
      icon: "💼",
    },
    {
      title: "Resume Building",
      description:
        "Create a professional resume that stands out to recruiters.",
      icon: "📄",
    },
    {
      title: "Career Counseling",
      description:
        "Get expert advice to make the right career moves and achieve your goals.",
      icon: "🎯",
    },
    {
      title: "Interview Preparation",
      description:
        "Practice with mock interviews and tips to crack your dream job.",
      icon: "🎤",
    },
    {
      title: "Skill Development",
      description:
        "Access online courses to upskill and stay ahead in your career.",
      icon: "📚",
    },
    {
      title: "Networking",
      description:
        "Connect with industry professionals and expand your opportunities.",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h1>
        <p className="text-gray-600 mb-10">
          We provide a range of services to help you succeed in your career.
        </p>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
