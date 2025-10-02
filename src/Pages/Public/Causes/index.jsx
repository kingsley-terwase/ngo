import React, { useState } from 'react';
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
import { Box } from '@mui/material';
import { causes } from './data';
import { COLORS } from '../../../Config/color';
import { useNavigate } from 'react-router-dom';

const CausesPage = () => {
    const navigate = useNavigate();
    const [hoverCard, setHoverCard] = useState(null);

    const getProgress = (raised, goal) => (raised / goal) * 100;

    const handleDonate = () => {
      navigate('/donate')
    }

    return (
        <div>

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
                        Our Causes
                    </h1>
                    <p style={{ fontSize: '1.3rem', opacity: 0.95, lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                        Every child deserves a chance to thrive. Support our initiatives that transform lives and build brighter futures.
                    </p>
                </div>
            </div>

            <div style={{ background: 'white', padding: '60px 24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: '700', color: COLORS.primary, marginBottom: '8px' }}>
                                $223K
                            </div>
                            <div style={{ color: '#5a6c7d', fontSize: '1.1rem', fontWeight: '500' }}>Total Raised</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: '700', color: COLORS.primary, marginBottom: '8px' }}>
                                1,773
                            </div>
                            <div style={{ color: '#5a6c7d', fontSize: '1.1rem', fontWeight: '500' }}>Total Supporters</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: '700', color: COLORS.primary, marginBottom: '8px' }}>
                                6
                            </div>
                            <div style={{ color: '#5a6c7d', fontSize: '1.1rem', fontWeight: '500' }}>Active Causes</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: '700', color: COLORS.primary, marginBottom: '8px' }}>
                                2,450
                            </div>
                            <div style={{ color: '#5a6c7d', fontSize: '1.1rem', fontWeight: '500' }}>Children Helped</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#2c3e50', marginBottom: '16px' }}>
                        Support Our Initiatives
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#5a6c7d', maxWidth: '700px', margin: '0 auto' }}>
                        Choose a cause that resonates with you and make a meaningful difference in children's lives
                    </p>
                </div>

                <div data-aos='fade-right' style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '32px'
                }}>
                    {causes.map((cause, index) => (
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

                               <Box component='img' src={cause.image} sx={{width: '100%',}}/>
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    width: '56px',
                                    height: '56px',
                                    background: 'white',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: cause.color,
                                    fontSize: '24px',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                                    zIndex: 2
                                }}>
                                    {cause.icon}
                                </div>
                            </div>

                            <div style={{ padding: '28px' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2c3e50', marginBottom: '12px' }}>
                                    {cause.title}
                                </h3>
                                <p style={{ color: '#5a6c7d', lineHeight: '1.6', marginBottom: '24px', fontSize: '0.95rem' }}>
                                    {cause.description}
                                </p>

                                <div style={{ marginBottom: '16px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#2c3e50' }}>
                                            ${cause.raised.toLocaleString()} raised
                                        </span>
                                        <span style={{ fontSize: '0.9rem', color: '#5a6c7d' }}>
                                            Goal: ${cause.goal.toLocaleString()}
                                        </span>
                                    </div>
                                    <div style={{
                                        width: '100%',
                                        height: '8px',
                                        background: '#e8ecf1',
                                        borderRadius: '10px',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            width: `${getProgress(cause.raised, cause.goal)}%`,
                                            height: '100%',
                                            background: `linear-gradient(90deg, ${cause.color}, ${cause.color}dd)`,
                                            borderRadius: '10px',
                                            transition: 'width 0.6s ease'
                                        }} />
                                    </div>
                                    <div style={{
                                        marginTop: '8px',
                                        fontSize: '0.85rem',
                                        color: cause.color,
                                        fontWeight: '600'
                                    }}>
                                        {Math.round(getProgress(cause.raised, cause.goal))}% Complete
                                    </div>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingTop: '20px',
                                    borderTop: '1px solid #e8ecf1'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#5a6c7d', fontSize: '0.9rem' }}>
                                        <CheckmarkCircle24Regular style={{ color: cause.color }} />
                                        <span>{cause.supporters} supporters</span>
                                    </div>
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
            </div>
            <div style={{
                background: COLORS.primary,
                padding: '80px 24px',
                textAlign: 'center',
                color: 'white'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px' }}>
                        Can't Decide? Make a General Donation
                    </h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.95, marginBottom: '32px', lineHeight: '1.6' }}>
                        Your contribution will be distributed across all our causes to help children where they need it most
                    </p>
                    <button onClick={handleDonate} style={{
                        padding: '16px 48px',
                        background: 'white',
                        color: '#667eea',
                        border: 'none',
                        borderRadius: '40px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <Heart24Regular style={{ fontSize: '20px' }} />
                        Donate to All Causes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CausesPage;