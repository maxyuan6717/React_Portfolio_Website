import React from "react";
import ship_bg from "../images/ship.png";
import coursetable_bg from "../images/coursetable.png";
import ypost_bg from "../images/ypost.png";
import vizathon_bg from "../images/vizathon.png";
import nodicehelp_bg from "../images/nodicehelp.png";
import orpheus_bg from "../images/orpheus.png";
import wli_bg from "../images/wli.png";
import podcast_bg from "../images/podcast.png";
import {
  FaGithub,
  FaLinkedinIn,
  FaRegFilePdf,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import resume from "../files/Max_Yuan_Resume_July_2022.pdf";

export const getSocials = (size) => {
  return [
    {
      href: "mailto: max.yuan@yale.edu",
      color: "green",
      title: "Email",
      icon: <FaEnvelopeOpenText size={size} style={{ display: "block" }} />,
    },
    {
      href: "https://github.com/maxyuan6717",
      color: "purple",
      title: "Github",
      icon: <FaGithub size={size} style={{ display: "block" }} />,
    },
    {
      href: "https://www.linkedin.com/in/max-yuan/",
      color: "blue",
      title: "LinkedIn",
      icon: <FaLinkedinIn size={size} style={{ display: "block" }} />,
    },
    {
      href: resume,
      color: "red",
      title: "Resume",
      icon: <FaRegFilePdf size={size - 2} style={{ display: "block" }} />,
    },
  ];
};

export const educations = [
  {
    name: "Yale University",
    loc: "New Haven, CT",
    degree: "B.S. in Computer Science and Economics",
    gpa: "3.99",
    date: "Winter 2023",
    courses: [
      "Data Structures",
      "Systems Programming",
      "Intensive Algorithms",
      "Unsupervised Learning",
      "Deep Learning",
      "Blockchain & Cryptocurrency",
      "Human-Computer Interaction",
      "Cybersecurity",
      "Database Systems",
      "Game Theory",
      "Discrete Math",
      "Linear Algebra",
      "Probability & Statistics",
      "Macroeconomics",
      "Microeconomics",
      "Econometrics",
    ],
    activities: [
      "Yale Computer Society (Lead Front-end Developer)",
      "Urban Philanthropic Fund (Investment Team)",
    ],
  },
  {
    name: "The Seven Hills School",
    loc: "Cincinnati, OH",
    degree: "High School Diploma",
    gpa: "4.72",
    date: "June 2019",
    courses: [
      "AP Computer Science A",
      "AP Calculus BC",
      "Multivariable Calculus",
    ],
    activities: ["Math Club (Head)", "Science Olympiad (Head)"],
  },
];

export const skills = [
  [
    {
      text: "TypeScript",
      progress: 0.95,
    },
    {
      text: "JavaScript",
      progress: 0.95,
    },
    {
      text: "C/C++",
      progress: 0.9,
    },
    {
      text: "Python",
      progress: 0.87,
    },
    {
      text: "HTML/CSS",
      progress: 0.85,
    },
    {
      text: "Java",
      progress: 0.7,
    },
    {
      text: "R",
      progress: 0.65,
    },
    {
      text: "SQL",
      progress: 0.55,
    },
  ],
  [
    {
      text: "ReactJS",
      progress: 0.95,
    },
    {
      text: "Node.js",
      progress: 0.9,
    },
    {
      text: "React Native",
      progress: 0.8,
    },
    {
      text: "PyTorch",
      progress: 0.55,
    },
  ],
  [
    {
      text: "Git",
      progress: 0.95,
    },
    {
      text: "REST API",
      progress: 0.95,
    },
    {
      text: "MERN Stack",
      progress: 0.95,
    },
    {
      text: "AWS",
      progress: 0.65,
    },
    {
      text: "Heroku",
      progress: 0.65,
    },
    {
      text: "CI/CD",
      progress: 0.6,
    },
    {
      text: "Neural Networks",
      progress: 0.55,
    },
    {
      text: "Docker",
      progress: 0.5,
    },
  ],
];

export const experiences = [
  {
    name: "Gatsby",
    color: "rgba(58, 138, 68, 0.5)",
    loc: "San Francisco, CA",
    link: "https://gatsby.events/",
    title: "Full Stack Engineer",
    date: "August 2021 - Present",
    description: "",
    techs: [
      "ReactJS",
      "React Native",
      "Typescript",
      "Node.js",
      "GraphQL",
      "MongoDB",
      "CI/CD",
    ],
  },
  {
    name: null,
    color: null,
    loc: null,
    link: null,
    title: "Software Engineering Intern",
    date: "Summer 2021",
    description:
      "Built 20+ novel, full-stack features using TypeScript, GraphQL, and MongoDB to provide investors with an end-to-end event planning tool that cultivates meaningful relationships. Contributed 50+ pull requests and 7K+ new lines of code in 12 weeks.",
    techs: ["ReactJS", "Typescript", "Node.js", "GraphQL", "MongoDB", "CI/CD"],
  },
  {
    name: "8VC",
    color: "rgba(112, 0, 255, 0.5)",
    loc: "San Francisco, CA",
    link: "https://www.8vcfellowship.com/",
    title: "Fellow",
    date: "Summer 2021",
    description:
      "1 of 35 fellows selected to engage with Palantir Co-Founder Joe Lonsdale and other founders across the 8VC network on a weekly basis for 10 weeks. Discussed how early stage startups scale in industries like deep tech, biotech, and consumer.",
    techs: [],
  },
  {
    name: "Crockett Lab",
    color: "rgba(15, 77, 146, 0.5)",
    loc: "New Haven, CT",
    link: "http://www.crockettlab.org/",
    title: "Research Assistant",
    date: "February 2021 - May 2021",
    description:
      "Using Natural Language Processing and Neural Networks to investigate how moral outrage and hate speech are combined in online outrage expression and the impact being flamed online has on minority group members. Employing unique GAB and Twitter corpora to adapt an existing neural network for outrage detection to also detect hate speech, possibly revealing the features they share.",
    techs: ["Python", "NLP", "Neural Nets"],
  },
  {
    name: "Krishnaswamy Lab",
    color: "rgba(136, 21, 134, 0.5)",
    loc: "Remote Work",
    link: "https://www.krishnaswamylab.org/workshop",
    title: "Teaching Assistant",
    date: "January 2021",
    description:
      "Holding daily office hours for students enrolled in the “Machine Learning for Single Cell Analysis” workshop. Guiding students through Python implementations of various computational methods, such as PCA, clustering, denoising, and neural networks.",
    techs: ["Python", "Neural Nets", "Google Colab"],
  },
  {
    name: "Golden Section Technology",
    color: "rgba(253, 195, 36, 0.5)",
    loc: "Remote Work",
    link: "https://www.gstdev.com/",
    title: "Part-Time Software and DevOps Engineer",
    date: "August 2020 - May 2021",
    description:
      "Building a proprietary Business Intelligence (BI) Dashboard to view performance and sales data for client projects. Implementing OpenID Connect (OIDC) Authentication in custom web and mobile apps for convenient single sign-on functionality. Continuing all responsibilities held during the previous internship as well.",
    techs: [
      "ReactJS",
      "HTML/CSS",
      "TypeScript",
      "Java",
      "AWS (RDS)",
      "OIDC",
      "Docker",
      "CI/CD",
    ],
  },
  {
    name: null,
    color: null,
    loc: null,
    link: null,
    title: "16-Week DevOps Engineer Intern",
    date: "May 2020 - August 2020",
    description:
      "Leveraged Web API’s to fetch metric data from various software (AWS, Github, New Relic, SonarQube, PipeDrive, Asana, PandaDocs, Jira). Worked with CI/CD platforms like CircleCI, SonarQube, and New Relic APM to streamline the agile scrum development process. Managed AWS cloud resources and root accounts, Okta Single Sign-on policies, and IT Helpdesk requests.",
    techs: [
      "Python",
      "REST API",
      "CI/CD",
      "AWS (IAM, EC2, S3, RDS, Lambda, QuickSight)",
    ],
  },
];

export const projects = [
  {
    src: coursetable_bg,
    name: "Coursetable",
    github: "https://github.com/coursetable/coursetable",
    site: "https://www.coursetable.com/",
    tech: ["ReactJS", "HTML/CSS", "Python", "Node.js", "GraphQL", "Docker"],
    description:
      "Collaborating with 11 other members to maintain and rebuild CourseTable, an intuitive course discovery platform that processes 1.5 million requests from 6,000+ Yale students every semester. Leading the development of the ReactJS front-end web application with 500+ commits. Redesigned the website’s UI and UX to significantly enhance its aesthetics and functionality. Contributed to the back-end crawler that keeps the database populated with updated course data.",
  },
  {
    src: orpheus_bg,
    name: "Orpheus Pledge",
    github: "https://github.com/maxyuan6717/orpheus-frontend",
    site: "https://orpheuspledge.org/",
    tech: ["ReactJS", "HTML/CSS", "Node.js", "MongoDB"],
    description:
      "Built entire full-stack web app (MERN) for a 21-day, CBT-backed digital mindfulness platform that amassed 400+ downloads within the first week of launch. Was 1 of 15 ventures accepted to Yale’s S21 Tsai CITY Accelerator and received the Student Catalyst Award. Also featured in Contrary Capital Lightning Talks, MIT Medical Podcast, Yale Herald, and Study Breaks Magazine.",
  },
  {
    src: ship_bg,
    name: "Ship",
    github: "https://github.com/kevinz917/ship-client",
    site: "https://www.ship.wtf/login",
    tech: ["ReactJS", "HTML/CSS", "Node.js", "MongoDB"],
    description:
      'Collaborated with 1 other developer to build Ship, a dating platform that allows students to be the matchmaker. Over half of Yale\'s undergrads registered within 4 hours of launch, and ~1.5k "ships" sailed.',
  },
  {
    src: ypost_bg,
    name: "YPost",
    github: "https://github.com/kevinz917/ypost-client",
    site: "https://ypost.app/",
    tech: ["ReactJS", "HTML/CSS", "Node.js", "MongoDB"],
    description:
      "Collaborated with 1 other developer to build YPost, a platform where you can send virtual holiday postcards to other Yalies. Over 800 postcards were sent within just the first 2 hours after launching, and over 11,000 postcards have been sent since.",
  },
  {
    src: vizathon_bg,
    name: "Vizathon 2021",
    github: "https://github.com/maxyuan6717/Vizathon-2021",
    site: "https://mj-vizathon.netlify.app/",
    tech: ["ReactJS", "HTML/CSS", "Python", "Selenium", "Pandas"],
    description:
      "Created a data visualization that analyzes the rise of anti-asian hate during the COVID-19 pandemic. Won the award for the most aesthetic data visualizations at Vizathon 2021. https://devpost.com/software/social-media-agent-of-transmission",
  },
  // {
  //   src: wli_bg,
  //   name: "WLI Capsule",
  //   github: "https://github.com/maxyuan6717/wli-frontend",
  //   site: "https://capsule.yalewli.org/",
  //   tech: ["ReactJS", "HTML/CSS", "Node.js", "MongoDB"],
  //   description: "TBD",
  // },
  // {
  //   src: nodicehelp_bg,
  //   name: "WYBC Issue 27",
  //   github: "https://github.com/maxyuan6717/wybc-8ball",
  //   site: "https://nodicehelp.live/",
  //   tech: ["ReactJS", "HTML/CSS"],
  //   description: "TBD",
  // },
  // {
  //   src: podcast_bg,
  //   name: "Pass the Mic",
  //   github: "https://github.com/maxyuan6717/wybc-podcast",
  //   site: "https://wybcpodcast.com/",
  //   tech: ["ReactJS", "HTML/CSS"],
  //   description: "TBD",
  // },
  {
    src: null,
    name: "React Portfolio Website",
    github: "https://github.com/maxyuan6717/React_Portfolio_Website",
    site: null,
    tech: ["ReactJS", "HTML/CSS"],
    description:
      "Built this portfolio website from scratch using ReactJS and HTML/CSS",
  },
  {
    src: null,
    name: "GoodWork",
    github: "https://github.com/maxyuan6717/GoodWork",
    site: null,
    tech: ["Python", "Java", "Pandas", "NumPy", "Google Firebase"],
    description:
      "Collaborated with 1 other developer to build GoodWork, an application that finds local volunteer opportunities involving physical exercise to benefit both the community and the user. Developed the back-end infrastructure that crawls the web for volunteer opportunities, incorporates natural language processing to select opportunities that involve physical exercise, and then uses a Firebase realtime database to store the results.",
  },
  {
    src: null,
    name: "Competitive Programming",
    github: "https://github.com/maxyuan6717/Competitive_Programming",
    site: null,
    tech: ["C/C++", "Java"],
    description:
      "Learned and drilled various data structures and algorithms in order to solve complex coding challenges over the course of 3 years. Currently a USACO Platinum Division contestant, 2-time Google Code Jam Round 2 Qualifier, and 5th place finisher at the International ACSL All-Star Competition. This repository contains my solutions to 600+ practice coding problems.",
  },
  {
    src: null,
    name: "6 DOF Robot Arm",
    github: "https://github.com/maxyuan6717/6_DOF_Robot_Arm",
    site: "https://www.youtube.com/watch?v=5SvWvZu7d08",
    tech: ["CAD Modeling", "Arduino (C/C++)", "Circuitry", "3D Printing"],
    description:
      "Designed, built, wired, and programmed a 6 DOF robot arm from scratch. The robot arm mimics the movements of a smaller controller arm and can be programmed to repeat a sequence of movements.",
  },
];
