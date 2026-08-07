import {
  FileText,
  Calendar,
  Users,
  IndianRupee,
  Clock,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Parties",
    value: "ABC Pvt Ltd & John Doe",
  },
  {
    icon: Calendar,
    title: "Effective Date",
    value: "12 Jan 2026",
  },
  {
    icon: Clock,
    title: "Contract Duration",
    value: "2 Years",
  },
  {
    icon: IndianRupee,
    title: "Payment",
    value: "₹80,000 / Month",
  },
  {
    icon: ShieldCheck,
    title: "Termination",
    value: "30 Days Notice",
  },
  {
    icon: FileText,
    title: "IP Rights",
    value: "Company Owns All IP",
  },
];

export default function ContractSummary() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">

      <h2 className="text-2xl font-bold mb-8">
        AI Extracted Summary
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition"
            >
              <div className="bg-blue-100 p-3 rounded-xl">
                <Icon className="text-blue-700" size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h3 className="font-semibold text-slate-900 mt-1">
                  {item.value}
                </h3>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}