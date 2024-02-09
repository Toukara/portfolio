<template>
  <footer class="footer">
    <div class="content">
      <p>This site is made by <a href="https://github.com/Toukara" target="_blank">Camus Benjamin</a>.</p>
    </div>
    <div class="contacts">
      <a href="https://github.com/Toukara" target="_blank">GitHub</a>
      <a href="https://twitter.com/Benjamincms_" target="_blank">Twitter</a>
      <a href="https://www.linkedin.com/in/benjamincamus01/" target="_blank">LinkedIn</a>
      <a href="mailto:camus.benjamin@hotmail.com" target="_blank">Mail</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    copyMail: function () {
      navigator.clipboard.writeText('camus.benjamin@hotmail.com')
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 2rem;
  gap: 1rem;
  background-color: #000000;
  border-top: 0.65px solid #ffffff96;
  margin-top: 95px;
  color: #ffffff;

  & p {
    font-size: 1.15rem;
  }

  & a {
    color: #ee72e2;
    &:hover {
      color: #ffffff;
    }
  }
}

.content {
  position: relative;
  left: 40%;
}

.contacts {
  display: flex;
  flex-direction: row;
  gap: 0.85em;
  justify-content: center;

  position: relative;
  left: 65%;

  & a {
    padding: 0.55em 0.95em;
    border-radius: 8px;
    background-color: #ffffff;
    color: #000000;

    &:hover {
      color: #ffffff;
      background-color: #ee72e2;
      //   flip animation
    }
  }

  @keyframes flip {
    0% {
      transform: rotateX(0);
    }
    100% {
      transform: rotateX(360deg);
    }
  }
}
</style>
