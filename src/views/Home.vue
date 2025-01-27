<script>
export default {
  name: "Home",
  data() {
    return {
      email: "admin@gmail.com",
      mobile: 9988776655,
      getName: (name = "Hello Name") => {
        return name
      }
    }
  }
}
</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold">Home Page</h1>
    <h1>{{ 10 + 10 }}</h1>
    <h1>{{ ("Hello").length }}</h1>
    <h1>{{ email }}</h1>
    <h1>{{ mobile }}</h1>
    <h1>{{ mobile }}</h1>
    <h1>{{ getName("Peter parker") }}</h1>
    <h1>{{ mobile = 9988776651 }}</h1>  <!-- We can change the value of the variable too. -->
  </main>
</template>
