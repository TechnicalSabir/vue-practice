<script>
export default {
  name: "Home",
  data() {
    return {
      colorFull: true,
    }
  },
  computed: {
    applyStyles() {
      return { green: this.colorFull, err: true }
    }
  }
}
</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold" :class="applyStyles">Home Page</h1>
    <button class="bg-red-400 p-1 rounded-sm cursor-pointer" @click="colorFull = !colorFull">Apply Style</button>


  </main>
</template>
<style scoped>
.green {
  background-color: green;
  color: white;
  padding: 10px;
  width: 200pxa;
}

.err {
  color: red;
  background-color: pink;
}
</style>