<template>
    <div class="brick"></div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Brick',
    });
</script>

<style scoped>
    .brick{
        width   : 85%;
        height  : 80%;
        margin  : auto;

        background-color: lightcoral;
    }
</style>
