import React from 'react';
import { AppBar, Toolbar, Box, IconButton, Typography, Container } from '@mui/material';
import {
  People24Regular as FacebookIcon,
  BinRecycleFilled as TwitterIcon,
  Camera24Regular as InstagramIcon,
  Briefcase24Regular as LinkedInIcon,
  VideoRegular as YouTubeIcon,
  Mail24Regular as MailIcon,
  People24Regular,
  Camera24Regular,
  BriefcaseRegular,
  MailRegular,
  BriefcaseFilled
} from '@fluentui/react-icons';
import { Briefcase12Filled, VideoRegular } from '@fluentui/react-icons/fonts';



const TopNav = () => {

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar + 1,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Left side - Logo/Brand */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 600,
              color: 'white',
              letterSpacing: '0.5px'
            }}
          >
            ThinkSharp Foundation
          </Typography>

          {/* Right side - Social Icons and Contact */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              <IconButton
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
                aria-label="Facebook"
              >
                <People24Regular />
              </IconButton>

              <IconButton
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
                aria-label="Twitter"
              >
                <Briefcase12Filled />
              </IconButton>

              <IconButton
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
                aria-label="Instagram"
              >
                <Camera24Regular />
              </IconButton>

              <IconButton
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
                aria-label="LinkedIn"
              >
                <BriefcaseRegular />
              </IconButton>

              <IconButton
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
                aria-label="YouTube"
              >
                <VideoRegular />
              </IconButton>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: '1px',
                height: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                mx: 1,
              }}
            />

            {/* Contact Info */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <MailRegular style={{ color: 'white', fontSize: '20px' }} />
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                info@thinksharpfoundation.org
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNav;