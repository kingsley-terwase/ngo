import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
    Heart24Filled,
    Gift24Filled,
    Star24Filled,
} from "@fluentui/react-icons";
import { COLORS } from "../../Config/color";
import { FONT_FAMILY } from "../../Config/font";
import { useNavigate } from "react-router-dom";



const DonateCard = styled(Card)(({ theme }) => ({
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    textAlign: "center",
    padding: theme.spacing(3),
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
    },
}));


const DonateSection = () => {

    
    const navigate = useNavigate();

    const handleDonate = () => {
        navigate('/donate')
    }
    const donationTiers = [
        {
            icon: <Heart24Filled style={{ fontSize: "40px", color: COLORS.primary }} />,
            amount: "$10",
            description: "Provide school supplies for a child",
        },
        {
            icon: <Gift24Filled style={{ fontSize: "40px", color: "#f59e0b" }} />,
            amount: "$25",
            description: "Fund nutritious meals for a week",
        },
        {
            icon: <Star24Filled style={{ fontSize: "40px", color: "#10b981" }} />,
            amount: "$50",
            description: "Support healthcare and counseling",
        },
    ];

    return (
        <Box
            sx={{
                py: 10,
            }}
        >
            <Container maxWidth="md"

            >
                <Box textAlign="center" data-aos='flip-up' mb={6} sx={{
                    backgroundColor: COLORS.primary,
                    py: 4,
                    borderRadius:3
                }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            fontFamily: FONT_FAMILY.primary,
                            mb: 2,
                            color: '#fff',
                        }}
                    >
                        Make a Difference Today
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: "600px",
                            mx: "auto",
                            fontSize: "1.1rem",
                            color: '#fff',
                            fontFamily: FONT_FAMILY.primary,
                        }}
                    >
                        Your donation helps us provide education, healthcare, and a safe
                        environment for children in need. Every contribution brings hope
                        closer.
                    </Typography>
                    <Box textAlign="center" mt={3}>
                        <Button
                            onClick={handleDonate}
                            variant="contained"
                            size="large"
                            sx={{
                                borderRadius: "30px",
                                px: 6,
                                py: 1.5,
                                fontWeight: 600,
                                color: '#000',
                                fontFamily: FONT_FAMILY.primary,                                
                                backgroundColor: COLORS.style_1,
                                "&:hover": {
                                    backgroundColor:'#FBCC55',
                                    color: "#000",
                                },
                            }}
                        >
                            Donate Now
                        </Button>
                    </Box>
                </Box>


            </Container>
        </Box>
    );
};

export default DonateSection;
