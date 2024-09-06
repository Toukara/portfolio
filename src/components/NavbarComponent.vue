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
        <div class="theme">
          <div :class="['theme-toggle', { dark: userTheme === 'dark-theme' }]" @click="changeTheme">
            <div class="toggle-switch"></div>
          </div>
        </div>
        <div class="navbar-items">
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
      showNav: false,
      userTheme: localStorage.getItem('theme') || 'dark-theme'
    }
  },

  methods: {
    burgerMenu: function () {
      document.querySelector('.burger-menu').addEventListener('click', () => {
        document.querySelector('.burger-menu').classList.toggle('active')
      })
    },

    changeTheme: function () {
      this.userTheme = this.userTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'
      localStorage.setItem('theme', this.userTheme)
      document.documentElement.setAttribute('data-theme', this.userTheme)
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth
    }),
      document.documentElement.setAttribute('data-theme', this.userTheme)
  }
}
</script>
