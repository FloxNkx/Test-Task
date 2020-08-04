<template>
   <v-container grid-list-lg>
    <v-layout wrap>
      <v-flex xs12 sm4 md4 v-for="(episod, index) in episodes" :key="`${episod.title}-${index}`">
        <v-card
          class="vv-card"
          :to="{name: 'episode-details', params: {
                  e_id: episod.episode, 
                  s_id: episod.season, 
                  characters: episod.characters,
                  air_date: episod.air_date
          }}"
          @click="setView('episode')"
          hover
        >
            <v-img class="white--text vv-card-image grey lighten-2" height="200px" src='https://wallpaperaccess.com/full/1288325.jpg'>
              <v-layout fill-height align-center justify-center ma-0>
                <v-flex xs12 d-flex align-center justify-center class="episod-name">
                  <div>
                    <h3 class="headline">{{episod.title}}</h3>
                    <p class="title">{{episod.air_date}}</p>
                      <div class="list">
                          <ul class="border" v-for="character in episod.characters">
                            <li>{{character}} 
                              <span 
                                  class="material-icons" 
                                  @click="favouriteCharacter(character)"  
                                  :class="[{ liked: isFavourite(FavouriteList, character) }, 'fav']"
                                >
                                  favorite_border
                              </span>
                            </li>
                          </ul>
                      </div>
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
  import '../assets/css/Character.scss';
  export default {
    props: ["episodes"],
    data: function () {
      return {
      };
    },
    methods: {
      setView: function(view){
        this.$store.commit('SET_CURRENT_VIEW', view)
      },
      isFavourite: function(FavouriteList, id){
        let character = FavouriteList.filter(item => item === id)
        if (character.length === 1) return true
        return false
      },
      favouriteCharacter: function (character){
        this.$store.commit('SET_FAVOURITE_CHARACTER', character)
      },
    },
      computed: {
        CharactersList() {
          return this.$store.getters.CHARACTERS;
        },
        FavouriteList(){
          return this.$store.getters.FAVOURITE;
        }
      }
  };
</script>
