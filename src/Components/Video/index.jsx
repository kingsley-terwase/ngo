import React, { useState } from "react";
import { Box, Typography, Modal, IconButton, Grid, Container } from "@mui/material";
import { PlayCircle24Filled, PlayCircleFilled } from "@fluentui/react-icons";
import { FONT_FAMILY } from "../../Config/font";

const VideoBanner = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const RippleButton = ({ onClick }) => {
    return (
      <Box sx={{
        position: 'relative',
        mt: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(1)',
            opacity: 0.7,
          },
          '100%': {
            transform: 'scale(3.5)',
            opacity: 0,
          },
        },
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          width: '50px',   // Must match the button's width
          height: '50px',  // Must match the button's height
          borderRadius: '50%',
          border: '3px solid rgba(255, 255, 255, 0.7)',
          // Apply the animation infinitely
          animation: 'ripple 2s infinite ease-out',
          // Prevent the ripple from blocking mouse clicks on the button
          pointerEvents: 'none',
        },
        '&::after': {
          animationDelay: '1s',
        },
      }}>
        <IconButton
          onClick={onClick}
          aria-label="play action"
          sx={{
            backgroundColor: "#fff",
            width: 100,
            height: 100,
            "&:hover": { backgroundColor: "#f0f0f0", transform: 'scale(1.05)' },
            position: 'relative',
            zIndex: 1,
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          <PlayCircleFilled style={{ fontSize: 60, color: "#121212" }} />
        </IconButton>
      </Box>
    );
  }
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 350, md: 500 },
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Tutorial"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            color: "#fff",
            p: { xs: 3, md: 6 },
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 8, lg: 8, }} >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "500", fontFamily: FONT_FAMILY.primary, mb: 2, color: "lightgray" }}
                >
                  Video Tutorial
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", fontFamily: FONT_FAMILY.primary, lineHeight: 1.2, mb: 2 }}
                >
                  How To Submit Your <br /> Property Request
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: FONT_FAMILY.primary, maxWidth: 500, mb: 3 }}>
                  Curabitur non nulla sit amet nisl tempus convallis lectus. Nulla
                  porttitor accumsan tincidunt.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4, lg: 4 }} >
                <Box sx={{ mt: 4 }}>
                  <RippleButton onClick={handleOpen} />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* Modal for Video */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#000",
            boxShadow: 24,
            borderRadius: 2,
            overflow: "hidden",
            width: { xs: "90%", md: "70%" },
            height: { xs: "50%", md: "70%" },
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Video Tutorial"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </>
  );
};

export default VideoBanner;
