<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Job Board</h1>

    <!-- Filters -->
    <div class="bg-white p-4 rounded-lg shadow mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          v-model="filters.search"
          type="text"
          placeholder="Search jobs..."
          class="border rounded p-2"
          @input="updateFilters"
        />
        <input
          v-model="filters.location"
          type="text"
          placeholder="Location"
          class="border rounded p-2"
          @input="updateFilters"
        />
        <select
          v-model="filters.category"
          class="border rounded p-2"
          @change="updateFilters"
        >
          <option value="">All Categories</option>
          <option value="Development">Development</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>
    </div>

    <!-- Job Listings -->
    <div class="grid gap-6">
      <div
        v-for="job in filteredJobs"
        :key="job.id"
        class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
        @click="navigateToJob(job.id)"
      >
        <div class="flex justify-between items-start">
          <div>
            <h2 class="text-xl font-semibold">{{ job.title }}</h2>
            <p class="text-gray-600">{{ job.company }}</p>
          </div>
          <span
            class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {{ job.type }}
          </span>
        </div>
        <div class="mt-4">
          <p class="text-gray-600">
            <span class="mr-4">📍 {{ job.location }}</span>
            <span>💰 {{ job.salary }}</span>
          </p>
          <p class="text-gray-500 mt-2">
            {{ job.description.substring(0, 150) }}...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useJobStore } from "../stores/jobStore";
import type { JobFilters } from "../types/job";

const router = useRouter();
const jobStore = useJobStore();

const filters = ref<JobFilters>({
  search: "",
  location: "",
  category: "",
});

const filteredJobs = computed(() => jobStore.filteredJobs);

const updateFilters = () => {
  jobStore.setFilters(filters.value);
};

const navigateToJob = (id: number) => {
  router.push(`/job/${id}`);
};
</script>
