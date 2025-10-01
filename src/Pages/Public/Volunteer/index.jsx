import React, { useState } from 'react';
import {
    HandRight24Regular,
    Heart24Regular,
    People24Regular,
    Calendar24Regular,
    Clock24Regular,
    CheckmarkCircle24Regular,
    PersonAdd24Regular,
    Star24Regular,
    HandRightRegular
} from '@fluentui/react-icons';
import { COLORS } from '../../../Config/color';
import { Box, Container, Grid } from '@mui/material';
import Volunteer from '../../../Components/Volunteer';
import { FONT_FAMILY } from '../../../Config/font';
import DonateSection from '../../../Components/DonateSection';

const VolunteerPage = () => {
    const [hoverCard, setHoverCard] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        opportunity: '',
        message: ''
    });

    const opportunities = [
        {
            title: 'Education Mentor',
            description: 'Help children with homework, reading, and learning new skills',
            commitment: '4 hours/week',
            volunteers: 15,
            icon: <Star24Regular />,
            color: '#667eea'
        },
        {
            title: 'Event Coordinator',
            description: 'Organize and manage activities and special events for children',
            commitment: '6 hours/week',
            volunteers: 8,
            icon: <Calendar24Regular />,
            color: '#764ba2'
        },
        {
            title: 'Creative Arts Teacher',
            description: 'Teach painting, music, dance, or crafts to inspire creativity',
            commitment: '3 hours/week',
            volunteers: 12,
            icon: <Heart24Regular />,
            color: '#f093fb'
        },
        {
            title: 'Sports Coach',
            description: 'Lead sports activities and promote physical fitness',
            commitment: '5 hours/week',
            volunteers: 10,
            icon: <People24Regular />,
            color: '#4facfe'
        }
    ];

    const benefits = [
        'Make a real difference in children\'s lives',
        'Flexible scheduling options',
        'Training and support provided',
        'Community of like-minded volunteers',
        'Volunteer certificates and recognition',
        'Professional development opportunities'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your application! We will contact you within 48 hours.');
    };

    return (
        <div style={{ fontFamily: FONT_FAMILY.primary, backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
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
                        <HandRightRegular style={{ fontSize: '40px' }} />
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '24px', lineHeight: '1.2' }}>
                        Become a Volunteer
                    </h1>
                    <p style={{ fontSize: '1.3rem', opacity: 0.95, lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                        Join our community of dedicated volunteers and help transform the lives of children in need. Every hour you give creates lasting impact.
                    </p>
                </div>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#2c3e50', marginBottom: '16px' }}>
                        Volunteer Opportunities
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#5a6c7d', maxWidth: '700px', margin: '0 auto' }}>
                        Find the perfect way to contribute your time and skills to help children thrive
                    </p>
                </div>

                <div 
                         data-aos='fade-left' style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '32px'
                }}>
                    {opportunities.map((opp, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoverCard(index)}
                            onMouseLeave={() => setHoverCard(null)}
                            style={{
                                background: 'white',
                                borderRadius: '20px',
                                padding: '32px',
                                boxShadow: hoverCard === index ? '0 20px 60px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.08)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: hoverCard === index ? 'translateY(-12px)' : 'translateY(0)',
                                cursor: 'pointer',
                                border: hoverCard === index ? `2px solid ${opp.color}` : '2px solid transparent'
                            }}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '16px',
                                background: `linear-gradient(135deg, ${opp.color}, ${opp.color}dd)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px',
                                color: 'white',
                                fontSize: '24px',
                                boxShadow: `0 8px 24px ${opp.color}40`
                            }}>
                                {opp.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#2c3e50', marginBottom: '12px' }}>
                                {opp.title}
                            </h3>
                            <p style={{ color: '#5a6c7d', lineHeight: '1.6', marginBottom: '20px', fontSize: '0.95rem' }}>
                                {opp.description}
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #e8ecf1' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#667eea', fontSize: '0.9rem', fontWeight: '500' }}>
                                    <Clock24Regular style={{ fontSize: '18px' }} />
                                    {opp.commitment}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#5a6c7d', fontSize: '0.9rem' }}>
                                    <People24Regular style={{ fontSize: '18px' }} />
                                    {opp.volunteers} volunteers
                                </div>
                            </div>
                            <button style={{
                                width: '100%',
                                marginTop: '20px',
                                padding: '12px',
                                background: hoverCard === index ? `linear-gradient(135deg, ${opp.color}, ${opp.color}dd)` : '#f5f7fa',
                                color: hoverCard === index ? 'white' : '#667eea',
                                border: 'none',
                                borderRadius: '10px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}>
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <Volunteer />
            <DonateSection />
        </div>
    );
};

export default VolunteerPage;