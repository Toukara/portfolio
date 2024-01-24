<template>
  <div class="hero">
    <div class="hero-text">
      <h1>Hello World !,</h1>
      <h1>I am <span>Benjamin</span></h1>
    </div>
    <h2 class="auto-text">{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    changeText: function () {
      const textArray = ['Integrator Web', 'Backend Developer', 'Frontend Developer', 'Fullstack Developer']

      const maxWordLength = Math.max(...textArray.map((word) => word.length))

      let currentWordIndex = Math.floor(Math.random() * textArray.length)
      let currentWord = textArray[currentWordIndex]

      let index = 0

      const typeText = () => {
        this.text = currentWord.slice(0, index++)

        if (index <= currentWord.length) {
          setTimeout(typeText, 150)
        } else {
          setTimeout(eraseText, 5000)
        }
      }

      const eraseText = () => {
        this.text = currentWord.slice(0, index)

        if (index > 0) {
          index--
          setTimeout(eraseText, 150)
        } else {
          currentWordIndex = (currentWordIndex + 1) % textArray.length
          currentWord = textArray[currentWordIndex]
          setTimeout(typeText, maxWordLength * 50)
        }
      }

      typeText()
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
  height: 75vh;
  padding: 2rem;
  margin-top: 5vh;
  margin-bottom: 5vh;

  background-image: radial-gradient(rgb(30, 30, 30) 1px, transparent 0);
  background-size: 40px 40px;
  background-position: -19px -19px;
  // add animation to background
  animation: gradient 2s alternate infinite;

  $randomPx: 40px;

  @keyframes gradient {
    to {
      @for $i from 1 through 10 {
        background-position: random(100) + $randomPx random(100) + $randomPx; 
      }
    }
  }

  border-top: 0.5px solid rgba(255, 255, 255, 0.15);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.15);

  @media screen and (max-width: 768px) {
    margin: 25vh auto;
    margin-top: 5vh;
  }

  &-text {
    text-align: center;
    color: white;
    font-weight: bold;

    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    padding-bottom: 1.25em;

    & h1 {
      font-size: 2.85vw;
      margin-top: -0.55em;
      letter-spacing: 0.125em;
      &:nth-child(1) {
        font-weight: bolder;

        &:hover {
          &::before {
            animation: slideLeft 0.5s forwards;
          }
        }

        &::before {
          content: '>';
          color: #ee72e2;
          position: relative;
        }
      }
      &:nth-child(2) {
        margin-left: 1.25em;
      }
    }

    & span {
      color: #ee72e2;
      text-shadow: 2px 2px 4px rgba(238, 114, 226, 0.5);

      &:hover {
        color: #ffffff;
        transition: 0.3s;
        text-decoration: none;
        text-shadow: none;

        &::before,
        &::after {
          color: #ee72e2;
          transition: 0.3s;
        }
      }

      &::before {
        content: '<';
        color: #ffffff;
        margin-right: 8px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        font-weight: bold;
      }

      &::after {
        content: '/>';
        color: #ffffff;
        margin-left: 8px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        font-weight: bold;
        font-size: 0.85em;
      }
    }

    &::after {
      content: '';
      display: block;
      margin: 0 auto;
      margin-top: 0.75em;
      width: 100%;
      height: 1px;
      background: #ee72e2;
    }

    @media screen and (min-width: 768px) {
      & h2 {
        font-size: 2.75rem;
      }
    }
  }
}

.auto-text {
  letter-spacing: 0.15em;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  font-size: 2.5vw;
  font-weight: bold;
  margin-top: 0.75em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: #ffffff;

  &::after {
    content: '|';
    display: inline-block;
    vertical-align: top;
    margin-left: 8px;
    font-style: normal;
    animation: blink 0.7s infinite alternate;
  }
}

@keyframes blink {
  to {
    opacity: 0;
  }
}

@keyframes slideLeft {
  0% {
    left: 0em;
  }
  100% {
    left: -0.15em;
  }
}
</style>
