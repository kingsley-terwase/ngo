import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    Divider,
    IconButton,
    Stack,
    Badge,
    InputAdornment
} from '@mui/material';
import {
    Search,
    BookmarkBorder,
    Share,
    TrendingUp,
    AccessTime,
    Person,
    ArrowForward,
    Email,
    LinkedIn,
    Twitter,
    YouTube,
    Instagram
} from '@mui/icons-material';
import { FONT_FAMILY } from '../../../Config/font';
import { blogPosts } from "./data"

export const BlogsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { name: 'All', count: blogPosts.length },
        { name: 'Education', count: blogPosts.filter(post => post.category === 'Education').length },
        { name: 'Healthcare', count: blogPosts.filter(post => post.category === 'Healthcare').length },
        { name: 'Nutrition', count: blogPosts.filter(post => post.category === 'Nutrition').length },
        { name: 'Volunteer', count: blogPosts.filter(post => post.category === 'Volunteer').length }
    ];

    const filteredPosts = selectedCategory === 'All'
        ? blogPosts.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : blogPosts.filter(post =>
            post.category === selectedCategory &&
            (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
        );

    const CategoryButton = ({ category, isSelected, onClick }) => (
        <Button
            variant={isSelected ? 'contained' : 'text'}
            onClick={onClick}
            sx={{
                mx: 0.5,
                mb: 1,
                px: 3,
                py: 1.5,
                borderRadius: 3,
                textTransform: 'none',
                fontWeight: isSelected ? 600 : 500,
                fontSize: '0.95rem',
                color: isSelected ? 'white' : '#64748B',
                backgroundColor: isSelected ? '#0F172A' : 'transparent',
                '&:hover': {
                    backgroundColor: isSelected ? '#1E293B' : '#F8FAFC',
                    transform: 'translateY(-1px)',
                },
                transition: 'all 0.2s ease-in-out',
                boxShadow: isSelected ? '0 4px 12px rgba(15, 23, 42, 0.15)' : 'none',
            }}
            endIcon={
                <Chip
                    label={category.count}
                    size="small"
                    sx={{
                        height: 20,
                        fontSize: '0.75rem',
                        backgroundColor: isSelected ? 'rgba(255,255,255,0.2)' : '#E2E8F0',
                        color: isSelected ? 'white' : '#64748B',
                    }}
                />
            }
        >
            {category.name}
        </Button>
    );

    return (
        <Box sx={{ backgroundColor: '#FAFBFC', minHeight: '100vh' }}>
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
                    color: 'white',
                    pt: 12,
                    pb: 8,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Box  sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: { xs: '2.5rem', md: '2.3rem', lg: '3rem' },
                                fontWeight: 700,
                                fontFamily: FONT_FAMILY.primary,
                                mb: 3,
                                letterSpacing: '-0.02em',
                                lineHeight: 1.1
                            }}
                        >
                            Insights & Stories
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: { xs: '1.1rem', md: '1.1rem' },
                                fontFamily:FONT_FAMILY.primary,
                                color: 'rgba(255,255,255,0.85)',
                                lineHeight: 1.6,
                                fontWeight: 400,
                                mb: 6
                            }}
                        >
                            Deep insights, innovative research, and impactful stories from our global initiatives
                            in education, healthcare, and community development
                        </Typography>

                        <Paper
                            sx={{
                                p: 0,
                                maxWidth: 500,
                                mx: 'auto',
                                backgroundColor: 'rgba(255,255,255,0.95)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: 4,
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Search sx={{ color: '#64748B', ml: 2, mr: 1 }} />
                                <TextField
                                    fullWidth
                                    placeholder="Search articles..."
                                    variant="standard"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    InputProps={{
                                        disableUnderline: true,
                                        sx: { fontSize: '1rem', py: 1 }
                                    }}
                                />
                            </Box>
                        </Paper>
                    </Box>
                </Container>
            </Box>

            <Container data-aos="fade-right" maxWidth="lg" sx={{ mt: -4, position: 'relative', zIndex: 2 }}>
                <Card
                    data-aos="fade-right"
                    sx={{
                        mb: 8,
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 32px 64px rgba(0,0,0,0.15)',
                        },
                        transition: 'all 0.3s ease-out'
                    }}
                >
                    <Grid container >
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box  sx={{ position: 'relative', height: { xs: 300, md: '100%' } }}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/Images/child_1.png"
                                    alt="Featured article"
                                    sx={{ objectFit: 'cover' }}
                                />
                                <Box sx={{
                                    position: 'absolute',
                                    top: 20,
                                    left: 20,
                                    display: 'flex',
                                    gap: 1
                                }}>
                                    <Chip
                                        label="Featured"
                                        sx={{
                                            backgroundColor: '#EF4444',
                                            color: 'white',
                                            fontWeight: 600,
                                            fontSize: '0.8rem'
                                        }}
                                    />
                                    <Chip
                                        icon={<TrendingUp sx={{ fontSize: 16 }} />}
                                        label="Trending"
                                        sx={{
                                            backgroundColor: 'rgba(0,0,0,0.7)',
                                            color: 'white',
                                            fontWeight: 500,
                                            fontSize: '0.8rem'
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <CardContent sx={{
                                px: { xs: 1, md: 4 },
                                mb: 3,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 700,
                                        fontFamily: FONT_FAMILY.primary,
                                        fontSize: { xs: '1.8rem', md: '2.2rem' },
                                        lineHeight: 1.2,
                                        color: '#0F172A'
                                    }}
                                >
                                    The Future of Global Child Development: A Decade of Innovation
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#64748B',
                                        lineHeight: 1.7,
                                        fontSize: '1.1rem',
                                        fontFamily: FONT_FAMILY.primary,
                                        my: 2,
                                    }}
                                >
                                    An extensive analysis of breakthrough methodologies and their transformative impact on child development outcomes across 50+ countries. Our comprehensive study reveals unprecedented insights into scalable solutions.
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
                                    <Avatar
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            border: '2px solid #E2E8F0'
                                        }}
                                        src="/Images/est_1.png"
                                    />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#0F172A' }}>
                                            Dr. Kingsley Terwase
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#64748B' }}>
                                            Chief Research Officer • March 25, 2024 • 15 min read
                                        </Typography>
                                    </Box>
                                </Box>

                                <Button
                                    variant="contained"
                                    size="medium"
                                    endIcon={<ArrowForward />}
                                    sx={{
                                        px: 4,
                                        py: 1.2,
                                        borderRadius: 2,
                                        backgroundColor: '#000',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#1E293B',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 8px 25px rgba(15, 23, 42, 0.4)'
                                        },
                                        transition: 'all 0.2s ease-out'
                                    }}
                                >
                                    Read Full Article
                                </Button>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>

                <Box data-aos="fade-down" sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontFamily: FONT_FAMILY.primary, fontWeight: 700, mb: 4, color: '#0F172A' }}>
                        Explore by Category
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                        flexWrap="wrap"
                        useFlexGap
                    >
                        {categories.map((category) => (
                            <CategoryButton
                                key={category.name}
                                category={category}
                                isSelected={selectedCategory === category.name}
                                onClick={() => setSelectedCategory(category.name)}
                            />
                        ))}
                    </Stack>
                </Box>

                <Grid container spacing={4} sx={{ mb: 8 }}>
                    {filteredPosts.map((post) => (
                        <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={post.id}>
                            <Card
                                data-aos="fade-down"
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: 3,
                                    border: '1px solid #E2E8F0',
                                    overflow: 'hidden',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                                        borderColor: '#CBD5E1'
                                    },
                                    transition: 'all 0.3s ease-out',
                                    backgroundColor: 'white'
                                }}
                            >
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        height="220"
                                        image={post.image}
                                        alt={post.title}
                                        sx={{ objectFit: 'cover' }}
                                    />
                                    <Box sx={{
                                        position: 'absolute',
                                        top: 16,
                                        right: 16,
                                        display: 'flex',
                                        gap: 1
                                    }}>
                                        {post.trending && (
                                            <Badge
                                                badgeContent={<TrendingUp sx={{ fontSize: 12 }} />}
                                                sx={{
                                                    '& .MuiBadge-badge': {
                                                        backgroundColor: '#10B981',
                                                        color: 'white',
                                                        borderRadius: '50%',
                                                        width: 24,
                                                        height: 24
                                                    }
                                                }}
                                            />
                                        )}
                                        <IconButton
                                            size="small"
                                            sx={{
                                                backgroundColor: 'rgba(255,255,255,0.9)',
                                                backdropFilter: 'blur(10px)',
                                                '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
                                            }}
                                        >
                                            <BookmarkBorder fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Box>

                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                                        <Chip
                                            label={post.category}
                                            size="small"
                                            sx={{
                                                backgroundColor: '#F1F5F9',
                                                color: '#475569',
                                                fontWeight: 500,
                                                fontSize: '0.75rem'
                                            }}
                                        />
                                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto', color: '#94A3B8' }}>
                                            <AccessTime sx={{ fontSize: 14, mr: 0.5 }} />
                                            <Typography variant="caption">
                                                {post.readTime}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 2,
                                            fontSize: '1.1rem',
                                            lineHeight: 1.4,
                                            color: '#0F172A',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {post.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#64748B',
                                            lineHeight: 1.6,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {post.excerpt}
                                    </Typography>
                                </CardContent>

                                <Divider />

                                <Box sx={{ p: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                            <Avatar
                                                sx={{ width: 32, height: 32 }}
                                                src="/api/placeholder/64/64"
                                            />
                                            <Box>
                                                <Typography variant="caption" sx={{ fontWeight: 600, color: '#0F172A', display: 'block' }}>
                                                    {post.author}
                                                </Typography>
                                                <Typography variant="caption" sx={{ color: '#64748B' }}>
                                                    {new Date(post.date).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Button
                                            size="small"
                                            endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                                            sx={{
                                                textTransform: 'none',
                                                fontWeight: 600,
                                                color: '#0F172A',
                                                '&:hover': {
                                                    backgroundColor: '#F8FAFC'
                                                }
                                            }}
                                        >
                                            Read
                                        </Button>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Paper
                    data-aos="flip-down"
                    elevation={0}
                    sx={{
                        m: 2,
                        p: { xs: 6, md: 1 },
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                        color: 'white',
                        borderRadius: 4,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                    <Box sx={{ position: 'relative', py: 2, zIndex: 1 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 700,
                                mb: 1,
                                fontFamily: FONT_FAMILY.primary,
                                fontSize: { xs: '2rem', md: '2rem' }
                            }}
                        >
                            Stay Connected
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(255,255,255,0.8)',
                                maxWidth: 600,
                                mb: 2,
                                fontFamily: FONT_FAMILY.primary,
                                mx: 'auto',
                                lineHeight: 1.6,
                                fontWeight: 400
                            }}
                        >
                            Join over 25,000 professionals who receive our weekly insights on global development,
                            research breakthroughs, and impactful initiatives.
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 2,
                            maxWidth: 500,
                            mx: 'auto',
                        }}>
                            <TextField
                                fullWidth
                                placeholder="Enter your professional email"
                                variant="filled"
                                sx={{
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                    borderRadius: 2,
                                    "& .MuiFilledInput-root": {
                                        backgroundColor: "transparent",
                                        alignItems: "center",
                                        "&:hover": {
                                            backgroundColor: "rgba(255,255,255,0.15)",
                                        },
                                        "&.Mui-focused": {
                                            backgroundColor: "rgba(255,255,255,0.15)",
                                        },
                                    },
                                    "& .MuiFilledInput-input": {
                                        color: "white",
                                        padding: "12px 0",
                                        "&::placeholder": {
                                            color: "rgba(255,255,255,0.7)",
                                            opacity: 1,
                                        },
                                    },
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="center">
                                            <Email sx={{ px: 1, color: "rgba(255,255,255,0.7)" }} />
                                        </InputAdornment>
                                    ),
                                    disableUnderline: true,
                                }}
                            />
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    px: 4,
                                    backgroundColor: 'white',
                                    color: '#0F172A',
                                    fontWeight: 700,
                                    borderRadius: 2,
                                    minWidth: 140,
                                    '&:hover': {
                                        backgroundColor: '#F8FAFC',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 8px 25px rgba(255,255,255,0.3)'
                                    },
                                    transition: 'all 0.2s ease-out'
                                }}
                            >
                                Subscribe
                            </Button>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, }}>
                            <IconButton sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'white' } }}>
                                <Box sx={{ backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', px: 2, py: 2, borderRadius: 2, }}>
                                    <LinkedIn />
                                </Box>
                            </IconButton>
                            <IconButton sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'white' } }}>
                                <Box sx={{ backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', px: 2, py: 2, borderRadius: 2, }}>
                                    <Twitter />
                                </Box>
                            </IconButton>
                            <IconButton sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'white' } }}>
                                <Box sx={{ backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', px: 2, py: 2, borderRadius: 2, }}>
                                    <YouTube />
                                </Box>
                            </IconButton>
                            <IconButton sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'white' } }}>
                                <Box sx={{ backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', px: 2, py: 2, borderRadius: 2, }}>
                                    <Instagram />
                                </Box>
                            </IconButton>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};