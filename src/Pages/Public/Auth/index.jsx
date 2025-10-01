import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  InputAdornment,
  IconButton,
  Divider,
  CircularProgress,
  FormHelperText,
  Fade,
  Slide,
  Paper,
  Avatar,
  Chip,
  Stack,
  Container,
  Card,
  CardContent,
  useTheme,
  alpha,
  Grid,
  Link,
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import {
  Mail24Regular,
  LockClosed24Regular,
  Person24Regular,
  Call24Regular,
  Eye24Regular,
  EyeOff24Regular,
  CheckmarkCircle24Regular,
  Home24Regular,
  ShieldLock24Regular,
  Gauge24Regular,
  Star24Regular,
  // ArrowTrendUp24Regular,
  Shield24Regular,
  CheckmarkStarburst24Regular,
  ArrowRight24Regular,
  HomeRegular,
} from "@fluentui/react-icons";
import { FONT_FAMILY } from "../../../Config/font";
import { COLORS } from "../../../Config/color";

// Animated background gradient
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AnimatedBackground = styled(Box)(() => ({
  backgroundImage: "url('/Images/est_3.png')", 
  backgroundSize: "cover",
  backgroundPosition: "center",
  animation: `${gradientShift} 10s ease infinite`,
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.8)", 
    backdropFilter: "blur(6px)", 
  },
}));


const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
  borderRadius: theme.spacing(3),
  boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.1)}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 30px 60px ${alpha(theme.palette.common.black, 0.15)}`,
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1.5),
    fontFamily: FONT_FAMILY.primary,
    backgroundColor: alpha(theme.palette.common.white, 0.8),
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.9),
      transform: 'translateY(-1px)',
      fontFamily: FONT_FAMILY.primary,
    },
    '&.Mui-focused': {
      fontFamily: FONT_FAMILY.primary,
      backgroundColor: theme.palette.common.white,
      boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.12)}`,
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: theme.spacing(1.8, 1.5),

  },
  '& .MuiInputLabel-root': {
    fontWeight: 600,
    fontSize: '1rem',
    fontFamily: FONT_FAMILY.primary,
    color: theme.palette.text.primary,
  },
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(1.5),
  fontSize: '1rem',
  fontWeight: 600,
  padding: '0.1rem 0.5rem',
  color: '#fff',
  fontFamily: FONT_FAMILY.primary,
  textTransform: 'none',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.3)}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    transform: 'translateY(-2px)',
    boxShadow: `0 12px 35px ${alpha(theme.palette.primary.main, 0.4)}`,
  },
  '&:active': {
    transform: 'translateY(0)',
  },
}));

const FeatureChip = styled(Chip)(({ theme }) => ({
  background: alpha(theme.palette.success.main, 0.1),
  color: theme.palette.success.main,
  border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
  fontWeight: 600,
  '& .MuiChip-icon': {
    color: theme.palette.success.main,
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(4),
  '& .logo-icon': {
    background: COLORS.primary,
    padding: theme.spacing(2),
    borderRadius: '50%',
    color: 'white',
    boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
    animation: 'pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
    },
    '50%': {
      boxShadow: `0 15px 40px ${alpha(theme.palette.primary.main, 0.5)}`,
    },
    '100%': {
      boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
    },
  },
}));

