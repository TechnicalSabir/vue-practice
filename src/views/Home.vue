<script>
export default {
  name: "Home",
  data() {
    return {
      text: "Hello world",
      tag: `<span>Hello world</span>`
    }
  },
}
</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold">Home Page</h1>
    <div v-html="tag"></div>

  </main>
</template>
