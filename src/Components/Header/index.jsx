import React, { useState, useEffect } from 'react';
import {
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    MenuItem,
    useTheme,
    useMediaQuery,
    IconButton,
    Menu,
} from '@mui/material';
import {
    HandOpenHeart32Filled,
    MoreHorizontalFilled,
} from '@fluentui/react-icons';
import { HeroSection, LogoContainer, LogoIcon, NavButton, StyledAppBar, UserButton } from '../StyledComponents';
import { Hero } from '../HeroSection';
import { COLORS } from '../../Config/color';
import { FONT_FAMILY } from '../../Config/font';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuOutlined } from '@mui/icons-material';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Navigation handler with scroll to top
    const handleNavigation = (path) => {
        navigate(path);
        // Small delay to ensure navigation completes before scrolling
        setTimeout(() => {
            scrollToTop();
        }, 100);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top whenever route changes
    useEffect(() => {
        scrollToTop();
    }, [location.pathname]);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleDonate = () => {
        handleNavigation('/donate');
    };

    const handleContact = () => {
        handleNavigation('/contact');
    };

    const handleVolunteer = () => {
        handleNavigation('/volunteer');
    };

    const handleCauses = () => {
        handleNavigation('/causes');
    };

    const handleAbout = () => {
        handleNavigation('/about');
    };

    // const handleBlog = () => {
    //     handleNavigation('/blog');
    // };

    const handleImpact = () => {
        handleNavigation('/impact');
    };

    const handleHome = () => {
        handleNavigation('/');
    };

    return (
        <Box>
            <StyledAppBar position="fixed" elevation={0} scrolled={scrolled}>
                <Container maxWidth="lg">
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <LogoContainer onClick={handleHome}>
                            <LogoIcon>
                                <Box component='img' src="/Logo/Logo.png" sx={{ width: '100%', height: 'auto' }} />
                            </LogoIcon>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 700,
                                    fontFamily: FONT_FAMILY.primary,
                                    textTransform: 'uppercase',
                                    letterSpacing: 2,
                                    color: scrolled ? COLORS.style : '#fff',
                                    transition: 'color 0.3s ease',
                                    zIndex: theme.zIndex.appBar + 1,
                                }}
                            >
                                EGIHOF
                            </Typography>
                        </LogoContainer>

                        {!isMobile && (
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <NavButton onClick={handleAbout} scrolled={scrolled}>About us</NavButton>
                                <NavButton scrolled={scrolled} onClick={handleVolunteer}>Volunteer</NavButton>
                                <NavButton scrolled={scrolled} onClick={handleCauses}>
                                    Causes
                                </NavButton>
                                <NavButton onClick={handleImpact} scrolled={scrolled}>
                                    Impact
                                </NavButton>
                                {/* <NavButton scrolled={scrolled} onClick={handleBlog}>
                                    Blogs
                                </NavButton> */}
                                <NavButton scrolled={scrolled} onClick={handleContact}>Contact</NavButton>
                            </Box>
                        )}

                        <Box sx={{
                            display: 'flex', alignItems: 'center',
                            zIndex: 3, gap: 1
                        }}>
                            {!isMobile && (
                                <>
                                    <UserButton onClick={handleDonate} variant="Donate">
                                        <HandOpenHeart32Filled /> Donate Now
                                    </UserButton>
                                </>
                            )}

                            {isMobile && (
                                <IconButton
                                    onClick={handleMenuOpen}
                                    sx={{ color: scrolled ? '#333' : 'white' }}
                                >
                                    <MenuOutlined />
                                </IconButton>
                            )}
                        </Box>

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            PaperProps={{
                                sx: {
                                    mt: 1,
                                    width: "200px",
                                    maxHeight: "90vh",
                                    overflow: "hidden",
                                    borderRadius: 2,
                                },
                            }}
                        >
                            <MenuItem onClick={() => { handleAbout(); handleMenuClose(); }}>
                                About us
                            </MenuItem>
                            <MenuItem onClick={() => { handleVolunteer(); handleMenuClose(); }}>
                                Volunteer
                            </MenuItem>
                            <MenuItem onClick={() => { handleCauses(); handleMenuClose(); }}>
                                Causes
                            </MenuItem>
                            <MenuItem onClick={() => { handleImpact(); handleMenuClose(); }}>
                                Impact
                            </MenuItem>
                            {/* <MenuItem onClick={() => { handleBlog(); handleMenuClose(); }}>
                                Blogs
                            </MenuItem> */}
                            <MenuItem onClick={() => { handleContact(); handleMenuClose(); }}>
                                Contact
                            </MenuItem>
                            <MenuItem onClick={() => { handleDonate(); handleMenuClose(); }}>
                                Donate Now
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </Container>
            </StyledAppBar>
            
            {location.pathname === '/' && (
                <HeroSection>
                    <Hero />
                </HeroSection>
            )}
        </Box>
    );
};

export default Header;