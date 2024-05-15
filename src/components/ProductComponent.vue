<template>
  <div class="project">
    <h2>{{ project.name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    project: Object
  }
}
</script>

<style scoped lang="scss">
.project {
  border: 1px solid red;

  padding : 2rem;

  h2 {
    color: white;
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
  }
}
</style>
