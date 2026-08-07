import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Contracts",
      icon: FileText,
      path: "/contracts",
    },
    {
      name: "AI Chat",
      icon: MessageSquare,
      path: "/chat",
    },
    {
      name: "Reports",
      icon: BarChart3,
      path: "/reports",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  return (
    <aside className="w-80 min-h-screen bg-slate-900 text-white flex flex-col">

      {/* Logo */}

      <div className="px-7 py-8 border-b border-slate-800">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-blue-700 flex items-center justify-center text-3xl font-bold shadow-lg">
            CL
          </div>

          <div>

            <h1 className="text-3xl font-bold">
              ContractLens
            </h1>

            <p className="text-slate-400">
              AI Contract Review
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <nav className="flex-1 mt-8 px-5 space-y-3">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-2xl px-5 py-4 text-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-blue-700 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={24} />
              {item.name}
            </NavLink>
          );
        })}

      </nav>

      {/* Logout */}

      <div className="p-5 border-t border-slate-800">

        <button
          onClick={() => navigate("/")}
          className="w-full flex items-center gap-4 rounded-2xl px-5 py-4 text-lg text-slate-300 hover:bg-red-600 hover:text-white transition-all duration-300"
        >
          <LogOut size={24} />
          Logout
        </button>

      </div>

    </aside>
  );
}