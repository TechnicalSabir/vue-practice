<script>
export default {
  name: "Home",
  data() {
    return {
      show: false,
    }
  }
}
</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold">Home Page</h1>
    <h1 v-if="show">If condition 1</h1>
    <h1 v-if="show">If condition 2</h1>
    <h1 v-else>else condition 1</h1>
    <button @click="show=!show" class="bg-blue-400 p-2 rounded-md cursor-pointer">Toggle</button>

  </main>
</template>
