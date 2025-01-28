<script>
export default {
  name: "Home",
  data() {
    return {
      technology: ["Java", "PHP", "Node", "HTML"],
      users: [
        { name: "Harry", email: "harry@gmail.com" },
        { name: "Peter", email: "peter@gmail.com" },
        { name: "Sam", email: "sam@gmail.com" },
        { name: "John", email: "john@gmail.com" },
      ]
    }
  }
}
</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold">Home Page</h1>
    <div class="flex gap-20">
      <div class="my-3">
        <h2 class="font-bold">Technology</h2>
        <ul class="list-disc">
          <li v-for="item in technology" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="my-3">
        <h2 class="font-bold">Users</h2>
        <ul class="list-disc">
          <li v-for="item in users" :key="item.name">{{ item.name  }} - {{ item.email }}</li>
        </ul>
      </div>
    </div>

  </main>
</template>
