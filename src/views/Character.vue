<template>
  <v-container>
      <article article class="blog-card" v-for="ch in character">
          <img class="post-image" :src="ch.img" />
          <div class="article-details">
            <h4 class="post-title">{{ ch.name }}</h4>
            <h3 class="post-genre">Nickname: {{ ch.nickname }}</h3>
            <p class="post-occupation-title">Occupation:
              <p class="post-occupation" v-for="oc in ch.occupation">{{ oc }}</p>
            </p>
            <p class="post-qoute-title">Qotes:
              <p class="post-quotes" v-for="qt in quotes_characters">{{ qt.quote }}</p>
            </p>
            <p class="post-author">Portrayed: {{ ch.portrayed }}</p>
        </div>
      </article>
        <time-line :episode="characters_in_episode"></time-line>
        <twitter-button
          :url="url"
          btnText="Share"
          title="Person"
          description="I like this person!"
        />
    </v-container>
</template>

<script>
    import axios from "axios";
    import '../assets/css/Character.scss';
    import TimeLine from "../views/TimeLine.vue";
    import TwitterButton from "vue-share-buttons/src/components/TwitterButton";

export default {
    name: 'character',
    components: {
        timeLine: TimeLine,
        TwitterButton,
    },
    data: function() {
      return {
      };
    },
    methods: {
       setView: function(view){
          this.$store.commit('SET_CURRENT_VIEW', view)
      },
    },
    mounted() {
      this.$store.commit('SET_CURRENT_VIEW', 'character');
      this.$store.dispatch('GET_CHARACTER_DETAILS_BY_ID', this.$route.params.ch_id);
      this.$store.dispatch('GET_RESPONSIBLE_DEATH', this.$route.params.ch_name);
      this.$store.dispatch('GET_CHARACTER_IN_EPISODE', this.$route.params.ch_name);
      this.$store.dispatch('GET_QUOTES', this.$route.params.ch_name);
      this.$store.dispatch('GET_URL', window.location.href);
    },
    computed:{
      characters_in_episode(){
          return this.$store.getters.EPISODES;
      },
      responsible_deaths(){
          return this.$store.getters.CH_DEATHS;
      },
      quotes_characters(){
          return this.$store.getters.CH_QUOTES;
      },
      url(){
         return this.$store.getters.URL;
      },
      character() {
          return this.$store.getters.CHARACTER;
      },
    }
  };
</script>

<style scoped lang="scss"
</style>
