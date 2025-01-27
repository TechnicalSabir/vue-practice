<script>
export default {
  name: "Home",
  data() {
    return {
      email: "admin@gmail.com",
      mobile: 9988776655,
    }
  },
  methods: {
    getName(name) {
      return name
    },
    getData() {
      return {
        name: "Harry",
        email: this.email
      }
    }
  }
}
</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold">Home Page</h1>
    <h1>Email: {{ email }}</h1>
    <h1>Name: {{ getName("John Wick") }}</h1>
    <h1>Name2: {{ getName("Bruce Banner") }}</h1>
    <h1>All Data: {{ getData() }}</h1>
    <h1>Name: {{ getData().name }}</h1>
    <h1>Email: {{ getData().email }}</h1>

  </main>
</template>
