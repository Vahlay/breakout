<template>
    <div class="player-bar" :style="{'margin-left': `${playerBarOffset}%`}"></div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {KeyboardEventBus} from '@/KeyboardEventBus';

    export default Vue.extend({
        name: 'PlayerBar',
        data() {
            return {
                playerBarSensibility: 10,
            };
        },
        computed: {
            playerBarOffset() {
                return this.$store.state.playerBarOffset;
            },
        },
        created() {
            KeyboardEventBus.$on('keydown', (event: KeyboardEvent) => {
                switch (event.key) {
                    case 'ArrowLeft':
                        this.$store.commit('removePlayerBarOffset', this.playerBarSensibility);
                        break;
                    case 'ArrowRight':
                        this.$store.commit('addPlayerBarOffset', this.playerBarSensibility);
                        break;
                }
            });
        },
    });
</script>

<style scoped>
    .player-bar {
        width: 15%;
        height: 100%;
        background-color: #000;
    }
</style>
