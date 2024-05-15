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
          <!-- <a class="navbar-item" href="/about"> About </a>
          <a class="navbar-item" href="/projects"> My Projects </a>
          <a class="navbar-item" href="/contact"> Contact </a> -->
          <router-link to="/" class="navbar-item" :class="{ 'is-active': $route.path === '/' }">Home</router-link>
          <router-link to="/about" class="navbar-item" :class="{ 'is-active': $route.path === '/about' }">About</router-link>
          <router-link to="/projects" class="navbar-item" :class="{ 'is-active': $route.path === '/projects' }">Projects</router-link>
          <router-link to="/contact" class="navbar-item" :class="{ 'is-active': $route.path === '/contact' }">Contact</router-link>
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
.navbar {
  width: 950px;
  padding: 3px;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  align-items: center;

  background: rgba(15, 15, 15, 0.659);

  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.4px);
  -webkit-backdrop-filter: blur(9.4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.navbar-items {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-right: 1.5rem;
}

.navbar-item {
  color: white;
  letter-spacing: 0.65px;
  border-bottom: 2px solid transparent;
  &:hover {
    // font-weight: 800;
    color: #ee72e2;
    background: none;
    // add underline animation
    border-bottom: 2px solid #ee72e2;
    animation: 0.4s ease-in-out 0s 1 normal none running;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  &:focus {
    color: #ee72e2;
    background: none;
  }
  &.is-active {
    color: #ee72e2;
    border-bottom: 2px solid #ee72e2;
    animation: 0.4s ease-in-out 0s 1 normal none running;
  }
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

.navbar-brand {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: 1.5rem;
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
