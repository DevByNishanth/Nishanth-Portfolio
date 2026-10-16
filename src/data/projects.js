// Shared project data used by both Projects.jsx and ProjectDetail.jsx

import arunaImage from "../assets/aruna.png";
import shadowArrowImage from "../assets/shadowArrow.png";
import avatarImage from "../assets/avatar.png";
import exploreMunnarImage from "../assets/exploremunnar.png";
import exploreMunnarDashboardImage from "../assets/exploreMunnarDashboard.png";
import hrmsImage from "../assets/hrms.png";
import eventsImage from "../assets/events.png";
import appraisalImage from "../assets/appraisal.jpg";
import lmsImage from "../assets/lms.png";
import bookMyCabsImage from "../assets/bookmycabs.png";

export const projects = [
  {
    id: "aruna-caterer",
    title: "Aruna Caterer",
    year: "2024",
    category: "Web Application",
    description:
      "A complete catering management platform designed to manage bookings, customers, menus and day-to-day catering operations.",
    tagline:
      "A complete catering management platform that brings bookings, customers, menus and daily catering operations into one place.",
    image: arunaImage,
    link: "https://arunacaterer.com/",
    linkLabel: "View live project",
    role: "Full Stack Developer",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    problem:
      "Catering businesses need to manage enquiries, customers, menus and bookings without relying on scattered conversations and manual records.",
    features: [
      "Customer and booking management",
      "Catering menu and service management",
      "Organized booking workflows",
      "Responsive interface for day-to-day operations",
    ],
    challenge:
      "Designing the application around real-world catering workflows while keeping the interface simple enough for non-technical users.",
    outcome:
      "A centralized web platform that gives the catering business a more organized way to manage its daily operations and customer bookings.",
  },

  {
    id: "shadow-arrow",
    title: "Shadow Arrow",
    year: "2024",
    category: "Web Application",
    description:
      "A modern business platform built with a focus on clean user experience, responsive interfaces and efficient application workflows.",
    tagline:
      "A modern business website focused on a clean visual experience, responsive design and clear presentation of services.",
    image: shadowArrowImage,
    link: "https://shadowarrow.com/",
    linkLabel: "View live project",
    role: "Full Stack Developer",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    problem:
      "The business needed a professional digital presence that could clearly communicate its services and provide a strong experience across desktop and mobile devices.",
    features: [
      "Responsive business website",
      "Service-focused content structure",
      "Modern interactive interface",
      "Mobile-friendly layouts",
    ],
    challenge:
      "Balancing a visually polished design with fast loading, responsive layouts and straightforward navigation.",
    outcome:
      "A professional business platform with a responsive interface and a stronger digital presence.",
  },

  {
    id: "avatar-public-school",
    title: "Avatar Public School",
    year: "2025",
    category: "Education",
    description:
      "A school management platform designed to provide students, parents and administrators with a simple and centralized digital experience.",
    tagline:
      "A digital platform for a school that brings important information and workflows into a centralized online experience.",
    image: avatarImage,
    link: "https://avatarpublicschool.com/",
    linkLabel: "View live project",
    role: "Full Stack Developer",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    problem:
      "Schools need a reliable online presence where students, parents and other visitors can quickly access relevant information.",
    features: [
      "Responsive school website",
      "Structured school information",
      "Student and parent focused experience",
      "Mobile-friendly design",
    ],
    challenge:
      "Organizing a large amount of school-related information without making the website feel complicated or difficult to navigate.",
    outcome:
      "A centralized and responsive digital experience for the school community.",
  },

  {
    id: "explore-munnar",
    title: "Explore Munnar",
    year: "2025",
    category: "Travel Platform",
    description:
      "A travel platform that helps users explore destinations, discover attractions and experience the beauty of Munnar through an engaging interface.",
    tagline:
      "A travel discovery platform designed to help visitors explore Munnar, discover destinations and plan their experience.",
    image: exploreMunnarImage,
    link: "https://www.exploringmunnar.com/",
    linkLabel: "View live project",
    role: "Full Stack Developer",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    problem:
      "Travelers need an easy way to discover places, attractions and useful information before and during their visit to Munnar.",
    features: [
      "Destination discovery",
      "Attraction-focused content",
      "Responsive travel experience",
      "Organized destination information",
    ],
    challenge:
      "Presenting travel information in a visually engaging way while keeping the browsing experience fast and easy to use.",
    outcome:
      "A user-friendly travel platform that gives visitors a centralized way to discover Munnar.",
  },

  {
    id: "explore-munnar-admin",
    title: "Explore Munnar Admin",
    year: "2026",
    category: "Admin Dashboard",
    description:
      "An administration dashboard for managing destinations, attractions, bookings and content for the Explore Munnar platform.",
    tagline:
      "An administration dashboard built to manage the content and operational data behind the Explore Munnar platform.",
    image: exploreMunnarDashboardImage,
    link: "https://exploremunnardashboard.netlify.app/",
    linkLabel: "View live dashboard",
    role: "Full Stack Developer",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    problem:
      "A travel platform needs an internal system for managing destinations, attractions and other content without changing data directly in the application.",
    features: [
      "Admin dashboard",
      "Content management",
      "Destination and attraction management",
      "Operational data management",
    ],
    challenge:
      "Building reusable dashboard workflows that make it easy for administrators to create, update and organize platform content.",
    outcome:
      "A dedicated admin interface that centralizes management of the Explore Munnar platform.",
  },

  {
    id: "hrms",
    title: "HRMS",
    year: "2026",
    category: "Management System",
    description:
      "A human resource management system designed to streamline employee management, attendance, leave and organizational workflows.",
    tagline:
      "A human resource management platform designed to centralize employee information and everyday HR workflows.",
    image: hrmsImage,
    link: "https://srieshwarems.com/",
    linkLabel: "View live project",
    role: "Full Stack Developer",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    problem:
      "Managing employee records, attendance and leave manually can become difficult as an organization grows.",
    features: [
      "Employee management",
      "Attendance management",
      "Leave workflows",
      "Centralized HR data",
    ],
    challenge:
      "Designing multiple HR workflows so that related employee data stays consistent across the application.",
    outcome:
      "A centralized HR management platform that helps organize employee-related operations.",
  },

  {
    id: "events-management-system",
    title: "Events Management System",
    year: "2026",
    category: "Management System",
    description:
      "A centralized platform for creating, managing and tracking events with dedicated workflows for event requests and approvals.",
    tagline:
      "A centralized event management system for organizing event requests, approvals and event-related workflows.",
    image: eventsImage,
    link: "https://srieshwarevents.com/",
    linkLabel: "View live project",
    role: "Full Stack Developer",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    problem:
      "Organizations need a structured way to collect event requests, review them and keep track of approved events.",
    features: [
      "Event request management",
      "Approval workflows",
      "Event tracking",
      "Centralized event information",
    ],
    challenge:
      "Creating a clear workflow between event submission, review and approval while keeping the status of each request visible.",
    outcome:
      "A centralized system for managing event requests and organizing event-related operations.",
  },

  {
    id: "appraisal-system",
    title: "Appraisal System",
    year: "2025",
    category: "HR Management",
    description:
      "An employee appraisal platform that simplifies performance reviews, evaluations and organizational assessment workflows.",
    tagline:
      "An employee appraisal solution designed to structure performance reviews and evaluation workflows.",
    image: appraisalImage,
    link: "https://www.figma.com/design/x69g0wGXjAIop52zx4rd92/Appraisal-wireframe?node-id=0-1&p=f&t=J0uwLPZOWsIGR5BU-0",
    linkLabel: "View design",
    role: "Full Stack Developer",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    problem:
      "Employee performance evaluations can become difficult to track when appraisal information is handled through disconnected documents and manual processes.",
    features: [
      "Employee appraisal workflow",
      "Performance evaluation structure",
      "Review-oriented interface",
      "Organized assessment data",
    ],
    challenge:
      "Designing a structured evaluation flow that can accommodate different stages of employee performance review.",
    outcome:
      "A structured appraisal experience designed to make employee performance reviews more organized.",
  },

  {
    id: "learning-management-system",
    title: "Learning Management System",
    year: "2026",
    category: "Education Platform",
    description:
      "A learning management platform that enables organizations to manage courses, learning content, users and educational workflows.",
    tagline:
      "A learning management platform for organizing courses, educational content and learning-related workflows.",
    image: lmsImage,
    link: "https://sece-lms.vercel.app/",
    linkLabel: "View live project",
    role: "Full Stack Developer",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    problem:
      "Organizations need a centralized platform to manage learning content and provide users with an organized educational experience.",
    features: [
      "Course management",
      "Learning content organization",
      "User management",
      "Education-focused workflows",
    ],
    challenge:
      "Structuring courses and learning content in a way that remains easy to navigate as the amount of content grows.",
    outcome:
      "A centralized learning platform for managing educational content and learning workflows.",
  },

  {
    id: "book-my-cabs",
    title: "Book My Cabs",
    year: "2025",
    category: "Transportation",
    description:
      "A cab booking platform designed to connect users with transportation services through a simple and efficient booking experience.",
    tagline:
      "A cab booking platform focused on making the process of finding and requesting transportation simple and convenient.",
    image: bookMyCabsImage,
    link: "https://bookmycabs.in/",
    linkLabel: "View live project",
    role: "Full Stack Developer",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    problem:
      "Customers need a simple way to discover transportation services and submit cab booking requests without a complicated process.",
    features: [
      "Cab booking experience",
      "Service-oriented interface",
      "Responsive design",
      "Simple booking workflow",
    ],
    challenge:
      "Keeping the booking experience simple while collecting the information needed to process a transportation request.",
    outcome:
      "A responsive cab booking platform that provides users with a straightforward way to request transportation services.",
  },
];