<script>
export default {
    name: "User",
    data() {
        return {
            userName: "Peter"
        }
    },
    props: {
        getUserName: Function
    }
}
</script>

<template>
    <h1>User Component</h1>
    <button class="bg-blue-400 p-1 rounded-sm cursor-pointer" @click="getUserName(userName)">Send Username</button>
</template>
