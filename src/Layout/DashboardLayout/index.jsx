import React from "react";
import { Box } from "@mui/material";
import DashboardSidebar from "../../Components/DashboardSidenav";
import { DashboardNav } from "../../Components";
import { Outlet } from "react-router-dom";

const drawerWidth = 0;

const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "grey.100" }}>
      <DashboardSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`, 
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <DashboardNav />
        <Box sx={{ p: 3, flex: 1, backgroundColor: '#000', overflowY: "auto" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
