import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Fade,
    IconButton,
    useTheme,
    alpha
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { COLORS } from "../../Config/color";
import { FONT_FAMILY } from "../../Config/font";
import { useNavigate } from "react-router-dom";

const slides = [
    {
        title: "Give Every Child a Chance",
        description:
            "Your support helps provide education, shelter, and hope for children in need. Together, we can create brighter futures.",
    },
    {
        title: "Empowering Young Dreams",
        description:
            "From classrooms to safe spaces, we work to ensure every child has the opportunity to learn, grow, and dream without limits.",
    },
    {
        title: "Together for a Better Tomorrow",
        description:
            "When we unite for children, we invest in a world where no child is left behind — a future built on love, care, and opportunity.",
    },
];

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
  50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.4); }
`;

const HeroContainer = styled(Box)(({ theme }) => ({
    minHeight: '90vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    background: `
    linear-gradient(135deg, 
      ${alpha('#0f172a', 0.95)} 0%, 
      ${alpha('#1e293b', 0.7)} 25%, 
      ${alpha('#7c3aed', 0.1)} 50%, 
      ${alpha('#1e293b', 0.7)} 75%, 
      ${alpha('#0f172a', 0.95)} 100%
    ),
    radial-gradient(circle at 25% 25%, ${alpha('#3b82f6', 0.01)} 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, ${alpha('#8b5cf6', 0.01)} 0%, transparent 50%)
  `,
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
      radial-gradient(circle at 20% 50%, ${alpha('#3b82f6', 0.05)} 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${alpha('#8b5cf6', 0.05)} 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, ${alpha('#06b6d4', 0.05)} 0%, transparent 50%)
    `,
    },
}));

const FloatingElement = styled(Box)(({ theme, delay = 0 }) => ({
    position: 'absolute',
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${alpha('#3b82f6', 0.1)}, ${alpha('#8b5cf6', 0.05)})`,
    filter: 'blur(60px)',
    animation: `${float} 6s ease-in-out infinite`,
    animationDelay: `${delay}s`,
}));

const GradientText = styled(Typography)(({ theme }) => ({
    background: `linear-gradient(135deg, 
    ${theme.palette.common.white} 0%, 
    ${alpha('#e0e7ff', 0.9)} 25%, 
    ${alpha('#c7d2fe', 0.8)} 50%, 
    ${alpha('#a5b4fc', 0.9)} 75%, 
    ${theme.palette.common.white} 100%
  )`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    textShadow: '0 0 40px rgba(255, 255, 255, 0.1)',
    fontWeight: 400,
    letterSpacing: '-0.02em',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto',
}));

const TitleContainer = styled(Box)(({ theme }) => ({
    minHeight: '20px', // Fixed minimum height for titles
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '1rem', // Fixed spacing after title
    [theme.breakpoints.down('md')]: {
        minHeight: '260px',
        marginBottom: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
        minHeight: '140px',
        marginBottom: '1rem',
    },
}));

const DescriptionContainer = styled(Box)(({ theme }) => ({
    minHeight: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '3rem', 
    [theme.breakpoints.down('md')]: {
        minHeight: '10px',
        marginBottom: '2.5rem',
    },
    [theme.breakpoints.down('sm')]: {
        minHeight: '100px',
        marginBottom: '2rem',
    },
}));

export const ProfessionalButton = styled(Button)(({ theme }) => ({
    background: COLORS.primary,
    borderRadius: '50px',
    color: '#fff',
    padding: '16px 48px',
    fontSize: '1.1rem',
    fontWeight: 600,
    textTransform: 'none',
    letterSpacing: '0.5px',
    boxShadow: `
    0 10px 30px ${alpha('#3b82f6', 0.3)},
    0 0 0 1px ${alpha('#ffffff', 0.1)} inset
  `,
    position: 'relative',
    overflow: 'hidden',
    animation: `${glow} 3s ease-in-out infinite`,
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: `linear-gradient(90deg, transparent, ${alpha('#ffffff', 0.2)}, transparent)`,
        transition: 'left 0.6s',
    },
    '&:hover': {
        transform: 'translateY(-2px) scale(1.02)',
        boxShadow: `
      0 20px 40px ${alpha('#3b82f6', 0.4)},
      0 0 0 1px ${alpha('#ffffff', 0.2)} inset
    `,
        '&::before': {
            left: '100%',
        },
    },
    '&:active': {
        transform: 'translateY(0) scale(0.98)',
    },
}));

const IndicatorDot = styled(Box)(({ theme, active }) => ({
    width: 12,
    height: 12,
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    background: active
        ? `linear-gradient(135deg, #3b82f6, #8b5cf6)`
        : alpha('#ffffff', 0.3),
    transform: active ? 'scale(1.3)' : 'scale(1)',
    boxShadow: active
        ? `0 0 20px ${alpha('#3b82f6', 0.6)}`
        : 'none',
    animation: active ? `${pulse} 2s ease-in-out infinite` : 'none',
    '&:hover': {
        background: active
            ? `linear-gradient(135deg, #3b82f6, #8b5cf6)`
            : alpha('#ffffff', 0.5),
        transform: 'scale(1.2)',
    },
}));

export function Hero() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % slides.length);
                setIsAnimating(false);
            }, 800);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const handleIndicatorClick = (newIndex) => {
        if (newIndex !== index) {
            setIsAnimating(true);
            setTimeout(() => {
                setIndex(newIndex);
                setIsAnimating(false);
            }, 400);
        }
    };

    const handleJoin = () => {
        navigate('/volunteer')
    }

    return (
        <HeroContainer>
            <FloatingElement
                sx={{
                    width: 300,
                    height: 300,
                    top: '20%',
                    left: '10%'
                }}
                delay={0}
            />
            <FloatingElement
                sx={{
                    width: 400,
                    height: 400,
                    bottom: '20%',
                    right: '10%'
                }}
                delay={2}
            />
            <FloatingElement
                sx={{
                    width: 200,
                    height: 200,
                    top: '60%',
                    left: '70%'
                }}
                delay={4}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <ContentContainer>
                    <TitleContainer>
                        <Fade
                            in={!isAnimating}
                            timeout={1000}
                            style={{ transitionDelay: isAnimating ? '0ms' : '200ms' }}
                        >
                            <GradientText
                                variant="h4"
                                sx={{
                                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '4.5rem' },
                                    lineHeight: 1.1,
                                    fontFamily: FONT_FAMILY.secondary,
                                    transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
                                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                {slides[index].title}
                            </GradientText>
                        </Fade>
                    </TitleContainer>

                    <DescriptionContainer>
                        <Fade
                            in={!isAnimating}
                            timeout={1200}
                            style={{ transitionDelay: isAnimating ? '0ms' : '400ms' }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: alpha('#ffffff', 0.85),
                                    fontSize: { xs: '1.1rem', md: '1.4rem' },
                                    lineHeight: 1.6,
                                    fontWeight: 400,
                                    fontFamily: FONT_FAMILY.primary,
                                    letterSpacing: '0.01em',
                                    transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
                                    filter: isAnimating ? 'blur(4px)' : 'blur(0px)',
                                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                {slides[index].description}
                            </Typography>
                        </Fade>
                    </DescriptionContainer>

                    <Box>
                        <ProfessionalButton
                           onClick={handleJoin}
                            size="large"
                            disableRipple
                        >
                            Join Us
                        </ProfessionalButton>
                    </Box>
                </ContentContainer>
            </Container>
        </HeroContainer>
    );
}