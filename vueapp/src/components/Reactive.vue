<template>
    <div>
        <h2>Data pengguna</h2>
        <p>Nama: {{ user.name }}</p>
        <p>umur: {{ user.age }}</p>
        <button @click="updateUser">Ubah data</button>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const user = reactive({
            name: "John",
            age: 24
        });

        const updateUser = () => {
            user.name = "jane";
            user.age = 22;
        };
        return{ user, updateUser };
    },
};
</script>