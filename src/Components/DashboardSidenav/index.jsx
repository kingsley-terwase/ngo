// DashboardSidebar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  Drawer,
  Box,
  Typography,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft24Regular,
  ChevronRight24Regular,
  ChevronDown24Regular,
  ChevronUp24Regular,
} from "@fluentui/react-icons";
import { Link, useLocation } from "react-router-dom";
import { COLORS } from "../../Config/color";
import { routesConfig } from "../../Layout/Library";
import { FONT_FAMILY } from "../../Config/font";

const drawerWidthExpanded = 260;
const drawerWidthCollapsed = 72;

const HEADER_HEIGHT_EXPANDED = 72;
const HEADER_HEIGHT_COLLAPSED = 56;
const MIN_SCROLLBAR_THRESHOLD = 420; 


export default function DashboardSidebar() {
  const theme = useTheme();
  const location = useLocation();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const listWrapRef = useRef(null); 
  const drawerPaperRef = useRef(null);

  const [isOverflowing, setIsOverflowing] = useState(false);

  const toggleSidebar = () => setIsCollapsed((s) => !s);
  const toggleSubmenu = (text) => setOpenSubmenus((prev) => ({ ...prev, [text]: !prev[text] }));


  const checkOverflow = () => {
    const el = listWrapRef.current;
    if (!el) return setIsOverflowing(false);

    const scrollHeight = el.scrollHeight;
    const clientHeight = el.clientHeight;

    const overflow = scrollHeight > clientHeight + 2 || scrollHeight > MIN_SCROLLBAR_THRESHOLD;
    setIsOverflowing(overflow && !isCollapsed);
  };

  useEffect(() => {
    checkOverflow();

    const el = listWrapRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      checkOverflow();
    });
    ro.observe(el);

    const mo = new MutationObserver(() => {
      checkOverflow();
    });
    mo.observe(el, { childList: true, subtree: true });

    const onWinResize = () => checkOverflow();
    window.addEventListener("resize", onWinResize);

    return () => {
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener("resize", onWinResize);
    };
  }, [isCollapsed]);

  const headerHeight = isCollapsed ? HEADER_HEIGHT_COLLAPSED : HEADER_HEIGHT_EXPANDED;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isCollapsed ? drawerWidthCollapsed : drawerWidthExpanded,
        flexShrink: 0,
        bgcolor: COLORS.style_2,
        "& .MuiDrawer-paper": {
          width: isCollapsed ? drawerWidthCollapsed : drawerWidthExpanded,
          boxSizing: "border-box",
          bgcolor: COLORS.style_2,
          color: "white",
          transition: "width 0.28s ease-in-out",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "inset -1px 0 0 rgba(255,255,255,0.02)",
          position: "relative",
        },
      }}
    >
      
      <Box
        sx={{
          p: isCollapsed ? 1 : 1.2,
          display:  isCollapsed ? "block": "flex",
          alignItems: "center",
          gap: isCollapsed ? 0 : 2,
          justifyContent: isCollapsed ? "center" : "space-between",
          minHeight: headerHeight,
          borderBottom: `1px solid rgba(255,255,255,0.03)`,
          flexShrink: 0,
        }}
      >
        {!isCollapsed ? (
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar src="/api/placeholder/40/40" alt="User" />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: FONT_FAMILY.primary,
                  ml: 1,
                  fontWeight: 700,
                  letterSpacing: 0.2,
                }}
              >
                Real Estate Admin
              </Typography>
            </Box>

            <IconButton onClick={toggleSidebar} sx={{ color: "grey.300" }}>
              <ChevronLeft24Regular />
            </IconButton>
          </>
        ) : (
          <>
            <Avatar src="/api/placeholder/40/40" alt="User" />
            <IconButton onClick={toggleSidebar} sx={{ color: "grey.300" }}>
              <ChevronRight24Regular />
            </IconButton>
          </>
        )}
      </Box>

      <Box
        ref={listWrapRef}
        sx={{
          p: isCollapsed ? 0.5 : 1.5,
          flex: 1,
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: isCollapsed ? 0 : "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: isOverflowing ? "linear-gradient(180deg, #6a11cb, #2575fc)" : "transparent",
            borderRadius: "8px",
            border: `2px solid ${COLORS.style_2}`,
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "linear-gradient(180deg, #5b0fb8, #1e63e6)",
          },
          scrollbarWidth: isOverflowing ? "thin" : "none",
          scrollbarColor: isOverflowing ? "#2575fc transparent" : "transparent transparent",
          position: "relative",
        }}
      >
        <List disablePadding>
          {routesConfig.map((item, index) => {
            const isActive = location.pathname.startsWith(item.path);

            return (
              <Box key={index}>
                <Tooltip title={isCollapsed ? item.text : ""} placement="right" arrow>
                  <ListItemButton
                    component={item.children ? "div" : Link}
                    to={item.children ? undefined : item.path}
                    onClick={() => item.children && toggleSubmenu(item.text)}
                    sx={{
                      mb: 0.5,
                      borderRadius: 1,
                      fontFamily: FONT_FAMILY.primary,
                      bgcolor: isActive ? "rgba(255,255,255,0.06)" : "transparent",
                      color: isActive ? "white" : "grey.300",
                      justifyContent: isCollapsed ? "center" : "flex-start",
                      px: isCollapsed ? 1.5 : 2,
                      "&:hover": { bgcolor: COLORS.secondary, color: "white" },
                      transition: "background-color 0.15s ease",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: isActive ? "white" : "grey.400",
                        minWidth: isCollapsed ? "auto" : 36,
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>

                    {!isCollapsed && (
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          fontSize: 15,
                          fontFamily: FONT_FAMILY.primary,
                          fontWeight: isActive ? 700 : 500,
                        }}
                      />
                    )}

                    {!isCollapsed && item.children && (
                      <Box sx={{ ml: "auto", color: "grey.300" }}>
                        {openSubmenus[item.text] ? <ChevronUp24Regular /> : <ChevronDown24Regular />}
                      </Box>
                    )}
                  </ListItemButton>
                </Tooltip>

                {item.children && (
                  <Collapse in={openSubmenus[item.text]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((sub, idx) => (
                        <ListItemButton
                          key={idx}
                          component={Link}
                          to={sub.path}
                          sx={{
                            pl: isCollapsed ? 4 : 6,
                            fontFamily: FONT_FAMILY.primary,
                            color: location.pathname === sub.path ? "white" : "grey.400",
                            "&:hover": { bgcolor: COLORS.secondary, color: "white" },
                          }}
                        >
                          <ListItemText
                            primary={sub.text}
                            primaryTypographyProps={{
                              fontSize: 14,
                              fontFamily: FONT_FAMILY.primary,
                              fontWeight: location.pathname === sub.path ? 700 : 500,
                            }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            );
          })}
        </List>
        
      </Box>
    </Drawer>
  );
}
