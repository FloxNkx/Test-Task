<template>
    <v-timeline>
        <v-timeline-item
        v-for="(timeline, i) in timeline"
        :key="i"
        color="yellow"
        small
        >
        <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${timeline.color}--text`">{{timeline.date}}</h2>
            <div>
                {{timeline.text}}
            </div>
        </div>
        </v-timeline-item>
  </v-timeline>
</template>

<script>

  export default {
    name: 'timeline',
    props: ['episode'],
    data: function () {
      return {

      };
    },
     mounted() {
      this.$store.commit('SET_CURRENT_VIEW', 'timeline');
      this.episode.map(item => {this.$store.commit('ADD_TIMELINE', 
          {date: item.air_date, text: `Season ${item.season} / Series ${item.episode}`})});
    
    },
    computed:{
      timeline() {
          return this.$store.getters.TIMELINE;
      },
    }
  };
</script>