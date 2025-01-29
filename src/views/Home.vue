<script>
export default {
  name: "Home",
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    handleLogin() {
      console.warn("login data", this.formData);
    }
  }
}
</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold">Home Page</h1>
    <h1>Simple Form Example</h1>
    <p>{{ formData }}</p>

    <div class="my-4">
      <form action="">
        <div class="form-control my-3">
          <label for="">Email</label>
          <input type="email" class="border border-gray-400 py-1 px-2 rounded-sm block" placeholder="Enter Email"
            v-model="formData.email">
        </div>
        <div class="form-control my-3">
          <label for="">Password</label>
          <input type="text" class="border border-gray-400 py-1 px-2 rounded-sm block" placeholder="Enter Password"
            v-model="formData.password">
        </div>
        <button type="button" @click="handleLogin" class="bg-blue-500 py-1 px-2 rounded-sm my-3">Login</button>
      </form>
    </div>
  </main>
</template>