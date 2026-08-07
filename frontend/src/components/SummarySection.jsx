import {
  Building2,
  CreditCard,
  ShieldAlert,
  FileSignature,
  Scale,
} from "lucide-react";

const summary = [
  {
    title: "Parties",
    value: "ABC Pvt Ltd & John Doe",
    icon: Building2,
  },
  {
    title: "Payment Terms",
    value: "₹50,000 / Month",
    icon: CreditCard,
  },
  {
    title: "Termination",
    value: "30 Days Notice",
    icon: FileSignature,
  },
  {
    title: "Liability",
    value: "Unlimited",
    icon: ShieldAlert,
  },
  {
    title: "IP Rights",
    value: "Owned by Company",
    icon: Scale,
  },
];

export default function SummarySection() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border p-6">

      <h2 className="text-2xl font-bold mb-6">
        AI Contract Summary
      </h2>

      <div className="space-y-4">

        {summary.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 hover:bg-blue-50 transition"
            >
              <div className="bg-blue-600 text-white p-3 rounded-xl">
                <Icon size={20} />
              </div>

              <div>
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-slate-500">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}