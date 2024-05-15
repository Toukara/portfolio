<template>
  <div class="links">
    <a class="navbar-item" href="/projects"> >_ Take a look at my projects. </a>
    <a class="navbar-item" href="/about"> >_ More details about me. </a>
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
    font-size: 1.05vw;

    &:hover {
      color: #ee72e2;
      background-color: transparent;

      transition: 0.5s;
    }
  }
}

@media screen and (max-width: 768px) {
  .links {
    display: flex;
    flex-direction: column;
  }
}
</style>
