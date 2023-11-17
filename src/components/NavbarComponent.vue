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
        <div class="navbar-items">
          <a class="navbar-item" href="/about"> About </a>
          <a class="navbar-item" href="/projects"> My Projects </a>
          <a class="navbar-item" href="/contact"> Contact </a>
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
  max-width: 1280px;
  margin: 0 auto;
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

.navbar-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-item {
  color: white;
  letter-spacing: 0.65px;
  &:hover {
    // font-weight: 800;
    color: #ee72e2;
    background: none;
    border: 1px solid #ee72e2;
    animation: 0.4s ease-in-out 0s 1 normal none running;
  }
  &:focus {
    color: #ee72e2;
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
