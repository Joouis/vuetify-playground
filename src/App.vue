<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <template v-if="isHomePage">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="@/assets/logo.png"
            transition="scale-transition"
            width="40"
            height="40"
          />
        </template>
        <template v-else>
          <v-icon large dark v-on:click="routeBack">mdi-chevron-left</v-icon>
        </template>
      </div>

      <v-spacer />

      <v-toolbar-title>Vuetify Mobile Playground</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

/*
 * TODO:
 *  - Implement back button at app bar
 *  - Show back button if route is not root
 */

export default {
  name: 'App',

  components: {},

  data: () => ({}),

  computed: {
    isHomePage: function() {
      return this.$route.path === "/";
    }
  },

  methods: {
    routeBack: function() {
      this.$router.back();
    }
  }
};
</script>
