<script>
export default {
  name: "Home",
  data() {
    return {
      // technology: ["PHP", "Java", "Javascript"],
      technology: [],
      user: "",
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

    <div class="my-3">
      <h1 class="font-bold">Technology</h1>
      <div class="form-control">
        <input type="checkbox" class="cursor-pointer mx-2" id="javaLabel" value="Java" v-model="technology">
        <label for="javaLabel" class="cursor-pointer">Java</label>
      </div>
      <div class="form-control">
        <input type="checkbox" class="cursor-pointer mx-2" id="phpLabel" value="PHP" v-model="technology">
        <label for="phpLabel" class="cursor-pointer">PHP</label>
      </div>
      <div class="form-control">
        <input type="checkbox" class="cursor-pointer mx-2" id="NodejsLabel" value="Javascript" v-model="technology">
        <label for="NodejsLabel" class="cursor-pointer">Javascript</label>
      </div>
    </div>
    <div class="my-2">
      <span>Selected technologies: {{ technology }}</span>
    </div>

    <h2 class="font-bold">Who i am: {{ user }}</h2>
    <div class="my-3">
      <div class="form-control">
        <input type="radio" class="cursor-pointer mx-2" name="user" id="studentLabel" value="Student" v-model="user">
        <label for="studentLabel" class="cursor-pointer">Student</label>
      </div>
      <div class="form-control">
        <input type="radio" class="cursor-pointer mx-2" name="user" id="developerLabel" value="Developer"
          v-model="user">
        <label for="developerLabel" class="cursor-pointer">Developer</label>
      </div>
    </div>
    <button type="button" class="bg-green-600 p-2 rounded-md cursor-pointer" @click="getData()">Get value</button>
  </main>
</template>
