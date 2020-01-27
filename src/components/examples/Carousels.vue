<template>
  <ExampleWrapper>
    <v-subheader>Cycle</v-subheader>
    <Cycle />
    <v-subheader>Custom transition</v-subheader>
    <CustomTransition />
    <v-subheader>Custom delimiters</v-subheader>
    <CustomDelimiters />
    <v-subheader>Hide controls</v-subheader>
    <HideControls />
    <v-subheader>Hide delimiters</v-subheader>
    <HideDelimiters />
    <v-subheader>"v-model" control</v-subheader>
    <VModelControl />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Cycle from './carousels/Cycle';
import CustomTransition from './carousels/CustomTransition';
import CustomDelimiters from './carousels/CustomDelimiters';
import HideControls from './carousels/HideControls';
import HideDelimiters from './carousels/HideDelimiters';
import VModelControl from './carousels/VModelControl';

export default {
  name: 'Carousels',
  
  components: {
    ExampleWrapper,
    Cycle,
    CustomTransition,
    CustomDelimiters,
    HideControls,
    HideDelimiters,
    VModelControl
  },

  data: () => ({})
};
</script>