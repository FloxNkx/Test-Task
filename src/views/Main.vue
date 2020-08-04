<template>
  <div class="main">
    <component :is="CurrentView" />
  </div>
</template>

<script>
import Home from './Home.vue'
import Winners from './Winners.vue';
import Seasons from './Seasons.vue';
import Episode from './Episode.vue';
import TimeLine from './TimeLine.vue';
import Favourite from './Favourite.vue';
import Character from './Character.vue';
import Occupation from './Occupation.vue';

export default {
    components: {
        Home,
        Seasons,
        Episode,
        Character,
        TimeLine,
        Favourite,
        Occupation,
        Winners
    },
    computed: {
      CurrentView() {
          return this.$store.getters.VIEW;
        },
    }
}
</script>