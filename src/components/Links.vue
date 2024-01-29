<template>
  <div class="links">
    <a href="https://github.com/Toukara" target="_blank">
      <img src="../assets/icons/github.svg" />
    </a>

    <a href="https://twitter.com/Benjamincms_" target="_blank">
      <!-- svg twitter -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"></svg>
    </a>
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
  gap: 1rem;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
