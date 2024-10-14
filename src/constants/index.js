import project1 from "../assets/projects/parkease.png";
import project2 from "../assets/projects/streamify.png";
import project3 from "../assets/projects/cartify.png";

export const HERO_CONTENT = `Hi, I'm Ishma Khan, detail-oriented Software Developer dedicated to building meaningful solutions that impact people's lives while prioritizing business needs.`;

export const PROJECTS = [
  {
    title: "ParkEase Parking Application",
    image: project1,
    github: "https://github.com/ishma2754/ParkEase",
    live: "https://parkease-parking.netlify.app/",
    description:
      "ParkEase simplifies the process of booking parking slots in busy cities, allowing individuals to reserve their spots effortlessly.",
    technologies: [
      "React",
      "Redux Toolkit",
      "CreateAsync Thunk",
      "Google Map API",
      "Mock API",
      "Miragejs",
      "Tailwind CSS",
    ],
  },
  {
    title: "Streamify",
    image: project2,
    github: "https://github.com/ishma2754/Streamify",
    live: "https://streamify-analytics-dashboard.netlify.app",
    description:
      " A responsive analytics dashboard for Streamify, a fictional music streaming service, showcasing key metrics    and data visualizations for user activity, revenue, and content performance.",
    technologies: [
      "React",
      "Redux Toolkit",
      "CreateAsync Thunk",
      "Recharts",
      "Mock API",
      "React Toastify ",
      "Tailwind CSS",
    ],
  },
  {
    title: "Cartify",
    image: project3,
    github: "https://github.com/ishma2754/Cartify",
    live: "https://cartify-ecomm.netlify.app/",
    description:
      "An e-commerce platform incorporating key features such as product listings, advanced filters, pagination using Custom Hooks and shopping cart functionality.",
    technologies: [
      "React",
      "Redux Toolkit",
      "React Toastify",
      "Router 6",
      "Loader",
      "Tailwind CSS",
    ],
  },
];

export const CONTACT = {
  email: "ishmakhan1995@gmail.com",
};
