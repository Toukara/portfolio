<template>
  <div class="hero">
    <div class="hero-text">
      <h1>Hi, I'm Benjamin</h1>
      <h2>Fullstack Developer</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  components: {}
}
</script>

<style>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  height: 60vh;
  max-height: 300px;
  padding: 2rem;
  margin: 2rem 0;

}

.hero-text {
  text-align: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;

  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); */
  /* add neon effect on text */

  text-shadow:
    0 0 10px #ffffff,
    0 0 20px #ffffff;
}
</style>
