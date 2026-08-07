import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loginUser } from "../api/auth";

export default function LoginModal({
  isOpen,
  onClose,
  switchToSignup,
}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await loginUser({
        email,
        password,
      });

      localStorage.setItem(
        "token",
        res.data.access_token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      onClose();

      window.location.href = "/dashboard";

    } catch (err) {
      alert(
        err.response?.data?.detail ||
        "Login Failed"
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          /* Added z-[100] here to place the modal above the navbar (z-50) */
          className="fixed inset-0 z-[100] bg-black/40 flex justify-center items-center"
          onClick={onClose}
        >

          <motion.div
            onClick={(e)=>e.stopPropagation()}
            className="bg-white w-[420px] rounded-xl p-8"
          >

            <h2 className="text-3xl font-bold mb-2">
              Welcome Back
            </h2>

            <p className="mb-6 text-gray-500">
              Login to ContractLens
            </p>

            <input
              placeholder="Email"
              className="border w-full p-3 rounded-lg mb-4"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="border w-full p-3 rounded-lg"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="bg-blue-700 text-white w-full py-3 rounded-xl mt-6"
            >
              Login
            </button>

            <p className="mt-5 text-center">
              Don't have an account?
              <span
                onClick={switchToSignup}
                className="text-blue-700 ml-2 cursor-pointer"
              >
                Sign Up
              </span>
            </p>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}