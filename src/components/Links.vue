<template>
  <div class="links">
    <a class="navbar-item" href="/projects"> >_ Projects </a>
    <a class="navbar-item" href="/contact"> >_ See More </a>
    <a class="navbar-item" href="/contact" v-text="test"></a>
  </div>
</template>

<script>
export default {
  name: 'Links'
}
</script>

<style scoped lang="scss">
.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2.95rem;

  position: absolute;
  top: 75%;
}
</style>
