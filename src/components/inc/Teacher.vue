<script>
export default {
    name: "Teacher",
    props: {
        name: String,
    }
}
</script>

<template>
    <h1>Teacher component</h1>
    <h1>Teacher Name: {{ name }}</h1>
</template>