<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="bg-blue-500 p-3 text-white">
    <ul class="flex justify-between items-center font-bold">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/services">Services</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
  </nav>
</template>
