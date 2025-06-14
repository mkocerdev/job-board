import { defineStore } from "pinia";
import type { Job, JobFilters } from "../types/job";
import { jobs } from "../data/jobs";

export const useJobStore = defineStore("jobs", {
  state: () => ({
    jobs: jobs as Job[],
    filters: {
      search: "",
      location: "",
      category: "",
    } as JobFilters,
  }),

  getters: {
    filteredJobs: (state) => {
      return state.jobs.filter((job) => {
        const matchesSearch =
          job.title
            .toLowerCase()
            .includes(state.filters.search.toLowerCase()) ||
          job.company
            .toLowerCase()
            .includes(state.filters.search.toLowerCase());
        const matchesLocation =
          !state.filters.location ||
          job.location
            .toLowerCase()
            .includes(state.filters.location.toLowerCase());
        const matchesCategory =
          !state.filters.category ||
          job.category.toLowerCase() === state.filters.category.toLowerCase();

        return matchesSearch && matchesLocation && matchesCategory;
      });
    },

    getJobById: (state) => (id: number) => {
      return state.jobs.find((job) => job.id === id);
    },
  },

  actions: {
    setFilters(filters: Partial<JobFilters>) {
      this.filters = { ...this.filters, ...filters };
    },
  },
});
