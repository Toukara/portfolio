<template>
  <div class="hero">
    <div class="hero-text">
      <h1>{{ translations.test }}</h1>
      <h1>I am <span>Benjamin</span></h1>
    </div>
    <h2 class="auto-text">{{ text }}</h2>

    <Links />
  </div>
</template>

<script>
import { computed } from 'vue'

import Links from './LinksWrapper.vue'
import { translations, setLanguage, currentLanguage } from '../assets/translation'
export default {
  name: 'Hero',
  components: {
    Links
  },

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
  },
  setup() {
    const trans = computed(() => translations.value)
    const lang = currentLanguage
    return { translations: trans, currentLanguage: lang }
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
  max-height: 75vh;
  padding: 2rem;
  margin-top: 5vh;
  margin-bottom: 5vh;

  /* From https://css.glass */
  border-radius: 12px;
  border: 1px solid rgba(212, 212, 212, 0.315);

  background-color: rgba(23, 23, 23, 0.23);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  margin-left: 14vw;
  margin-right: 14vw;
  margin-top: 5vh;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

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
      font-family: 'IBM Plex Sans', sans-serif;

      color: #ee72e2;
      text-shadow: 4px 2px 4px rgba(246, 55, 227, 0.816);
      letter-spacing: 0.105em;

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
  font-size: 2vw;
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
