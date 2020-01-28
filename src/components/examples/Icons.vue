<template>
  <ExampleWrapper>
    <v-subheader>Material Design</v-subheader>
    <MaterialDesign />
    <v-subheader>Font Awesome</v-subheader>
    <FontAwesome />
    <v-subheader>Color</v-subheader>
    <Color />
    <v-subheader>Buttons</v-subheader>
    <Buttons />
    <v-subheader>Clickable</v-subheader>
    <Clickable />
    <v-subheader>Color</v-subheader>
    <Color />
    <v-subheader>MDI SVG</v-subheader>
    <MDISVG />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import MaterialDesign from './icons/MaterialDesign';
import FontAwesome from './icons/FontAwesome';
import Color from './icons/Color';
import Buttons from './icons/Buttons';
import Clickable from './icons/Clickable';
import MDISVG from './icons/MDISVG';

export default {
  name: 'Icons',
  
  components: {
    ExampleWrapper,
    MaterialDesign,
    FontAwesome,
    Color,
    Buttons,
    Clickable,
    MDISVG
  },

  data: () => ({})
};
</script>