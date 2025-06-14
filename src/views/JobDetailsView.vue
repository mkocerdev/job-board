<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="job" class="max-w-3xl mx-auto">
      <button
        @click="router.back()"
        class="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
      >
        ← Back to Jobs
      </button>

      <div class="bg-white p-8 rounded-lg shadow">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h1 class="text-3xl font-bold">{{ job.title }}</h1>
            <p class="text-xl text-gray-600 mt-2">{{ job.company }}</p>
          </div>
          <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            {{ job.type }}
          </span>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-8">
          <div class="flex items-center text-gray-600">
            <span class="mr-2">📍</span>
            {{ job.location }}
          </div>
          <div class="flex items-center text-gray-600">
            <span class="mr-2">💰</span>
            {{ job.salary }}
          </div>
          <div class="flex items-center text-gray-600">
            <span class="mr-2">📅</span>
            Posted: {{ job.postedDate }}
          </div>
          <div class="flex items-center text-gray-600">
            <span class="mr-2">🏷️</span>
            {{ job.category }}
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Description</h2>
          <p class="text-gray-700">{{ job.description }}</p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-4">Requirements</h2>
          <ul class="list-disc list-inside text-gray-700">
            <li v-for="(requirement, index) in job.requirements" :key="index">
              {{ requirement }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-12">
      <p class="text-xl text-gray-600">Job not found</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useJobStore } from "../stores/jobStore";

const router = useRouter();
const route = useRoute();
const jobStore = useJobStore();

const job = computed(() => {
  const jobId = Number(route.params.id);
  return jobStore.getJobById(jobId);
});
</script>
