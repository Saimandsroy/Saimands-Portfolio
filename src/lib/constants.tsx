import { i18n } from "@lingui/core";
import { t } from "@lingui/core/macro";

import {
  ApiLogo,
  JavaLogo,
  NextJsLogo,
  NodeJsLogo,
  PhonePeLogo,
  PostgreSqlLogo,
  ReactLogo,
  RedisLogo,
  SpringBootLogo,
  TailwindCssLogo,
  TypeScriptLogo,
} from "@/components/icons";

// EmailJS
export const EMAILJS_PUBLIC_KEY = "mF8cauSRsQ7AxzVBf";
export const EMAILJS_SERVICE_ID = "hello_123";
export const EMAILJS_TEMPLATE_ID = "template_6jp5ybh";

// Links
export const CONTACT_EMAIL = "saimandsroy@gmail.com";
export const GITHUB_LINK = "https://github.com/Saimandsroy";
export const GITHUB_AVATAR_LINK =
  "https://github.com/Saimandsroy.png";
export const INSTAGRAM_LINK = "https://www.instagram.com/mat.muszarski/";
export const LINKEDIN_LINK =
  "https://www.linkedin.com/in/saimands-roy-887a78234/";
export const WEBSITE_LINK = "https://matmuszarski.space";
export const OLD_PORTFOLIO_WEBSITE_LINK = "https://2d.matmuszarski.space";

// Scrolling
export const AVAILABLE_SCROLLING_SECTIONS = [
  "#42f876",
  "#42f876",
  "#42f876",
  "#e56d1e",
  "#e56d1e",
  "#e56d1e",
  "#e5b61e",
  "#e5b61e",
  "#e5b61e",
  "#ffea80",
  "#ffea80",
  "#2d3efa",
];

