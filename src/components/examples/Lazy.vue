<template>
  <ExampleWrapper>
    <v-subheader>Usage</v-subheader>
    <Usage />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Usage from './lazy/Usage';

export default {
  name: 'Lazy',
  
  components: {
    ExampleWrapper,
    Usage
  },

  data: () => ({})
};
</script>