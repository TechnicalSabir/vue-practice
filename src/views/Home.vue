<script>
import Child from "../components/inc/Child.vue";
export default {
  name: "Home",
  components: {
    Child
  },
  data() {
    return {
      user: { name: "Peter", email: "peter@gmail.com" }
    }
  },
  methods: {
    getData() {
      console.log("Parent function called")
    }
  }

}
</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold">Home Page</h1>
    <h1 class="text-2xl font-bold">Pass data to child</h1>
    <Child name="John wick" :user="user" :getData="getData" />

  </main>
</template>
