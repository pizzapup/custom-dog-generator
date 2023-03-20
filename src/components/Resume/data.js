import ResumePDF from "./Hardwick-2022.pdf";

const history = [
  {
    title: "freelance designer & developer",
    dates: "2013-Present",
    company: "Pizzapup Design & Illustration",
    location: "Remote, US",
    points: [
      " Clients in engineering, education, music, fine-art / craftsmen, and sports fitness industries",
      "Provided studio art (mixed media), illustration, animation, web development, digital advertising design, print, and brand design",
    ],
  },
  {
    title: "Operations Analyst & System Technician",
    dates: "2017-2022",
    company: "Koorsen Fire & Security",
    location: "Indianapolis, IN",
    points: [
      "     Led continuous evaluation and improvement of processes and technical systems. Deployed and trained employees on new software and systems, including CRM/ERP",
      "Promoted multiple times",
    ],
  },
];

const experience = [
  {
    title: "web developer | application engineer",
    points: [
      "Create media-rich experiences and interactive publications for online distribution using emerging technologies such as Progressive Web Apps (PWA), API-First Development, Single-Page Applications (SPA), dynamic web pages, mobile-first responsive design, and JavaScript frameworks",
      "Web and web application development and optimization (mobile-first approach, responsive design, multi-device compatible) using information modeling, markup tags, and scripting to create applications that emphasize graphics, animation, sounds, and interactivity",
      "Create performance-optimized websites and landing pages aligned with the consumer journey to drive conversions",
      "Implement RESTFUL backend API for securely storing and retrieving data in a NoSQL database via AJAX calls",
      "Educational background in software development with strong knowledge of SDLC, algorithms, structure, logic, and experience developing programs using python language",
    ],
  },
  {
    title: "graphic design | illustration",
    points: [
      "Digital media development, including animation, web file-formatting, and document conversion.",
      "Concept and create custom illustrations and artwork",
      "Product organic social assets to drive interest and engagement",
      "Create conceptual designs and pitch documents, translating concepts across different mediums",
      "Design performance-optimized images and videos to maximize conversion ",
      "Construct and convert mock designs and wireframes for responsive web sites and applications",
    ],
  },
  {
    title: "web developer | application engineer",
    points: [
      "Develop processes, procedures, and tools for analysis and reporting to ensure compliance with industry codes, standards, and developments",
      "Work directly with CIO, Information Services, and marketing teams to continuously evaluate operations and data management to streamline processes, increase efficiencies, and create an environment for innovation ",
      "Managed data for four departments",
      "Deployed new CRM/ERP software across the organization, including Microsoft Dynamics AX, Teams, and Smartsheet",
      "Use knowledge of SDLC and background in informatics to assist in software implementation ",
    ],
  },
];
const skills = [
  {
    title: "developer",
    points: [
      " JavaScript / ES6",
      "jQuery / JSON",
      "React.js / JSX",
      "Bootstrap ",
      "Component Libraries",
      "HTML5 / HTML ",
      "CSS3 / CSS / Sass",
    ],
  },
  {
    title: "designer",
    points: [
      "    Illustration",
      "Icon & Logo Creation",
      "ProCreate Application",
      "Adobe Creative Suite",
      "Photoshop / Illustrator",
    ],
  },
];
const socials = [
  {
    title: "-ariella",
    social: "linkedin",
    iconImg: "linkedin",
    data: {
      href: "https://www.linkedin.com/in/-ariella/",
      title: "linkedin profile",
    },
  },
  {
    title: "pizzapup",
    social: "github",
    iconImg: "github",
    data: {
      href: "https://www.linkedin.com",
      title: "github profile",
    },
  },
  {
    title: "@pizzapup_",
    social: "instagram",
    iconImg: "instagram",
    data: {
      href: "https://www.instagram.com/pizzapup_",
      title: "instagram @pizzapup_",
    },
  },
  {
    title: "hellopizzapup@protonmail.com",
    social: "email",
    iconImg: "envelope",
    data: {
      href: "mailto:hellopizzapup@protonmail.com",
      title: "email",
    },
  },
  {
    title: "download PDF",
    social: "resume",
    iconImg: "fileArrowDown",
    data: {
      href: ResumePDF,
      download: "pizzapup-resume",
      title: "download resume PDF",
    },
  },
  {
    title: "pizzapup website",
    social: "website",
    iconImg: "linkChains",
    data: {
      href: "resumepdf",
      title: "pizzapup website",
    },
  },
];

const Data = {
  name: "Ariella Hardwick",
  fName: "Ariella",
  lName: "Hardwick",
  title: "Web Designer & Application Developer",
  primaryTitle: "Web Designer",
  secondaryTitle: "Application Developer",
  // title: "Graphic Designer & Application Engineer",
  summary:
    "Artist and illustrator based in the Mass Ave Cultural Arts District of Indianapolis. Certified in Multi-device Application Devlopment through Indiana University Purdue University Indianapolis (IUPUI). Majoring in Media Arts & Science at the School of Informatics and Computing with plans to obtain BS in 2025 and MS shortly after through the accelerated BS/MS program.",
  socials,
  skills,
  history,
  experience,
};
export default Data;
