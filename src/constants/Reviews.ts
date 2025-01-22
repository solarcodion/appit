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
    qu: "What is a multisig crypto wallet?",
    an: "A multisig (multi-signature) crypto wallet is a digital wallet that requires multiple private keys to authorize a transaction. This enhances security by ensuring that more than one person or device must approve a transaction before it is executed. For instance, in a 2-of-3 multisig wallet, two out of three designated private keys must approve a transaction.",
  },
  {
    qu: "How does a multisig wallet enhance security?",
    an: "A multisig wallet enhances security by requiring multiple approvals before a transaction can proceed. This reduces the risk of theft, as one compromised key is not enough to authorize a transaction.",
  },
  {
    qu: "What does it mean that the wallet stores secret keys on the device's keychain?",
    an: "Storing secret keys on the device's keychain provides an additional layer of security by keeping keys secure and accessible only to the wallet application.",
  },
  {
    qu: "What are the different configurations of a multisig wallet?",
    an: "Multisig wallets can be configured in various ways, such as 2-of-3, 3-of-5, etc., meaning different numbers of keys are needed for transaction approval.",
  },
  {
    qu: "How does the keychain storage enhance security in a multisig wallet?",
    an: "Keychain storage enhances security by securing keys on the device itself, making them harder to access unauthorizedly.",
  },
  {
    qu: "What happens if one of the keys in a multisig wallet is lost, especially with keychain storage?",
    an: "If a key is lost, the wallet's multisig configuration may allow transactions with the remaining keys, depending on its setup.",
  },
  {
    qu: "Are multisig wallets compatible with all cryptocurrencies?",
    an: "Not all cryptocurrencies support multisig wallets; compatibility depends on the blockchain technology and wallet provider.",
  },
  {
    qu: "How do transaction approvals work in a multisig wallet with keychain-stored keys?",
    an: "In a multisig wallet with keychain-stored keys, each transaction requires approval from a set number of keys, which are securely stored in the device's keychain.",
  },
];

export { REVIEWS, FAQS };
