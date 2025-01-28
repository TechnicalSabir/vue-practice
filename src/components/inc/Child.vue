<script>
export default {
    name: "Child",
    props: {
        name: String,
        user: Object,
        getData: Function
    }
}
</script>

<template>
    <h2>Child component - {{ name }}</h2>
    <h3>{{ user.name }} - {{ user.email }}</h3>
    <button class="bg-red-500 p-1 cursor-pointer rounded-sm" @click="getData">Call function</button>
</template>