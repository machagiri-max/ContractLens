import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function SignupModal({
  isOpen,
  onClose,
  switchToLogin,
}) {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async () => {
    if (!fullName || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await register(
        fullName,
        email,
        password
      );

      onClose();

      navigate("/dashboard");

    } catch (err) {
      setError(
        err.response?.data?.detail ||
        "Registration failed"
      );
    }

    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl w-[420px] p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-2">
              Create Account
            </h2>

            <p className="text-gray-500 mb-8">
              Join ContractLens
            </p>

            {error && (
              <div className="bg-red-100 text-red-700 rounded-lg p-3 mb-4">
                {error}
              </div>
            )}

            <input
              className="w-full border rounded-lg p-3 mb-4"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
            />

            <input
              className="w-full border rounded-lg p-3 mb-4"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              className="w-full border rounded-lg p-3"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              onClick={handleSignup}
              disabled={loading}
              className="w-full mt-6 bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl transition"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>

            <p className="mt-5 text-center">
              Already have an account?

              <span
                onClick={switchToLogin}
                className="text-violet-600 cursor-pointer ml-2"
              >
                Login
              </span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}