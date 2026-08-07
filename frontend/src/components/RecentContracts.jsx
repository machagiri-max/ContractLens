import { useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";

export default function RecentContracts() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-3xl font-bold mb-8">
        Recent Contracts
      </h2>

      {/* Employment */}
      <div className="flex justify-between items-center border-b pb-6">
        <button
          onClick={() => navigate("/contract/1")}
          className="bg-slate-900 text-white px-7 py-5 rounded-2xl flex items-center gap-3 hover:bg-blue-700 transition"
        >
          <FileText />
          Employment.pdf
        </button>

        <span className="bg-yellow-100 text-yellow-700 px-6 py-3 rounded-full">
          Medium
        </span>
      </div>

      {/* NDA */}
      <div className="flex justify-between items-center border-b py-6">
        <button
          onClick={() => navigate("/contract/2")}
          className="bg-slate-900 text-white px-7 py-5 rounded-2xl flex items-center gap-3 hover:bg-blue-700 transition"
        >
          <FileText />
          NDA.pdf
        </button>

        <span className="bg-green-100 text-green-700 px-6 py-3 rounded-full">
          Low
        </span>
      </div>

      {/* Freelance */}
      <div className="flex justify-between items-center pt-6">
        <button
          onClick={() => navigate("/contract/3")}
          className="bg-slate-900 text-white px-7 py-5 rounded-2xl flex items-center gap-3 hover:bg-blue-700 transition"
        >
          <FileText />
          Freelance.pdf
        </button>

        <span className="bg-red-100 text-red-700 px-6 py-3 rounded-full">
          High
        </span>
      </div>
    </div>
  );
}