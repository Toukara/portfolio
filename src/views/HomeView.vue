<script setup>
import Navbar from '../components/NavbarComponent.vue'
import Hero from '../components/HeroComponent.vue'
import Chapters from '../components/chaptersComponent.vue'
import Footer from '../components/FooterComponent.vue'

import { ref } from 'vue'

const posts = ref([
  { id: 1, title: 'Lorem', content: 'Enim ea cillum velit occaecat nostrud. Officia sit sit elit velit adipisicing laboris elit. Nulla nisi ad anim consectetur excepteur non culpa excepteur cillum reprehenderit tempor. Reprehenderit exercitation aliqua dolor est incididunt amet velit. Ex aute enim labore cupidatat ut. Culpa do aliqua magna pariatur Lorem duis labore.' },
  { id: 2, title: 'Not Lorem', content: 'Proident laborum nostrud consectetur non dolor duis. Nisi deserunt et minim consequat ipsum fugiat nisi commodo ex veniam quis. Culpa dolor commodo ullamco nostrud mollit. Ipsum laborum in dolor eu nisi aute elit dolor anim dolore sint est occaecat.' },
  { id: 3, title: 'Projects' }
])
</script>

<template>
  <main>
    <Navbar />
    <Hero />
    <!-- <Chapters v-for="post in posts" :key="post.id" :title="post.title" :content="post.content" :index="post.id" />
    <section class="projects">
      <div class="project">
        <img src="https://via.placeholder.com/300" />
      </div>
      <div class="project">
        <img src="https://via.placeholder.com/300" />
      </div>
      <div class="project">
        <img src="https://via.placeholder.com/300" />
      </div>
    </section>
    <div class="more" @click="$router.push('/projects')">See more</div> -->
    <!-- <Footer /> -->
  </main>
</template>

<style scoped lang="scss">
.projects {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.75rem;
}

.project {
  border: 1px solid black;
  width: 300px;
  height: 300px;

  & img {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
  }

  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }
}

.more {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin: 2rem auto;
  color: white;
  width: 150px;
  // background: red;
  border-radius: 15px;
  border: 1px solid;

  &:hover {
    color: black;
    background: white;
    border: 1px solid white;
    transition: 0.5s;
  }
}
</style>
