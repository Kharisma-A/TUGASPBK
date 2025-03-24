<template>
  <div>
    <h2 :style="{ color }">Pilih warna</h2>
    <input type="color" v-model="color">
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(){
    const color = ref("#000000");
    return { color };
  },
};
</script>