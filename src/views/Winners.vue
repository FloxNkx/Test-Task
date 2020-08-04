<template>
  <v-container>
      <h1 align='center'>Winners</h1>
        <table>
            <tr>
              <th colspan="2">Character:</th>
              <th>Number of kills: </th>
              <th>Killed: </th>
            </tr>
            <tr v-for="(value,index) in Winners">
              <td></td>
              <td :class="'person-' + index">
                <span class='index'>
                    {{index + 1}}
                </span>
                  {{value[0]}} 
              </td>
              <td>{{value[1].length}}</td>
              <td>
                <p v-for="killed in value[1]">
                    {{killed.death}}
                </p>
              </td>
            </tr>
        </table>
  </v-container>
</template>

<script>
  import axios from "axios";
  import '../assets/css/Winners.scss';
  
  export default {
    name: "winners",
    props: ['person', 'death', 'episode'],
    data: function () {
      return {};
    },
    mounted() {
        this.$store.commit('SET_CURRENT_VIEW', 'winners');
        this.$store.dispatch('GET_WINNERS', '');
    },
    computed:{
        Winners(){
            return this.$store.getters.WINNERS.flat();
        }
    }
  };
</script>
