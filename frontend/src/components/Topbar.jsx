import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="text-slate-500">
          Welcome back 👋
        </p>

      </div>

      <div className="flex items-center gap-5">

        <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-xl">

          <Search size={18} />

          <input
            placeholder="Search contracts..."
            className="bg-transparent outline-none"
          />

        </div>

        <Bell className="cursor-pointer" />

        <img
          src="https://ui-avatars.com/api/?name=User"
          className="w-10 h-10 rounded-full"
          alt="User"
        />

      </div>

    </header>
  );
}