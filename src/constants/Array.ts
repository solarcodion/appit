import {
  algorand,
  bitcoin,
  cardano,
  chainlink,
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  dodge,
  eos,
  etherium,
  face,
  feature10,
  feature7,
  feature8,
  feature9,
  insight,
  kusama,
  litecoin,
  matic,
  near,
  notification,
  polkadot,
  shib,
  solana,
  tether,
  tron,
  uniswap,
  usdc,
  verify,
  xrp,
} from "../assets/image";
import { ANALYZE_DATA, COIN_DATA, FEATURE_DATA, PRICE_DATA } from "../types";

export const COMPANIES: any[] = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
];

export const COINS: COIN_DATA[] = [
  { icon: algorand, title: "Algorand" },
  { icon: bitcoin, title: "Bitcoin" },
  { icon: cardano, title: "Algorand" },
  { icon: chainlink, title: "Algorand" },
  { icon: dodge, title: "Algorand" },
  { icon: eos, title: "Algorand" },
  { icon: etherium, title: "Algorand" },
  { icon: kusama, title: "Algorand" },
  { icon: litecoin, title: "Algorand" },
  { icon: matic, title: "Algorand" },
  { icon: near, title: "Algorand" },
  { icon: polkadot, title: "Algorand" },
  { icon: shib, title: "Algorand" },
  { icon: solana, title: "Algorand" },
  { icon: tether, title: "Algorand" },
  { icon: tron, title: "Algorand" },
  { icon: uniswap, title: "Algorand" },
  { icon: usdc, title: "Algorand" },
  { icon: xrp, title: "Algorand" },
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
    img: feature7,
    icon: face,
    title: "Supported cryptocurrencies",
    desc: "TOP - 30 Coin Market Cap",
  },
  {
    img: feature8,
    icon: verify,
    title: "Supported token standards",
    desc: "BNB, ERC-20, TRC-10, TRC-20, SPL, ALGO, EOS",
  },
  {
    img: feature9,
    icon: notification,
    title: "Supported NFTs Protocols",
    desc: "ERC-721, ERC-1155, SPL, JETTONS",
  },
  {
    img: feature10,
    icon: insight,
    title: "Staking Coming Soon",
    desc: "TRX, SOL, AVAX, BNB, KSM, DOT",
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
    badge: "Save 20% on Yearly",
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
