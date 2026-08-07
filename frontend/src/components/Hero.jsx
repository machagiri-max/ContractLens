import { useState } from "react";
import HeroCard from "./HeroCard";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

import { FiUpload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

export default function Hero() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-slate-50">

        {/* Background */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-8 min-h-[90vh] flex items-center">

          <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

            {/* LEFT */}
            <div>

              <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full">
                🚀 AI Powered Contract Review Platform
              </span>

              <h1 className="mt-6 text-6xl font-black leading-tight text-slate-900">
                Understand Every{" "}
                <span className="text-blue-700">Contract</span> Before You
                Sign.
              </h1>

              <p className="mt-8 text-xl text-slate-600 leading-8">
                Upload employment agreements, NDAs, offer letters,
                lease agreements and legal documents.
                ContractLens uses AI to summarize contracts,
                detect risky clauses, and answer all your
                questions instantly.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex gap-5">

                <button
                  onClick={() => setLoginOpen(true)}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl flex items-center gap-3 shadow-lg transition"
                >
                  <FiUpload />
                  Upload Contract
                </button>

                <button className="border border-slate-300 hover:bg-slate-100 px-8 py-4 rounded-xl flex items-center gap-3 transition">
                  <FaPlay />
                  Watch Demo
                </button>

              </div>

              {/* Login Message */}
              <div className="mt-12 bg-white rounded-2xl shadow-lg border border-blue-100 p-6">

                <div className="flex items-start gap-4">

                  <div className="bg-blue-100 p-4 rounded-xl">
                    <FiUpload className="text-blue-700 text-2xl" />
                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      Start Reviewing Contracts
                    </h3>

                    <p className="mt-2 text-slate-600 leading-7">
                      Login or create a free account to upload your
                      documents, detect legal risks, summarize
                      contracts, and chat with AI.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <HeroCard />

          </div>

        </div>

      </section>

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