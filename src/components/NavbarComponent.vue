<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <Logo />
      <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <div class="navbar-item">
          <a class="navbar-item" href="/about"> About </a>
          <a class="navbar-item" href="/path"> Path </a>
          <a class="navbar-item" href="/blog"> Blog </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from './LogoComponent.vue'
export default {
  components: {
    Logo
  },
  data() {
    return {
      width: window.innerWidth,
      showNav: false
    }
  },

  methods: {
    burgerMenu: function () {
      document.querySelector('.burger-menu').addEventListener('click', () => {
        document.querySelector('.burger-menu').classList.toggle('active')
      })
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth
    })
  }
}
</script>

<style scoped lang="scss">
.navbar,
.navbar-menu {
  padding: 16px;
  background: none;
}

.navbar-burger {
  span {
    height: 2px;
    width: 24px;
  }
  color: white;
  &:hover {
    color: white;
    background: none;
  }
}

// every span in the burger need to have space between them to make it look like a hamburger

.navbar-item {
  color: white;
  &:hover {
    color: white;
    background: none;
  }
}

.navbar-brand {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: 800;
  letter-spacing: 1.5px;
  font-size: 1.8rem;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  line-height: 0;
}
</style>
