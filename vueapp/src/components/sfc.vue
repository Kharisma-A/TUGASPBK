<template>
  <div>
    <h2>Halo, {{ name }}!</h2>
    <input v-model="name" placeholder="Masukkan nama" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("Pengguna");
    return { name };
  },
};
</script>

<style scoped>
input {
  margin-top: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
