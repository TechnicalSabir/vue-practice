<script>
import Student from '@/components/inc/Student.vue';
import Teacher from '@/components/inc/Teacher.vue';
export default {
  name: "Home",
  data() {
    return {
      studentName: "Harry",
      teacherName: "Peter"
    }
  },
  components: {
    Student,
    Teacher
  },
}

</script>
<template>
  <main class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold">Home Page</h1>
    <h1>Props Example</h1>
    <Student :name="studentName"></Student>
    <Teacher :name="teacherName"></Teacher>
  </main>
</template>