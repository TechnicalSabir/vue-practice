<script>
export default {
    name: "Student",
    props: {
        name: String
    }
}
</script>

<template>
    <h1>Student component</h1>
    <h2>Student Name: {{ name }}</h2>
</template>