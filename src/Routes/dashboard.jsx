import { Routes, Route } from "react-router-dom";
import { DashboardHome } from "../Pages/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import Messages from "../Pages/Dashboard/Messages";
import ProfilePage from "../Pages/Dashboard/Profile";

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardHome />} />
                <Route path="messages" element={<Messages />} />
                <Route path="profile" element={<ProfilePage />} />
            </Route>
        </Routes>
    );
};

export default DashboardRoutes;
