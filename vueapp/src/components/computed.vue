<template>
  <div>
    <p>Harga awal: Rp{{ harga }}</p>
    <p>Diskon: {{ diskon }}%</p>
    <p>Harga Akhir: Rp{{ hargaDiskon }}</p>
    <button @click="diskon += 5">Tambah diskon</button>
  </div>
</template>


<script>
import { ref,computed } from "vue";

export default {
  setup(){
    const harga = ref(100000);
    const diskon = ref(10);

    const hargaDiskon = computed(() => Math.round(harga.value * (1 - diskon.value / 100)));

    return {harga, diskon, hargaDiskon};
  },
};
</script>