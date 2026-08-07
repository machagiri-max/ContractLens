import { useState } from "react";
import { Link } from "react-router-dom";

import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

export default function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-black text-blue-800 hover:text-blue-900 transition"
          >
            ContractLens
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-700">

            <a
              href="#features"
              className="hover:text-blue-700 transition"
            >
              Features
            </a>

            <a
              href="#pricing"
              className="hover:text-blue-700 transition"
            >
              Pricing
            </a>

            <Link
              to="/about"
              className="hover:text-blue-700 transition"
            >
              About
            </Link>

          </div>

          {/* Buttons */}
          <div className="flex gap-3">

            <button
              onClick={() => setLoginOpen(true)}
              className="border border-slate-300 px-5 py-2 rounded-xl hover:bg-slate-100 transition"
            >
              Login
            </button>

            <button
              onClick={() => setSignupOpen(true)}
              className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded-xl transition"
            >
              Sign Up
            </button>

          </div>

        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        switchToSignup={() => {
          setLoginOpen(false);
          setSignupOpen(true);
        }}
      />

      {/* Signup Modal */}
      <SignupModal
        isOpen={signupOpen}
        onClose={() => setSignupOpen(false)}
        switchToLogin={() => {
          setSignupOpen(false);
          setLoginOpen(true);
        }}
      />
    </>
  );
}