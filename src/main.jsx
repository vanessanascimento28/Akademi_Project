import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Students from "./components/pages/Students.jsx";
import AddStudent from "./components/pages/AddStudent.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import Finance from "./components/pages/Finance.jsx";
import Teachers from "./components/pages/Teachers.jsx";
import User from "./components/pages/User.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/addstudents" element={<AddStudent />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/user" element={<User />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
