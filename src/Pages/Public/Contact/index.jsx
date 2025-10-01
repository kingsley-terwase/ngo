import React, { useState } from 'react';
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Grid,
    Paper,
    Fade,
    Grow,
    Snackbar,
    Alert,
    InputAdornment,
    IconButton,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
    Mail24Regular,
    Phone24Regular,
    Location24Regular,
    Clock24Regular,
    Send24Regular,
    CheckmarkCircle24Regular,
    Person24Regular,
    CallRegular,
} from '@fluentui/react-icons';
import { COLORS } from '../../../Config/color';
import { FONT_FAMILY } from '../../../Config/font';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [focusedField, setFocusedField] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccess(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        });
    };

    const handleCloseSnackbar = () => {
        setShowSuccess(false);
    };

    const contactInfo = [
        {
            icon: Mail24Regular,
            title: 'Email Us',
            content: 'contact@company.com',
            subContent: 'support@company.com',
            gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            bgColor: '#eff6ff',
            iconColor: '#2563eb',
        },
        {
            icon: Phone24Regular,
            title: 'Call Us',
            content: '+1 (555) 123-4567',
            subContent: '+1 (555) 987-6543',
            gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            bgColor: '#f0fdf4',
            iconColor: '#059669',
        },
        {
            icon: Location24Regular,
            title: 'Visit Us',
            content: '123 Business Street',
            subContent: 'New York, NY 10001',
            gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            bgColor: '#fff7ed',
            iconColor: '#ea580c',
        },
        {
            icon: Clock24Regular,
            title: 'Working Hours',
            content: 'Mon - Fri: 9AM - 6PM',
            subContent: 'Sat - Sun: Closed',
            gradient: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
            bgColor: '#faf5ff',
            iconColor: '#9333ea',
        },
    ];

    return (
        <Box
        >

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
                        <CallRegular style={{ fontSize: '40px' }} />
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '24px', lineHeight: '1.2' }}>
                        Contact Us
                    </h1>
                    <p style={{ fontSize: '1.3rem', opacity: 0.95, lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.                    </p>
                </div>
            </div>

            <Container maxWidth="lg" sx={{ mt: 4, position: 'relative', zIndex: 1 }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, lg: 8 }}>
                        <Grow in timeout={1000}>
                            <Card
                                elevation={8}
                                sx={{
                                    borderRadius: 4,
                                    background: 'rgba(255, 255, 255, 0.98)',
                                    backdropFilter: 'blur(20px)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                    },
                                }}
                            >
                                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                                        <Typography variant="h4" sx={{ fontFamily: FONT_FAMILY.primary, color: 'text.primary' }}>
                                            Send us a Message
                                        </Typography>
                                    </Box>

                                    <Box component="form" onSubmit={handleSubmit}>
                                        <Grid container spacing={3}>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <TextField
                                                    fullWidth
                                                    name="name"
                                                    label="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('name')}
                                                    onBlur={() => setFocusedField('')}
                                                    required
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <Person24Regular style={{ color: '#9ca3af' }} />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            bgcolor: '#f9fafb',
                                                            borderRadius: 4
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <TextField
                                                    fullWidth
                                                    name="email"
                                                    label="Email Address"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('email')}
                                                    onBlur={() => setFocusedField('')}
                                                    required
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <Mail24Regular style={{ color: '#9ca3af' }} />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            bgcolor: '#f9fafb',
                                                            borderRadius: 4
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <TextField
                                                    fullWidth
                                                    name="phone"
                                                    label="Phone Number"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('phone')}
                                                    onBlur={() => setFocusedField('')}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <Phone24Regular style={{ color: '#9ca3af' }} />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            bgcolor: '#f9fafb',
                                                            borderRadius: 4
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <TextField
                                                    fullWidth
                                                    name="subject"
                                                    label="Subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('subject')}
                                                    onBlur={() => setFocusedField('')}
                                                    required
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            bgcolor: '#f9fafb',
                                                            borderRadius: 4
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12 }}>
                                                <TextField
                                                    fullWidth
                                                    name="message"
                                                    label="Your Message"
                                                    multiline
                                                    rows={6}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('message')}
                                                    onBlur={() => setFocusedField('')}
                                                    required
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            bgcolor: '#f9fafb',
                                                            borderRadius: 4
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12 }}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    size="large"
                                                    endIcon={<Send24Regular />}
                                                    sx={{
                                                        py: 2,
                                                        fontSize: '1.125rem',
                                                        background: COLORS.primary,
                                                        boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 12px 24px rgba(102, 126, 234, 0.4)',
                                                        },
                                                        '&:active': {
                                                            transform: 'translateY(0)',
                                                        },
                                                    }}
                                                >
                                                    Send Message
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grow>
                    </Grid>

                    <Grid size={{ xs: 12, lg: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pb:3}}>
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon;
                                return (
                                    <Grow in timeout={1000 + index * 150} key={index}>
                                        <Card
                                        elevation={0}
                                            sx={{
                                                borderRadius: 4,
                                                border: '2px solid #e0d8d8ff',
                                                '&:hover': {
                                                    transform: 'translateY(-8px)',
                                                },
                                            }}
                                        >
                                            <CardContent sx={{ p: 3 }}>
                                                <Box
                                                    sx={{
                                                        width: 56,
                                                        height: 56,
                                                        borderRadius: 2,
                                                        bgcolor: info.bgColor,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        mb: 2,
                                                        transition: 'transform 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'scale(1.1) rotate(5deg)',
                                                        },
                                                    }}
                                                >
                                                    <IconComponent style={{ color: info.iconColor, fontSize: 28 }} />
                                                </Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontFamily: FONT_FAMILY.primary,
                                                        color: 'text.primary',
                                                        mb: 1.5,
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {info.title}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        fontFamily: FONT_FAMILY.primary,
                                                        color: 'text.primary',
                                                        fontWeight: 500,
                                                        mb: 0.5,
                                                    }}
                                                >
                                                    {info.content}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontFamily: FONT_FAMILY.primary,
                                                        color: 'text.secondary',
                                                    }}
                                                >
                                                    {info.subContent}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grow>
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}