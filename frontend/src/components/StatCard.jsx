import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color,
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border">

      <div className="flex justify-between items-start">

        <div>

          <p className="text-slate-500 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {value}
          </h2>

          <p className="text-slate-400 mt-2 text-sm">
            {subtitle}
          </p>

        </div>

        <div className={`${color} p-3 rounded-xl text-white`}>
          <Icon size={22} />
        </div>

      </div>

      <div className="mt-6 flex items-center gap-2 text-emerald-600 text-sm">

        <ArrowUpRight size={16} />

        +12% this month

      </div>

    </div>
  );
}