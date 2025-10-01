import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";

// Fluent UI Icons
import {
  Search24Regular,
  Add24Filled,
  Mail24Regular,
  Alert24Regular,
  ChevronDown24Regular,
  Navigation24Regular,
  ChevronDown16Filled,
} from "@fluentui/react-icons";

import { COLORS } from "../../Config/color";
import { FONT_FAMILY } from "../../Config/font";
import { useNavigate } from "react-router-dom";

// Search styling
const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.2),
  },
  flexGrow: 1,
  maxWidth: 400,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.grey[400],
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.2, 1, 1.2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const DashboardNav = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md")); // <= md


  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const isProfileOpen = Boolean(profileAnchorEl);


  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const isMobileOpen = Boolean(mobileAnchorEl);


  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };
  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };


  const navigate = useNavigate();

  const handleProfile = () => {
    navigate('/dashboard/profile');
  };


  const handleMobileOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };
  const handleMobileClose = () => {
    setMobileAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: COLORS.style_2, py: 1.6 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
       
          <Typography variant="h6" sx={{ fontFamily: FONT_FAMILY.primary, fontWeight: 700, letterSpacing: 2 }}>
            Dashboard
          </Typography>

          {!isMdDown && (
            <>
              <SearchContainer>
                <SearchIconWrapper>
                  <Search24Regular />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search products…" />
              </SearchContainer>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <IconButton color="inherit">
                  <Mail24Regular />
                </IconButton>
                <IconButton color="inherit">
                  <Alert24Regular />
                </IconButton>

                {/* Profile dropdown */}
                <Box
                  onClick={handleProfileClick}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  <Avatar alt="Henry Klein" src="/api/placeholder/32/32" />
                  <Typography variant="body1" sx={{ fontFamily:FONT_FAMILY.primary, fontWeight: 500 }}>
                    Mr Kingsley
                  </Typography>
                  <ChevronDown16Filled />
                </Box>

                <Menu
                  anchorEl={profileAnchorEl}
                  open={isProfileOpen}
                  onClose={handleProfileClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                   PaperProps={{
                    sx: {
                      width: 200,
                      bgcolor: '#000',
                      color: "white",
                      mt: 1,
                      "& .MuiMenuItem-root": {
                        color: "#fff",
                        fontFamily: FONT_FAMILY.primary,
                        "&:hover": {
                          bgcolor: alpha("#fff", 0.1),
                        },
                      },
                    },
                  }}
                >
                  <MenuItem onClick={handleProfile}>Profile</MenuItem>
                  <MenuItem onClick={handleProfileClose}>Settings</MenuItem>
                  <MenuItem onClick={handleProfileClose}>Advanced Settings</MenuItem>
                  <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
                </Menu>
              </Box>
            </>
          )}

          {/* Mobile Nav */}
          {isMdDown && (
            <IconButton color="inherit" onClick={handleMobileOpen}>
              <Navigation24Regular />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Menu */}
      <Menu
        anchorEl={mobileAnchorEl}
        open={isMobileOpen}
        onClose={handleMobileClose}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: COLORS.style_2,
            color: "white",
            mt: 1,
            "& .MuiMenuItem-root": {
              color: "white",
              "&:hover": {
                bgcolor: alpha("#fff", 0.1),
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* Search */}
        <Box sx={{ p: 2 }}>
          <SearchContainer>
            <SearchIconWrapper>
              <Search24Regular />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search products…" />
          </SearchContainer>
        </Box>

        <Divider sx={{ borderColor: alpha("#fff", 0.2) }} />

        <MenuItem onClick={handleMobileClose}>
          <ListItemIcon sx={{ color: "inherit" }}>
            <Mail24Regular />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </MenuItem>

        <MenuItem onClick={handleMobileClose}>
          <ListItemIcon sx={{ color: "inherit" }}>
            <Alert24Regular />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </MenuItem>

        <Divider sx={{ borderColor: alpha("#fff", 0.2) }} />

        <MenuItem onClick={handleMobileClose}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar alt="Henry Klein" src="/api/placeholder/32/32" />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Henry Klein
              </Typography>
              <Typography variant="caption" sx={{ color: "grey.400" }}>
                View Profile
              </Typography>
            </Box>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
};

export default DashboardNav;
