import React, { useState } from 'react';
import {
    Container,
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    TextField,
    Grid,
    Paper,
    Chip,
    LinearProgress,
    Avatar,
    Fade,
    Slide,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
    Heart24Regular,
    Heart24Filled,
    Star24Regular,
    HandRight24Regular,
    People24Regular,
    Shield24Regular,
    Checkmark24Regular,
    HeartRegular,
} from '@fluentui/react-icons';
import { COLORS } from '../../../Config/color';
import { FONT_FAMILY } from '../../../Config/font';


export default function DonatePage() {
    const [selectedAmount, setSelectedAmount] = useState(50);
    const [customAmount, setCustomAmount] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const [donationType, setDonationType] = useState('one-time');

    const presetAmounts = [25, 50, 100, 250];
    const goalAmount = 50000;
    const currentAmount = 32450;
    const progress = (currentAmount / goalAmount) * 100;

    const handleAmountSelect = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setSelectedAmount(null);
    };

    const impactItems = [
        { icon: <People24Regular />, text: '1,000+ lives impacted', color: '#3b82f6' },
        { icon: <HandRight24Regular />, text: 'Direct community support', color: '#8b5cf6' },
        { icon: <Shield24Regular />, text: '100% secure & transparent', color: '#10b981' },
    ];

    return (
        <Box>
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
                        <HeartRegular style={{ fontSize: '40px' }} />
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '24px', lineHeight: '1.2' }}>
                        Donate
                    </h1>
                    <p style={{ fontSize: '1.3rem', opacity: 0.95, lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                        Your generosity helps us create lasting change in communities worldwide. Every contribution matters.
                    </p>
                </div>
            </div>
            <Container maxWidth="lg">
                <Slide direction="down" in timeout={1000}>
                    <Paper
                        elevation={0}
                        sx={{
                            mt: 4,
                            p: 4,
                            mb: 4,
                            background: COLORS.primary,
                            color: 'white',
                            borderRadius: 3,
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <Typography variant="h6" sx={{ fontFamily: FONT_FAMILY.primary, fontWeight: 600 }}>
                                Campaign Progress
                            </Typography>
                            <Typography variant="h6" sx={{ fontFamily: FONT_FAMILY.primary, fontWeight: 700 }}>
                                {Math.round(progress)}%
                            </Typography>
                        </Box>
                        <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{
                                height: 10,
                                borderRadius: 5,
                                bgcolor: 'rgba(255,255,255,0.3)',
                                mb: 2,
                                '& .MuiLinearProgress-bar': {
                                    bgcolor: 'white',
                                    borderRadius: 5,
                                },
                            }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, opacity: 0.9 }}>
                                ${currentAmount.toLocaleString()} raised
                            </Typography>
                            <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, opacity: 0.9 }}>
                                ${goalAmount.toLocaleString()} goal
                            </Typography>
                        </Box>
                    </Paper>
                </Slide>

                <Grid container spacing={4} sx={{pb:5}}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Card elevation={2} sx={{ borderRadius: 3 }}>
                            <CardContent sx={{ p: 4 }}>
                                <Box sx={{ mb: 4 }}>
                                    <Typography variant="h5" gutterBottom sx={{ fontFamily: FONT_FAMILY.primary, mb: 3 }}>
                                        Choose Donation Type
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <Button
                                            fullWidth
                                            variant={donationType === 'one-time' ? 'contained' : 'outlined'}
                                            onClick={() => setDonationType('one-time')}
                                            sx={{
                                                py: 1.5,
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                            }}
                                        >
                                            One-Time
                                        </Button>
                                        <Button
                                            fullWidth
                                            variant={donationType === 'monthly' ? 'contained' : 'outlined'}
                                            onClick={() => setDonationType('monthly')}
                                            sx={{
                                                py: 1.5,
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                fontWeight: 600
                                            }}
                                        >
                                            Monthly
                                        </Button>
                                    </Box>
                                </Box>

                                <Box sx={{ mb: 4 }}>
                                    <Typography variant="h5" gutterBottom sx={{ fontFamily: FONT_FAMILY.primary, mb: 3 }}>
                                        Select Amount
                                    </Typography>
                                    <Grid container spacing={2} sx={{ mb: 3 }}>
                                        {presetAmounts.map((amount) => (
                                            <Grid size={{ xs: 6, sm: 3 }} xs={6} sm={3} key={amount}>
                                                <Button
                                                    fullWidth
                                                    variant={selectedAmount === amount ? 'contained' : 'outlined'}
                                                    onClick={() => handleAmountSelect(amount)}
                                                    sx={{
                                                        py: 1,
                                                        fontSize: '1.25rem',
                                                        fontWeight: 600,
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'translateY(-2px)',
                                                        },
                                                    }}
                                                >
                                                    ${amount}
                                                </Button>
                                            </Grid>
                                        ))}
                                    </Grid>
                                    <TextField
                                        fullWidth
                                        label="Custom Amount"
                                        placeholder="Enter custom amount"
                                        value={customAmount}
                                        onChange={handleCustomAmountChange}
                                        type="number"
                                        InputProps={{
                                            startAdornment: <Typography sx={{ mr: 1, color: 'text.secondary' }}>$</Typography>,
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                </Box>

                                <Box sx={{ mb: 4 }}>
                                    <Typography variant="h5" gutterBottom sx={{ fontFamily: FONT_FAMILY.primary, mb: 3 }}>
                                        Your Information
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="First Name"
                                                required
                                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Last Name"
                                                required
                                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                type="email"
                                                required
                                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Button
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    sx={{
                                        py: 2,
                                        fontSize: '1.125rem',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        background: COLORS.primary,
                                        fontFamily: FONT_FAMILY.primary,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            background: COLORS.style_2,
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 12px 24px rgba(102, 126, 234, 0.4)',
                                        },
                                    }}
                                >
                                    Donate ${customAmount || selectedAmount || 0}
                                </Button>

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, gap: 1 }}>
                                    <Shield24Regular style={{ fontSize: 16, color: '#10b981' }} />
                                    <Typography variant="body1" sx={{
                                        fontFamily: FONT_FAMILY.primary,
                                        color: 'text.secondary'
                                    }}>
                                        Secure payment powered by industry-leading encryption
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <Card elevation={2} sx={{ borderRadius: 3, mb: 3, bgcolor: '#fef3c7' }}>
                            <CardContent sx={{ p: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Star24Regular style={{ color: '#f59e0b', fontSize: 24, marginRight: 8 }} />
                                    <Typography variant="h6" sx={{
                                        fontFamily: FONT_FAMILY.primary,
                                        fontWeight: 600, color: '#92400e'
                                    }}>
                                        Your Impact
                                    </Typography>
                                </Box>
                                <Typography variant="body1" sx={{
                                    fontFamily: FONT_FAMILY.primary,
                                    color: '#78350f', lineHeight: 1.7
                                }}>
                                    A ${selectedAmount || customAmount || 50} donation can provide educational materials for 10 children, meals for a family of four for a week, or medical supplies for a rural clinic.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card elevation={2} sx={{ borderRadius: 3, mb: 3 }}>
                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="h6" sx={{ fontFamily: FONT_FAMILY.primary, mb: 3, fontWeight: 600 }}>
                                    Why Donate?
                                </Typography>
                                {impactItems.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 2,
                                            p: 2,
                                            borderRadius: 2,
                                            bgcolor: 'background.default',
                                            transition: 'transform 0.2s ease',
                                            '&:hover': {
                                                transform: 'translateX(4px)',
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                bgcolor: `${item.color}20`,
                                                mr: 2,
                                            }}
                                        >
                                            {React.cloneElement(item.icon, {
                                                style: {
                                                    color: item.color, fontFamily: FONT_FAMILY.primary,
                                                    fontSize: 20
                                                }
                                            })}
                                        </Box>
                                        <Typography variant="body1" sx={{ fontFamily: FONT_FAMILY.primary, fontWeight: 500 }}>
                                            {item.text}
                                        </Typography>
                                    </Box>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}