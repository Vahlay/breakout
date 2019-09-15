<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">My overkill </span>breakout
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <span class="mr-2">Options</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <GameArea/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import GameArea from './components/GameArea.vue';

export default Vue.extend({
  name: 'App',
  components: {
    GameArea,
  },
  data: () => ({
    //
  }),
});
</script>
