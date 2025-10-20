import React from "react";
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import {
    Book24Filled,
    HeartPulse24Filled,
    Drop24Filled,
    Heart24Filled,
    LearningAppFilled,
    Building24Filled,
    ArrowRight24Filled,
    Crown24Filled,
} from "@fluentui/react-icons";
import { FONT_FAMILY } from "../../Config/font";
import { COLORS } from "../../Config/color";
import { useNavigate } from "react-router-dom";

// Animation keyframes
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
  50% { transform: translateY(-10px) rotate(2deg); }
`;

// Styled components
const AboutContainer = styled(Box)(({ theme }) => ({
    padding: '120px 0',
    background: 'linear-gradient(135deg, #fef7f0 0%, #fff8f3 50%, #ffffff 100%)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
      radial-gradient(circle at 20% 20%, ${COLORS.primary}08 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, ${COLORS.primary}05 0%, transparent 50%)
    `,
        pointerEvents: 'none',
    },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    borderRadius: '32px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
    animation: `${slideInLeft} 1s ease-out`,
    '&:hover': {
        transform: 'scale(1.02)',
        transition: 'transform 0.4s ease',
    },
}));

const MainImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '32px',
}));

const SecondaryImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: '300px',
    border: '5px dotted #f93',
    objectFit: 'cover',
    borderRadius: '24px',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
}));

const BrandTag = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '24px',
    left: '24px',
    background: COLORS.primary,
    color: 'white',
    padding: '12px 24px',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: 600,
    fontFamily: FONT_FAMILY.primary,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    animation: `${float} 3s ease-in-out infinite`,
}));

const FloatingBadge = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: '-20px',
    left: '-20px',
    background: 'white',
    padding: '20px',
    borderRadius: '50%',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    animation: `${float} 3s ease-in-out infinite 1s`,
    '& svg': {
        fontSize: '40px',
        color: COLORS.primary,
    },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
    animation: `${slideInRight} 1s ease-out 0.2s both`,
    paddingLeft: '40px',
    [theme.breakpoints.down('md')]: {
        paddingLeft: '0',
        marginTop: '60px',
    },
}));

const SectionTag = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
    animation: `${fadeInUp} 0.8s ease-out 0.4s both`,
}));

const TagIcon = styled(Crown24Filled)(({ theme }) => ({
    fontSize: '28px',
    color: '#f59e0b',
}));

const TagText = styled(Typography)(({ theme }) => ({
    fontSize: '1.1rem',
    color: '#f59e0b',
    fontWeight: 600,
    fontFamily: FONT_FAMILY.primary,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
}));

const MainTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.6rem',
    fontWeight: 700,
    color: '#1f2937',
    lineHeight: 1.2,
    marginBottom: '32px',
    fontFamily: FONT_FAMILY.primary,
    animation: `${fadeInUp} 0.8s ease-out 0.6s both`,
    [theme.breakpoints.down('md')]: {
        fontSize: '2.6rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2.2rem',
    },
}));

const Description = styled(Typography)(({ theme }) => ({
    fontSize: '1.3rem',
    color: '#282b31ff',
    lineHeight: 1.7,
    marginBottom: '40px',
    fontFamily: FONT_FAMILY.primary,
    animation: `${fadeInUp} 0.8s ease-out 0.8s both`,
    [theme.breakpoints.down('md')]: {
        fontSize: '1.1rem',
    },
}));

const CharityGrid = styled(Grid)(({ theme }) => ({
    marginBottom: '48px',
}));

const CharityItem = styled(Box)(({ theme, delay }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px',
    animation: `${fadeInUp} 0.6s ease-out ${0.8 + (delay * 0.1)}s both`,
    '&:hover': {
        transform: 'translateX(8px)',
        transition: 'transform 0.3s ease',
    },
}));

const CharityIcon = styled(Box)(({ theme }) => ({
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: COLORS.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    '&::before': {
        content: '"✓"',
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold',
    },
}));

