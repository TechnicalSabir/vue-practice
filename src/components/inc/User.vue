<script>
export default {
    name: "User",
    props: {
        users: Array
    }
}
</script>

<template>
    <h2 v-for="item in users">{{ item.name }} - {{ item.email }}</h2>
</template>
