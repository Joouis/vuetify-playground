<template>
  <ExampleWrapper>
    <v-subheader>Disabled</v-subheader>
    <Disabled />
    <v-subheader>Open/Close Delay</v-subheader>
    <OpenCloseDelay />
    <v-subheader>Hover list</v-subheader>
    <HoverList />
    <v-subheader>Transitions</v-subheader>
    <Transitions />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Disabled from './hover/Disabled';
import OpenCloseDelay from './hover/OpenCloseDelay';
import HoverList from './hover/HoverList';
import Transitions from './hover/Transitions';

export default {
  name: 'Hover',
  
  components: {
    ExampleWrapper,
    Disabled,
    OpenCloseDelay,
    HoverList,
    Transitions
  },

  data: () => ({})
};
</script>