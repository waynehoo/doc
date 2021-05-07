<template>
    <div>
        <div v-html="html"/>
        <p>
<!-- <br>
—————————— <br>
内容链接：<a :href="location">{{location}}</a> -->
        </p>
    </div>
</template>

<script>
    export default {
        props: ['html'],

        created() {
            this.location = window.location
        },
    }
</script>

<style scoped>

</style>