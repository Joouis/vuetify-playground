<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Using elevation</v-subheader>
    <UsingElevation />
    <v-subheader>Tile</v-subheader>
    <Tile />
    <v-subheader>Colors & Sizes</v-subheader>
    <ColorsAndSizes />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './sheets/Playground';
import UsingElevation from './sheets/UsingElevation';
import Tile from './sheets/Tile';
import ColorsAndSizes from './sheets/ColorsAndSizes';

export default {
  name: 'Sheets',
  
  components: {
    ExampleWrapper,
    Playground,
    UsingElevation,
    Tile,
    ColorsAndSizes
  },

  data: () => ({})
};
</script>