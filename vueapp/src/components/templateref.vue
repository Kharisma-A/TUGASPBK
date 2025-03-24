<template>
  <div>
    <h3 ref="judul">Selamat datang</h3>
    <button @click="ubahTeks">Ubah teks</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup(){
    const judul = ref(null);

    onMounted(() => {
      if (judul.value) {
        judul.value.style.color = "blue";
      }
    }
  )

  const ubahTeks = () => {
    if (judul.value) {
      judul.value.textContent = "teks berhasil diubah";
    }
  };
    return { judul, ubahTeks };
  },
};
</script>