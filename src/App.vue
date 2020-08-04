<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <app-main></app-main>
    </v-content>
    <v-footer>
      <app-footer></app-footer>
    </v-footer>
  </v-app>
</template>

<script>
  import Header from "./views/Header.vue";
  import Main from "./views/Main.vue";
  import Footer from "./views/Footer.vue";

  export default {
    name: "App",
    components: {
      appHeader: Header,
      appMain: Main,
      appFooter: Footer
    },
    data: () => ({
      //
    })
  };
</script>

