import {
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";

const risks = [
  {
    id: 1,
    title: "Payment Terms",
    status: "Safe",
    description: "Payment clause is clearly defined.",
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    id: 2,
    title: "Notice Period",
    status: "Present",
    description: "30-day notice period found.",
    icon: CheckCircle,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: 3,
    title: "Unlimited Liability",
    status: "High Risk",
    description: "No liability cap detected.",
    icon: XCircle,
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    id: 4,
    title: "Confidentiality",
    status: "Missing",
    description: "No confidentiality clause found.",
    icon: AlertTriangle,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
];

export default function RiskTimeline() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Risk Analysis
      </h2>

      <div className="space-y-4">

        {risks.map((risk) => {
          const Icon = risk.icon;

          return (
            <div
              key={risk.id}
              className={`flex items-start justify-between rounded-2xl p-4 ${risk.bg}`}
            >
              <div className="flex gap-4">

                <div className="mt-1">
                  <Icon
                    size={26}
                    className={risk.color}
                  />
                </div>

                <div>

                  <h3 className="font-semibold text-slate-800">
                    {risk.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {risk.description}
                  </p>

                </div>

              </div>

              <span
                className={`font-semibold ${risk.color}`}
              >
                {risk.status}
              </span>

            </div>
          );
        })}

      </div>
    </div>
  );
}