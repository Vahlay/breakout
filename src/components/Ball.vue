<template>
    <div class="ball"></div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Ball',
    });
</script>

<style scoped>
    .ball{
        position: absolute;

        width: 32px;
        height: 32px;
        border-radius: 16px;
        background-color: lightseagreen;
    }
</style>
