<template>
    <div class="game-area">
        <div class="player-bar-container">
            <player-bar/>
        </div>
    </div>
    
</template>

<script lang="ts">
    import Vue from 'vue';
    import PlayerBar from './PlayerBar.vue';

    export default Vue.extend({
        name: 'GameArea',
        components: {
            PlayerBar,
        },
        methods: {
        },
    });
</script>

<style scoped>
    .game-area{
        background-color: rgba(150,150,0,0.5);
        width   : 100%;
        height  : 100%;

        display: flex;
        flex-direction: column
    }

    .player-bar-container {
        margin-top: auto;
        margin-bottom: 1%;
        width: 100%;
        height: 5%;
    }
</style>
