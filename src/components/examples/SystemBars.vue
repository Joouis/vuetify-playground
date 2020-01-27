<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Colored bar</v-subheader>
    <ColoredBar />
    <v-subheader>Lights out</v-subheader>
    <LightsOut />
    <v-subheader>Themes</v-subheader>
    <Themes />
    <v-subheader>Window bar</v-subheader>
    <WindowBar />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './system-bars/Playground';
import ColoredBar from './system-bars/ColoredBar';
import LightsOut from './system-bars/LightsOut';
import Themes from './system-bars/Themes';
import WindowBar from './system-bars/WindowBar';

export default {
  name: 'SystemBars',
  
  components: {
    ExampleWrapper,
    Playground,
    ColoredBar,
    LightsOut,
    Themes,
    WindowBar
  },

  data: () => ({})
};
</script>