<template>
  <section class="section">
    <div class="title">
      <h2>.{{ index < 10 ? '0' + index : index }} -</h2>
      <h2>{{ title }}</h2>
    </div>
    <p class="section-content" v-if="content">{{ content }}</p>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    index: {
      type: Number
    },
    title: {
      type: String
    },
    content: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.section {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  color: white;
  justify-content: center;

  margin: 0 auto;
  padding: 2rem;

  max-width: 1280px;
}

.title {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: #ffffff;
  font-size: 1.35rem;

  h2 {
    text-transform: uppercase;
    font-weight: 300;
    &:nth-child(2) {
      font-size: 1.4rem;
      letter-spacing: 1.5px;
    }
  }
}

.section-content {
  font-size: 1.15rem;
  max-width: 75vw;
  letter-spacing: 0.65px;
  font-weight: 200;
  line-height: 1.5rem;

  font-family: 'IBM Plex Sans', sans-serif;
}
</style>
