<template v-slot:extension>
  <v-container>
    <v-tabs
        centered
        slider-color="red"
        background-color="rgb(21,28,21)"
        class='tabs'
      >
        <v-tab
          v-for="i in 5"
          :key="i"
        >
          <v-btn icon color="green" :to="{path: '/season/' + i}" v-on:click="changeSeason(i)">
            Season {{i}}
          </v-btn>
        </v-tab>
    </v-tabs>
    <season-list :episodes="EpisodesList"></season-list>
  </v-container>
</template>

<script>
import SeasonList from './SeasonList.vue'
export default {
    name: 'seasons',
    components: {
      seasonList: SeasonList
    },
    methods: {
      changeSeason(i){
        this.$store.dispatch('GET_EPISOD', i);
      }
    },
    computed: {
      EpisodesList() {
          return this.$store.getters.EPISODES;
    },
  }
}
</script>

<style>
  .tabs{
    border-radius: 15px;
    border: 1px solid #041909;
  }
</style>