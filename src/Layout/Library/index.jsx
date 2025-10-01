
import {
  Home24Regular,
  Building24Regular,
  PeopleCommunity24Regular,
  Person24Regular,
  Money24Regular,
  DocumentText24Regular,
  Table24Regular,
  ChartMultiple24Regular,
  Settings24Regular,
  Star24Regular,
  BookOpen24Regular,
  Mail24Regular,
} from "@fluentui/react-icons";

export const routesConfig = [
  {
    text: "Dashboard",
    icon: <Home24Regular />,
    path: "/dashboard",
  },
  {
    text: "Properties",
    icon: <Building24Regular />,
    path: "/admin/properties",
    children: [
      { text: "All Properties", path: "/admin/properties/all" },
      { text: "Pending Approval", path: "/admin/properties/pending" },
      { text: "Add New", path: "/admin/properties/new" },
      { text: "Categories", path: "/admin/properties/categories" },
    ],
  },
  {
    text: "Vendors",
    icon: <PeopleCommunity24Regular />,
    path: "/admin/vendors",
    children: [
      { text: "All Vendors", path: "/admin/vendors/all" },
      { text: "Applications", path: "/admin/vendors/applications" },
      { text: "Payouts", path: "/admin/vendors/payouts" },
    ],
  },
  {
    text: "Users",
    icon: <Person24Regular />,
    path: "/admin/users",
    children: [
      { text: "All Users", path: "/admin/users/all" },
      { text: "Agents", path: "/admin/users/agents" },
      { text: "Buyers", path: "/admin/users/buyers" },
      { text: "Sellers", path: "/admin/users/sellers" },
    ],
  },
  {
    text: "Transactions",
    icon: <Money24Regular />,
    path: "/admin/transactions",
    children: [
      { text: "All Transactions", path: "/admin/transactions/all" },
      { text: "Payout Requests", path: "/admin/transactions/payouts" },
      { text: "Invoices", path: "/admin/transactions/invoices" },
    ],
  },
  {
    text: "Messages",
    icon: <Mail24Regular />,
    path: "/dashboard/messages",
  },
  {
    text: "Content",
    icon: <DocumentText24Regular />,
    path: "/admin/content",
    children: [
      { text: "Pages", path: "/admin/content/pages" },
      { text: "Blogs", path: "/admin/content/blogs" },
      { text: "FAQs", path: "/admin/content/faqs" },
      { text: "Testimonials", path: "/admin/content/testimonials" },
    ],
  },
  {
    text: "Tables",
    icon: <Table24Regular />,
    path: "/admin/tables",
  },
  {
    text: "Reports",
    icon: <ChartMultiple24Regular />,
    path: "/admin/reports",
  },
  {
    text: "Reviews",
    icon: <Star24Regular />,
    path: "/admin/reviews",
  },
  {
    text: "Settings",
    icon: <Settings24Regular />,
    path: "/admin/settings",
    children: [
      { text: "General", path: "/admin/settings/general" },
      { text: "Payment", path: "/admin/settings/payment" },
      { text: "Notifications", path: "/admin/settings/notifications" },
      { text: "Roles & Permissions", path: "/admin/settings/roles" },
    ],
  },
  {
    text: "Documentation",
    icon: <BookOpen24Regular />,
    path: "/admin/docs",
  },
];