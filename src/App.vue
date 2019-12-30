<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer />

      <v-toolbar-title>Vuetify Mobile Playground</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <UIComponentsList />
    </v-content>
  </v-app>
</template>

<script>
import UIComponentsList from './components/UIComponentsList';

export default {
  name: 'App',

  components: {
    UIComponentsList,
  },

  data: () => ({
    //
  }),
};
</script>