export default function AuthPages() {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (currentPage === "register") {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = "You must agree to the terms and conditions";
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);

    alert(currentPage === "login" ? "Login successful!" : "Registration successful!");
  };

  const LoginPage = () => (
    <Slide direction="left" in={currentPage === "login"} timeout={400}>
      <Box>
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            fontWeight="600"
            sx={{
              fontFamily: FONT_FAMILY.primary,
              color: COLORS.primary,
              mb: 1
            }}
          >
            Welcome Back
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: FONT_FAMILY.primary, }} color="text.secondary" fontWeight="400">
            Sign in to continue your real estate journey
          </Typography>
        </Box>

        <Stack spacing={3}>
          <StyledTextField
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Mail24Regular style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                </InputAdornment>
              ),
            }}
            fullWidth
          />

          <StyledTextField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockClosed24Regular style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <EyeOff24Regular /> : <Eye24Regular />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
              <Checkbox
                checked={formData.rememberMe}
                onChange={(e) => handleInputChange("rememberMe", e.target.checked)}
                sx={{ p: 1, fontFamily: FONT_FAMILY.primary, }}
              />
              <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, }} fontWeight="500">Remember me</Typography>
            </Box>
            <Link
              href="#"
              variant="body2"
              fontWeight="600"
              sx={{
                fontFamily: FONT_FAMILY.primary,
                color: theme.palette.primary.main,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              Forgot password?
            </Link>
          </Box>

          <PrimaryButton
            fullWidth
            onClick={handleSubmit}
            disabled={isLoading}
            endIcon={!isLoading && <ArrowRight24Regular />}
            sx={{ py: 2 }}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : "Sign In"}
          </PrimaryButton>

          <Box textAlign="center" pt={2}>
            <Typography variant="body1" sx={{ fontFamily: FONT_FAMILY.primary, }} color="text.secondary">
              Don't have an account?{" "}
              <Link
                component="button"
                variant="body1"
                onClick={() => setCurrentPage("register")}
                sx={{
                  fontWeight: 600,
                  fontFamily: FONT_FAMILY.primary,
                  color: COLORS.primary,
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                Create one now
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Slide>
  );

  const RegisterPage = () => (
    <Slide direction="right" in={currentPage === "register"} timeout={400}>
      <Box>
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{
              fontFamily: FONT_FAMILY.primary,
              color: COLORS.primary,
              mb: 1
            }}
          >
            Join Real Estate
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: FONT_FAMILY.primary, }} color="text.secondary" fontWeight="400">
            Create your account and start investing
          </Typography>
        </Box>
        <Stack spacing={3}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 6 }}>
              <StyledTextField
                label="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                error={!!errors.firstName}
                helperText={errors.firstName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person24Regular style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <StyledTextField
                label="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                error={!!errors.lastName}
                helperText={errors.lastName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person24Regular style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid>
          </Grid>

          <StyledTextField
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Mail24Regular style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                </InputAdornment>
              ),
            }}
            fullWidth
          />

          <StyledTextField
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            error={!!errors.phone}
            helperText={errors.phone}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Call24Regular style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                </InputAdornment>
              ),
            }}
            fullWidth
          />

          <StyledTextField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockClosed24Regular style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <EyeOff24Regular /> : <Eye24Regular />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />

          <StyledTextField
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockClosed24Regular style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                    {showConfirmPassword ? <EyeOff24Regular /> : <Eye24Regular />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />

          <Box>
            <Box display="flex" alignItems="flex-start" gap={1}>
              <Checkbox
                checked={formData.agreeToTerms}
                onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
                sx={{ p: 0.5 }}
              />
              <Typography variant="body1" sx={{fontFamily:FONT_FAMILY.primary, pt:1}} color="text.secondary" >
                I agree to the{" "}
                <Link href="#" color="primary" fontWeight="600">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" color="primary" fontWeight="600">
                  Privacy Policy
                </Link>
              </Typography>
            </Box>
            {errors.agreeToTerms && (
              <FormHelperText error sx={{ ml: 4 }}>
                {errors.agreeToTerms}
              </FormHelperText>
            )}
          </Box>

          <PrimaryButton
            fullWidth
            onClick={handleSubmit}
            disabled={isLoading}
            endIcon={!isLoading && <ArrowRight24Regular />}
            sx={{ py: 2 }}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : "Create Account"}
          </PrimaryButton>

          <Box textAlign="center" pt={2}>
            <Typography variant="body1" sx={{fontFamily: FONT_FAMILY.primary}} color="text.secondary">
              Already have an account?{" "}
              <Link
                component="button"
                variant="body2"
                onClick={() => setCurrentPage("login")}
                sx={{
                  fontWeight: 600,
                  fontFamily: FONT_FAMILY.primary,
                  color: COLORS.primary,
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                Sign in here
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Slide>
  );

  if (!mounted) {
    return null;
  }

  return (
    <AnimatedBackground minHeight="100vh" display="flex" alignItems="center">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" minHeight="100vh">
          <Grid size={{ xs: 12, md: 6 }}>
            <Fade in timeout={800}>
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <LogoContainer>
                  <Avatar className="logo-icon" sx={{ width: 80, height: 80 }}>
                    <HomeRegular style={{ fontSize: 60 }} />
                  </Avatar>
                  <Typography
                    variant="h3"
                    fontWeight="900"
                    sx={{
                      background: 'linear-gradient(135deg, #1976d2, #0f5318ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textAlign: 'center',
                      fontFamily: FONT_FAMILY.primary,
                    }}
                  >
                    Real Estate
                  </Typography>
                </LogoContainer>

                <Typography
                  variant="h4"
                  fontWeight="600"
                  sx={{ fontFamily: FONT_FAMILY.primary, }}
                  color="white"
                  mb={3}
                  textAlign="center"
                >
                  The Future of Real Estate Investment
                </Typography>

                <Typography
                  variant="h6"
                  color="rgba(255,255,255,0.8)"
                  mb={4}
                  textAlign="center"
                  sx={{ fontFamily: FONT_FAMILY.primary, }}
                  fontWeight="400"
                >
                  Join thousands of investors who trust our platform for their property investments
                </Typography>

                <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
                  <FeatureChip icon={<ShieldLock24Regular />} label="Bank-grade Security" />
                  <FeatureChip icon={<Gauge24Regular />} label="Lightning Fast" />
                </Stack>

                <Box mt={6} textAlign="center">
                  <Stack direction="row" spacing={6} justifyContent="center">
                    <Box>
                      <Typography variant="h3" sx={{ fontFamily: FONT_FAMILY.primary, }} fontWeight="900" color="white">
                        50K+
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, }} color="rgba(255,255,255,0.7)">
                        Active Investors
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h3" sx={{ fontFamily: FONT_FAMILY.primary, }} fontWeight="900" color="white">
                        $2.5B+
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, }} color="rgba(255,255,255,0.7)">
                        Properties Sold
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h3" sx={{ fontFamily: FONT_FAMILY.primary, }} fontWeight="900" color="white">
                        4.9★
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, }} color="rgba(255,255,255,0.7)">
                        User Rating
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Fade>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Fade in timeout={1000} style={{ transitionDelay: '200ms' }}>
              <Box display="flex" justifyContent="center" sx={{py:3}}>
                <GlassCard sx={{ width: '100%', maxWidth: 500 }}>
                  <CardContent sx={{ p: 4 }}>
                    {currentPage === "login" ? <LoginPage /> : <RegisterPage />}

                    <Divider sx={{ my: 4 }}>
                      <Typography variant="body2" color="text.secondary" fontWeight="600">
                        SECURED BY
                      </Typography>
                    </Divider>

                    <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
                      <FeatureChip
                        icon={<Shield24Regular />}
                        label="SSL Encryption"
                        size="small"
                      />
                      <FeatureChip
                        icon={<CheckmarkStarburst24Regular />}
                        label="GDPR Compliant"
                        size="small"
                      />
                      <FeatureChip
                        icon={<CheckmarkCircle24Regular />}
                        label="ISO 27001"
                        size="small"
                      />
                    </Stack>
                  </CardContent>
                </GlassCard>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </AnimatedBackground>
  );
}