import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ContractDetails from "./pages/ContractDetails";
import AIChat from "./pages/AIChat";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import About from "./pages/About";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/contract/:id"
        element={
          <ProtectedRoute>
            <ContractDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <AIChat />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route
  path="/contracts"
  element={
    <ProtectedRoute>
      <ContractDetails />
    </ProtectedRoute>
  }
/>
<Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;