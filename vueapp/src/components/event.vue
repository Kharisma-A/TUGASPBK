<template>
  <div>
    <h2>Counter: {{ counter }}</h2>
    <button @click="increment">Tambah</button>
    <button @click="decrement">Kurang</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const counter = ref(0);

    const increment = () => {
      counter.value++;
    
    };
    const decrement = () => {
      counter.value--;
    };
    return {counter, increment, decrement};
  },
};
</script>