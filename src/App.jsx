import LoginCard from "./loginCard";
import Dashboard from "./dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-gradient-to-tr from-lime-700 to-lime-200 px-4">
              <LoginCard />
            </div>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
