import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-50 min-h-screen py-20">

        <div className="max-w-6xl mx-auto px-8">

          <h1 className="text-5xl font-bold text-center">
            About ContractLens
          </h1>

          <p className="text-center text-gray-600 text-lg mt-6 max-w-4xl mx-auto leading-8">
            ContractLens is an AI-powered contract review platform that helps
            users understand legal agreements in seconds. Upload contracts,
            identify risky clauses, generate summaries, and ask questions in
            natural language using AI.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-2xl font-bold">
                📄 Smart Analysis
              </h2>

              <p className="mt-4 text-gray-600">
                Automatically extracts payment terms,
                confidentiality clauses, liability,
                termination conditions, and important
                contract information.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-2xl font-bold">
                🤖 AI Assistant
              </h2>

              <p className="mt-4 text-gray-600">
                Chat with your uploaded contract just like
                ChatGPT and receive instant answers based
                on the document.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-2xl font-bold">
                🛡 Risk Detection
              </h2>

              <p className="mt-4 text-gray-600">
                Detect hidden legal risks before signing
                agreements and make informed decisions.
              </p>
            </div>

          </div>

          <div className="mt-20 bg-blue-700 rounded-3xl p-10 text-center text-white">

            <h2 className="text-4xl font-bold">
              Why ContractLens?
            </h2>

            <p className="mt-5 text-lg leading-8">
              We simplify complex legal documents using Artificial Intelligence,
              making contract review faster, smarter, and accessible for
              everyone—from students and freelancers to startups and businesses.
            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}