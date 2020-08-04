<template>
  <v-container grid-list-lg>
    <v-layout wrap>
      <v-flex xs12 sm4 md4 v-for="(episod, index) in charactersList" :key="`${episod.name}-${index}`">
        <v-card
          class="vv-card"
          :to="{name: 'character', params: {ch_id: episod.char_id, ch_name: episod.name}}"
          @click="setView('character')"
          hover
        >
            <v-img class="white--text vv-card-image grey lighten-2" height="200px" :src="episod.img">
              <v-layout fill-height align-center justify-center ma-0>
                <v-flex xs12 d-flex align-center justify-center class="episod-name">
                  <div>
                    <h3 class="headline">{{episod.name}}</h3>
                    <p class="title">{{episod.nickname}}</p>
                  </div>
                </v-flex>
              </v-layout>
            </v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <h1 v-if="deathsList.length > 0" class="subtitle-4 text-center">Death in Episode</h1>
    <h1 v-else></h1>
    <v-layout wrap>
      <v-flex xs12 sm4 md4 v-for="(episod, index) in deathsList" :key="`${episod.death}-${index}`">
        <v-card
          class="vv-card"
          :to="{name: 'episode-details', params: {e_id: episod.episode_id, s_id: episod.season}}"
          hover
        >
            <v-img class="white--text vv-card-image grey lighten-2" height="200px" src="../assets/img/background-episode.jpg">
              <v-layout fill-height align-center justify-center ma-0>
                <v-flex xs12 d-flex align-center justify-center class="episod-name">
                  <div>
                    <h3 class="headline">{{episod.death}}</h3>
                    <p class="title">{{episod.cause}}</p>
                  </div>
                </v-flex>
              </v-layout>
            </v-img>
        </v-card>
      </v-flex>
      </v-layout>
       <v-layout>
       <v-col cols="12">
       <v-row justify="center">
      <span class="weather" v-if="weather[0]">
        <h1 class="subtitle-4 text-center">Weather</h1>
          <article article class="blog-card" v-if="weather[0]">
              <img class="post-image" 
              :src="'https://www.metaweather.com//static/img/weather/' + weather[0].weather_state_abbr + '.svg'"/>
              <div class="article-details">
                <h4 class="post-title">{{ weather[0].weather_state_name}}</h4>
                <p class="post-temp-ma">Max-temp: {{weather[0].max_temp}}</p>
                <p class="post-temp-mi">Min-temp: {{weather[0].min_temp}}</p>
            </div>
          </article>
      </span>
      <div class="weather-else" v-else>Failed to get weather data</div>
       </v-row>
      </v-col>
      </v-layout>
        <twitter-button
          :url="url"
          btnText="Share"
          title="Episode"
          description="I like this episode!"
          class="share-button"
        />
  </v-container>
</template>

<script>
import moment from 'moment';
import '../assets/css/Episode.scss';
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";

export default {
    name: "episode",
    components: {
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
      this.$store.dispatch('GET_DEATHS', [this.$route.params.e_id, this.$route.params.s_id]),
      this.$route.params.characters.map(item => {
        this.$store.dispatch('GET_CHARACTER_DETAILS_BY_NAME', item)
      }),

      this.$store.commit('SET_CURRENT_VIEW', 'episode');
      this.$store.dispatch('GET_WEATHER', moment(this.$route.params.air_date).format('YYYY/MM/DD'));
      this.$store.dispatch('GET_URL', window.location.href);
    },
    computed: {
      charactersList() {
          return this.$store.getters.CHARACTERS;
      },

      weather(){
          return this.$store.getters.WEATHER;
      },

      deathsList(){
          return this.$store.getters.DEATHS;
      },

      url(){
          return this.$store.getters.URL;
      }
    }
  };
</script>