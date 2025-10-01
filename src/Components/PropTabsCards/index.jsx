import React, { useState } from "react";
import {
    Box,
    Typography,
    Avatar,
    Chip,
    Card,
    CardMedia,
    CardContent,
    IconButton,
    Container,
    Grid,
    Tabs,
    Tab,
} from "@mui/material";
import {
    Location24Filled,
    Bed24Filled,
    Showerhead24Filled,
    Square24Regular,
    Heart24Filled,
    Share24Filled,
    Star24Filled,
} from "@fluentui/react-icons";
import { properties } from "./static"; // your data
import { FONT_FAMILY } from "../../Config/font";
import { CustomButton } from "../CustomBtn";
import { COLORS } from "../../Config/color";

const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    }).format(price);

const PropTabsCards = () => {
    const [favorites, setFavorites] = useState(new Set());
    const [currentTab, setCurrentTab] = useState("all");

    const toggleFavorite = (id) => {
        const newFav = new Set(favorites);
        newFav.has(id) ? newFav.delete(id) : newFav.add(id);
        setFavorites(newFav);
    };

    // Split data into categories
    const tabData = {
        all: properties,
        sale: properties.slice(0, 2), // replace with real "for sale" data
        rent: properties.slice(2), // replace with real "for rent" data
    };

    return (
        <Box sx={{ bgcolor: "#f9fafb", py: 8, px: 2 }}>
            <Container maxWidth="lg">
                {/* Title & Tabs Row */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 4,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ fontFamily: FONT_FAMILY.primary }}
                        fontWeight="bold"
                    >
                        Latest Properties
                    </Typography>

                    <Tabs
                        value={currentTab}
                        onChange={(e, val) => setCurrentTab(val)}
                        textColor="primary"
                        indicatorColor="primary"
                    >
                        <Tab label="All" value="all" />
                        <Tab label="For Sale" value="sale" />
                        <Tab label="For Rent" value="rent" />
                    </Tabs>
                </Box>

                {/* Cards */}
                <Grid container spacing={3}>
                    {(tabData[currentTab] || []).map((property) => (
                        <Grid size={{ xs:12, sm:6, md:4, lg:4, xl: 4}} item xs={12} sm={6} md={4} key={property.id}>
                            <PropertyCard
                                property={property}
                                isFavorite={favorites.has(property.id)}
                                onToggleFavorite={() => toggleFavorite(property.id)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

const PropertyCard = ({ property, isFavorite, onToggleFavorite }) => (
    <Card
        sx={{
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
            "&:hover": { boxShadow: 6, transform: "translateY(-6px)" },
            transition: "all 0.3s ease",
        }}
    >
        {/* Image */}
        <Box sx={{ position: "relative" }}>
            <CardMedia
                component="img"
                height="200"
                image={property.image}
                alt={property.title}
                sx={{
                    transition: "transform 0.5s",
                    "&:hover": { transform: "scale(1.1)" },
                }}
            />

            {/* Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.2)",
                }}
            />

            {/* New Badge */}
            {property.isNew && (
                <Chip
                    label="New"
                    color="success"
                    size="small"
                    sx={{ position: "absolute", top: 16, left: 16 }}
                />
            )}

            {/* Actions */}
            <Box
                sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    display: "flex",
                    gap: 1,
                }}
            >
                <IconButton
                    size="small"
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite();
                    }}
                    sx={{
                        bgcolor: isFavorite ? "error.main" : "white",
                        color: isFavorite ? "white" : "text.primary",
                        "&:hover": { bgcolor: "error.dark", color: "white" },
                    }}
                >
                    <Heart24Filled />
                </IconButton>
                <IconButton
                    size="small"
                    sx={{
                        bgcolor: "white",
                        "&:hover": { bgcolor: "primary.main", color: "white" },
                    }}
                >
                    <Share24Filled />
                </IconButton>
            </Box>
        </Box>

        {/* Content */}
        <CardContent>
            {/* Author */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1.5 }}>
                <Avatar src={property.authorAvatar} alt={property.author} />
                <Box>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: FONT_FAMILY.primary }}
                        fontWeight="500"
                    >
                        By {property.author}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <Star24Filled style={{ color: "#fbbf24", fontSize: "16px" }} />
                        <Typography
                            variant="caption"
                            sx={{ fontFamily: FONT_FAMILY.primary }}
                            color="text.secondary"
                        >
                            {property.rating}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Title */}
            <Typography
                variant="h6"
                sx={{ fontFamily: FONT_FAMILY.primary }}
                fontWeight="bold"
                gutterBottom
                noWrap
            >
                {property.title}
            </Typography>

            {/* Location */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Location24Filled style={{ fontSize: "18px", color: "#666" }} />
                <Typography
                    variant="body1"
                    sx={{ fontFamily: FONT_FAMILY.primary }}
                    color="text.secondary"
                >
                    {property.location}
                </Typography>
            </Box>

            {/* Details */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Square24Regular style={{ fontSize: "16px", color: "#666" }} />
                    <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary }}>
                        {property.sqft.toLocaleString()} sqft
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Bed24Filled style={{ fontSize: "16px", color: "#666" }} />
                    <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary }}>
                        {property.beds} Beds
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Showerhead24Filled style={{ fontSize: "16px", color: "#666" }} />
                    <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary }}>
                        {property.baths} Baths
                    </Typography>
                </Box>
            </Box>

            {/* Features */}
            <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mb: 2 }}>
                {property.features.slice(0, 2).map((f, i) => (
                    <Chip key={i} label={f} size="small" />
                ))}
                {property.features.length > 2 && (
                    <Chip label={`+${property.features.length - 2} more`} size="small" />
                )}
            </Box>

            {/* Price + Button */}
            <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
                <Typography
                    variant="h6"
                    sx={{ fontFamily: FONT_FAMILY.primary, mb: 1 }}
                    fontWeight="bold"
                >
                    {formatPrice(property.price)}
                </Typography>
                <CustomButton label="View" />
            </Box>
        </CardContent>
    </Card>
);

export default PropTabsCards;
