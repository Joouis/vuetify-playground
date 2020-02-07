<template>
  <ExampleWrapper>
    <v-subheader>Alignment</v-subheader>
    <Alignment />
    <v-subheader>Visibility</v-subheader>
    <Visibility />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Alignment from './tooltips/Alignment';
import Visibility from './tooltips/Visibility';

export default {
  name: 'Tooltips',
  
  components: {
    ExampleWrapper,
    Alignment,
    Visibility
  },

  data: () => ({})
};
</script>