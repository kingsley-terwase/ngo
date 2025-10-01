import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Avatar,
  Container,
} from "@mui/material";
import {
  CheckmarkCircle24Filled,
  Dismiss24Filled,
  Layer24Filled,
  ShieldCheckmark24Filled,
  Briefcase24Filled,
} from "@fluentui/react-icons";
import { COLORS } from "../../Config/color";
import { FONT_FAMILY } from "../../Config/font";

export default function SubscriptionSection() {
  const [expandedPlan, setExpandedPlan] = useState(null);
  const [activePlan, setActivePlan] = useState(null); 

  const plans = [
    {
      id: "startup",
      name: "Startup",
      price: "$9.99",
      icon: <Layer24Filled fontSize={28} />,
      bgColor: "linear-gradient(to bottom right, #fde68a, #fcd34d)",
      features: [
        { name: "1 Agent", included: false },
        { name: "10 Properties", included: true },
        { name: "3 Gallery Images (Per Property)", included: true },
        { name: "4 Additional Features (Per Property)", included: true },
      ],
    },
    {
      id: "growth",
      name: "Growth",
      price: "$15.99",
      icon: <ShieldCheckmark24Filled fontSize={28} color="#d97706" />,
      bgColor: "linear-gradient(to bottom right, #fef3c7, #fde68a)",
      features: [
        { name: "3 Agents", included: true },
        { name: "15 Properties", included: true },
        { name: "4 Gallery Images (Per Property)", included: true },
        { name: "5 Additional Features (Per Property)", included: true },
      ],
    },
    {
      id: "maturity",
      name: "Maturity",
      price: "$29.99",
      icon: <Briefcase24Filled fontSize={28} color="#d97706" />,
      bgColor: "linear-gradient(to bottom right, #fef9c3, #fde68a)",
      features: [
        { name: "5 Agents", included: true },
        { name: "20 Properties", included: true },
        { name: "10 Gallery Images (Per Property)", included: true },
        { name: "12 Additional Features (Per Property)", included: true },
      ],
    },
  ];

  const toggleExpanded = (planId) => {
    setExpandedPlan(expandedPlan === planId ? null : planId);
  };

  const handleSelectPlan = (planId) => {
    setActivePlan(planId); 
  };

  return (
    <Box sx={{ py: 10, bgcolor: COLORS.secondary }}>
      <Container maxWidth="lg">
        <Typography sx={{ fontFamily: FONT_FAMILY.primary, pb:5 }} variant="h5" fontWeight={700} textAlign="center" color="white">
           Choose Subscription Plan
        </Typography>
        <Grid container spacing={4}>
          {plans.map((plan, index) => {
            const isActive = activePlan === plan.id;

            return (
              <Grid size={{xs:12, md:4}} key={plan.id}>
                <Card
                  onClick={() => handleSelectPlan(plan.id)}
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: isActive ? 8 : 3,
                    cursor: "pointer",
                    transform: isActive ? "scale(1.05)" : "scale(1)",
                    background: isActive ? plan.bgColor : "#fff",
                    border: "1px solid #e5e7eb",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      background: plan.bgColor,
                      boxShadow: 8,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Icon + Title */}
                    <Box display="flex" alignItems="center" mb={4}>
                      <Avatar
                        sx={{
                          bgcolor: isActive ? "rgba(255,255,255,0.3)" : "#fef3c7",
                          color: isActive ? "#fff" : "#b45309",
                          width: 64,
                          height: 64,
                        }}
                      >
                        {plan.icon}
                      </Avatar>
                      <Typography
                        variant="h5"
                        fontWeight={600}
                        ml={2}
                        sx={{fontFamily: FONT_FAMILY.primary}}
                        color={isActive ? "#000" : "text.primary"}
                      >
                        {plan.name}
                      </Typography>
                    </Box>

                    <Box mb={4}>
                      <Typography
                        variant="h3"
                        fontWeight={700}
                        sx={{fontFamily: FONT_FAMILY.primary}}
                        color={isActive ? "#000" : "text.primary"}
                      >
                        {plan.price}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{fontFamily: FONT_FAMILY.primary}}
                        color={isActive ? "#000" : "text.secondary"}
                      >
                        / Monthly
                      </Typography>
                    </Box>

                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      mb={2}
                      sx={{fontFamily: FONT_FAMILY.primary}}
                      color={isActive ? "#000" : "text.primary"}
                    >
                      What's Included
                    </Typography>
                    <Box>
                      {(expandedPlan === plan.id
                        ? plan.features
                        : plan.features.slice(0, 4)
                      ).map((feature, idx) => (
                        <Box key={idx} display="flex" alignItems="center" mb={1.5}>
                          <Avatar
                            sx={{
                              width: 24,
                              height: 24,
                              bgcolor: feature.included
                                ? isActive
                                  ? "rgba(15, 12, 12, 0.1)"
                                  : "#dcfce7"
                                : isActive
                                ? "rgba(255,255,255,0.1)"
                                : "#f3f4f6",
                              color: feature.included
                                ? isActive
                                  ? "#000"
                                  : "#16a34a"
                                : isActive
                                ? "rgba(255,255,255,0.5)"
                                : "#9ca3af",
                            }}
                          >
                            {feature.included ? (
                              <CheckmarkCircle24Filled fontSize={16} />
                            ) : (
                              <Dismiss24Filled fontSize={16} />
                            )}
                          </Avatar>
                          <Typography
                            variant="body2"
                            ml={2}
                            sx={{fontFamily: FONT_FAMILY.primary}}
                            color={
                              feature.included
                                ? isActive
                                  ? "#000"
                                  : "text.primary"
                                : isActive
                                ? "rgba(255,255,255,0.7)"
                                : "text.secondary"
                            }
                          >
                            {feature.name}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {plan.features.length > 4 && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpanded(plan.id);
                        }}
                        size="small"
                        sx={{
                          mt: 2,
                          textTransform: "none",
                          fontWeight: 500,
                          color: isActive ? "rgba(255,255,255,0.8)" : "text.secondary",
                          "&:hover": {
                            color: isActive ? "#fff" : "text.primary",
                          },
                        }}
                      >
                        {expandedPlan === plan.id ? "Show Less" : "Show More"}
                      </Button>
                    )}

                    <Button
                      fullWidth
                      sx={{
                        mt: 4,
                        py: 1.5,
                        fontFamily: FONT_FAMILY.primary,
                        borderRadius: 10,
                        fontWeight: 600,
                        ...(isActive
                          ? {
                              bgcolor: "#fff",
                              color: "#b45309",
                              "&:hover": {
                                bgcolor: "#f9fafb",
                                boxShadow: 3,
                              },
                            }
                          : {
                              border: "2px solid #fcd34d",
                              color: "#b45309",
                              "&:hover": {
                                bgcolor: "#fef3c7",
                                borderColor: "#f59e0b",
                              },
                            }),
                      }}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
