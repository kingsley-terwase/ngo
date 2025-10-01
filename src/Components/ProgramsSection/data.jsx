import {
  Book24Filled,
  Food24Filled,
  ShieldCheckmark24Filled,
  HeartPulse24Filled,
  PersonSupport24Filled,
  Sport24Filled,
  ArrowRight24Filled,
} from "@fluentui/react-icons";

export const programsData = [
  {
    icon: <Book24Filled style={{ fontSize: "48px" }} />,
    title: "Quality Education",
    subtitle: "Building Bright Futures",
    description:
      "Providing comprehensive education programs, school supplies, and scholarships to ensure every child has access to quality learning opportunities that unlock their potential.",
    features: [
      "Free School Supplies",
      "Scholarship Programs",
      "After-School Support",
      "Digital Learning",
    ],
    color: "#3b82f6",
    gradient:
      "linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Kids learning in class
  },
  {
    icon: <Food24Filled style={{ fontSize: "48px" }} />,
    title: "Nutrition Program",
    subtitle: "Nourishing Growing Bodies",
    description:
      "Daily nutritious meals, nutrition education, and food security initiatives to combat hunger and support healthy physical and cognitive development in children.",
    features: [
      "Daily Meals",
      "Nutrition Education",
      "Food Security",
      "Health Monitoring",
    ],
    color: "#ef4444",
    gradient:
      "linear-gradient(135deg, #fef2f2 0%, #fecaca 50%, #fca5a5 100%)",
    image:
      "/Images/nut.png",
  },
  {
    icon: <ShieldCheckmark24Filled style={{ fontSize: "48px" }} />,
    title: "Child Protection",
    subtitle: "Safe Spaces for All",
    description:
      "Creating secure environments, emergency shelters, and protection services to safeguard vulnerable children from abuse, neglect, and exploitation.",
    features: [
      "Emergency Shelter",
      "Legal Support",
      "Counseling Services",
      "Family Reunification",
    ],
    color: "#10b981",
    gradient:
      "linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 50%, #6ee7b7 100%)",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Child holding adult's hand
  },
  {
    icon: <HeartPulse24Filled style={{ fontSize: "48px" }} />,
    title: "Healthcare Access",
    subtitle: "Healthy Children, Bright Future",
    description:
      "Comprehensive healthcare services including regular check-ups, vaccinations, medical treatment, and health education for children and their families.",
    features: [
      "Regular Check-ups",
      "Vaccination Programs",
      "Emergency Care",
      "Health Education",
    ],
    color: "#8b5cf6",
    gradient:
      "linear-gradient(135deg, #f5f3ff 0%, #c4b5fd 50%, #a78bfa 100%)",
    image:
      "/Images/health.png",
  },
  {
    icon: <PersonSupport24Filled style={{ fontSize: "48px" }} />,
    title: "Psychosocial Support",
    subtitle: "Healing Hearts and Minds",
    description:
      "Mental health support, trauma counseling, and emotional wellness programs to help children overcome challenges and build resilience.",
    features: [
      "Trauma Counseling",
      "Mental Health Support",
      "Group Therapy",
      "Resilience Building",
    ],
    color: "#f59e0b",
    gradient:
      "linear-gradient(135deg, #fffbeb 0%, #fed7aa 50%, #fdba74 100%)",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Child comfort support
  },
  {
    icon: <Sport24Filled style={{ fontSize: "48px" }} />,
    title: "Recreation & Arts",
    subtitle: "Play, Learn, and Grow",
    description:
      "Sports, creative arts, and recreational activities that promote physical fitness, creativity, social skills, and overall child development.",
    features: [
      "Sports Programs",
      "Art Classes",
      "Music Lessons",
      "Creative Workshops",
    ],
    color: "#06b6d4",
    gradient:
      "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 50%, #67e8f9 100%)",
    image:
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Kids painting & playing
  },
];
