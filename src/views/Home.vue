<script>
export default {
  name: "Home",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    getData() {
      console.table(this.$data)
    }
  }
}
</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold" v-on:mouseenter="getConsole()">Home Page</h1>
    <input type="text" placeholder="Enter email" class="border m-2 border-gray-500 rounded-md py-1 px-2"
      v-model="email" />
    <input type="text" placeholder="Enter password" class="border m-2 border-gray-500 rounded-md py-1 px-2"
      v-model="password" />
    <button type="button" class="bg-green-600 p-2 rounded-md cursor-pointer" @click="getData()">Get value</button>
  </main>
</template>
