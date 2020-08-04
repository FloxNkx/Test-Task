<template>
   <v-container grid-list-lg>
   <h1 align='center'>Favourite</h1>
    <v-layout wrap>
      <v-flex xs12 sm4 md4 v-for="(episod, index) in CharactersList" :key="`${episod}-${index}`">
        <v-card
          class="vv-card"
          hover
          nuxt
        >
            <v-img class="white--text vv-card-image grey lighten-2" height="200px" src='https://wallpaperaccess.com/full/1288325.jpg'>
              <v-layout fill-height align-center justify-center ma-0>
                <v-flex xs12 d-flex align-center justify-center class="episod-name">
                  <div>
                    <h3 class="headline">{{episod}}</h3>
                  </div>
                </v-flex>
              </v-layout>
            </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import '../assets/css/Favourite.scss';
  export default {
    name: 'favourite',
    data: function () {
      return {
        test: {},
      };
    },
    methods: {
      favouriteCharacter: function (character){
        this.$store.dispatch('SAVE_FAVOURITE_CHARACTER', character)
      },
      mounted() {
          this.$store.commit('SET_CURRENT_VIEW', 'favourite');
          this.$store.dispatch('GET_CHARACTER');
      },
    },
      computed: {
        CharactersList() {
          return this.$store.getters.FAVOURITE;
        },
      }
  };
</script>
