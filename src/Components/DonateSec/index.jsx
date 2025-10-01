import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { People20Regular } from '@fluentui/react-icons';
import { COLORS } from '../../Config/color';
import { FONT_FAMILY } from '../../Config/font';
import { useNavigate } from 'react-router-dom';

export default function DonateSec() {
    const navigate = useNavigate();

    const handleDonate = () => {
        navigate('/donate')
    }
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url("https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.95) 100%)',
                    },
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box
                data-aos='fade-right'
                    sx={{
                        maxWidth: '550px',
                        ml: 'auto',
                        mr: { xs: 2, md: 8 },
                        py: 6,
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            color: 'white',
                            fontWeight: 600,
                            mb: 2,
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            fontFamily: FONT_FAMILY.primary,
                        }}
                    >
                        Help Us Impact the{' '}
                        <Box
                            component="span"
                            sx={{
                                color: COLORS.style_1,
                                fontFamily: FONT_FAMILY.primary,
                                display: 'block',
                            }}
                        >
                            Lives of Youth
                        </Box>{' '}
                        and the Poor
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'rgba(255,255,255,0.9)',
                            mb: 4,
                            fontFamily: FONT_FAMILY.primary,
                            lineHeight: 1.7,
                            fontSize: '0.99rem',

                        }}
                    >
                        Your support can help us teach youth how to take action in the fight
                        against hunger and poverty. They learn the joy of helping others through
                        meeting physical needs and forming friendships with people who are
                        trapped in poverty.
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        onClick={handleDonate}
                        sx={{
                            backgroundColor: COLORS.style,
                            color: 'white',
                            px: 4,
                            py: 1,
                            borderRadius: '50px',
                            textTransform: 'none',
                            fontSize: '1rem',
                            fontWeight: 600,
                            '&:hover': {
                                backgroundColor:'#000',
                            },
                        }}
                    >
                        Donate Now
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}