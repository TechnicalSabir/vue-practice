<script>
export default {
  name: "Home",
  data() {
    return {
      formData: {
        email: "",
        password: "",
        country: "India",
        technology: [],
        gender: ""
      },
      errors: []
    }
  },
  methods: {
    handleLogin() {
      this.errors = [];
      for (let item in this.formData) {
        if (this.formData[item] === "" || this.formData[item].length === 0) {
          this.errors.push(item);
        }
      }

      if (this.errors.length === 0) {
        alert("Data has been submitted!");
      }
      console.log(this.errors);
    }
  }
}
</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold">Home Page</h1>
    <h1>Simple Form Example</h1>
    <ul>
      <li v-for="item in errors" :key="item" class="text-red-500">{{ item }} not valid</li>
    </ul>
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
        <div class="form-control my-3">
          <label for="">Country</label>
          <select class="border border-gray-400 w-50 py-1 px-2 bg-gray-700 rounded-sm block" v-model="formData.country">
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <div class="flex gap-3">
          <div class="form-control my-3">
            <input type="checkbox" value="Java" v-model="formData.technology">
            <label for="" class="mx-1">Java</label>
          </div>
          <div class="form-control my-3">
            <input type="checkbox" value=".Net" v-model="formData.technology">
            <label for="" class="mx-1">.Net</label>
          </div>
        </div>
        <div class="flex gap-3">
          <div class="form-control my-3">
            <input type="radio" name="gender" value="Male" v-model="formData.gender">
            <label for="" class="mx-1">Java</label>
          </div>
          <div class="form-control my-3">
            <input type="radio" name="gender" value="Female" v-model="formData.gender">
            <label for="" class="mx-1">.Net</label>
          </div>
        </div>
        <button type="button" @click="handleLogin" class="bg-blue-500 py-1 px-2 rounded-sm my-3">Login</button>
      </form>
    </div>
  </main>
</template>