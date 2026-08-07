import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { FaFileContract, FaRobot } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { IoWarning } from "react-icons/io5";

export default function HeroCard() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-2xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3">
            <FaFileContract className="text-xl text-blue-700" />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              Employment_Agreement.pdf
            </h3>

            <TypeAnimation
              sequence={[
                "Analyzing contract...",
                1500,
                "Extracting clauses...",
                1500,
                "Detecting risks...",
                1500,
                "Analysis complete",
                1500,
              ]}
              wrapper="p"
              repeat={Infinity}
              className="text-sm text-slate-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>

          <span className="text-sm font-semibold text-emerald-600">
            AI Live
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Risk */}
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-slate-800">
            Overall Risk
          </h4>

          <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
            Medium
          </span>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "72%" }}
            transition={{ duration: 1.5 }}
            className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
          />
        </div>

        {/* Findings */}
        <h4 className="mt-8 mb-4 text-lg font-bold text-slate-900">
          Key Findings
        </h4>

        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-3">
            <div className="flex items-center gap-3">
              <HiCheckCircle className="text-xl text-emerald-600" />
              <span>Payment Terms</span>
            </div>

            <span className="font-medium text-emerald-700">
              Found
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-blue-50 p-3">
            <div className="flex items-center gap-3">
              <HiCheckCircle className="text-xl text-blue-700" />
              <span>Notice Period</span>
            </div>

            <span className="font-medium text-blue-700">
              30 Days
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-red-50 p-3">
            <div className="flex items-center gap-3">
              <IoWarning className="text-xl text-red-500" />
              <span>Liability</span>
            </div>

            <span className="font-medium text-red-600">
              Unlimited
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-3">
            <div className="flex items-center gap-3">
              <HiCheckCircle className="text-xl text-emerald-600" />
              <span>IP Rights</span>
            </div>

            <span className="font-medium text-emerald-700">
              Company
            </span>
          </div>
        </div>

        {/* AI Assistant */}
        <div className="mt-8 rounded-2xl bg-slate-100 p-5">
          <div className="flex items-center gap-3">
            <FaRobot className="text-xl text-blue-700" />

            <span className="font-semibold text-slate-800">
              AI Assistant
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            I found a 30-day notice period and detected an unlimited
            liability clause. You may want to review this section
            before signing.
          </p>

          <div className="mt-4 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-400">
            Ask a question about this contract...
          </div>
        </div>
      </div>
    </motion.div>
  );
}