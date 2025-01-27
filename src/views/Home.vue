<script>
export default {
  name: "Home",
  data() {
    return {
      count: 0,
    }
  },
}
</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold" v-on:mouseenter="getConsole()">Home Page</h1>
    <input type="text" placeholder="Enter value" class="border border-gray-500 rounded-md py-1 px-2" v-model="count" />
    <h2>{{ count }}</h2>
  </main>
</template>
