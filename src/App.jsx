import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import CareerGuidance from "./pages/CareerGuidance";
import LearningRoadmap from "./pages/LearningRoadmap";
import MockInterview from "./pages/MockInterview";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume" element={<ResumeAnalyzer />} />
        <Route path="/career" element={<CareerGuidance />} />
        <Route path="/learning" element={<LearningRoadmap />} />
        <Route path="/interview" element={<MockInterview />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}
