import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-lg font-bold mb-2">JobPortal</h2>
          <p className="text-xs text-gray-300">
            Connecting talent with opportunity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-xs">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/jobs" className="hover:text-yellow-400 transition">Browse Jobs</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Get in Touch</h3>
          <p className="text-xs text-gray-300 mb-2">support@jobportal.com</p>
          <div className="flex justify-center md:justify-start gap-3">
            <a href="#" className="hover:text-yellow-400 transition"><Facebook size={16} /></a>
            <a href="#" className="hover:text-yellow-400 transition"><Twitter size={16} /></a>
            <a href="#" className="hover:text-yellow-400 transition"><Linkedin size={16} /></a>
            <a href="mailto:support@jobportal.com" className="hover:text-yellow-400 transition"><Mail size={16} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-700 mt-4 pt-2 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
}
