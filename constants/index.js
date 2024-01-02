import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";
import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
} from "react-icons/si";
import { RxPencil2, RxDesktop } from "react-icons/rx";
import { PiInstagramLogoBold, PiYoutubeLogoBold } from "react-icons/pi";

// Navbar data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

// About Data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Video Editer",
        icons: [<SiAdobepremierepro />, <SiAdobeaftereffects />],
      },
      {
        title: "Graphic Designer",
        icons: [<SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Freelance",
        stage: "2022 - 2024",
      },
    ],
  },
];

// Services Data
export const serviceData = [
  {
    icon: <PiInstagramLogoBold />,
    title: "Instgram Reels",
    description: "Transforming moments into masterpieces!",
  },
  {
    icon: <PiYoutubeLogoBold />,
    title: "Youtube Videos",
    description: "Unleash the power of visual storytelling on YouTube!",
  },
  {
    icon: <RxDesktop />,
    title: "Courses Videos",
    description: "Elevate your courses with our expert video editing",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Design excellence in every frame, we bring visions alive.",
  },
];

// Projects Data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.png",
          url: "https://www.instagram.com/slice_pizza_kenitra/?hl=fr",
        },
        {
          title: "title",
          path: "/thumb2.png",
          url: "https://www.youtube.com/@NoXuS_Val",
        },
        {
          title: "title",
          path: "/thumb3.png",
          url: "https://www.youtube.com/playlist?list=PLn_bhEk7BMtznLnxQZsBZruxiRJ7EzrDv",
        },
      ],
    },
  ],
};
