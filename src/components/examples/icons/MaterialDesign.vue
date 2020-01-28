<template>
  <v-container fluid>
    <v-row justify="space-around" class="mb-2">
      <span class="group pa-2">
        <v-icon>mdi-home</v-icon>
        <v-icon>mdi-calendar</v-icon>
        <v-icon>mdi-information</v-icon>
      </span>

      <span class="group pa-2 teal">
        <v-icon dark>mdi-folder-outline</v-icon>
        <v-icon dark>mdi-widgets</v-icon>
        <v-icon dark>mdi-gavel</v-icon>
      </span>
    </v-row>

    <v-row justify="space-around" class="mb-2">
      <span class="group pa-2">
        <v-icon medium>mdi-home</v-icon>
        <v-icon medium>mdi-calendar</v-icon>
        <v-icon medium>mdi-information</v-icon>
      </span>

      <span class="group pa-2 teal">
        <v-icon medium dark>mdi-folder-outline</v-icon>
        <v-icon medium dark>mdi-widgets</v-icon>
        <v-icon medium dark>mdi-gavel</v-icon>
      </span>
    </v-row>

    <v-row justify="space-around" class="mb-2">
      <span class="group pa-2">
        <v-icon large>mdi-home</v-icon>
        <v-icon large>mdi-calendar</v-icon>
        <v-icon large>mdi-information</v-icon>
      </span>

      <span class="group pa-2 teal">
        <v-icon large dark>mdi-folder-outline</v-icon>
        <v-icon large dark>mdi-widgets</v-icon>
        <v-icon large dark>mdi-gavel</v-icon>
      </span>
    </v-row>

    <v-row justify="space-around">
      <span class="group pa-2">
        <v-icon x-large>mdi-home</v-icon>
        <v-icon x-large>mdi-calendar</v-icon>
        <v-icon x-large>mdi-information</v-icon>
      </span>

      <span class="group pa-2 teal">
        <v-icon x-large dark>mdi-folder-outline</v-icon>
        <v-icon x-large dark>mdi-widgets</v-icon>
        <v-icon x-large dark>mdi-gavel</v-icon>
      </span>
    </v-row>
  </v-container>
</template>

<style scoped>
.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
</style>