<template>
  <div class="d-flex flex-column" justify="space-around">
    <v-color-picker class="ma-2" hide-inputs></v-color-picker>
    <v-color-picker class="ma-2" hide-mode-switch></v-color-picker>
    <v-row>
      <v-select v-model="mode" :items="modes" style="max-width: 300px"></v-select>
    </v-row>
    <v-row class="ma-2" style="flex: 0 0 auto">
      <v-color-picker :mode.sync="mode"></v-color-picker>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      mode: 'hsla',
      modes: ['hsla', 'rgba', 'hexa'],
    }),
  }
</script>