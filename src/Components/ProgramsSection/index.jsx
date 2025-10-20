import React, { useState } from "react";
import { Box, Typography, Grid, Container, Card, CardContent, Button } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import {
  ArrowRight24Filled,
  ArrowRight24Regular,
  CheckmarkCircle24Regular,
} from "@fluentui/react-icons";
import { FONT_FAMILY } from "../../Config/font";
import { COLORS } from "../../Config/color";
import { programsData } from "./data";
import { causes } from "../../Pages/Public/Causes/data";



const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

// Styled components
const ProgramsContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #ffffff 100%)
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
      radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.01) 0%, transparent 50%)
    `,
    pointerEvents: 'none',
  },
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '100px',
  position: 'relative',
  zIndex: 2,
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3.8rem',
  fontWeight: 700,
  color: '#1f2937',
  marginBottom: '24px',
  fontFamily: FONT_FAMILY.secondary,
  background: `linear-gradient(135deg, #1f2937 0%, ${COLORS.primary} 50%, #8b5cf6 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  animation: `${fadeInUp} 1s ease-out`,
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.4rem',
  },
}));

const HeaderSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.4rem',
  color: '#6b7280',
  lineHeight: 1.6,
  maxWidth: '700px',
  margin: '0 auto 40px',
  fontFamily: FONT_FAMILY.primary,
  fontWeight: 400,
  animation: `${fadeInUp} 1s ease-out 0.2s both`,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
}));

const ProgramCard = styled(Card)(({ theme, programGradient, index }) => ({
  background: programGradient || 'white',
  borderRadius: '32px',
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  border: '1px solid rgba(255, 255, 255, 0.8)',
  boxShadow: '0 8px 40px rgba(0, 0, 0, 0.06)',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: `${index % 2 === 0 ? slideInLeft : slideInRight} 0.8s ease-out ${index * 0.1}s both`,
  '&:hover': {
    transform: 'translateY(-16px) scale(1.02)',
    boxShadow: '0 32px 80px rgba(0, 0, 0, 0.15)',
    '& .program-icon': {
      animation: `${pulse} 1.5s ease-in-out infinite`,
      transform: 'scale(1.1)',
    },
    '& .learn-more-btn': {
      backgroundColor: 'rgba(59, 130, 246, 1)',
      color: 'white',
      transform: 'translateX(8px)',
    },
    '& .program-image': {
      transform: 'scale(1.05)',
    },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '6px',
    background: `linear-gradient(90deg, ${programGradient ? programGradient.match(/#[a-fA-F0-9]{6}/g)?.[0] || COLORS.primary : COLORS.primary}, ${programGradient ? programGradient.match(/#[a-fA-F0-9]{6}/g)?.[1] || '#8b5cf6' : '#8b5cf6'})`,
    borderRadius: '32px 32px 0 0',
  },
}));

const ProgramImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
  borderRadius: '24px 24px 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#94a3b8',
  fontSize: '4rem',
  transition: 'transform 0.4s ease',
  overflow: 'hidden',
  position: 'relative',
  '&::after': {
    content: '"Image"',
    fontSize: '1.2rem',
    fontWeight: 500,
    color: '#64748b',
  },
}));

const IconContainer = styled(Box)(({ theme, iconColor }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80px',
  height: '80px',
  margin: '0 auto 24px',
  background: `
    radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)
  `,
  borderRadius: '50%',
  color: iconColor,
  boxShadow: `0 12px 40px ${iconColor}20`,
  animation: `${float} 3s ease-in-out infinite`,
  position: 'relative',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-3px',
    left: '-3px',
    right: '-3px',
    bottom: '-3px',
    background: `linear-gradient(135deg, ${iconColor}15, ${iconColor}05)`,
    borderRadius: '50%',
    zIndex: -1,
  },
}));

const ProgramTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 700,
  color: '#1f2937',
  marginBottom: '8px',
  fontFamily: FONT_FAMILY.secondary,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.6rem',
  },
}));

const ProgramSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#6b7280',
  marginBottom: '20px',
  fontFamily: FONT_FAMILY.primary,
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
}));

const ProgramDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#4b5563',
  lineHeight: 1.7,
  marginBottom: '24px',
  fontFamily: FONT_FAMILY.primary,
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
}));

const FeaturesList = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '12px',
  marginBottom: '32px',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const FeatureItem = styled(Typography)(({ theme }) => ({
  fontSize: '0.95rem',
  color: '#6b7280',
  fontFamily: FONT_FAMILY.primary,
  display: 'flex',
  alignItems: 'center',
  '&::before': {
    content: '"✓"',
    color: '#10b981',
    fontWeight: 'bold',
    marginRight: '8px',
    fontSize: '1.1rem',
  },
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(59, 130, 246, 0.1)',
  color: COLORS.primary,
  borderRadius: '16px',
  padding: '12px 24px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  fontFamily: FONT_FAMILY.primary,
  border: '2px solid rgba(59, 130, 246, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: COLORS.style_2,
    color: 'white',
  },
}));

const ProgramsSection = () => {
  const [hoverCard, setHoverCard] = useState(null);

  const handleDonate = () => {
    navigate('/donate')
  }
  return (
    <ProgramsContainer>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <SectionHeader data-aos='fade-down'>
          <HeaderTitle variant="h2" data-aos='fade-down'>
            Our Core Programs
          </HeaderTitle>
          <HeaderSubtitle data-aos='fade-down'>
            Comprehensive initiatives designed to address every aspect of a child's wellbeing,
            from education and nutrition to protection and emotional support.
          </HeaderSubtitle>
        </SectionHeader>

        <div data-aos='fade-right' style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px'
        }}>
          {causes.map((cause, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoverCard(index)}
              onMouseLeave={() => setHoverCard(null)}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: hoverCard === index ? '0 20px 60px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoverCard === index ? 'translateY(-12px)' : 'translateY(0)',
                cursor: 'pointer'
              }}
            >


              <div style={{ padding: '28px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2c3e50', marginBottom: '12px' }}>
                  {cause.title}
                </h3>
                <p style={{ color: '#5a6c7d', lineHeight: '1.6', marginBottom: '24px', fontSize: '0.95rem' }}>
                  {cause.description}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '20px',
                  borderTop: '1px solid #e8ecf1'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#5a6c7d', fontSize: '0.9rem' }}>
                    <CheckmarkCircle24Regular style={{ color: cause.color }} />
                    <span>{cause.supporters} supporters</span>
                  </div>
                  <button onClick={handleDonate} style={{
                    padding: '10px 24px',
                    background: hoverCard === index ? `linear-gradient(135deg, ${cause.color}, ${cause.color}dd)` : '#f5f7fa',
                    color: hoverCard === index ? 'white' : cause.color,
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    Donate Now
                    <ArrowRight24Regular style={{ fontSize: '16px' }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </ProgramsContainer>
  );
};

export default ProgramsSection;