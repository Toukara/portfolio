<template>
  <Navbar />
  <div class="container">
    <div class="about">
      <h1>About Benjamin!</h1>
      <p>Hey there! I'm <a href="https://github.com/Toukara" target="_blank" class="pink">Benjamin</a>, a fullstack developer living in France. I'm passionate about technology, and I have a soft spot for Vue.js, though I'm pretty adaptable and can switch gears to other frameworks when needed.</p>
      <p>~ in 2019 I took my first steps into the world of programming as self-taught, I enjoyed the challenges, constantly pushing myself to expand my skills and keep up with the ever-evolving landscape of web technologies.</p>
      <p>When I tackle a project, my keen eye for detail, insatiable curiosity, and serious dedication shine through. I blend creativity with pragmatism, crafting solutions that leave a mark. Whether perfecting user interfaces, building robust systems, or adapting to new challenges, I approach each task with precision and enthusiasm.</p>
      <p>When I'm not lost in code, you might find me around a table tennis table or watching some matches, listening music, watching anime, or simply chilling with my friends.</p>
      <p>Thanks for visiting my portfolio! I'm excited to share my journey with you and potentially collaborate on some exciting projects. Let's make something incredible together!</p>

      <p><a href="https://github.com/Toukara" target="_blank">Github</a> | <a href="https://twitter.com/Benjamincms_" target="_blank">Twitter</a> | <a href="https://www.linkedin.com" target="_blank">LinkedIn</a></p>
      <Links />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/NavbarComponent.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: left;
  gap: 3rem;

  border-radius: 12px;
  border: 1px solid rgba(137, 137, 137, 0.044);

  background-color: rgba(23, 23, 23, 0.23);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  margin: 14vw;
  margin-top: 5vh;
  padding: 2rem;
  height: 83vh;
  width: 75vw;

  p {
    font-size: 1.35rem;
    line-height: 1.75rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;

    text-decoration: underline;
    text-decoration-color: #ee72e2;
    text-underline-offset: 8px;
    text-decoration-thickness: 3px;
  }

  span {
    color: #ee72e2;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #ee72e2;
    }
  }

  .pink {
    color: #ee72e2;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 1.5px;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
