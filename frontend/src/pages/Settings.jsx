import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import api from "../api/api";

import {
  User,
  Mail,
  Lock,
  Bell,
  Moon,
  Globe,
  Bot,
  Shield,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function Settings() {
  const [user, setUser] = useState({
    full_name: "",
    email: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 p-8">

        <Topbar />

        <div className="mt-8">
          <h1 className="text-4xl font-bold">
            Settings
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your ContractLens account
          </p>
        </div>

        <div className="mt-8 bg-white rounded-3xl shadow-sm overflow-hidden">

          {/* Profile */}

          <div className="flex items-center justify-between p-6 border-b hover:bg-slate-50">

            <div className="flex items-center gap-4">

              <div className="bg-blue-100 p-3 rounded-xl">
                <User className="text-blue-700" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Profile
                </h3>

                <p className="text-slate-500">
                  {user.full_name}
                </p>
              </div>

            </div>

            <ChevronRight />

          </div>

          {/* Email */}

          <div className="flex items-center justify-between p-6 border-b hover:bg-slate-50">

            <div className="flex items-center gap-4">

              <div className="bg-emerald-100 p-3 rounded-xl">
                <Mail className="text-emerald-700" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Email
                </h3>

                <p className="text-slate-500">
                  {user.email}
                </p>
              </div>

            </div>

            <ChevronRight />

          </div>

          {/* Password */}

          <div className="flex items-center justify-between p-6 border-b hover:bg-slate-50">

            <div className="flex items-center gap-4">

              <div className="bg-yellow-100 p-3 rounded-xl">
                <Lock className="text-yellow-700" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Password
                </h3>

                <p className="text-slate-500">
                  Protected with encryption
                </p>
              </div>

            </div>

            <ChevronRight />

          </div>

          {/* Notifications */}

          <div className="flex items-center justify-between p-6 border-b hover:bg-slate-50">

            <div className="flex items-center gap-4">

              <div className="bg-purple-100 p-3 rounded-xl">
                <Bell className="text-purple-700" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Notifications
                </h3>

                <p className="text-slate-500">
                  Email Alerts
                </p>
              </div>

            </div>

            <ChevronRight />

          </div>

          {/* Appearance */}

          <div className="flex items-center justify-between p-6 border-b hover:bg-slate-50">

            <div className="flex items-center gap-4">

              <div className="bg-slate-200 p-3 rounded-xl">
                <Moon />
              </div>

              <div>
                <h3 className="font-semibold">
                  Appearance
                </h3>

                <p className="text-slate-500">
                  Light Theme
                </p>
              </div>

            </div>

            <ChevronRight />

          </div>

          {/* Language */}

          <div className="flex items-center justify-between p-6 border-b hover:bg-slate-50">

            <div className="flex items-center gap-4">

              <div className="bg-blue-100 p-3 rounded-xl">
                <Globe className="text-blue-700" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Language
                </h3>

                <p className="text-slate-500">
                  English
                </p>
              </div>

            </div>

            <ChevronRight />

          </div>

          {/* AI */}

          <div className="flex items-center justify-between p-6 border-b hover:bg-slate-50">

            <div className="flex items-center gap-4">

              <div className="bg-cyan-100 p-3 rounded-xl">
                <Bot className="text-cyan-700" />
              </div>

              <div>
                <h3 className="font-semibold">
                  AI Model
                </h3>

                <p className="text-slate-500">
                  Groq Llama 3
                </p>
              </div>

            </div>

            <ChevronRight />

          </div>

          {/* Privacy */}

          <div className="flex items-center justify-between p-6 border-b hover:bg-slate-50">

            <div className="flex items-center gap-4">

              <div className="bg-red-100 p-3 rounded-xl">
                <Shield className="text-red-600" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Privacy & Security
                </h3>

                <p className="text-slate-500">
                  Your contracts are securely stored
                </p>
              </div>

            </div>

            <ChevronRight />

          </div>

          {/* Logout */}

          <div
            onClick={logout}
            className="flex items-center justify-between p-6 hover:bg-red-50 cursor-pointer"
          >

            <div className="flex items-center gap-4">

              <div className="bg-red-100 p-3 rounded-xl">
                <LogOut className="text-red-600" />
              </div>

              <h3 className="font-semibold text-red-600">
                Logout
              </h3>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}