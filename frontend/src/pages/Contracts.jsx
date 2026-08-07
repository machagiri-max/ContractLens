import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Search, Upload, FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const contracts = [
  {
    id: 1,
    name: "Employment_Agreement.pdf",
    risk: "Medium",
    pages: 12,
    uploaded: "Today",
  },
  {
    id: 2,
    name: "NDA.pdf",
    risk: "Low",
    pages: 3,
    uploaded: "Yesterday",
  },
  {
    id: 3,
    name: "Freelancer.pdf",
    risk: "High",
    pages: 8,
    uploaded: "2 Days Ago",
  },
];

export default function Contracts() {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-8">

        <Topbar />

        {/* Header */}

        <div className="flex justify-between items-center mt-8">

          <h1 className="text-4xl font-bold">
            Contracts
          </h1>

          <button className="flex items-center gap-2 bg-blue-700 text-white px-5 py-3 rounded-xl hover:bg-blue-800">

            <Upload size={18} />

            Upload Contract

          </button>

        </div>

        {/* Search */}

        <div className="mt-6 relative">

          <Search
            className="absolute left-4 top-3 text-slate-400"
            size={20}
          />

          <input
            placeholder="Search contracts..."
            className="w-full rounded-xl border bg-white py-3 pl-12 pr-4 outline-none"
          />

        </div>

        {/* Table */}

        <div className="mt-8 bg-white rounded-2xl shadow">

          {contracts.map((item) => (
            <Link
              key={item.id}
              to={`/contract/${item.id}`}
              className="flex justify-between items-center p-6 border-b hover:bg-slate-50 transition"
            >

              <div className="flex items-center gap-4">

                <div className="bg-blue-100 p-3 rounded-xl">

                  <FileText className="text-blue-700" />

                </div>

                <div>

                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-slate-500 text-sm">
                    Uploaded {item.uploaded}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-10">

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold
                  ${
                    item.risk === "High"
                      ? "bg-red-100 text-red-600"
                      : item.risk === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  {item.risk}
                </span>

                <span>{item.pages} Pages</span>

                <ChevronRight />

              </div>

            </Link>
          ))}

        </div>

      </main>

    </div>
  );
}