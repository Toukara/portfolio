<script>
export default {
  name: 'About'
}
</script>

<template>
  <div class="about">
    <h1>About me!</h1>
    <p>Hey there! I'm <a href="https://github.com/Toukara" target="_blank" class="pink">Benjamin</a>, a fullstack developer living in France. I’m passionate about technology and love building things that solve real problems. While Vue.js is my favorite tool, I am always ready to explore other frameworks and adapt to whatever the project needs.</p>
    <p>I began my coding journey in 2019, teaching myself along the way. I always enjoyed the challenge of learning new things and keeping up with the fast pace of web development.</p>
    <p>When I am working on a project, I am all about the details, staying curious, and giving it my best shot. I love mixing creativity with practical, real-world solutions. Whether I am refining user interfaces, building solid systems, or facing a new challenge, I tackle each task with enthusiasm and precision.</p>
    <p>When I am not coding, I am probably playing or watching table tennis, listening to music, watching anime, or just relaxing with friends.</p>


    <p><a href="https://github.com/Toukara" target="_blank">Github</a> | <a href="https://twitter.com/Benjamincms_" target="_blank">Twitter</a> | <a href="https://www.linkedin.com" target="_blank">LinkedIn</a></p>
    <Links />
  </div>
</template>

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
  border: 1px solid rgba(212, 212, 212, 0.315);

  background-color: rgba(23, 23, 23, 0.23);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  margin: 0 auto;

  margin-top: 5vh;
  padding: 2rem;
  height: 83vh;
  width: 80vw;

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
