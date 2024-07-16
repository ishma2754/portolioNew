import project1 from "../assets/projects/graph.jpeg";
import project2 from "../assets/projects/homefit.jpg";
import project3 from "../assets/projects/speech1.png";


export const HERO_CONTENT = `Hi, I'm Ishma Khan, detail-oriented Software Developer dedicated to building meaningful solutions that impact people's lives while prioritizing business needs.`;


export const PROJECTS = [
  {
    title: "VitalOrgans-Emergency Response",
    image: project1,
    github: "https://github.com/ishma2754/vitalorgans-app",
    live: "https://vitalorgansapp.com",
    video: "https://www.loom.com/share/be72fb0e8be14ad8a7bc572997f3ae36?sid=702b7e4f-fe30-4a06-aa40-9c96d9e183bc",
    description:
      "VitalOrgans aims to enhance emergency response by providing hospitals access to patient's medical history via patient's registered email. It works as a tool for patient to manage their medical reports, medical details and their personal information.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "AWS S3"],
  },
  {
    title: "HomeFit",
    image: project2,
    github: "https://github.com/ishma2754/homefit-website-main",
    live: "https://homefitnesshub.netlify.app",
    description:
      "HOMEFIT is an e-commerce platform dedicated to providing top-quality home fitness equipment. App features a wide range of products, from treadmills to yoga mats, ensuring users can easily find the right gear for their home workouts.",
    technologies: ["Vanilla JavaScript", "HTML", "CSS"],
  },
  {
    title: "PharmaKeeper-MedicineKit",
    image: project3,
    github: "https://github.com/ishma2754/PharmaKeeper-MedicineKitApp",
    live: "https://pharmakeepermedicinekit.netlify.app",
    description:
      "Personal Medicine Manager that tracks every medicine, its brand name, expiry date, quantity, and description with ease. It keeps users' health in check by staying organized and informed about their medications at all times.",
    technologies: ["Vanilla JavaScript", "HTML", "CSS"],
  },
];

export const CONTACT = {
  email: "ishmakhan1995@gmail.com",
};
