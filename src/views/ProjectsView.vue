<template>
  <Navbar />
  <div class="container">
    <div class="projects">
      <div v-for="project in getProjects()" :key="project.id" class="project">
        <Product :project="project" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/NavbarComponent.vue'
import Product from '../components/ProductComponent.vue'

import { ref } from 'vue'
import jsonData from '../assets/data/projects.json'

const projects = ref(jsonData)

function getProjects() {
  return projects.value
}
</script>

<style scoped lang="scss">
.projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 5rem;
}
</style>
