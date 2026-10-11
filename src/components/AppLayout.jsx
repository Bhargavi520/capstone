import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-shell">
        <Topbar
          pathname={location.pathname}
          onProfile={() => navigate("/profile")}
        />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
