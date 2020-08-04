<template>
    <v-container>
        <h1 align='center'>Occupation</h1>
        <table>
            <tr>
              <th colspan="2">Occupation</th>
              <th>Character</th>
            </tr>
            <tr v-for="(value, propertyName, index) in Occupation">
              <td>{{ propertyName }} </td>
              <td></td>
              <td><p v-for="val in value">{{val.name}}</p></td>
            </tr>
        </table>
    </v-container>
</template>

<script>
  import '../assets/css/Occupation.scss';

  export default {
    name: 'occupation',
    data: function() {
      return {
        headers: [
            {
            text: 'Occupation',
            align: 'start',
            sortable: false,
            value: 'occupation',
            },
            { text: 'Name', value: 'name' },
        ],
      };
    },
    mounted() {
      this.$store.commit('SET_CURRENT_VIEW', 'occupation');
      this.$store.dispatch('GET_OCCUPATION', '');
    },
    computed: {
      Occupation(){
        return this.$store.getters.CH_OCCUPATION;
      }
    }
  };
</script>
