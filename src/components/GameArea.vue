<template>
    <div class="game-area">
        <div class="bricks-container">
            <brick v-for="n in 20" :key="n"/>
        </div>

        <div class="player-bar-container">
            <player-bar/>
        </div>

        <ball/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import PlayerBar from './PlayerBar.vue';
    import Brick from './Brick.vue';
    import Ball from './Ball.vue';

    export default Vue.extend({
        name: 'GameArea',
        components: {
            PlayerBar,
            Brick,
            Ball,
        },
    });
</script>

<style scoped>
    .game-area {
        background-color: rgba(150, 150, 0, 0.5);
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
    }

    .bricks-container {
        margin: 1% auto;
        width: 96%;

        display: grid;
        grid-template-columns: repeat(auto-fill, 10%);
        grid-auto-rows: 5vh;
    }

    .player-bar-container {
        margin-top: auto;
        margin-bottom: 1%;
        width: 100%;
        height: 4%;
    }
</style>
