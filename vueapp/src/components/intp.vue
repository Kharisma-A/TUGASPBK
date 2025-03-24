<template>
    <div>
        <h2>Halo, {{ name }}!</h2>
        <input v-model="name" placeholder="Masukkan nama">
</div>
</template>

<script>
import { ref } from "vue"

export default {
    setup() {
        const name = ref("user");

        return{ name };
    },
};
</script>