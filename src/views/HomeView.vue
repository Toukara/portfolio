<script setup>
import Navbar from '../components/NavbarComponent.vue'
import Hero from '../components/HeroComponent.vue'
</script>

<template>
  <main>
    <Navbar />
    <Hero />
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
