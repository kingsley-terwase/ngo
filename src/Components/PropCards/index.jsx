import React, { useState } from "react";
import Slider from "react-slick";
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
} from "@mui/material";
import {
  Location24Filled,
  Bed24Filled,
  Showerhead24Filled,
  Square24Regular,
  Heart24Filled,
  Share24Filled,
  Star24Filled,
  ChevronLeftFilled,
  ChevronRightFilled,
} from "@fluentui/react-icons";
import { properties } from "./static";
import { FONT_FAMILY } from "../../Config/font";
import { CustomButton } from "../CustomBtn";
import {COLORS} from "../../Config/color";


const formatPrice = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);

const CustomArrow = ({ className, style, onClick, direction }) => (
  <Box
    component="div"
    className={className}
    onClick={onClick}
    sx={{
      ...style,
      backgroundColor: COLORS.primary,
      borderRadius: "50%",
      width: 40,
      height: 40,
      display: "flex !important",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2,
      "&::before": { display: "none" },
      "&:hover":{
       backgroundColor: COLORS.primary,
      }
    }}
  >
    {direction === "prev" ? (
      <Box sx={{ display: "flex", color: "white" }}>
        <ChevronLeftFilled style={{ fill: "white", fontSize: 22 }} />
      </Box>
    ) : (
      <Box sx={{ display: "flex", color: "white" }}>
        <ChevronRightFilled style={{ fill: "white", fontSize: 22 }} />
      </Box>
    )}
  </Box>
);

const PropCards = () => {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (id) => {
    const newFav = new Set(favorites);
    newFav.has(id) ? newFav.delete(id) : newFav.add(id);
    setFavorites(newFav);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ bgcolor: "#f9fafb", py: 8, px: 2, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{ fontFamily: FONT_FAMILY.primary }}
            fontWeight="bold"
            gutterBottom
          >
            Featured Properties
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: FONT_FAMILY.primary,
              fontWeight: 500,
              maxWidth: "600px",
              mx: "auto",
              color: "text.secondary",
            }}
          >
            Discover our handpicked selection of premium properties with
            exceptional features and prime locations.
          </Typography>
        </Box>

        {/* Slider */}
        <Slider {...settings}>
          {properties.map((property) => (
            <Grid size={{xs:12, sm:6, lg:4,}} key={property.id} px={1}>
              <PropertyCard
                property={property}
                isFavorite={favorites.has(property.id)}
                onToggleFavorite={() => toggleFavorite(property.id)}
              />
            </Grid>
          ))}
        </Slider>
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

export default PropCards;