const CharityText = styled(Typography)(({ theme }) => ({
    fontSize: '1.1rem',
    color: '#374151',
    fontWeight: 500,
    fontFamily: FONT_FAMILY.primary,
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
    backgroundColor: COLORS.primary,
    color: 'white',
    padding: '10px 32px',
    fontSize: '1.1rem',
    fontWeight: 600,
    textTransform: 'none',
    borderRadius: '32px',
    fontFamily: FONT_FAMILY.primary,
    boxShadow: `0 8px 24px ${COLORS.primary}40`,
    animation: `${fadeInUp} 0.8s ease-out 1.4s both`,
    '&:hover': {
        backgroundColor: COLORS.style_2,
        transform: 'translateY(-2px)',
        boxShadow: `0 12px 32px ${COLORS.primary}50`,
    },
}));

const SecAboutUs = () => {
    const navigate = useNavigate();

    const handleAbout = () => {
        navigate('/about')
    }
    return (
        <AboutContainer>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Grid container spacing={6} data-aos='zoom-in' alignItems="start">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ position: 'relative' }}>
                            <ImageContainer>
                                <MainImage
                                    src="/Images/ngo_19.png"
                                    alt="Children studying"
                                />
                                <BrandTag>
                                    <Heart24Filled style={{ fontSize: '20px' }} />
                                    Risehand
                                </BrandTag>
                                <FloatingBadge>
                                    <Heart24Filled />
                                </FloatingBadge>
                            </ImageContainer>

                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    right: '-40px',
                                    width: '280px',
                                    zIndex: 3,
                                    animation: `${slideInRight} 1s ease-out 0.5s both`,
                                    display: { xs: 'none', md: 'block' }
                                }}
                            >
                                {/* <SecondaryImage
                                    src="/Images/ngo_6.png"
                                    alt="Happy children"
                                /> */}
                            </Box>
                        </Box>
                        <Box sx={{mt:4}}>
                            <MainTitle variant="h6">
                                THE GENESIS OF EGIHEF
                            </MainTitle>
                            <Description>
                                The NGO was born out of love and passion for humanity to wipe away tears from the faces of orphans, widows and the less-privileged ones in the society. I feel fulfilled and joyful whenever I make an impact on people positively, especially the less privileged ones and the needy. My joy overflows seeing them happy, and I get fulfilled to give them hope and beauty for their ashes. There are three things that steered up my passion for this vision:

                                <br /> (1) I was there before. I came from a humble background. I was maltreated and I said if God blessed me, no one around me would suffer what I suffered.
                                <br /> (2) My neighbor’s husband beat her up because she sold four mudus of corn to buy condiments to cook, and her husband checked the corn as usual because he does that every day whenever he comes back.

                            </Description>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <ContentContainer>
                            <Description>
                                from work to know if an inch is out of it, so he asked, “Why did you sell the corn?” and she said that she had no money to buy condiments. Her husband started beating her. As a result of this domestic abuse caused by abject poverty, she lost one hand and one leg to date because of four mudus of corn. When her children came to call me, I met her in a pool of blood, and when I saw her, I wept like a child. <br />
                                <br /> (3) A woman lost her life because she took a loan of ₦30,000 to do farm work, and to pay back later. That faithful morning she went to the farm and saw that a herd of cattle had eaten up her crops, and she asked, “Where will I get the money to pay back?” She committed suicide. She ran inside the river and drowned. Her 4-year-old and 2-year-old children were on the ground watching their only mother drown to death. I heard it and my heart was broken, and I promised myself that no woman would pass through this pain anymore.

                                I started very small, but with the support of my husband both financially and morally, we are where we are today.

                                Daddy, thank you for your heart for the poor.
                                Thanks for your encouragement even when the journey became tough — you were there for me. God bless you, Sir, and to all the staff, thank you for your support in one way or the other.
                            </Description>
                        </ContentContainer>
                    </Grid>
                </Grid>
            </Container>
        </AboutContainer>
    );
};

export default SecAboutUs;