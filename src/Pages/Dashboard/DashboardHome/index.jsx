import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import {
  ArrowTrendingFilled as TrendingUpIcon,
  ArrowTrendingFilled as TrendingDownIcon,
  DocumentText20Filled as FileTextIcon,
} from "@fluentui/react-icons";
import { COLORS } from "../../../Config/color";
import { FONT_FAMILY } from "../../../Config/font";
import { projects, statsCards } from "./data";

const DashboardHome = () => {
  return (
    <Box>

      <Card
        sx={{
          background: "linear-gradient(to right, #ec4899, #8b5cf6)",
          color: "white",
          borderRadius: 3,
          mb: 4,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h4">📋</Typography>
            <Box>
              <Typography variant="h6" sx={{fontFamily: FONT_FAMILY.primary}} fontWeight={700}>
                Want even more features?
              </Typography>
              <Typography variant="body1" sx={{fontFamily: FONT_FAMILY.primary}} color="pink.100">
                Go to settings and change your plan to premium
              </Typography>
            </Box>
          </Box>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              fontFamily: FONT_FAMILY.primary,
              borderColor: "rgba(255,255,255,0.5)",
              "&:hover": {
                borderColor: "white",
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Change Settings
          </Button>
        </CardContent>
      </Card>
      <Grid container spacing={3} mb={4}>
        {statsCards.map((stat, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
            <Card sx={{ bgcolor: COLORS.style_2, color: "white" }}>
              <CardContent>
                <Typography variant="h4" sx={{fontFamily:FONT_FAMILY.primary}} fontWeight={700} mb={1}>
                  {stat.value}
                </Typography>
                <Typography variant="body1" sx={{fontFamily:FONT_FAMILY.primary}} color="gray">
                  {stat.title}
                </Typography>
                <Box display="flex" alignItems="center" gap={1} mt={2}>
                  <Box
                    sx={{
                      px: 0,
                      py: 0.5,
                      borderRadius: 1,
                      fontFamily: FONT_FAMILY.primary,
                      fontSize: "0.99rem",
                      fontWeight: 600,
                      bgcolor: stat.positive ? "green.600" : "red.600",
                      color: "white",
                    }}
                  >
                    {stat.change}
                  </Box>
                  {stat.positive ? (
                    <TrendingUpIcon style={{ color: "#22c55e" }} />
                  ) : (
                    <TrendingDownIcon style={{ color: "#ef4444" }} />
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Card sx={{ bgcolor: "#111827", color: "white" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontFamily:FONT_FAMILY.primary }} fontWeight={700} mb={3}>
                Transaction History
              </Typography>

              <Box display="flex" justifyContent="center" mb={4}>
                <Box position="relative" width={200} height={200}>
                  <svg
                    viewBox="0 0 200 200"
                    style={{ transform: "rotate(-90deg)" }}
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      stroke="#374151"
                      strokeWidth="20"
                      fill="none"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      stroke="#f59e0b"
                      strokeWidth="20"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 80 * 0.6} ${2 * Math.PI * 80
                        }`}
                      strokeLinecap="round"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      stroke="#10b981"
                      strokeWidth="20"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 80 * 0.3} ${2 * Math.PI * 80
                        }`}
                      strokeDashoffset={`${-2 * Math.PI * 80 * 0.6}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box textAlign="center">
                      <Typography variant="h5" fontWeight={700}>
                        $1200
                      </Typography>
                      <Typography variant="body2" color="gray">
                        Total
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box display="flex" justifyContent="space-between">
                <Typography fontWeight={600}>Transfer to Paypal</Typography>
                <Typography fontWeight={700}>$236</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Card sx={{ bgcolor: "#111827", color: "white" }}>
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
              >
                <Typography variant="h6"  sx={{fontFamily:FONT_FAMILY.primary}}fontWeight={700}>
                  Open Projects
                </Typography>
                <Typography variant="body2" sx={{fontFamily:FONT_FAMILY.primary}} color="gray">
                  Your data status
                </Typography>
              </Box>

              {projects.map((project, index) => (
                <Box
                  key={index}
                  pb={index < projects.length - 1 ? 2 : 0}
                  mb={index < projects.length - 1 ? 2 : 0}
                >
                  <Box display="flex" gap={2}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        bgcolor: project.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <FileTextIcon style={{ color: "white" }} />
                    </Box>
                    <Box flex={1}>
                      <Typography fontWeight={600}>{project.title}</Typography>
                      <Typography variant="body2" color="gray">
                        {project.subtitle}
                      </Typography>
                    </Box>
                    <Box textAlign="right" flexShrink={0}>
                      <Typography variant="body2" color="gray">
                        {project.time}
                      </Typography>
                      <Typography variant="body2" color="gray">
                        {project.tasks}
                      </Typography>
                    </Box>
                  </Box>
                  {index < projects.length - 1 && (
                    <Divider sx={{ mt: 2, borderColor: "#374151" }} />
                  )}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
