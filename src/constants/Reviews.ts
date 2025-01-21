import {
  avatar10,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
} from "../assets/image";
import { FAQ_DATA, REVIEW_DATA } from "../types";

const REVIEWS: REVIEW_DATA[] = [
  {
    person: { avatar: avatar4, name: "Michael Brown", job: "Founder at Novus" },
    comment:
      "With Appit, I've expanded my network and found genuine connections. The seamless interface makes socializing so much easier.",
  },
  {
    person: { avatar: avatar5, name: "David Wilson", job: "Founder at Boom" },
    comment:
      "Appit’s features are fantastic for both meeting new people and staying connected with existing friends. It’s a must-have app.",
  },
  {
    person: {
      avatar: avatar6,
      name: "Laura Martinez",
      job: "Founder at Comet",
    },
    comment:
      "I’m amazed at how Appit’s advanced privacy controls and customizable features have enhanced my online social experience. Truly innovative.",
  },
  {
    person: { avatar: avatar7, name: "James Taylor", job: "Founder at Wond" },
    comment:
      "The community support and engaging multimedia sharing on Appit have made it my favorite platform for connecting and sharing.",
  },
  {
    person: { avatar: avatar8, name: "Emma Johnson", job: "Founder at Specra" },
    comment:
      "Appit has truly transformed my social life. I've connected with amazing people and discovered new interests. Highly recommended!",
  },
  {
    person: { avatar: avatar9, name: "John Doe", job: "Founder at Nova" },
    comment:
      "The intuitive design and smart features of Appit made it easy to find meaningful connections. It's become my go-to app.",
  },
  {
    person: { avatar: avatar10, name: "John Pitt", job: "Founder at Apex" },
    comment:
      "I love how Appit helps me stay in touch with friends and meet new people. The app is user-friendly and effective.",
  },
];

const FAQS: FAQ_DATA[] = [
  {
    qu: "How do I create an account?",
    an: "To create an account, download Appit, open the app, and follow the on-screen instructions to sign up using your email or social media.",
  },
  {
    qu: "Can I customize my profile?",
    an: "Yes, Appit allows you to personalize your profile with a photo, bio, and interests to better connect with others.",
  },
  {
    qu: "Is Appit available on all devices?",
    an: "Appit is available on both iOS and Android devices, ensuring you can stay connected from your smartphone or tablet.",
  },
  {
    qu: "What privacy controls are available?",
    an: "Appit offers advanced privacy settings, allowing you to control who can view your profile and interact with you, ensuring your data is secure.",
  },
  {
    qu: "How does the smart matching work?",
    an: "Our smart matching algorithm analyzes your interests and preferences to suggest connections that are most likely to be meaningful and relevant.",
  },
  {
    qu: "Can I share multimedia content?",
    an: "Yes, Appit supports sharing photos, videos, and other multimedia content to enhance your interactions and keep your connections engaged.",
  },
  {
    qu: "What should I do if I encounter issues?",
    an: "If you experience any issues, please contact our support team through the app or website, and we'll assist you as quickly as possible.",
  },
];

export { REVIEWS, FAQS };
