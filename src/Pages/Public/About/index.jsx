import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
    Button,
    Paper,
    Avatar,
    Chip,
} from '@mui/material';

import {
    People,
    Favorite,
    TrendingUp,
    Groups,
    Psychology,
    Security,
    LocationOn,
    Email,
    Phone,
    LinkedIn,
    Public,
    EmojiEvents,
    Verified,
    Gavel,
    Balance,
    Diversity3,
    Visibility
} from '@mui/icons-material';
import { FONT_FAMILY } from '../../../Config/font';
import { COLORS } from '../../../Config/color';
import { PeopleRegular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';
import SecAboutUs from '../../../Components/SecAboutUs';

export function AboutUsPage() {
    const navigate = useNavigate();
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleJoin = () => {
        navigate('/volunteer')
    }

    return (
        <Box sx={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafb 100%)', width: '100%', overflowX: "hidden" }}>

            <Box
                sx={{
                    position: "relative",
                    backgroundImage: "url('/Images/child_1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    color: "white",
                    py: { xs: 8, md: 12 },
                    px: 2,
                    textAlign: "center",
                    overflowX: "hidden",
                    zIndex: 0,
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(22,18,18,0.9) 50%, rgba(0,0,0,0.9) 100%)",
                        zIndex: 1,
                    }}
                />

                <Box sx={{ position: "relative", zIndex: 1, maxWidth: "900px", mx: "auto" }}>
                    <Box
                        sx={{
                            width: 80,
                            height: 80,
                            background: "rgba(255,255,255,0.2)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mx: "auto",
                            mb: 3,
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <PeopleRegular style={{ fontSize: 40 }} />
                    </Box>
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: { xs: "2rem", md: "3.5rem" },
                            fontWeight: 700,
                            mb: 3,
                            lineHeight: 1.2,
                        }}
                    >
                        About Us
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "1rem", md: "1.3rem" },
                            opacity: 0.95,
                            lineHeight: 1.6,
                            maxWidth: "700px",
                            mx: "auto",
                        }}
                    >
                        Join our community of dedicated volunteers and help transform the lives of
                        children in need. Every hour you give creates lasting impact.
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="lg" sx={{ mt: -6, mb: 12, position: 'relative', zIndex: 2 }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 5,
                                borderRadius: 3,
                                background: 'white',
                                border: '1px solid #e0e0e0',
                                transition: 'all 0.3s',
                                '&:hover': {
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                                    transform: 'translateY(-4px)'
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Box sx={{
                                    background: 'linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)',
                                    p: 1.5,
                                    borderRadius: 2,
                                    display: 'flex',
                                    mr: 2
                                }}>
                                    <Favorite sx={{ fontSize: 32, color: 'white' }} />
                                </Box>
                                <Typography variant="h4" fontWeight="700" sx={{ fontFamily: FONT_FAMILY.primary }}>
                                    Our Mission
                                </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ fontSize: '1.1rem', fontFamily: FONT_FAMILY.primary, lineHeight: 1.9, color: '#444' }}>
                                To Transform And Improve The Lives Of
                                Deprived Individuals
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 5,
                                borderRadius: 3,
                                background: 'white',
                                border: '1px solid #e0e0e0',
                                transition: 'all 0.3s',
                                '&:hover': {
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                                    transform: 'translateY(-4px)'
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Box sx={{
                                    background: 'linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)',
                                    p: 1.5,
                                    borderRadius: 2,
                                    display: 'flex',
                                    mr: 2
                                }}>
                                    <TrendingUp sx={{ fontSize: 32, color: 'white' }} />
                                </Box>
                                <Typography variant="h4" fontWeight="700" sx={{ fontFamily: FONT_FAMILY.primary }}>
                                    Our Vision
                                </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ fontFamily: FONT_FAMILY.primary, fontSize: '1.1rem', lineHeight: 1.9, color: '#444' }}>
                                To give hope to the less privileged &
                                vulnerable persons in the society
                                Restore Broken Homes and uplift humanity
                                to God’s Purpose.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            
            <SecAboutUs />    
            <Box data-aos='fade-right' sx={{ background: '#f8fafb', py: 10 }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h3" sx={{ fontFamily: FONT_FAMILY.secondary, fontWeight: 700, mb: 2 }}>
                            Our Core Values
                        </Typography>
                        <Typography variant="body1" sx={{ fontFamily: FONT_FAMILY.primary, color: '#666', fontSize: '1.1rem', maxWidth: '700px', mx: 'auto' }}>
                            Accountability , Transparency, Integrity
                            Equality And Diversity.
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        {[
                            {
                                icon: <Verified />,
                                title: 'Accountability',
                                desc: 'We take full responsibility for our actions, ensuring every decision upholds trust and purpose.',
                                color: '#2E7D32',
                            },
                            {
                                icon: <Visibility />,
                                title: 'Transparency',
                                desc: 'We maintain openness in all our operations, fostering trust through clear and honest communication.',
                                color: '#1976D2',
                            },
                            {
                                icon: <Gavel />,
                                title: 'Integrity',
                                desc: 'We act with honesty and strong moral principles, even when no one is watching.',
                                color: '#F57C00',
                            },
                            {
                                icon: <Balance />,
                                title: 'Equality',
                                desc: 'We believe everyone deserves equal opportunity, fairness, and respect in all we do.',
                                color: '#7B1FA2',
                            },
                            {
                                icon: <Diversity3 />,
                                title: 'Diversity',
                                desc: 'We embrace differences, recognizing that diverse perspectives strengthen our community and impact.',
                                color: '#009688',
                            },
                        ].map((value, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{mb:8}} key={index}>
                                <Card
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        textAlign: 'center',
                                        p: 4,
                                        borderRadius: 3,
                                        border: `3px solid ${hoveredCard === index ? value.color : '#e0e0e0'}`,
                                        background: 'white',
                                        transition: 'all 0.3s',
                                        transform: hoveredCard === index ? 'translateY(-8px)' : 'none',
                                        boxShadow: hoveredCard === index ? '0 12px 30px rgba(0,0,0,0.12)' : 'none'
                                    }}
                                >
                                    <Box sx={{
                                        color: value.color,
                                        mb: 2,
                                        background: `${value.color}15`,
                                        borderRadius: '50%',
                                        width: 80,
                                        height: 80,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        transition: 'all 0.3s',
                                        transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)'
                                    }}>
                                        {React.cloneElement(value.icon, { sx: { fontSize: 40 } })}
                                    </Box>
                                    <Typography variant="h6" fontWeight="700" gutterBottom sx={{ fontFamily: FONT_FAMILY.primary, mb: 1.5 }}>
                                        {value.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: FONT_FAMILY.primary, lineHeight: 1.7 }}>
                                        {value.desc}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Container data-aos='fade-left' maxWidth="lg" sx={{ py: 10 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h3" sx={{ fontFamily: FONT_FAMILY.secondary, fontWeight: 700, mb: 2 }}>
                        Our Leadership Team
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: FONT_FAMILY.primary, color: '#666', fontSize: '1.1rem', maxWidth: '700px', mx: 'auto' }}>
                        Experienced professionals committed to making a meaningful difference
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    {[
                        { name: 'Ann Judith Chinonso-Ajah', role: 'Director', image: '/Images/ngo_19.png' },
                        { name: 'Benedict John Chinonso', role: 'Administrative Manager', image: '/Illus/admin_1.png' },
                        { name: 'Chizoma Izama', role: 'Project Manager', image: '/Illus/admin_2.png' },
                        { name: 'Arinze Okenwa John', role: 'Information Officer ICT', image: '/Illus/admin_3.png', },
                        { name: 'Dike Theresa Onyemaechi', role: 'Project Coordinator Health Assistant', image: '/Illus/admin_4.png', },
                        { name: 'Augusta Humphrey Oboh', role: 'Accounts Officer', image: '/Illus/admin_5.png' },
                        { name: 'Felicia Livinus', role: 'Project Coordinator(Livelihood)', image: '/Illus/admin_6.png' },
                        { name: 'Mary Awoniyi', role: 'Project Coordinator(Health)', image: '/Illus/admin_7.png' },
                        { name: 'Patience Samuel', role: 'Admin Assistant', image: '/Illus/admin_08.png' },
                        { name: 'Chinenye Okafor', role: 'Project Coordinator(Training)', image: '/Images/ngo_13.png' },
                        { name: 'Irene Isioma Okafor', role: 'Project Coordinator(Education)', image: '/Images/ngo_14.png' },
                    ].map((member, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Card
                                elevation={0}
                                sx={{
                                    textAlign: 'center',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    border: '1px solid #e0e0e0',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                                        transform: 'translateY(-8px)'
                                    }
                                }}
                            >
                                <Box sx={{ position: 'relative', pt: 4, background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)' }}>
                                    <Avatar
                                        src={member.image}
                                        sx={{
                                            width: 140,
                                            height: 140,
                                            mx: 'auto',
                                            mb: 2,
                                            border: '4px solid white',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ pb: 3 }}>
                                    <Typography variant="h6" sx={{ fontFamily: FONT_FAMILY.primary }} fontWeight="700" gutterBottom>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontFamily: FONT_FAMILY.primary }} color="primary" fontWeight="600" gutterBottom>
                                        {member.role}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: FONT_FAMILY.primary, display: 'block', mb: 2 }}>
                                        {member.credentials}
                                    </Typography>
                                    {/* <Button
                                        size="small"
                                        startIcon={<LinkedIn />}
                                        sx={{
                                            textTransform: 'none',
                                            color: '#0077B5',
                                            '&:hover': { background: '#0077B515' }
                                        }}
                                    >
                                        Connect
                                    </Button> */}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* <Box data-aos='fade-down' sx={{ background: COLORS.primary, py: 8 }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h4" sx={{ fontFamily: FONT_FAMILY.primary, color: 'white', fontWeight: 700, mb: 1 }}>
                            Recognized for Excellence
                        </Typography>
                        <Typography variant="body1" sx={{ fontFamily: FONT_FAMILY.primary, color: 'rgba(255,255,255,0.9)' }}>
                            Trusted by leading organizations and independent evaluators worldwide
                        </Typography>
                    </Box>
                    <Grid container spacing={3} justifyContent="center">
                        {[
                            { icon: <EmojiEvents />, title: '4-Star Charity Navigator', subtitle: 'Top-rated for accountability' },
                            { icon: <Verified />, title: 'GuideStar Platinum Seal', subtitle: 'Highest transparency level' },
                            { icon: <Public />, title: 'UN Consultative Status', subtitle: 'Official partner organization' }
                        ].map((cert, index) => (
                            <Grid size={{ xs: 12, md: 4, }} key={index}>
                                <Box sx={{
                                    textAlign: 'center',
                                    color: 'white',
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(10px)',
                                    p: 3,
                                    borderRadius: 2,
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}>
                                    {React.cloneElement(cert.icon, { sx: { fontSize: 48, mb: 2 } })}
                                    <Typography variant="h6" sx={{ fontFamily: FONT_FAMILY.primary }} fontWeight="700" gutterBottom>
                                        {cert.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, opacity: 0.9 }}>
                                        {cert.subtitle}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box> */}

            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Paper
                    data-aos='flip-down'
                    elevation={0}
                    sx={{
                        py: 2,
                        borderRadius: 4,
                        background: 'linear-gradient(135deg, #f8fafb 0%, #ffffff 100%)',
                        border: '1px solid #e0e0e0'
                    }}
                >
                    <Typography variant="h4" textAlign="center" sx={{ fontFamily: FONT_FAMILY.secondary, fontWeight: 700, mb: 3 }}>
                        Get in Touch
                    </Typography>
                    <Grid container spacing={4}>
                        {[
                            { icon: <LocationOn />, title: 'Global Headquarters', content: 'New York, NY, United States', color: '#1976D2' },
                            { icon: <Email />, title: 'Email Us', content: 'contact@hopedreams.org', color: '#2E7D32' },
                            { icon: <Phone />, title: 'Call Us', content: '+1 (800) HOPE-123', color: '#F57C00' }
                        ].map((contact, index) => (
                            <Grid size={{ xs: 12, md: 4 }} key={index}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Box sx={{
                                        background: `${contact.color}15`,
                                        borderRadius: '50%',
                                        width: 80,
                                        height: 80,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 1
                                    }}>
                                        {React.cloneElement(contact.icon, { sx: { fontSize: 40, color: contact.color } })}
                                    </Box>
                                    <Typography variant="h6" fontWeight="700" gutterBottom>
                                        {contact.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {contact.content}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ textAlign: 'center', my: 2 }}>
                        <Button
                            onClick={handleJoin}
                            variant="contained"
                            size="small"
                            sx={{
                                background: COLORS.primary,
                                fontFamily: FONT_FAMILY.primary,
                                borderRadius: 12,
                                px: 3,
                                py: 1,
                                textTransform: 'none',
                                // fontSize: '1.1rem',
                                fontWeight: 600,
                                boxShadow: '0 4px 12px rgba(46, 125, 50, 0.3)',
                                '&:hover': {
                                    background: COLORS.style_2,
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            Join Our Mission
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}