<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Colored</v-subheader>
    <Colored />
    <v-subheader>Indeterminate</v-subheader>
    <Indeterminate />
    <v-subheader>Size & Width</v-subheader>
    <SizeWidth />
    <v-subheader>Rotate</v-subheader>
    <Rotate />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './progress-circular/Playground';
import Colored from './progress-circular/Colored';
import Indeterminate from './progress-circular/Indeterminate';
import SizeWidth from './progress-circular/SizeWidth';
import Rotate from './progress-circular/Rotate';

export default {
  name: 'ProgressCircular',
  
  components: {
    ExampleWrapper,
    Playground,
    Colored,
    Indeterminate,
    SizeWidth,
    Rotate
  },

  data: () => ({})
};
</script>