<template>
  <ExampleWrapper>
    <v-subheader>Model</v-subheader>
    <Model />
    <v-subheader>Swatches</v-subheader>
    <Swatches />
    <v-subheader>Inputs</v-subheader>
    <Inputs />
    <v-subheader>Canvas</v-subheader>
    <Canvas />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Model from './color-pickers/Model';
import Swatches from './color-pickers/Swatches';
import Inputs from './color-pickers/Inputs';
import Canvas from './color-pickers/Canvas';

export default {
  name: 'ColorPickers',
  
  components: {
    ExampleWrapper,
    Model,
    Swatches,
    Inputs,
    Canvas
  },

  data: () => ({})
};
</script>