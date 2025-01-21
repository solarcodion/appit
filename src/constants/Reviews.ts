import {
  avatar10,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
} from "../assets/image";
import { REVIEW_DATA } from "../types";

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

export { REVIEWS };
