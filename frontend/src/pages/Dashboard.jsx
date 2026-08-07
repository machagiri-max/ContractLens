import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import UploadCard from "../components/UploadCard";
import RecentContracts from "../components/RecentContracts";

import {
  FileText,
  AlertTriangle,
  MessageSquare,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-8">

        <Topbar />

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <StatCard
            title="Contracts"
            value="12"
            subtitle="Uploaded"
            icon={FileText}
            color="bg-blue-700"
          />

          <StatCard
            title="High Risk"
            value="3"
            subtitle="Need Review"
            icon={AlertTriangle}
            color="bg-red-600"
          />

          <StatCard
            title="AI Questions"
            value="28"
            subtitle="Answered"
            icon={MessageSquare}
            color="bg-emerald-600"
          />

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <UploadCard />

          <RecentContracts />

        </div>

      </main>

    </div>
  );
}