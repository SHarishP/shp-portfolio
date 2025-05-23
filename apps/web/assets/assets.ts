import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile_img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import mysql from "./mysql.png";
import notion from "./notion.png";
import office from "./office.png";
import web from "./web.png";
import fe from "./fe.png";
import be from "./be.png";
import admin from "./admin.png";
import github from "./github.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  mysql,
  notion,
  office,
  web,
  fe,
  be,
  admin,
  github,
};

export const workData = [
  {
    title: "Company Profile - Bauen",
    description: "Web Design",
    bgImage: "/company-profile.png",
    github: "https://github.com/SHarishP/bauen-profile",
  },
  {
    title: "Event Management",
    description: "Fullstack Web",
    bgImage: "/event-management.png",
    github: "https://github.com/SHarishP/event-management",
  },
  {
    title: "Job Portal - Dream Jobs!",
    description: "Fullstack Web",
    bgImage: "/job-portal.png",
    github: "https://github.com/masdefry/jcwdol01602",
  },
  {
    title: "Clothing Store",
    description: "UI/UX Design",
    bgImage: "/shop-profile.png",
    github: "https://github.com/SHarishP/slicing1ByHarish",
  },
  {
    title: "Portfolio Website",
    description: "Frontend Web",
    bgImage: "/portfolio.png",
    github: "https://github.com/SHarishP/tutorial-portofolio1",
  },
];

export const serviceData = [
  {
    icon: assets.web,
    title: "Full Stack Web Development",
    description:
      "Fullstack web development is the process of building both the front-end and back-end of a web application. It ensures seamless integration between user interfaces and server-side logic for a complete and functional product.",
  },
  {
    icon: assets.fe,
    title: "Front End Web Development",
    description:
      "Front end web development is the practice of creating the visual elements of a website that users interact with directly. It focuses on design, responsiveness, and user experience using modern frameworks and tools.",
  },
  {
    icon: assets.be,
    title: "Back End Web Development",
    description:
      "Back end web development is the process of managing the server, database, and application logic that power a website behind the scenes. It ensures data flows securely and efficiently to support front-end functionality.",
  },
  {
    icon: assets.admin,
    title: "Construction Administration",
    description:
      "Project administration is the coordination and management of tasks, documentation, and resources to ensure smooth project execution. It involves planning, tracking, and optimizing workflows for maximum efficiency and accuracy.",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description:
      "HTML, CSS, JavaScript, TypeScript, Express Js, React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Bachelor in Civil Engineering",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: `Built more than ${workData.length - 1} projects`,
  },
];

export const toolsData = [
  assets.vscode,
  assets.mysql,
  assets.notion,
  assets.office,
  assets.figma,
  assets.git,
];

export const navMenu = [
  {
    label: "Home",
    href: "#top",
  },
  {
    label: "About me",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "My Work",
    href: "#work",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];
