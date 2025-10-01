import React from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Container, 
  Button, 
  Card, 
  CardContent,
  TextField,
  InputAdornment,
  Stack
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import {
  PersonAdd24Filled,
  Heart24Filled,
  Clock24Filled,
  People24Filled,
  HandRight24Filled,
  Star24Filled,
  Mail24Filled,
  Person24Filled,
  Phone24Filled,
  ArrowRight24Filled,
  CheckmarkCircle24Filled
} from "@fluentui/react-icons";
import { FONT_FAMILY } from "../../Config/font";
import { COLORS } from "../../Config/color";

// Animation keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
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
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(2deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
`;

// Styled components
const VolunteerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    linear-gradient(135deg, 
      #f8fafc 0%, 
      #ffffff 25%, 
      #f1f5f9 50%, 
      #ffffff 75%, 
      #f8fafc 100%
    )
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
      radial-gradient(circle at 15% 25%, ${COLORS.primary}06 0%, transparent 50%),
      radial-gradient(circle at 85% 75%, rgba(16, 185, 129, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 50% 10%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)
    `,
    pointerEvents: 'none',
  },
}));

const FloatingElement = styled(Box)(({ theme, delay = 0, size = 60, color = COLORS.primary }) => ({
  position: 'absolute',
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${color}15, ${color}08)`,
  animation: `${float} 4s ease-in-out infinite ${delay}s, ${sparkle} 3s ease-in-out infinite ${delay + 1}s`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: color,
  fontSize: `${size * 0.4}px`,
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '80px',
  position: 'relative',
  zIndex: 2,
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3.3rem',
  fontWeight: 700,
  color: '#1f2937',
  marginBottom: '24px',
  fontFamily: FONT_FAMILY.secondary,
  background: `linear-gradient(135deg, #1f2937 0%, ${COLORS.primary} 50%, #10b981 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  animation: `${fadeInUp} 1s ease-out`,
  [theme.breakpoints.down('md')]: {
    fontSize: '3.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.6rem',
  },
}));

const HeaderSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  color: '#6b7280',
  lineHeight: 1.7,
  maxWidth: '700px',
  margin: '0 auto',
  fontFamily: FONT_FAMILY.primary,
  animation: `${fadeInUp} 1s ease-out 0.2s both`,
}));

const ContentGrid = styled(Grid)(({ theme }) => ({
  alignItems: 'stretch',
}));

const VolunteerCard = styled(Card)(({ theme, index }) => ({
  background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
  borderRadius: '24px',
  padding: '40px 32px',
  textAlign: 'center',
  border: '1px solid rgba(59, 130, 246, 0.1)',
  boxShadow: '0 8px 40px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  animation: `${fadeInUp} 0.8s ease-out ${index * 0.1}s both`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${COLORS.primary}, #10b981)`,
    borderRadius: '24px 24px 0 0',
  },
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
    '& .volunteer-icon': {
      animation: `${pulse} 1.5s ease-in-out infinite`,
    },
  },
}));

const VolunteerIcon = styled(Box)(({ theme, iconColor }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${iconColor}15, ${iconColor}08)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 24px',
  color: iconColor,
  fontSize: '40px',
  boxShadow: `0 8px 32px ${iconColor}20`,
  animation: `${float} 3s ease-in-out infinite`,
}));

const VolunteerTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.6rem',
  fontWeight: 700,
  color: '#1f2937',
  marginBottom: '16px',
  fontFamily: FONT_FAMILY.primary,
}));

const VolunteerDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#6b7280',
  lineHeight: 1.6,
  fontFamily: FONT_FAMILY.primary,
}));

const FormContainer = styled(Box)(({ theme }) => ({
  background: `
    linear-gradient(135deg, 
      rgba(255, 255, 255, 0.9) 0%, 
      rgba(249, 250, 251, 0.8) 100%
    )
  `,
  borderRadius: '32px',
  padding: '48px 40px',
  border: `2px solid #e2e2e2ff`,
  position: 'relative',
  overflow: 'hidden',
  animation: `${slideInRight} 1s ease-out 0.5s both`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '6px',
    background: `linear-gradient(90deg, ${COLORS.primary}, #10b981, #8b5cf6)`,
    borderRadius: '32px 32px 0 0',
  },
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.4rem',
  fontWeight: 700,
  color: '#1f2937',
  marginBottom: '16px',
  fontFamily: FONT_FAMILY.primary,
  textAlign: 'center',
}));

const FormSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#6b7280',
  marginBottom: '32px',
  fontFamily: FONT_FAMILY.primary,
  textAlign: 'center',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: '#ffffff',
    fontSize: '1rem',
    fontFamily: FONT_FAMILY.primary,
    '& fieldset': {
      borderColor: 'rgba(59, 130, 246, 0.2)',
      borderWidth: '2px',
    },
    '&:hover fieldset': {
      borderColor: COLORS.primary,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.primary,
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: FONT_FAMILY.primary,
    fontSize: '1rem',
    '&.Mui-focused': {
      color: COLORS.primary,
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${COLORS.primary} 0%, #1e40af 100%)`,
  color: 'white',
  padding: '11px 32px',
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '16px',
  fontFamily: FONT_FAMILY.primary,
  boxShadow: `0 8px 32px ${COLORS.primary}40`,
  width: '100%',
  '&:hover': {
    background: `linear-gradient(135deg, #1e40af 0%, ${COLORS.primary} 100%)`,
    transform: 'translateY(-2px)',
    boxShadow: `0 12px 40px ${COLORS.primary}50`,
  },
}));

