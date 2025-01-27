<script>
export default {
  name: "Home",
  data(){
    return {
      count: 0,
    }
  },
  methods: {
    getData(data){
      alert(data);
    },
    getConsole(data){
      console.log("Focusing an element.")
    }
  }
 
}
</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold" v-on:mouseenter="getConsole()">Home Page</h1>
    <button type="button" class="bg-red-500 text-white rounded-md px-2 py-1 text-sm cursor-pointer m-2" v-on:click="getData(`Button1 clicked.`)">Single click1</button>
    <button type="button" class="bg-red-500 text-white rounded-md px-2 py-1 text-sm cursor-pointer m-2" v-on:click="getData(`Button2 clicked.`)">Single click2</button>
    <button type="button" class="bg-red-500 text-white rounded-md px-2 py-1 text-sm cursor-pointer m-2" v-on:dblclick="getData(`Button1 Double clicked.`)">Double click1</button>
    <button type="button" class="bg-blue-500 text-white rounded-md px-2 py-1 text-sm cursor-pointer m-2" v-on:click="count++">Count: {{ count }}</button>

  </main>
</template>
