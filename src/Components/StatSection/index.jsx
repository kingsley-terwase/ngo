import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import {
  // School24Filled,
  Heart24Filled,
  People24Filled,
  Home24Filled,
  CollectionsRegular,
  HeartFilled,
  HomeFilled,
  PeopleFilled,
} from "@fluentui/react-icons";
import { FONT_FAMILY } from "../../Config/font";
import { COLORS } from "../../Config/color";

const statsData = [
  {
    icon: <CollectionsRegular style={{ fontSize: "50px" }} />,
    value: "5,000+",
    label: "Children Educated",
    description: "Lives transformed through quality education and learning opportunities in underserved communities.",
    color: "#3b82f6",
    bgGradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
  },
  {
    icon: <HeartFilled style={{ fontSize: "50px" }} />,
    value: "15,000+",
    label: "Children Fed",
    description: "Nutritious meals provided to combat hunger and support healthy development.",
    color: "#ef4444",
    bgGradient: "linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)",
  },
  {
    icon: <HomeFilled style={{ fontSize: "50px" }} />,
    value: "1,200+",
    label: "Safe Shelters",
    description: "Secure homes and protective environments created for vulnerable children.",
    color: "#10b981",
    bgGradient: "linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%)",
  },
  {
    icon: <PeopleFilled style={{ fontSize: "50px" }} />,
    value: "25,000+",
    label: "Lives Impacted",
    description: "Children and families reached through our comprehensive support programs.",
    color: "#8b5cf6",
    bgGradient: "linear-gradient(135deg, #f5f3ff 0%, #c4b5fd 100%)",
  },
];

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const StatsContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    linear-gradient(135deg, #fafafa 0%, #ffffff 50%, #f8fafc 100%)
  `,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)
    `,
    pointerEvents: 'none',
  },
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '80px',
  position: 'relative',
  zIndex: 2,
}));

const StatCard = styled(Box)(({ theme, bgGradient }) => ({
  background: bgGradient || 'white',
  borderRadius: '24px',
  padding: '38px 18px',
  textAlign: 'center',
  position: 'relative',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
  overflow: 'hidden',
  animation: `${fadeInUp} 0.8s ease-out forwards`,
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
    '& .stat-icon': {
      animation: `${pulse} 1.5s ease-in-out infinite`,
    },
    '& .stat-value': {
      transform: 'scale(1.1)',
    },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.8))',
    borderRadius: '24px 24px 0 0',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::after': {
    opacity: 1,
  },
}));

const IconContainer = styled(Box)(({ theme, iconColor }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100px',
  height: '100px',
  margin: '0 auto 24px',
  background: `
    radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)
  `,
  borderRadius: '50%',
  color: iconColor,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  animation: `${float} 3s ease-in-out infinite`,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    background: `linear-gradient(135deg, ${iconColor}20, ${iconColor}10)`,
    borderRadius: '50%',
    zIndex: -1,
  },
}));

const StatValue = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '3.5rem',
  lineHeight: 1,
  marginBottom: '12px',
  background: `linear-gradient(135deg, ${COLORS.primary} 0%, #1e40af 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  fontFamily: FONT_FAMILY.secondary,
  transition: 'transform 0.3s ease',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.8rem',
  },
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1.4rem',
  color: '#1f2937',
  marginBottom: '16px',
  fontFamily: FONT_FAMILY.primary,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
}));

const StatDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#6b7280',
  lineHeight: 1.6,
  fontFamily: FONT_FAMILY.primary,
  maxWidth: '280px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.95rem',
  },
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 700,
  color: '#1f2937',
  marginBottom: '24px',
  fontFamily: FONT_FAMILY.secondary,
  background: `linear-gradient(135deg, #1f2937 0%, ${COLORS.primary} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.8rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.2rem',
  },
}));

const HeaderSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  color: '#6b7280',
  lineHeight: 1.6,
  maxWidth: '600px',
  margin: '0 auto',
  fontFamily: FONT_FAMILY.primary,
  fontWeight: 400,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
  },
}));

const StatsSection = () => {
  return (
    <StatsContainer>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <SectionHeader data-aos="fade-up"
          data-aos-delay="200">
          <HeaderTitle variant="h2">
            Our Impact in Numbers
          </HeaderTitle>
          <HeaderSubtitle>
            Every statistic represents a child whose life has been transformed through compassion,
            dedication, and the unwavering belief that every child deserves a brighter future.
          </HeaderSubtitle>
        </SectionHeader>

        <Grid container spacing={4} 
           justifyContent="center">
          {statsData.map((stat, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
              key={index}
              data-aos="fade-up"
              data-aos-delay="200"
              sx={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <StatCard bgGradient={stat.bgGradient}>
                <IconContainer
                  className="stat-icon"
                  iconColor={stat.color}
                >
                  {stat.icon}
                </IconContainer>

                <StatValue
                  className="stat-value"
                  variant="h2"
                >
                  {stat.value}
                </StatValue>

                <StatLabel variant="h5">
                  {stat.label}
                </StatLabel>

                <StatDescription>
                  {stat.description}
                </StatDescription>
              </StatCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StatsContainer>
  );
};

export default StatsSection;