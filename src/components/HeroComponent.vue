<template>
  <div class="hero">
    <div class="hero-text">
      <h1>Hi, I'm Benjamin</h1>
      <h2>{{ text }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      text: 'Fullstack Developer'
    }
  },
  methods: {
    changeText: function () {
      const textArray = ['Fullstack Developer', 'Backend Developer', 'Frontend Developer']

      setInterval(() => {
        this.text = textArray[Math.floor(Math.random() * textArray.length)]
      }, 5000)
    }
  },
  mounted() {
    this.changeText()
  }
}
</script>

<style scoped lang="scss">
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  // height: 60vh;
  min-height: 60vh;
  padding: 2rem;
  margin: 2rem 0;

  @media screen and (max-width: 768px) {
    margin: 25vh auto;
    margin-top: 5vh;
  }

  &-text {
    text-align: center;
    color: white;
    font-size: 2rem;
    font-weight: bold;

    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    padding-bottom: 1.25em;
    &::after {
      content: '';
      display: block;
      margin: 0 auto;
      margin-top: 0.75em;
      width: 100%;
      height: 1px;
      background: #ee72e2;
    }

    & h2 {
      letter-spacing: 0.15em;
      margin: 0 auto;
      white-space: nowrap;
      border-right: 0.15em solid #ee72e2;
      overflow: hidden;
      font-size: 4.5vw;

      animation:
        typing 3.5s steps(40, end),
        blink-caret 0.75s step-end infinite;
    }

    @media screen and (min-width: 768px) {
      & h2 {
        font-size: 2.75rem;
      }
    }
  }
}

// effect typemachine text
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes untyping {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #ee72e2;
  }
}
</style>
