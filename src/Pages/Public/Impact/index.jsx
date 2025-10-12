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
import { TargetRegular } from '@fluentui/react-icons';
import { FONT_FAMILY } from '../../../Config/font';
import DonateSection from '../../../Components/DonateSection';
import Slider from 'react-slick';
import StorySlider from '../../../Components/StorySlider';
import { galleryImages } from './data';


const ImpactPage = () => {
    const [visible, setVisible] = useState(false);
    const [countUp, setCountUp] = useState({ children: 0, schools: 0, funds: 0 });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = React.useState(null);


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

    const programs = [
        {
            title: 'Global Education Initiative',
            icon: <School />,
            progress: 85,
            color: '#1E88E5',
            description: 'Transforming futures through accessible, quality education for every child',
            metrics: [
                { label: 'Students Enrolled', value: '15,000+' },
                { label: 'Graduation Rate', value: '95%' },
                { label: 'Teachers Trained', value: '500+' }
            ]
        },
        {
            title: 'Healthcare Access Program',
            icon: <LocalHospital />,
            progress: 92,
            color: '#E91E63',
            description: 'Delivering comprehensive healthcare services to underserved communities',
            metrics: [
                { label: 'Medical Consultations', value: '25,000+' },
                { label: 'Clinics Operating', value: '12' },
                { label: 'Immunization Rate', value: '98%' }
            ]
        },
        {
            title: 'Nutrition & Wellness',
            icon: <Restaurant />,
            progress: 78,
            color: '#00897B',
            description: 'Combating malnutrition and fostering healthy development',
            metrics: [
                { label: 'Daily Meals Served', value: '30,000' },
                { label: 'Malnutrition Reduced', value: '80%' },
                { label: 'Community Gardens', value: '100+' }
            ]
        }
    ];


    const milestones = [
        { icon: <EmojiEvents />, title: 'International Recognition', desc: 'UN Sustainable Development Award 2024' },
        { icon: <Groups />, title: 'Community Partnerships', desc: '500+ local organizations' },
        { icon: <AccountBalance />, title: 'Financial Transparency', desc: 'Top-rated by charity evaluators' },
        { icon: <VolunteerActivism />, title: 'Volunteer Network', desc: '10,000+ active volunteers' }
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
            <Container maxWidth="lg" sx={{ mt: -6, position: 'relative', zIndex: 2 }}>
                <Grid data-aos="zoom-out" container spacing={3} sx={{ mb: 10 }}>
                    {stats.map((stat, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Grow in={visible} timeout={800 + index * 200}>
                                <Card sx={{
                                    p: 4,
                                    background: 'white',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    borderRadius: 2,
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        transform: 'translateY(-12px)',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                                        border: `1px solid ${stat.color}`,
                                    }
                                }}>
                                    <Box sx={{
                                        background: stat.gradient,
                                        borderRadius: 2,
                                        p: 2,
                                        display: 'inline-flex',
                                        mb: 3
                                    }}>
                                        {React.cloneElement(stat.icon, { sx: { fontSize: 32, color: 'white' } })}
                                    </Box>
                                    <Typography variant="h3" sx={{
                                        fontWeight: 800,
                                        color: stat.color,
                                        mb: 1,
                                        fontSize: '2.5rem',
                                        fontFamily: FONT_FAMILY.primary,
                                    }}>
                                        {stat.number}
                                    </Typography>
                                    <Typography variant="body1" sx={{
                                        color: '#546E7A',
                                        fontWeight: 500,
                                        fontSize: '0.95rem',
                                        fontFamily: FONT_FAMILY.primary,

                                    }}>
                                        {stat.label}
                                    </Typography>
                                </Card>
                            </Grow>
                        </Grid>
                    ))}
                </Grid>

                <Box data-aos="fade-down" sx={{ mb: 12 }}>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" sx={{
                            fontFamily: FONT_FAMILY.primary,
                            fontSize: '0.9rem', letterSpacing: 2, color: '#1A237E', fontWeight: 600
                        }}>
                            OUR PROGRAMS
                        </Typography>
                        <Typography variant="h3" sx={{
                            fontFamily: FONT_FAMILY.primary,
                            fontWeight: 700, color: '#1A237E', mt: 1, mb: 2
                        }}>
                            Comprehensive Impact Initiatives
                        </Typography>
                        <Typography variant="h6" sx={{
                            fontFamily: FONT_FAMILY.primary,
                            color: '#546E7A', maxWidth: '700px', mx: 'auto', fontWeight: 400
                        }}>
                            Strategically designed programs that address critical needs and create measurable, sustainable outcomes
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {programs.map((program, index) => (
                            <Grid size={{ xs: 12, md: 4 }} key={index}>
                                <Card sx={{
                                    height: '100%',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 16px 32px rgba(0,0,0,0.1)',
                                        transform: 'translateY(-4px)'
                                    }
                                }}>
                                    <Box sx={{
                                        background: `linear-gradient(135deg, ${program.color}15 0%, ${program.color}05 100%)`,
                                        p: 4,
                                        borderBottom: `3px solid ${program.color}`
                                    }}>
                                        <Box sx={{
                                            display: 'inline-flex',
                                            p: 2,
                                            borderRadius: 2,
                                            background: 'white',
                                            mb: 2,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                        }}>
                                            {React.cloneElement(program.icon, { sx: { fontSize: 36, color: program.color } })}
                                        </Box>
                                        <Typography variant="h5" sx={{
                                            fontFamily: FONT_FAMILY.primary,
                                            fontWeight: 700, mb: 2, color: '#1A237E'
                                        }}>
                                            {program.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{
                                            fontFamily: FONT_FAMILY.primary,
                                            color: '#546E7A', lineHeight: 1.7
                                        }}>
                                            {program.description}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ p: 4 }}>
                                        <Box sx={{ mb: 4 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                                                <Typography variant="body2" sx={{
                                                    fontFamily: FONT_FAMILY.primary,
                                                    fontWeight: 600, color: '#1A237E'
                                                }}>
                                                    Progress to Goal
                                                </Typography>
                                                <Typography variant="body2" sx={{
                                                    fontFamily: FONT_FAMILY.primary,
                                                    fontWeight: 700, color: program.color
                                                }}>
                                                    {program.progress}%
                                                </Typography>
                                            </Box>
                                            <Box sx={{ position: 'relative', height: 8, bgcolor: '#F5F5F5', borderRadius: 4, overflow: 'hidden' }}>
                                                <Box sx={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 0,
                                                    height: '100%',
                                                    width: `${program.progress}%`,
                                                    background: `linear-gradient(90deg, ${program.color} 0%, ${program.color}AA 100%)`,
                                                    transition: 'width 1s ease-in-out'
                                                }} />
                                            </Box>
                                        </Box>

                                        <Grid container spacing={2}>
                                            {program.metrics.map((metric, idx) => (
                                                <Grid size={{ xs: 12 }} key={idx}>
                                                    <Box sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        p: 2,
                                                        bgcolor: '#FAFAFA',
                                                        borderRadius: 2,
                                                        border: '1px solid #EEEEEE'
                                                    }}>
                                                        <Typography variant="body2" sx={{
                                                            fontFamily: FONT_FAMILY.primary,
                                                            color: '#546E7A', fontWeight: 500
                                                        }}>
                                                            {metric.label}
                                                        </Typography>
                                                        <Typography variant="body2" sx={{
                                                            fontFamily: FONT_FAMILY.primary,
                                                            fontWeight: 700, color: program.color
                                                        }}>
                                                            {metric.value}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box data-aos="fade-left">
                    <StorySlider />
                </Box>

                <Box data-aos="fade-right" sx={{ mb: 12 }}>
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