import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Button,
  Container,
} from "@mui/material";
import {
  LinkedIn,
  Twitter,
  YouTube,
  Instagram
} from '@mui/icons-material';
import { FONT_FAMILY } from "../../Config/font";
import { COLORS } from "../../Config/color";
import { Call20Regular, CallRegular, Location20Regular, LocationRegular, Mail20Regular, MailRegular } from "@fluentui/react-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box component="footer" sx={{ bgcolor: COLORS.secondary, pt: 8, pb: 4, position: "relative" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  bgcolor: COLORS.primary,
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  mr: 1,
                }}
              >
                <Box component='img' src='/Logo/Logo.png' sx={{ width: '70px', }} />
              </Box>
              <Typography variant="h6" sx={{ textTransform: 'uppercase', fontFamily: FONT_FAMILY.primary, color: '#fff', fontWeight: 600 }}>
                EGIHOF
              </Typography>
            </Box>

            <Typography
              variant="body1"
              color="#fff"
              sx={{
                textTransform: 'capitalize',
                fontFamily: FONT_FAMILY.primary,
                fontWeight: 400,
                letterSpacing: '0.07em',
              }}
            >
              This organization, formerly known as Jesus the Shepherd of the Hopeless Empowerment Foundation, was registered with the Corporate Affairs Commission on 9th of March, 2017 with its registered office at no 31, Anointed Arena close, Kuje Abuja.
            </Typography>

            <Box sx={{ display: 'flex', mt: 1, }}>
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
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, fontFamily: FONT_FAMILY.primary, color: '#fff' }} gutterBottom>
              Useful Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Button sx={{ color: '#fff', textTransform: 'capitalize', fontFamily: FONT_FAMILY.primary, justifyContent: "flex-start" }}>
                About Us
              </Button>
              <Button sx={{ color: '#fff', textTransform: 'capitalize', fontFamily: FONT_FAMILY.primary, justifyContent: "flex-start" }}>
                Contact
              </Button>
              <Button sx={{ color: '#fff', textTransform: 'capitalize', fontFamily: FONT_FAMILY.primary, justifyContent: "flex-start" }}>
                Volunteers
              </Button>
              <Button sx={{ color: '#fff', textTransform: 'capitalize', fontFamily: FONT_FAMILY.primary, justifyContent: "flex-start" }}>
                Donate
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ mb: 4, fontFamily: FONT_FAMILY.primary, color: '#fff', }} gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, mb: 3, color: '#fff', }} >
              <Location20Regular /> 31 Anointed Arena Sauka Extension Kuje Abuja, FCT
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, mb: 3, color: '#fff', }} >
              <Location20Regular />CORPORATE ADDRESS
              31 Anointed Arena Sauka Extension
              Kuje Abuja, FCT
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, mb: 3, color: '#fff', }} >
              <Call20Regular /> +234:
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, mb: 3, color: '#fff', }} >
              <Mail20Regular /> egihof@gmail.com
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, pt: 3, textAlign: "center" }}>
          <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, color: '#fff', }} >
            Copyright ©2025 All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
