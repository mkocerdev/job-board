import type { Job } from "../types/job";

export const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    category: "Development",
    description:
      "We are looking for a skilled Vue.js developer to build modern SPAs.",
    requirements: [
      "3+ years of experience with Vue.js",
      "Strong TypeScript skills",
      "Experience with modern build tools",
    ],
    salary: "$90,000 - $120,000",
    postedDate: "2025-05-10",
    type: "Remote",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Designify",
    location: "New York, NY",
    category: "Design",
    description:
      "Design beautiful and intuitive user interfaces for web and mobile apps.",
    requirements: [
      "2+ years of UI/UX design experience",
      "Proficiency in Figma",
      "Strong portfolio",
    ],
    salary: "$85,000 - $110,000",
    postedDate: "2025-05-15",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Marketing Specialist",
    company: "Growthify",
    location: "San Francisco, CA",
    category: "Marketing",
    description: "Drive user growth through SEO, content, and paid campaigns.",
    requirements: [
      "3+ years of marketing experience",
      "Experience with digital marketing tools",
      "Strong analytical skills",
    ],
    salary: "$80,000 - $100,000",
    postedDate: "2025-05-17",
    type: "Full-time",
  },
];
