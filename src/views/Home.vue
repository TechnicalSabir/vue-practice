<script>
export default {
  name: "Home",
  methods: {
    getData() {
      const elem = this.$refs.input;
      elem.focus();
      console.log(elem.value);
      elem.style.color = "red";
    }
  }

}
</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold">Home Page</h1>
    <h1>Ref Example</h1>

    <div class="my-4">
      <div class="form-control">
        <label for="">Name</label>
        <input type="text" class="border border-gray-400 py-1 px-2 rounded-sm block" placeholder="Enter Name"
          ref="input">
      </div>
      <button @click="getData" class="bg-blue-400 p-1 rounded-sm mt-5">Click me</button>
    </div>
  </main>
</template>