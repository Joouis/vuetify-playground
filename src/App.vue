<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-row>
        <v-col class="d-flex align-center">
          <template v-if="isHomePage">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="@/assets/logo.png"
              transition="scale-transition"
              width="32"
              height="32"
            />
          </template>
          <template v-else>
            <v-icon x-large dark v-on:click="routeBack">mdi-chevron-left</v-icon>
          </template>
        </v-col>
        <v-col class="d-flex align-center justify-center">
          <v-toolbar-title v-text="title" />
        </v-col>
        <v-col />
      </v-row>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
const capitalizeFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default {
  name: 'App',

  components: {},

  data: () => ({}),

  computed: {
    isHomePage: function() {
      return this.$route.path === '/';
    },
    title: function() {
      const { path } = this.$route;
      return path === '/' ? 'Vuetify Playground' : path.slice(1).split('-').map(capitalizeFirstLetter).join(' ');
    }
  },

  methods: {
    routeBack: function() {
      this.$router.back();
    }
  }
};
</script>
