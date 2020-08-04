
<template>
  <div>
    <v-app-bar
      color="deep-black accent-4"
      dense
      dark
    >
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
              @click="setView('occupation')" :to="{name: 'occupation'}"
            >
            <v-list-item-title>Occupation</v-list-item-title>
          </v-list-item>
           <v-list-item
              @click="setView('winners')" :to="{name: 'winners'}"
            >
            <v-list-item-title>Winners</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-toolbar-title ><a href="/" color="deep-black accent-4">Breaking Bad</a></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="setView('favourite')" :to="{name: 'favourite'}">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>


<script>

export default {
    data: function () {
      return {
      }
    },
    methods: {
        setView: function(view){
            this.$store.commit('SET_CURRENT_VIEW', view)
        },
    },
  };
</script>

<style scoped>
  .list-links{
    margin-left: 3%;
    background: none;
    padding-right: 4%;
  }
  a{
    color: #0088cc;
    text-decoration: none;
  }
</style>

