import React, { useState } from "react";
import {
    Box,
    Typography,
    Tabs,
    Tab,
    TextField,
    Button,
    Avatar,
    Card,
    CardContent,
    Stack,
    Chip,
    IconButton,
    MenuItem,
    Select,
    Switch,
    FormControlLabel,
    Divider,
    Paper,
    Grid,
    Fade,
    Zoom,
} from "@mui/material";

import {
    Person24Regular as UserIcon,
    Mail24Regular as MailIcon,
    Call24Regular as PhoneIcon,
    Location24Regular as MapPinIcon,
    Camera24Regular as CameraIcon,
    LockClosed24Regular as LockIcon,
    Eye24Regular as EyeIcon,
    EyeOff24Regular as EyeOffIcon,
    Alert24Regular as BellIcon,
    Shield24Regular as ShieldIcon,
    CreditCardClockRegular as CreditCardIcon,
    Save24Regular as SaveIcon,
    Edit24Regular as EditIcon,
    Building24Regular as BuildingIcon,
    Document24Regular as DocumentIcon,
} from "@fluentui/react-icons";

import { COLORS } from "../../../Config/color";

const ProfilePage = () => {

    const [activeTab, setActiveTab] = useState("personal");
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState("Company Admin");
    const [notifications, setNotifications] = useState({
        email: true,
        sms: false,
        push: true,
        marketing: false
    });

    const [profileData, setProfileData] = useState({
        firstName: "Sarah",
        lastName: "Anderson",
        email: "sarah.anderson@realestate.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main Street, New York, NY 10001",
        bio: "Experienced real estate professional with over 8 years in luxury properties.",
        company: "Elite Properties NYC",
        license: "RE123456789",
    });

    const handleInputChange = (field, value) => {
        setProfileData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleNotificationChange = (type) => {
        setNotifications(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    const tabs = [
        { id: "personal", label: "Account", icon: <UserIcon /> },
        { id: "security", label: "Security", icon: <LockIcon /> },
        { id: "notifications", label: "Notifications", icon: <BellIcon /> },
        { id: "privacy", label: "Privacy", icon: <ShieldIcon /> },
        { id: "billing", label: "Billing", icon: <CreditCardIcon /> },
    ];

    const CustomTab = (props) => (
        <Tab
            {...props}
            sx={{
                textTransform: "none",
                color: "#64748b",
                fontWeight: 600,
                borderRadius: 3,
                mx: 0.5,
                minHeight: 48,
                fontSize: "14px",
                "&.Mui-selected": {
                    background: COLORS.primary,
                    color: "#fff",
                    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
                },
                "&:hover": {
                    bgcolor: "rgba(102, 126, 234, 0.08)",
                    color: "#000",
                },
                transition: "all 0.3s ease",
            }}
        />
    );

    const StyledTextField = (props) => (
        <TextField
            {...props}
            fullWidth
            variant="outlined"
            sx={{
                "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f8fafc",
                    borderRadius: 2,
                    "& fieldset": {
                        borderColor: "#e2e8f0",
                        borderWidth: 2,
                    },
                    "&:hover fieldset": {
                        borderColor: "#cbd5e1",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#667eea",
                    },
                },
                "& .MuiInputLabel-root": {
                    color: "#475569",
                    fontWeight: 500,
                    "&.Mui-focused": {
                        color: "#667eea",
                    },
                },
                "& .MuiOutlinedInput-input": {
                    color: "#1e293b",
                    fontWeight: 500,
                },
            }}
        />
    );

    const renderPersonalInfo = () => (
        <Fade in timeout={600}>
            <Card
                elevation={0}
                sx={{
                    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    borderRadius: 4,
                    border: "1px solid #e2e8f0",
                    overflow: "visible"
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 3,
                            mb: 4,
                            background: COLORS.primary,
                            borderRadius: 3,
                            color: "white",
                        }}
                    >
                        <Stack direction="row" alignItems="center" spacing={3}>
                            <Box sx={{ position: "relative" }}>
                                <Avatar
                                    sx={{
                                        bgcolor: "rgba(255,255,255,0.2)",
                                        width: 100,
                                        height: 100,
                                        fontSize: "32px",
                                        fontWeight: 700,
                                        border: "4px solid rgba(255,255,255,0.2)"
                                    }}
                                >
                                    SA
                                </Avatar>
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        bottom: -5,
                                        right: -5,
                                        bgcolor: "#ffffff",
                                        color: "#667eea",
                                        width: 32,
                                        height: 32,
                                        boxShadow: 2,
                                        "&:hover": { bgcolor: "#f8fafc" }
                                    }}
                                >
                                    <CameraIcon style={{ fontSize: 16 }} />
                                </IconButton>
                            </Box>

                            <Stack spacing={2} flex={1}>
                                <Typography variant="h4" fontWeight={700} color="white">
                                    {profileData.firstName} {profileData.lastName}
                                </Typography>

                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Chip
                                        label={role}
                                        sx={{
                                            bgcolor: "rgba(255,255,255,0.2)",
                                            color: "white",
                                            fontWeight: 600,
                                            backdropFilter: "blur(10px)"
                                        }}
                                    />
                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <Button
                                        startIcon={<CameraIcon />}
                                        variant="contained"
                                        sx={{
                                            bgcolor: "rgba(255,255,255,0.2)",
                                            color: "white",
                                            borderRadius: 2,
                                            backdropFilter: "blur(10px)",
                                            "&:hover": { bgcolor: "rgba(255,255,255,0.3)" }
                                        }}
                                    >
                                        Upload Photo
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Paper>

                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <StyledTextField
                                label="First Name"
                                value={profileData.firstName}
                                onChange={(e) => handleInputChange("firstName", e.target.value)}
                                InputProps={{
                                    startAdornment: <UserIcon style={{ marginRight: 12, color: "#64748b" }} />,
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <StyledTextField
                                label="Last Name"
                                value={profileData.lastName}
                                onChange={(e) => handleInputChange("lastName", e.target.value)}
                                InputProps={{
                                    startAdornment: <UserIcon style={{ marginRight: 12, color: "#64748b" }} />,
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <StyledTextField
                                label="Email Address"
                                type="email"
                                value={profileData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                InputProps={{
                                    startAdornment: <MailIcon style={{ marginRight: 12, color: "#64748b" }} />,
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <StyledTextField
                                label="Phone Number"
                                value={profileData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                InputProps={{
                                    startAdornment: <PhoneIcon style={{ marginRight: 12, color: "#64748b" }} />,
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <StyledTextField
                                label="Address"
                                value={profileData.address}
                                onChange={(e) => handleInputChange("address", e.target.value)}
                                InputProps={{
                                    startAdornment: <MapPinIcon style={{ marginRight: 12, color: "#64748b" }} />,
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <StyledTextField
                                label="Company"
                                value={profileData.company}
                                onChange={(e) => handleInputChange("company", e.target.value)}
                                InputProps={{
                                    startAdornment: <BuildingIcon style={{ marginRight: 12, color: "#64748b" }} />,
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <StyledTextField
                                label="License Number"
                                value={profileData.license}
                                onChange={(e) => handleInputChange("license", e.target.value)}
                                InputProps={{
                                    startAdornment: <DocumentIcon style={{ marginRight: 12, color: "#64748b" }} />,
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <StyledTextField
                                label="Professional Bio"
                                multiline
                                rows={4}
                                value={profileData.bio}
                                onChange={(e) => handleInputChange("bio", e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Fade>
    );

    const renderSecurity = () => (
        <Fade in timeout={600}>
            <Card
                elevation={0}
                sx={{
                    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    borderRadius: 4,
                    border: "1px solid #e2e8f0"
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Stack spacing={4}>
                        <Box>
                            <Typography variant="h5" fontWeight={700} color="#1e293b" mb={1}>
                                Security Settings
                            </Typography>
                            <Typography color="#64748b">
                                Manage your account security and password settings
                            </Typography>
                        </Box>

                        <Divider />

                        <Stack spacing={3}>
                            <StyledTextField
                                type={showPassword ? "text" : "password"}
                                label="Current Password"
                                InputProps={{
                                    startAdornment: <LockIcon style={{ marginRight: 12, color: "#64748b" }} />,
                                    endAdornment: (
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            sx={{ color: "#64748b" }}
                                        >
                                            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                        </IconButton>
                                    ),
                                }}
                            />

                            <StyledTextField
                                type="password"
                                label="New Password"
                                InputProps={{
                                    startAdornment: <LockIcon style={{ marginRight: 12, color: "#64748b" }} />,
                                }}
                            />

                            <StyledTextField
                                type="password"
                                label="Confirm New Password"
                                InputProps={{
                                    startAdornment: <LockIcon style={{ marginRight: 12, color: "#64748b" }} />,
                                }}
                            />
                        </Stack>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                bgcolor: "#f1f5f9",
                                borderRadius: 2,
                                border: "1px solid #e2e8f0"
                            }}
                        >
                            <Typography variant="h6" fontWeight={600} color="#1e293b" mb={1}>
                                Two-Factor Authentication
                            </Typography>
                            <Typography color="#64748b" mb={2}>
                                Add an extra layer of security to your account
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                                    borderRadius: 2,
                                    textTransform: "none",
                                    fontWeight: 600,
                                }}
                            >
                                Enable 2FA
                            </Button>
                        </Paper>
                    </Stack>
                </CardContent>
            </Card>
        </Fade>
    );

    const renderNotifications = () => (
        <Fade in timeout={600}>
            <Card
                elevation={0}
                sx={{
                    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    borderRadius: 4,
                    border: "1px solid #e2e8f0"
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Stack spacing={4}>
                        <Box>
                            <Typography variant="h5" fontWeight={700} color="#1e293b" mb={1}>
                                Notification Preferences
                            </Typography>
                            <Typography color="#64748b">
                                Choose how you want to receive notifications
                            </Typography>
                        </Box>

                        <Divider />

                        <Stack spacing={3}>
                            {Object.entries(notifications).map(([key, value]) => (
                                <Paper
                                    key={key}
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        bgcolor: "#f8fafc",
                                        borderRadius: 2,
                                        border: "1px solid #e2e8f0",
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            borderColor: "#cbd5e1",
                                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
                                        }
                                    }}
                                >
                                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                                        <Box>
                                            <Typography variant="h6" fontWeight={600} color="#1e293b" sx={{ textTransform: "capitalize" }}>
                                                {key === 'sms' ? 'SMS' : key} Notifications
                                            </Typography>
                                            <Typography variant="body2" color="#64748b">
                                                {key === 'email' && 'Receive notifications via email'}
                                                {key === 'sms' && 'Receive notifications via SMS'}
                                                {key === 'push' && 'Receive push notifications'}
                                                {key === 'marketing' && 'Receive marketing communications'}
                                            </Typography>
                                        </Box>
                                        <Switch
                                            checked={value}
                                            onChange={() => handleNotificationChange(key)}
                                            sx={{
                                                "& .MuiSwitch-switchBase.Mui-checked": {
                                                    color: "#667eea",
                                                },
                                                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                                                    backgroundColor: "#667eea",
                                                },
                                            }}
                                        />
                                    </Stack>
                                </Paper>
                            ))}
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Fade>
    );

    const renderPrivacy = () => (
        <Fade in timeout={600}>
            <Card
                elevation={0}
                sx={{
                    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    borderRadius: 4,
                    border: "1px solid #e2e8f0"
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Stack spacing={4}>
                        <Box>
                            <Typography variant="h5" fontWeight={700} color="#1e293b" mb={1}>
                                Privacy Settings
                            </Typography>
                            <Typography color="#64748b">
                                Control your privacy and data sharing preferences
                            </Typography>
                        </Box>

                        <Divider />

                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                bgcolor: "#f8fafc",
                                borderRadius: 2,
                                border: "1px solid #e2e8f0"
                            }}
                        >
                            <Typography variant="h6" fontWeight={600} color="#1e293b" mb={2}>
                                Profile Visibility
                            </Typography>
                            <Select
                                fullWidth
                                defaultValue="public"
                                sx={{
                                    bgcolor: "white",
                                    borderRadius: 2,
                                }}
                            >
                                <MenuItem value="public">Public</MenuItem>
                                <MenuItem value="clients">Clients Only</MenuItem>
                                <MenuItem value="private">Private</MenuItem>
                            </Select>
                        </Paper>
                    </Stack>
                </CardContent>
            </Card>
        </Fade>
    );

    const renderBilling = () => (
        <Fade in timeout={600}>
            <Card
                elevation={0}
                sx={{
                    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    borderRadius: 4,
                    border: "1px solid #e2e8f0"
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Stack spacing={4}>
                        <Box>
                            <Typography variant="h5" fontWeight={700} color="#1e293b" mb={1}>
                                Billing & Subscription
                            </Typography>
                            <Typography color="#64748b">
                                Manage your subscription and payment methods
                            </Typography>
                        </Box>

                        <Divider />

                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                borderRadius: 3,
                                color: "white"
                            }}
                        >
                            <Typography variant="h5" fontWeight={700} mb={1}>
                                Premium Plan
                            </Typography>
                            <Typography variant="h6" mb={2} sx={{ opacity: 0.9 }}>
                                $49/month
                            </Typography>
                            <Typography mb={3} sx={{ opacity: 0.8 }}>
                                Unlimited listings and advanced features
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: "rgba(255,255,255,0.5)",
                                        color: "white",
                                        "&:hover": {
                                            borderColor: "white",
                                            bgcolor: "rgba(255,255,255,0.1)"
                                        }
                                    }}
                                >
                                    Change Plan
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: "rgba(255,255,255,0.2)",
                                        "&:hover": { bgcolor: "rgba(255,255,255,0.3)" }
                                    }}
                                >
                                    Cancel
                                </Button>
                            </Stack>
                        </Paper>
                    </Stack>
                </CardContent>
            </Card>
        </Fade>
    );

    return (
        <Box
            sx={{
                minHeight: "100vh",
            }}
        >
            <Box mx="auto">

                {/* Tabs */}
                <Paper
                    elevation={0}
                    sx={{
                        mb: 3,
                        background: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(20px)",
                        borderRadius: 3,
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    }}
                >
                    <Tabs
                        value={activeTab}
                        onChange={(e, v) => setActiveTab(v)}
                        TabIndicatorProps={{ style: { display: "none" } }}
                        sx={{ p: 1 }}
                    >
                        {tabs.map((tab) => (
                            <CustomTab
                                key={tab.id}
                                value={tab.id}
                                label={
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        {tab.icon}
                                        <span>{tab.label}</span>
                                    </Stack>
                                }
                            />
                        ))}
                    </Tabs>
                </Paper>

                {activeTab === "personal" && renderPersonalInfo()}
                {activeTab === "security" && renderSecurity()}
                {activeTab === "notifications" && renderNotifications()}
                {activeTab === "privacy" && renderPrivacy()}
                {activeTab === "billing" && renderBilling()}

                {/* Save Button */}
                <Zoom in timeout={1000}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 3,
                            mt: 3,
                            background: "rgba(255, 255, 255, 0.95)",
                            backdropFilter: "blur(20px)",
                            borderRadius: 3,
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                        }}
                    >
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Box>
                                <Typography color="#64748b" variant="body2">
                                    Last updated: March 15, 2024
                                </Typography>
                                <Typography color="#94a3b8" variant="caption">
                                    Changes are automatically saved
                                </Typography>
                            </Box>

                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: "#e2e8f0",
                                        color: "#64748b",
                                        borderRadius: 2,
                                        textTransform: "none",
                                        fontWeight: 600,
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="contained"
                                    startIcon={<SaveIcon />}
                                    sx={{
                                        background: COLORS.primary,
                                        borderRadius: 2,
                                        textTransform: "none",
                                        fontWeight: 600,
                                        boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
                                    }}
                                >
                                    Save Changes
                                </Button>
                            </Stack>
                        </Stack>
                    </Paper>
                </Zoom>
            </Box>
        </Box>
    );
};

export default ProfilePage;