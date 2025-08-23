import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contactus";
import Service from "./pages/Service";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleBasedRoute from "./components/RoleBasedRoute";

import RecruiterDashboard from "./pages/RecruiterDashboard";
import JobFormPage from "./pages/JobFormPage";
import JobListPage from "./pages/JobListPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import MyApplicationsPage from "./pages/MyApplicationsPage";
import ApplicantsListPage from "./pages/ApplicantsListPage";

function Profile() {
  return <div className="p-8">Logged in: Profile page</div>;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content */}
      <div className="flex-1">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="services" element={<Service />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/jobs" element={<JobListPage />} />
          <Route path="/jobs/:id" element={<JobDetailsPage />} />

          {/* My Applications – only jobseekers */}
          <Route
            path="/my-applications"
            element={
              <ProtectedRoute>
                <MyApplicationsPage />
              </ProtectedRoute>
            }
          />

          {/* Applicants list – recruiter/admin only */}
          <Route
            path="/jobs/:jobId/applicants"
            element={
              <RoleBasedRoute allowedRoles={["recruiter", "admin"]}>
                <ApplicantsListPage />
              </RoleBasedRoute>
            }
          />

          {/* Protected recruiter/admin routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <RecruiterDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobs/create"
            element={
              <ProtectedRoute>
                <JobFormPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobs/edit/:id"
            element={
              <ProtectedRoute>
                <JobFormPage />
              </ProtectedRoute>
            }
          />
          <Route
           path="/jobs/post-a-job"
           element={
            <ProtectedRoute>
              <JobFormPage />
            </ProtectedRoute>
           } 
          />


          {/* Example protected route */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/post-job" element={<JobFormPage/>}/>
        </Routes>
      </div>

      <Footer />

      {/* Toast notifications for the entire app */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
