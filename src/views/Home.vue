<script>
import User from "../components/inc/User.vue";
export default {
  name: "Home",
  components: {
    User
  },
  data() {
    return {
      users: [
        { name: "Peter", email: "peter@gmail.com" },
        { name: "John", email: "john@gmail.com" },
        { name: "Bruce", email: "bruce@gmail.com" },
        { name: "Harry", email: "harry@gmail.com" },
      ]
    }
  }


}
</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold">Home Page</h1>
    <User :users="users" />

  </main>
</template>
