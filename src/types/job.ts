export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  requirements: string[];
  salary: string;
  postedDate: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
}

export interface JobFilters {
  search: string;
  location: string;
  category: string;
}
