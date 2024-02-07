<template>
  <div class="links">
    <a class="navbar-item" href="/projects"> >_ Take a look at my projects. </a>
    <div class="folder"></div>
    <a class="navbar-item" href="/contact"> >_ More details about me. </a>
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
  letter-spacing: 0.65px;
  position: absolute;
  top: 75%;

  & a {
    color: white;
    text-decoration: none;
    font-size: 1.25rem;

    &:hover {
      color: #ee72e2;
      background-color: transparent;

      transition: 0.5s;
    }
  }
}
</style>
