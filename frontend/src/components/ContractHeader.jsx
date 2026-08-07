import { ArrowLeft, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContractHeader() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex justify-between items-center">

      <div>

        <Link
          to="/dashboard"
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-4"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <h1 className="text-4xl font-bold">
          Employment Agreement.pdf
        </h1>

        <p className="text-slate-500 mt-2">
          Uploaded Today • 18 Pages
        </p>

      </div>

      <div className="bg-red-100 text-red-700 px-6 py-4 rounded-2xl flex items-center gap-3">

        <ShieldAlert />

        <div>

          <p className="text-sm">
            Risk Score
          </p>

          <h2 className="text-2xl font-bold">
            HIGH
          </h2>

        </div>

      </div>

    </div>
  );
}