// Job experience
export type JobExperienceItemDialogData = {
  logoImgSrc: string;
  learnMoreUrl: string;
  countryEmoji: string;
  StartedDate: () => string;
  EndedDate: () => string;
  Location: () => string;
  Occupation: () => string;
  company: string;
  Description: () => string;
  Responsibilities: () => React.ReactNode;
  SkillsNeeded: () => React.ReactNode;
};
export const JOB_EXPERIENCE_LIST = {
  beniaminek: {
    logoImgSrc: "/assets/textures/asteroids/plecos-logo.png",
    learnMoreUrl: "https://kuberfashions.in",
    countryEmoji: "🇮🇳",
    StartedDate: () =>
      i18n.date(new Date("08-01-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("10-31-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Location: () => t`Bengaluru, India`,
    Occupation: () => t`Web Development Lead & Core Member`,
    company: "PLECOS",
    Description: () =>
      t`Leading full-stack development of a scalable EdTech platform for learners and educators.`,
    Responsibilities: () => (
      <>
        <li>
          {t`Architected scalable applications with Next.js, Node.js, and DynamoDB`}
        </li>
        <li>
          {t`Built learner and educator dashboards with live classes, video uploads, and test modules`}
        </li>
        <li>
          {t`Integrated Kafka and Redis for real-time communication and caching`}
        </li>
      </>
    ),
    SkillsNeeded: () => (
      <>
        <li>{t`Next.js / Node.js`}</li>
        <li>{t`DynamoDB / Redis / Kafka`}</li>
        <li>{t`System Architecture`}</li>
        <li>{t`Team Leadership`}</li>
      </>
    ),
  } as JobExperienceItemDialogData,

  esc: {
    logoImgSrc: "/assets/textures/asteroids/femur-logo.jpg",
    learnMoreUrl: "https://femur.studio",
    countryEmoji: "🇮🇳",
    StartedDate: () =>
      i18n.date(new Date("12-01-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("03-31-2026"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Location: () => t`Remote, India`,
    Occupation: () => t`Senior Software Engineer`,
    company: "Femur Studio",
    Description: () =>
      t`Building and scaling full-stack digital products for a creative tech studio.`,
    Responsibilities: () => (
      <>
        <li>
          {t`Architected and shipped full-stack features across multiple client projects`}
        </li>
        <li>
          {t`Led frontend development using React and Next.js with modern UI/UX standards`}
        </li>
        <li>
          {t`Collaborated remotely with cross-functional teams on product delivery and deadlines`}
        </li>
      </>
    ),
    SkillsNeeded: () => (
      <>
        <li>{t`React / Next.js`}</li>
        <li>{t`Node.js / REST APIs`}</li>
        <li>{t`Tailwind CSS`}</li>
        <li>{t`Remote collaboration`}</li>
      </>
    ),
  } as JobExperienceItemDialogData,

  ruigrok: {
    logoImgSrc: "/assets/textures/asteroids/dextop-logo.png",
    learnMoreUrl: "https://chotubot.com",
    countryEmoji: "🌐",
    StartedDate: () =>
      i18n.date(new Date("11-01-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("12-31-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Location: () => t`Remote`,
    Occupation: () => t`Full Stack Intern`,
    company: "Dextop",
    Description: () =>
      t`Contributed to ChhotuBot.com — an AI-powered chatbot platform serving real users.`,
    Responsibilities: () => (
      <>
        <li>
          {t`Integrated a full payment gateway flow for ChhotuBot.com enabling seamless user subscriptions`}
        </li>
        <li>
          {t`Built and shipped core frontend components with React for the chatbot interface`}
        </li>
        <li>
          {t`Collaborated on API integrations connecting frontend with AI bot response workflows`}
        </li>
      </>
    ),
    SkillsNeeded: () => (
      <>
        <li>{t`React / Frontend Development`}</li>
        <li>{t`Payment Gateway Integration`}</li>
        <li>{t`REST APIs / Node.js`}</li>
        <li>{t`AI Integration`}</li>
      </>
    ),
  } as JobExperienceItemDialogData,
};

// Certificates
export type CertificateData = {
  Title: () => React.ReactNode;
  authorName: string;
  websiteLink: string;
  StartedDate: () => React.ReactNode;
  EndedDate: () => React.ReactNode;
  Icon: () => React.ReactNode;
  isRelevant: boolean;
};

export const CERTIFICATES_LIST: CertificateData[] = [
  {
    Title: () => t`GDSC Gen AI Study Jams`,
    authorName: "Google Developer Student Clubs, GGV",
    websiteLink: "https://developers.google.com/profile/badges",
    StartedDate: () =>
      i18n.date(new Date("05-29-2024"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("05-29-2024"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <span className="font-emoji">🤖</span>,
    isRelevant: true,
  },
  {
    Title: () => t`Equilibrio Techfest — Tech Lead`,
    authorName: "GGU Bilaspur",
    websiteLink: "https://ggu.ac.in",
    StartedDate: () =>
      i18n.date(new Date("03-01-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("03-31-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <span className="font-emoji">⚡</span>,
    isRelevant: true,
  },
  {
    Title: () => t`Placement Head — Central University`,
    authorName: "Guru Ghasidas Vishwavidyalaya",
    websiteLink: "https://ggu.ac.in",
    StartedDate: () =>
      i18n.date(new Date("01-01-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date(), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <span className="font-emoji">🎓</span>,
    isRelevant: true,
  },
  {
    Title: () => t`IEEE Winner — India Global Representative`,
    authorName: "IEEE",
    websiteLink: "https://ieee.org",
    StartedDate: () =>
      i18n.date(new Date("09-01-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("09-30-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <span className="font-emoji">🏆</span>,
    isRelevant: true,
  },
  {
    Title: () => t`Java & Spring Boot — Complete Course`,
    authorName: "Udemy",
    websiteLink:
      "https://www.udemy.com/course/spring-boot-tutorial-for-beginners",
    StartedDate: () =>
      i18n.date(new Date("12-01-2024"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("12-31-2024"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <span className="font-emoji">☕</span>,
    isRelevant: true,
  },
  {
    Title: () => t`Problem Solving Certificate`,
    authorName: "HackerRank",
    websiteLink:
      "https://www.hackerrank.com/skills-verification/problem_solving_basic",
    StartedDate: () =>
      i18n.date(new Date("10-01-2024"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("10-31-2024"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <span className="font-emoji">💻</span>,
    isRelevant: true,
  },
  {
    Title: () => t`Generative AI Fundamentals`,
    authorName: "Google Cloud Skills Boost",
    websiteLink: "https://cloudskillsboost.google/paths/118",
    StartedDate: () =>
      i18n.date(new Date("03-01-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("03-31-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <span className="font-emoji">☁️</span>,
    isRelevant: false,
  },
];

// Projects
export type ProjectData = {
  Title: () => React.ReactNode;
  Description: () => React.ReactNode;
  Icons: () => React.ReactNode;
  thumbnailImgUrl: string;
  liveLink: string;
  codeLink: string | null;
};
export const PROJECTS_LIST: ProjectData[] = [
  {
    Title: () => t`LinkManagement.net`,
    Description: () =>
      t`A production-grade SEO workflow platform serving 60K+ active bloggers with automated link-building pipelines, multi-tier approvals, and a secure digital wallet for contractor payouts.`,
    Icons: () => (
      <>
        <li>
          <ReactLogo className="size-9" />
        </li>
        <li>
          <NodeJsLogo className="size-9" />
        </li>
        <li>
          <PostgreSqlLogo className="size-9" />
        </li>
        <li>
          <RedisLogo className="size-9" />
        </li>
      </>
    ),
    codeLink: "https://github.com/Saimandsroy/linkmanagementbackend",
    liveLink: "https://linkmanagement.net",
    thumbnailImgUrl: "/assets/pictures/linkmanagement_thumbnail.png",
  },
  {
    Title: () => t`KuberFashion`,
    Description: () =>
      t`A production-ready full-stack e-commerce platform for clothing brands with product catalogs, shopping carts, order workflows, admin portal — Dockerized and live on Google Cloud VPS.`,
    Icons: () => (
      <>
        <li>
          <ReactLogo className="size-9" />
        </li>
        <li>
          <JavaLogo className="size-9" />
        </li>
        <li>
          <SpringBootLogo className="size-9" />
        </li>
        <li>
          <PostgreSqlLogo className="size-9" />
        </li>
      </>
    ),
    codeLink: "https://github.com/Saimandsroy/kuberFashion_backend_2025",
    liveLink: "https://kuberfashions.in",
    thumbnailImgUrl: "/assets/pictures/kuberfashion_thumbnail.png",
  },
  {
    Title: () => t`OutreachOS — prane.one`,
    Description: () =>
      t`An AI-powered outbound automation platform managing email & WhatsApp campaigns at scale — CSV lead uploads, Google Gemini AI copy generation, inbox warmup, and multi-sender management.`,
    Icons: () => (
      <>
        <li>
          <NextJsLogo className="size-9" />
        </li>
        <li>
          <TypeScriptLogo className="size-9" />
        </li>
        <li>
          <PostgreSqlLogo className="size-9" />
        </li>
        <li>
          <RedisLogo className="size-9" />
        </li>
      </>
    ),
    codeLink: "https://github.com/Saimandsroy/PLECOS_WEB2025",
    liveLink: "https://prane.one",
    thumbnailImgUrl: "/assets/pictures/metersquared_thumbnail.png",
  },
  {
    Title: () => t`ChhotuBot.com`,
    Description: () =>
      t`An AI-powered chatbot platform with seamless user subscriptions — built React frontend, integrated full PhonePe payment gateway, and connected AI bot response workflows via REST APIs.`,
    Icons: () => (
      <>
        <li>
          <ReactLogo className="size-9" />
        </li>
        <li>
          <NodeJsLogo className="size-9" />
        </li>
        <li>
          <PhonePeLogo className="size-9" />
        </li>
        <li>
          <ApiLogo className="size-9" />
        </li>
      </>
    ),
    codeLink: "https://github.com/Saimandsroy",
    liveLink: "https://chhotubot.com",
    thumbnailImgUrl: "/assets/pictures/outreachos_thumbnail.png",
  },
  {
    Title: () => t`MeterSquared — Interior Design Platform`,
    Description: () =>
      t`A modern interior home design platform built in Next.js, helping users explore curated design inspirations, connect with designers, and visualize their dream spaces.`,
    Icons: () => (
      <>
        <li>
          <NextJsLogo className="size-9" />
        </li>
        <li>
          <ReactLogo className="size-9" />
        </li>
        <li>
          <TailwindCssLogo className="size-9" />
        </li>
      </>
    ),
    codeLink: "https://github.com/Saimandsroy",
    liveLink: "https://metersquared.in",
    thumbnailImgUrl: "/assets/pictures/chhotubot_thumbnail.png",
  },
];
