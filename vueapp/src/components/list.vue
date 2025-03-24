<template>
  <div>
    <h3>Daftar buah</h3>
    <ul>
      <li v-for="(buah, index) in buahList" :key="index">{{ buah }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(){
    const buahList = ref(["Apel", "Mangga", "jeruk", "Pisang"]);
    return { buahList };
  },
};
</script>