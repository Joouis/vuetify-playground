<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Absolute</v-subheader>
    <Absolute />
    <v-subheader>Opacity</v-subheader>
    <Opacity />
    <v-subheader>Z Index</v-subheader>
    <ZIndex />
    <v-subheader>Loader</v-subheader>
    <Loader />
    <v-subheader>Advanced</v-subheader>
    <Advanced />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './overlays/Playground';
import Absolute from './overlays/Absolute';
import Opacity from './overlays/Opacity';
import ZIndex from './overlays/ZIndex';
import Loader from './overlays/Loader';
import Advanced from './overlays/Advanced';

export default {
  name: 'Overlays',
  
  components: {
    ExampleWrapper,
    Playground,
    Absolute,
    Opacity,
    ZIndex,
    Loader,
    Advanced
  },

  data: () => ({})
};
</script>