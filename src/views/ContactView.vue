<template>
  <Navbar />
  <div class="container">
    <div class="contacts">
      <h1>Contact</h1>
      <form class="inputs" onsubmit="return false" ref="form">
        <input type="text" placeholder="Name" class="input" name="user_name" />
        <input type="email" placeholder="Email" class="input" />
        <input type="text" placeholder="Subject" class="input" />
        <textarea placeholder="Message" class="textarea"></textarea>
        <button class="button submit" @click="sendEmail">SUBMIT</button>
      </form>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from '../components/NavbarComponent.vue'
import Footer from '../components/FooterComponent.vue'

import { ref } from 'vue'

import emailjs from '@emailjs/browser'

const form = ref(null)
const inputFieldReset = ref(null)

const sendEmail = () => {
  emailjs.sendForm('service_n28ll6c', 'template_wr56qkm', form.value, '0gvfvcKdWwDgo_H_M').then(
    (result) => {
      alert(result.text)
    },
    (error) => {
      alert(error.text)
    }
  )
}
</script>

<style lang="scss" scoped>
.contacts {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-bottom: 5.5rem;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: white;
  }
}

form {
  max-width: 420px;
  margin: 50px auto;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.input,
.textarea {
  background: transparent;
  border: 1px solid #ee72e2;
  color: white;
}

.textarea {
  height: 150px;
  line-height: 150%;
  resize: vertical;
}

::placeholder {
  color: white;
  opacity: 0.85;
}

.submit {
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  background: #ee72e2;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
