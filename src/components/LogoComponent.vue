<template>
  <div class="logo">
    <router-link to="/">
      <h1>benjamin <span>camus</span></h1></router-link
    >
  </div>
</template>

<style scoped lang="scss">
.logo {
  & h1 {
    font-weight: 900;
    letter-spacing: 1.5px;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      color: #ee72e2;
      transition: 0.3s;
    }
  }

  & span {
    color: #ee72e2;
  }
}
</style>
