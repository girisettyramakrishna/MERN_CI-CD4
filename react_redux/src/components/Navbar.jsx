// src/components/Navbar.jsx
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const userInfo = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    setMenuOpen(false);
    setProfileOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setProfileOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = (path) =>
    `${location.pathname === path ? "font-semibold" : ""} hover:text-gray-200`;

  return (
    <nav className="bg-blue-900 text-white shadow-md relative">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">

        {/* Left Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/jobs" className={linkClass("/jobs")}>Jobs</Link>
          <Link to="/aboutus" className={linkClass("/aboutus")}>About Us</Link>
          <Link to="/services" className={linkClass("/services")}>Services</Link>
          <Link to="/contact" className={linkClass("/contact")}>Contact Us</Link>

          {role === "jobseeker" && (
            <Link to="/my-applications" className={linkClass("/my-applications")}>
              My Applications
            </Link>
          )}
          {role === "recruiter" && (
            <Link to="/post-job" className={linkClass("/post-job")}>Post Job</Link>
          )}
          {role === "admin" && (
            <>
              <Link to="/manage-users" className={linkClass("/manage-users")}>Manage Users</Link>
              <Link to="/manage-jobs" className={linkClass("/manage-jobs")}>Manage Jobs</Link>
            </>
          )}
        </div>

        {/* Right Side: Login/Register or Profile */}
        <div className="hidden md:flex items-center space-x-6">
          {!userInfo ? (
            <>
              <Link to="/login" className="bg-blue-900 text-white px-3 py-1 rounded hover:bg-blue-800">
                Login
              </Link>
              <Link to="/register" className="bg-white text-blue-900 px-3 py-1 rounded hover:bg-gray-200">
                Register
              </Link>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                {/* ✅ Static Shizuka image */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTju5_1aQXRiPQ2Qz5SkQZ4l3O-DQudvyTsOg&s"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded shadow-md z-50">
                  <Link to="/profile" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-100">
                    My Profile
                  </Link>
                  {role === "jobseeker" && (
                    <Link to="/my-applications" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-100">
                      My Applications
                    </Link>
                  )}
                  {role === "recruiter" && (
                    <Link to="/post-job" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-100">
                      Post Job
                    </Link>
                  )}
                  {role === "admin" && (
                    <>
                      <Link to="/manage-users" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-100">
                        Manage Users
                      </Link>
                      <Link to="/manage-jobs" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-100">
                        Manage Jobs
                      </Link>
                    </>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 bg-blue-700">
          <Link to="/" onClick={closeMenu} className={linkClass("/")}>Home</Link>
          <Link to="/jobs" onClick={closeMenu} className={linkClass("/jobs")}>Jobs</Link>
          <Link to="/aboutus" onClick={closeMenu} className={linkClass("/aboutus")}>About Us</Link>
          <Link to="/services" onClick={closeMenu} className={linkClass("/services")}>Services</Link>
          <Link to="/contact" onClick={closeMenu} className={linkClass("/contact")}>Contact Us</Link>

          {role === "jobseeker" && (
            <Link to="/my-applications" onClick={closeMenu} className={linkClass("/my-applications")}>
              My Applications
            </Link>
          )}
          {role === "recruiter" && (
            <Link to="/post-job" onClick={closeMenu} className="block hover:text-gray-200">Post Job</Link>
          )}
          {role === "admin" && (
            <>
              <Link to="/manage-users" onClick={closeMenu} className="block hover:text-gray-200">Manage Users</Link>
              <Link to="/manage-jobs" onClick={closeMenu} className="block hover:text-gray-200">Manage Jobs</Link>
            </>
          )}

          {!userInfo ? (
            <>
              <Link to="/login" onClick={closeMenu} className="block bg-white text-blue-900 px-3 py-1 rounded hover:bg-gray-200">
                Login
              </Link>
              <Link to="/register" onClick={closeMenu} className="block bg-green-500 text-white px-3 py-1 rounded hover:bg-green-400">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" onClick={closeMenu} className="block hover:text-gray-200">My Profile</Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
