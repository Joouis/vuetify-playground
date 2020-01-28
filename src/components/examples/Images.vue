<template>
  <ExampleWrapper>
    <v-subheader>Contain and Cover</v-subheader>
    <ContainAndCover />
    <v-subheader>Height</v-subheader>
    <Height />
    <v-subheader>Fixed ratio</v-subheader>
    <FixedRatio />
    <v-subheader>Placeholder</v-subheader>
    <Placeholder />
    <v-subheader>Gradients</v-subheader>
    <Gradients />
    <v-subheader>Grid</v-subheader>
    <Grid />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import ContainAndCover from './images/ContainAndCover';
import Height from './images/Height';
import FixedRatio from './images/FixedRatio';
import Placeholder from './images/Placeholder';
import Gradients from './images/Gradients';
import Grid from './images/Grid';

export default {
  name: 'Images',
  
  components: {
    ExampleWrapper,
    ContainAndCover,
    Height,
    FixedRatio,
    Placeholder,
    Gradients,
    Grid
  },

  data: () => ({})
};
</script>