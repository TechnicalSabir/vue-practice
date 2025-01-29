<script>
import User from '@/components/inc/User.vue';
export default {
  name: "Home",

  components: {
    User,
  },
  methods: {
    getUserName(name) {
      alert(name)
    }
  }

}
</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold">Home Page</h1>
    <User :getUserName="getUserName"></User>
  </main>
</template>