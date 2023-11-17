<template>
  <Navbar />
  <div class="container">
    <h1>Projects</h1>
    <div class="projects">
      <div v-for="project in getProjects()" :key="project.id" class="project">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
        <div class="project-links"><a :href="project.url" target="_blank" v-if="project.url">View Project</a> <a :href="project.github" target="_blank" v-if="project.github">View GitHub</a></div>
        <img :src="project.image" />
        <div class="project-technologies">
          <h3>Technologies</h3>
          <ul>
            <li v-for="tech in project.techs" :key="tech">{{ tech }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from '../components/NavbarComponent.vue'
import Footer from '../components/FooterComponent.vue'

import { ref } from 'vue'
import jsonData from '../assets/data/projects.json'

const projects = ref(jsonData)

function getProjects() {
  return projects.value
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 3rem;
  font-weight: 800;
  color: #ffffff;
}

.projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.75rem;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    align-items: flex-start;
  }
}

.project {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  color: white;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 500px;
  height: 650px;
  max-height: 650px;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 0 10px #ee72e2;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1rem;
    align-self: center;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
    max-height: 100px;

    overflow: hidden;
    text-align: left;
    line-height: 1.5rem;
    text-overflow: ellipsis;
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  &-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 1rem;
    margin-bottom: 1rem;

    a {
      color: white;
      text-decoration: none;
      margin-right: 1rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &-technologies {
    margin-top: 1rem;

    h3 {
      font-size: 1.14rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }

    ul {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 1rem;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-size: 1.14rem;
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
