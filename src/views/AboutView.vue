<template>
  <Navbar />
  <div class="container">
    <div class="about">
      <h1>About Benjamin !</h1>
      <p>Hello there! I'm Benjamin, a passionate full-stack developer based in the beautiful country of France. With a keen interest in web development, I specialize in Vue.js, though my adaptable nature allows me to seamlessly transition to other frameworks as needed.</p>
      <p>My journey into the world of programming began in 2019, driven by a relentless curiosity and a desire to create. As a self-taught developer, I've embraced the challenges and joys of learning independently, constantly pushing myself to expand my skills and deepen my understanding of the ever-evolving landscape of web technologies.</p>
      <p>In every project, I strive to blend creativity with functionality, crafting elegant solutions that not only meet the needs of the user but also leave a lasting impression. Whether it's building intuitive user interfaces, architecting robust backend systems, or optimizing performance, I approach each task with enthusiasm and dedication.</p>
      <p>When I'm not coding, you can find me around a table of table tennis, listening lot of music, watching animes or just spending time with my friends.</p>
      <p>Thank you for visiting my portfolio. I'm excited to share my journey with you and collaborate on exciting projects together. Let's build something amazing!</p>
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
}
</style>
