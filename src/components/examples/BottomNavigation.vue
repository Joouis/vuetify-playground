<template>
  <ExampleWrapper>
    <v-subheader>Color</v-subheader>
    <Color />
    <v-subheader>Grow</v-subheader>
    <Grow />
    <v-subheader>Horizontal</v-subheader>
    <Horizontal />
    <v-subheader>Shift</v-subheader>
    <Shift />
    <v-subheader>Toggle</v-subheader>
    <Toggle />
    <v-subheader>Hide on scroll</v-subheader>
    <HideOnScroll />
    <v-subheader>Scroll threshold</v-subheader>
    <ScrollThreshold />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Color from './bottom-navigation/Color';
import Grow from './bottom-navigation/Grow';
import Horizontal from './bottom-navigation/Horizontal';
import Shift from './bottom-navigation/Shift';
import Toggle from './bottom-navigation/Toggle';
import HideOnScroll from './bottom-navigation/HideOnScroll';
import ScrollThreshold from './bottom-navigation/ScrollThreshold';

export default {
  name: 'BottomNavigation',
  
  components: {
    ExampleWrapper,
    Color,
    Grow,
    Horizontal,
    Shift,
    Toggle,
    HideOnScroll,
    ScrollThreshold
  },

  data: () => ({})
};
</script>