<template>
  <div>
    <p>Jumlah: {{ jumlah }}</p>
    <button @click="jumlah++">Tambah</button>
    <p v-if="pesan">{{ pesan }}</p>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const jumlah = ref(0);
    const pesan = ref("");

    watch(jumlah, (baru, lama) => {
      if (baru >= 5) {
        pesan.value = "Jumlah sudah mencapai 5 atau lebih!";
      } else {
        pesan.value = "";
      }
    });

    return { jumlah, pesan };
  },
};
</script>
