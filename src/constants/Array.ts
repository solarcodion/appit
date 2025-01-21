import {
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  face,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
  insight,
  message,
  notification,
  schedule,
  verify,
} from "../assets/image";
import { ANALYZE_DATA, FEATURE_DATA, PRICE_DATA } from "../types";

export const COMPANIES: any[] = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
];

export const ANALYSIS: ANALYZE_DATA[] = [
  {
    title: "k+",
    desc: "Shared moments and stories every month",
    from: 450,
    to: 500,
  },
  {
    title: "k+",
    desc: "Communities thriving across diverse interests",
    from: 150,
    to: 200,
  },
  {
    title: "+",
    desc: "Countries where Appit is growing strong",
    from: 0,
    to: 50,
  },
];

export const FEATURES: FEATURE_DATA[] = [
  {
    img: feature1,
    icon: face,
    title: "Customizable Profiles",
    desc: "Personalize your profile with themes, layouts, and settings.",
  },
  {
    img: feature2,
    icon: verify,
    title: "Verified Users",
    desc: "Connect confidently with verified, authentic users on the platform.",
  },
  {
    img: feature3,
    icon: notification,
    title: "Smart Notifications",
    desc: "Get real-time alerts for the updates that matter to you.",
  },
  {
    img: feature4,
    icon: insight,
    title: "Account Insights",
    desc: "Track your engagement and performance with detailed analytics.",
  },
  {
    img: feature5,
    icon: message,
    title: "Easy Messaging",
    desc: "Chat seamlessly with friends and groups through an intuitive interface.",
  },
  {
    img: feature6,
    icon: schedule,
    title: "Post Scheduling",
    desc: "Plan and schedule posts to share content at the perfect time.",
  },
];

export const MONTHLY_PRICES: PRICE_DATA[] = [
  {
    title: "Free Plan",
    sub: "Basic access with essential features.",
    value: 0,
    information: [
      { desc: "Create and customize profile", status: true },
      { desc: "Connect with other users", status: true },
      { desc: "Send and receive messages", status: false },
      { desc: "Access to basic features", status: true },
      { desc: "View and share content", status: false },
      { desc: "Receive notifications and updates", status: true },
    ],
  },
  {
    title: "Premium Plan",
    sub: "Enhanced features for new experience.",
    badge: "Save 20% on Yearly",
    value: 10,
    information: [
      { desc: "Create and customize profile", status: true },
      { desc: "Connect with other users", status: true },
      { desc: "Send and receive messages", status: true },
      { desc: "Access to basic features", status: true },
      { desc: "View and share content", status: true },
      { desc: "Receive notifications and updates", status: true },
    ],
  },
];

export const YEARLY_PRICE: PRICE_DATA[] = [
  {
    title: "Free Plan",
    sub: "Basic access with essential features.",
    value: 0,
    information: [
      { desc: "Create and customize profile", status: true },
      { desc: "Connect with other users", status: true },
      { desc: "Send and receive messages", status: false },
      { desc: "Access to basic features", status: true },
      { desc: "View and share content", status: false },
      { desc: "Receive notifications and updates", status: true },
    ],
  },
  {
    title: "Premium Plan",
    sub: "Enhanced features for new experience.",
    value: 99,
    information: [
      { desc: "Create and customize profile", status: true },
      { desc: "Connect with other users", status: true },
      { desc: "Send and receive messages", status: true },
      { desc: "Access to basic features", status: true },
      { desc: "View and share content", status: true },
      { desc: "Receive notifications and updates", status: true },
    ],
  },
];