const BenefitsList = styled(Box)(({ theme }) => ({
  animation: `${slideInLeft} 1s ease-out 0.3s both`,
}));

const BenefitItem = styled(Box)(({ theme, delay }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '20px',
  padding: '16px 20px',
  background: 'rgba(255, 255, 255, 0.7)',
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  animation: `${fadeInUp} 0.6s ease-out ${0.8 + (delay * 0.1)}s both`,
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.9)',
    transform: 'translateX(12px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
  },
}));

const BenefitIcon = styled(CheckmarkCircle24Filled)(({ theme }) => ({
  fontSize: '24px',
  color: '#10b981',
  flexShrink: 0,
}));

const BenefitText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#374151',
  fontWeight: 500,
  fontFamily: FONT_FAMILY.primary,
}));

const volunteerRoles = [
  {
    icon: <PersonAdd24Filled />,
    title: "Teaching & Mentoring",
    description: "Share your knowledge and guide children in their educational journey",
    color: COLORS.primary
  },
  {
    icon: <Heart24Filled />,
    title: "Healthcare Support",
    description: "Assist in medical programs and health awareness initiatives",
    color: "#ef4444"
  },
  {
    icon: <People24Filled />,
    title: "Community Outreach",
    description: "Help identify and support families in need within communities",
    color: "#10b981"
  },
  {
    icon: <HandRight24Filled />,
    title: "Event Coordination",
    description: "Organize fundraising events and awareness campaigns",
    color: "#8b5cf6"
  }
];

const benefits = [
  "Make a meaningful impact in children's lives",
  "Gain valuable experience and skills",
  "Connect with like-minded individuals",
  "Flexible volunteering schedules",
  "Recognition certificates and references",
  "Personal fulfillment and purpose"
];

const Volunteer = () => {
  return (
    <VolunteerContainer>
      <FloatingElement 
        style={{ top: '15%', left: '5%' }} 
        delay={0} 
        size={80}
        color={COLORS.primary}
      >
        <Heart24Filled />
      </FloatingElement>
      
      <FloatingElement 
        style={{ top: '25%', right: '8%' }} 
        delay={1.5} 
        size={60}
        color="#10b981"
      >
        <Star24Filled />
      </FloatingElement>
      
      <FloatingElement 
        style={{ bottom: '20%', left: '12%' }} 
        delay={2.5} 
        size={70}
        color="#8b5cf6"
      >
        <People24Filled />
      </FloatingElement>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <SectionHeader data-aos='zoom-in'>
          <HeaderTitle variant="h2">
            Become a Volunteer Today
          </HeaderTitle>
          <HeaderSubtitle>
            Join our mission to transform children's lives. Your time, skills, and compassion 
            can make a lasting difference in creating brighter futures for vulnerable children.
          </HeaderSubtitle>
        </SectionHeader>

        <Grid container spacing={3} justifyContent='center' data-aos='zoom-in' alignItems="center">
          <Grid size={{xs:12, lg:5}}>
            <BenefitsList>
              <Typography
                variant="h3"
                sx={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: '#1f2937',
                  marginBottom: '32px',
                  fontFamily: FONT_FAMILY.secondary,
                  lineHeight: 1.2,
                }}
              >
                Why Volunteer 
                <Box component="span" sx={{ color: COLORS.primary }}>
                With Us?
                </Box>
              </Typography>

              {benefits.map((benefit, index) => (
                <BenefitItem key={index} delay={index}>
                  <BenefitIcon />
                  <BenefitText>{benefit}</BenefitText>
                </BenefitItem>
              ))}
            </BenefitsList>
          </Grid>

          <Grid size={{xs:12, lg:7}}>
            <FormContainer>
              <FormTitle>Ready to Make a Difference?</FormTitle>
              <FormSubtitle>
                Fill out the form below and we'll get in touch with you about volunteer opportunities
              </FormSubtitle>

              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid size={{ xs:12, sm:6}}>
                    <StyledTextField
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person24Filled style={{ color: COLORS.primary }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs:12, sm:6}}>
                    <StyledTextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Mail24Filled style={{ color: COLORS.primary }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>

                <StyledTextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone24Filled style={{ color: COLORS.primary }} />
                      </InputAdornment>
                    ),
                  }}
                />

                <StyledTextField
                  fullWidth
                  label="Area of Interest"
                  variant="outlined"
                  select
                  SelectProps={{ native: true }}
                >
                  <option value="">Select your preferred area</option>
                  <option value="education">Teaching & Mentoring</option>
                  <option value="healthcare">Healthcare Support</option>
                  <option value="outreach">Community Outreach</option>
                  <option value="events">Event Coordination</option>
                  <option value="other">Other</option>
                </StyledTextField>

                <StyledTextField
                  fullWidth
                  label="Tell us about yourself and why you want to volunteer"
                  multiline
                  rows={4}
                  variant="outlined"
                />

                <SubmitButton 
                  endIcon={<ArrowRight24Filled />}
                  size="large"
                >
                  Submit Application
                </SubmitButton>
              </Stack>
            </FormContainer>
          </Grid>
        </Grid>
      </Container>
    </VolunteerContainer>
  );
};

export default Volunteer;