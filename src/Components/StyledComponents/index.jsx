import {
  AppBar,
  Button,
  Box,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { FONT_FAMILY } from '../../Config/font';
import { COLORS } from '../../Config/color';


export const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  backgroundColor:scrolled ? '#fff' : 'transparent',
  boxShadow: scrolled ? theme.shadows[2] : 'none',
  transition: 'all 0.3s ease-in-out',
  color: scrolled ? theme.palette.text.primary : 'white',
  zIndex: theme.zIndex.appBar + 1,
  backdropFilter:  scrolled ? 'blur(10px)' : 'transparent',
}));

export const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export const LogoIcon = styled(Box)(({ theme }) => ({
  width: 72,
  height: 72,
  // backgroundColor: COLORS.style,
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
}));

export const HeroSection = styled(Box)(() => ({
  minHeight: "90vh",
  width: "100%",               
  backgroundImage: 'url("/Images/child_1.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",    
  alignItems: "center",         
  position: "relative",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.7)",
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
}));


export const NavButton = styled(Button)(({ scrolled }) => ({
  color: scrolled ? '#333' : 'white', 
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 600,
  padding: '8px 16px',
  fontFamily: FONT_FAMILY.primary,
  position: 'relative',
  zIndex: 3, 
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

export const UserButton = styled(Button)(({ variant }) => ({
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 500,
  padding: '5px 18px',
  borderRadius: '30px',
  position: 'relative',
  zIndex: 3, 
  ...(variant === 'customer' && {
    color: '#000',
    fontWeight: 600,
    border: `1px solid ${COLORS.style}`,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: COLORS.style,
      color: 'white',
    },
  }),
  ...(variant === 'Donate' && {
    backgroundColor: COLORS.style,
    color: 'white',
    '&:hover': {
      backgroundColor: COLORS.secondary,
    },
  }),
}));