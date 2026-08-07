import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import {
  FileText,
  AlertTriangle,
  ShieldAlert,
  Activity,
  TrendingUp,
} from "lucide-react";

export default function Reports() {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-8">

        <Topbar />

        {/* Header */}

        <div className="mt-8">

          <h1 className="text-4xl font-bold">
            Reports & Analytics
          </h1>

          <p className="text-slate-500 mt-2">
            AI insights across all uploaded contracts
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <FileText className="text-blue-700 mb-4" size={32}/>
            <h2 className="text-3xl font-bold">27</h2>
            <p className="text-slate-500 mt-2">
              Contracts Reviewed
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <AlertTriangle className="text-red-600 mb-4" size={32}/>
            <h2 className="text-3xl font-bold">6</h2>
            <p className="text-slate-500 mt-2">
              High Risk Contracts
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <ShieldAlert className="text-yellow-600 mb-4" size={32}/>
            <h2 className="text-3xl font-bold">61%</h2>
            <p className="text-slate-500 mt-2">
              Average Risk Score
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <Activity className="text-emerald-600 mb-4" size={32}/>
            <h2 className="text-3xl font-bold">182</h2>
            <p className="text-slate-500 mt-2">
              AI Questions Answered
            </p>
          </div>

        </div>

        {/* Two Columns */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          {/* Common Risks */}

          <div className="bg-white rounded-2xl shadow-sm p-6">

            <h2 className="text-2xl font-bold mb-6">
              Most Common Risks
            </h2>

            <div className="space-y-5">

              <div>
                <div className="flex justify-between">
                  <span>Unlimited Liability</span>
                  <span>82%</span>
                </div>

                <div className="bg-slate-200 rounded-full h-3 mt-2">

                  <div className="bg-red-600 h-3 rounded-full w-[82%]"></div>

                </div>

              </div>

              <div>
                <div className="flex justify-between">
                  <span>Missing Arbitration</span>
                  <span>61%</span>
                </div>

                <div className="bg-slate-200 rounded-full h-3 mt-2">

                  <div className="bg-yellow-500 h-3 rounded-full w-[61%]"></div>

                </div>

              </div>

              <div>
                <div className="flex justify-between">
                  <span>Broad IP Assignment</span>
                  <span>45%</span>
                </div>

                <div className="bg-slate-200 rounded-full h-3 mt-2">

                  <div className="bg-blue-600 h-3 rounded-full w-[45%]"></div>

                </div>

              </div>

            </div>

          </div>

          {/* AI Insights */}

          <div className="bg-white rounded-2xl shadow-sm p-6">

            <h2 className="text-2xl font-bold mb-6">
              AI Insights
            </h2>

            <div className="space-y-5">

              <div className="flex gap-4 items-start">

                <TrendingUp className="text-blue-700"/>

                <p>
                  Employment contracts have the highest average
                  risk score this month.
                </p>

              </div>

              <div className="flex gap-4 items-start">

                <TrendingUp className="text-red-600"/>

                <p>
                  Unlimited liability appears in 8 out of 10
                  contracts reviewed.
                </p>

              </div>

              <div className="flex gap-4 items-start">

                <TrendingUp className="text-emerald-600"/>

                <p>
                  Payment clauses are clearly defined in 94%
                  of uploaded agreements.
                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}