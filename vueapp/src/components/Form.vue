<template>
  <div>
    <h2>Formulir</h2>
    <input v-model="name" placeholder="Masukkan nama" />
    <button @click="submitForm">Kirim</button>
    <p v-if="submitted">Halo, {{ name }}!</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("");
    const submitted = ref(false);

    const submitForm = () => {
      submitted.value = true;
    };

    return { name, submitted, submitForm };
  },
};
</script>
