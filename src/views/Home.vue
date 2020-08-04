<template>
  <v-container>
    <season></season>
        <article article class="blog-card">
          <img class="post-image" :src="Home.Poster" />
          <div class="article-details">
            <h4 class="post-title">{{ Home.Title }}</h4>
            <h3 class="post-genre">Genre: {{ Home.Genre }}</h3>
            <p class="post-description">Writer: {{ Home.Writer }}</p>
            <p class="post-counry" >Country: {{ Home.Country }}</p>
            <p class="post-author">Actors: {{ Home.Actors }}</p>
            <p class="post-author">Awards: {{ Home.Awards }}</p>
            <br>
             <span class="post-rating grey--text text--lighten-1 caption mr-2 mt-2">
                ({{ Home.imdbRating }})
              </span>
              <v-rating
                v-model="Home.imdbRating"
                background-color="white"
                color="yellow accent-4"
                dense
                half-increments
                hover
                size="18"
              >
              </v-rating>
        </div>
    </article>
  </v-container>
</template>

<script>
import Seasons from './Seasons'
export default {
    name: "home",
    components: {
      season: Seasons
    },
    methods: {
        setView: function(view){
            this.$store.commit('SET_CURRENT_VIEW', view)
        },
    },
    mounted(){
        this.$store.commit('SET_CURRENT_VIEW', 'home');
        this.$store.dispatch('GET_ABOUT', '');
    },
    computed: {
        Home() {
          return this.$store.getters.ABOUT;
        },
    }
}
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

    $black: black;
    $white: #fff;
    $border: #ebebeb;
    $shadow: rgba(0, 0, 0, 0.2);

    #container {
      width: 100%;
      text-align: center;
      height: 10%;
    }

    .blog-card {
      display: flex;
      text-align: center;
      flex-direction: row;
      background-color: $white;
        text-align: center;
      box-shadow: 0 0.1875rem 1.5rem $shadow;
      border-radius: 0.375rem;
      overflow: hidden;
    }

    .card-link {
      position: relative;
      display: block;
      color: $black;
      text-decoration: none;
    }

    .post-image {
      display: block;
      width: 40%;
        object-fit: cover;
    }

    .article-details {
      padding: 1.5rem;
      text-align: center;
      width: 100%;
    }

    .post-title {
      display: inline-block;
      text-transform: uppercase;
      color: $black;
      font-size: 1.75rem;
      font-weight: 700;
      line-height: 2;
      letter-spacing: 0.0625rem;
      margin: 0 0 0.75rem 0;
      padding: 0 0 0.25rem 0;
      border-bottom: 0.125rem solid $border;
    }

    .post-genre {
      font-size: 1.125rem;
      line-height: 1.4;
      color: $black;
      font-weight: 700;
      margin: 0 0 0.5rem 0;
    }

    .post-description, .post-counry{
      font-size: 1.125rem;
      line-height: 1.4;
      color: $black;
      font-weight: 700;
      margin: 0 0 0.5rem 0;
    }

    .post-author {
      font-size: 0.875rem;
       font-weight: 500;
      line-height: 1;
      margin: 1.125rem 0 0 0;
      padding: 1.125rem 0 0 0;
      color: $black;
      border-top: 0.0625rem solid $border;
    } 

    .post-rating{
      margin-top: 100%;
    }

</style>