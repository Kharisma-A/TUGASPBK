<template>
  <div>
    <button @click="show = !show">Pesan</button>
    <p v-if="show">Pesan ini disembunyikan</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(){
    const show = ref("false");
    return { show };
  },
};
</script>