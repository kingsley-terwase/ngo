import React, { useState, useEffect } from 'react';
import {
    Container, Box, Typography, Grid, Card, Button, Paper,
    Avatar, Chip, LinearProgress, List, ListItem, ListItemIcon,
    ListItemText, Fade, Grow,
    Modal,
    IconButton
} from '@mui/material';
import {
    People, School, Home, TrendingUp, LocalHospital, Restaurant,
    FavoriteOutlined, ArrowForward, Public, AccountBalance,
    EmojiEvents, AutoGraph, Groups,
    VolunteerActivism,
    Close,
    ZoomIn
} from '@mui/icons-material';
import {
    BookOpen24Regular,
    Food24Regular,
    Heart24Regular,
    Home24Regular,
    Sport24Regular,
    PersonRegular,
    ArrowRight24Regular,
    Target24Regular,
    CheckmarkCircle24Regular,
    TargetRegular
} from '@fluentui/react-icons';
import { FONT_FAMILY } from '../../../Config/font';
import DonateSection from '../../../Components/DonateSection';
import Slider from 'react-slick';
import StorySlider from '../../../Components/StorySlider';
import { galleryImages, programs } from './data';
import { causes } from '../Causes/data';
import { useNavigate } from 'react-router-dom';


const ImpactPage = () => {
    const [visible, setVisible] = useState(false);
    const [countUp, setCountUp] = useState({ children: 0, schools: 0, funds: 0 });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = React.useState(null);

    const navigate = useNavigate();
    const [hoverCard, setHoverCard] = useState(null);

    const getProgress = (raised, goal) => (raised / goal) * 100;

    const handleDonate = () => {
        navigate('/donate')
    }

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % stories.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    useEffect(() => {
        setVisible(true);

        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCountUp({
                children: Math.floor(50000 * progress),
                schools: Math.floor(200 * progress),
                funds: Math.floor(98 * progress)
            });

            if (step >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    const stats = [
        { number: `${countUp.children.toLocaleString()}+`, label: 'Children Empowered', icon: <People />, color: '#1E88E5', gradient: 'linear-gradient(135deg, #1E88E5 0%, #42A5F5 100%)' },
        { number: `${countUp.schools}+`, label: 'Schools & Centers', icon: <School />, color: '#E91E63', gradient: 'linear-gradient(135deg, #E91E63 0%, #F06292 100%)' },
        { number: '15', label: 'Countries Worldwide', icon: <Public />, color: '#00897B', gradient: 'linear-gradient(135deg, #00897B 0%, #26A69A 100%)' },
        { number: `${countUp.funds}%`, label: 'Direct Impact', icon: <AutoGraph />, color: '#7B1FA2', gradient: 'linear-gradient(135deg, #7B1FA2 0%, #9C27B0 100%)' }
    ];


    return (
        <Box sx={{ bgcolor: '#FAFAFA', overflowX: "hidden", width: '100%', minHeight: '100vh' }}>

            <div style={{
                position: "relative",
                backgroundImage: "url('/Images/child_1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "white",
                padding: "100px 24px 80px",
                textAlign: "center",
                overflow: "hidden",
                zIndex: 0,
            }}>
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(22,18,18,0.9) 50%, rgba(0,0,0,0.9) 100%)",
                        zIndex: 1,
                    }}
                />

                <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <TargetRegular style={{ fontSize: '40px' }} />
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '24px', lineHeight: '1.2' }}>
                        Creating Lasting Change
                    </h1>
                    <p style={{ fontSize: '1.3rem', opacity: 0.95, lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                        Empowering children and communities worldwide through sustainable programs that transform lives and build resilient futures
                    </p>
                </div>
            </div>
            <Container maxWidth="lg" sx={{ mt: 6, position: 'relative', zIndex: 2 }}>

                <Box data-aos="fade-down" sx={{ mb: 12 }}>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" sx={{
                            fontFamily: FONT_FAMILY.primary,
                            fontSize: '0.9rem', letterSpacing: 2, color: '#1A237E', fontWeight: 600
                        }}>
                            OUR IMPACT
                        </Typography>
                        <Typography variant="h3" sx={{
                            fontFamily: FONT_FAMILY.primary,
                            fontWeight: 700, color: '#1A237E', mt: 1, mb: 2
                        }}>
                            Comprehensive Impact Initiatives
                        </Typography>
                    </Box>

                    <div data-aos='fade-right' style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '32px'
                    }}>
                        {programs.map((cause, index) => (
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
                                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>

                                    <Box component='img' src={cause.image} sx={{ width: '100%', }} />
                                
                                </div>

                                <div style={{ padding: '28px' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2c3e50', marginBottom: '12px' }}>
                                        {cause.title}
                                    </h3>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        paddingTop: '20px',
                                        borderTop: '1px solid #e8ecf1'
                                    }}>
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
                </Box>
                
                <Box sx={{ mb: 12 }}>
                    <Typography variant="h4" sx={{ fontFamily: FONT_FAMILY.primary, fontWeight: 700, textAlign: 'center', mb: 6, color: '#1A237E' }}>
                        Gallery
                    </Typography>
                    <Grid container spacing={2}>
                        {galleryImages.map((image, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                                <Card
                                    onClick={() => setSelectedImage(image)}
                                    sx={{
                                        cursor: 'pointer',
                                        height: 250,
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        position: 'relative',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: 6
                                        },
                                        '&:hover .overlay': {
                                            opacity: 1
                                        }
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={image.url}
                                        alt={image.caption}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <Box
                                        className="overlay"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            bgcolor: 'rgba(0,0,0,0.5)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease'
                                        }}
                                    >
                                        <ZoomIn sx={{ color: 'white', fontSize: 48 }} />
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Modal
                        open={selectedImage !== null}
                        onClose={() => setSelectedImage(null)}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 2
                        }}
                    >
                        <Box sx={{
                            position: 'relative',
                            maxWidth: '90vw',
                            maxHeight: '90vh',
                            outline: 'none'
                        }}>
                            <IconButton
                                onClick={() => setSelectedImage(null)}
                                sx={{
                                    position: 'absolute',
                                    top: -5,
                                    right: 0,
                                    color: 'white',
                                    bgcolor: 'rgba(0,0,0,0.7)',
                                    '&:hover': {
                                        bgcolor: 'rgba(0,0,0,0.9)'
                                    }
                                }}
                            >
                                <Close />
                            </IconButton>
                            {selectedImage && (
                                <Box>
                                    <Box
                                        component="img"
                                        src={selectedImage.url}
                                        alt={selectedImage.caption}
                                        sx={{
                                            maxWidth: '100%',
                                            maxHeight: '85vh',
                                            objectFit: 'contain',
                                            borderRadius: 2,
                                            boxShadow: 24
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            mt: 2,
                                            color: 'white',
                                            textAlign: 'center',
                                            fontFamily: FONT_FAMILY.primary,
                                            bgcolor: 'rgba(0,0,0,0.7)',
                                            p: 1,
                                            borderRadius: 1
                                        }}
                                    >
                                        {selectedImage.caption}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    </Modal>
                </Box>
                <DonateSection />
            </Container>
        </Box>
    );
};

export default ImpactPage;