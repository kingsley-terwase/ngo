import React, { useState } from 'react';

const stories = [
    {
        name: "Sarah Johnson",
        location: "New York, USA",
        years: "5 Years",
        story: "Joining this community changed my life. I found not just colleagues, but lifelong friends who supported me through every challenge.",
        tag: "Career Growth",
        color: "#FF6B6B",
        image: "SJ"
    },
    {
        name: "Michael Chen",
        location: "Singapore",
        years: "3 Years",
        story: "The mentorship program here is exceptional. I've grown from an intern to a team lead, and I'm grateful for every opportunity.",
        tag: "Leadership",
        color: "#4ECDC4",
        image: "MC"
    },
    {
        name: "Emma Williams",
        location: "London, UK",
        years: "7 Years",
        story: "The work-life balance and company culture make this the best place I've ever worked. I can truly be myself here.",
        tag: "Work Culture",
        color: "#95E1D3",
        image: "EW"
    },
    {
        name: "David Martinez",
        location: "Barcelona, Spain",
        years: "4 Years",
        story: "From day one, I felt valued and heard. The innovative projects and collaborative environment keep me inspired every day.",
        tag: "Innovation",
        color: "#F38181",
        image: "DM"
    },
    {
        name: "Priya Patel",
        location: "Mumbai, India",
        years: "6 Years",
        story: "The commitment to diversity and inclusion is real here. I've been able to grow professionally while staying true to my values.",
        tag: "Diversity",
        color: "#AA96DA",
        image: "PP"
    },
    {
        name: "Alex Thompson",
        location: "Toronto, Canada",
        years: "2 Years",
        story: "The innovation and creativity encouraged here is unmatched. Every day brings new challenges and opportunities to learn.",
        tag: "Creativity",
        color: "#FCBAD3",
        image: "AT"
    }
];

export default function StorySlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesToShow = 3;
    const maxIndex = Math.max(0, stories.length - slidesToShow);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const goToSlide = (index) => {
        setCurrentIndex(Math.min(index, maxIndex));
    };

    const totalDots = maxIndex + 1;

    return (
        <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '40px 20px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
            <h2 style={{
                textAlign: 'center',
                fontSize: '2.5rem',
                fontWeight: 700,
                marginBottom: '40px',
                color: '#2C3E50'
            }}>
                Success Stories
            </h2>

            <div style={{ position: 'relative', padding: '0 60px' }}>
                {/* Slider Container */}
                <div style={{
                    overflow: 'hidden',
                    borderRadius: '16px'
                }}>
                    <div style={{
                        display: 'flex',
                        transition: 'transform 0.5s ease-in-out',
                        transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`
                    }}>
                        {stories.map((story, index) => (
                            <div key={index} style={{
                                minWidth: `${100 / slidesToShow}%`,
                                padding: '0 10px',
                                boxSizing: 'border-box'
                            }}>
                                <div style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    backgroundColor: 'white',
                                    height: '100%'
                                }}>
                                    {/* Header Section */}
                                    <div style={{
                                        background: `linear-gradient(135deg, ${story.color} 0%, ${story.color}DD 100%)`,
                                        padding: '24px',
                                        color: 'white'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: 'white',
                                                color: story.color,
                                                fontSize: '1.5rem',
                                                fontWeight: 700,
                                                marginRight: '16px',
                                                border: '3px solid rgba(255,255,255,0.3)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                {story.image}
                                            </div>
                                            <div style={{ minWidth: 0 }}>
                                                <h3 style={{
                                                    fontSize: '1.25rem',
                                                    fontWeight: 700,
                                                    margin: '0 0 4px 0',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    {story.name}
                                                </h3>
                                                <p style={{
                                                    margin: 0,
                                                    opacity: 0.9,
                                                    fontSize: '0.85rem'
                                                }}>
                                                    {story.location}
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '4px 10px',
                                            backgroundColor: 'rgba(255,255,255,0.2)',
                                            color: 'white',
                                            fontWeight: 600,
                                            border: '1px solid rgba(255,255,255,0.3)',
                                            borderRadius: '16px',
                                            fontSize: '0.8rem'
                                        }}>
                                            {story.years}
                                        </span>
                                    </div>

                                    {/* Content Section */}
                                    <div style={{ padding: '24px' }}>
                                        <p style={{
                                            color: '#37474F',
                                            lineHeight: 1.7,
                                            marginBottom: '20px',
                                            fontSize: '0.95rem',
                                            margin: '0 0 20px 0'
                                        }}>
                                            "{story.story}"
                                        </p>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '6px 14px',
                                            backgroundColor: `${story.color}15`,
                                            color: story.color,
                                            fontWeight: 600,
                                            border: `1px solid ${story.color}30`,
                                            borderRadius: '16px',
                                            fontSize: '0.85rem'
                                        }}>
                                            {story.tag}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    style={{
                        position: 'absolute',
                        left: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        border: '2px solid #e0e0e0',
                        cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: currentIndex === 0 ? '#ccc' : '#333',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        transition: 'all 0.2s ease',
                        zIndex: 10,
                        opacity: currentIndex === 0 ? 0.5 : 1
                    }}
                    onMouseEnter={(e) => {
                        if (currentIndex !== 0) {
                            e.currentTarget.style.backgroundColor = '#f5f5f5';
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                    }}
                >
                    ‹
                </button>

                <button
                    onClick={nextSlide}
                    disabled={currentIndex === maxIndex}
                    style={{
                        position: 'absolute',
                        right: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        border: '2px solid #e0e0e0',
                        cursor: currentIndex === maxIndex ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: currentIndex === maxIndex ? '#ccc' : '#333',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        transition: 'all 0.2s ease',
                        zIndex: 10,
                        opacity: currentIndex === maxIndex ? 0.5 : 1
                    }}
                    onMouseEnter={(e) => {
                        if (currentIndex !== maxIndex) {
                            e.currentTarget.style.backgroundColor = '#f5f5f5';
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                    }}
                >
                    ›
                </button>

                {/* Dots Navigation */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '12px',
                    marginTop: '32px'
                }}>
                    {Array.from({ length: totalDots }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            style={{
                                width: currentIndex === index ? '32px' : '12px',
                                height: '12px',
                                borderRadius: '6px',
                                border: 'none',
                                backgroundColor: currentIndex === index ? '#2C3E50' : '#D1D5DB',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                padding: 0
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}