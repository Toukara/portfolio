<script setup>
import Navbar from '../components/NavbarComponent.vue'
import Hero from '../components/HeroComponent.vue'
import Chapters from '../components/ChaptersComponent.vue'
import Projects from '../components/Projects.vue'

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
    <Chapters v-for="post in posts" :key="post.id" :title="post.title" :content="post.content" :index="post.id" />
    <Projects />
  </main>
</template>
