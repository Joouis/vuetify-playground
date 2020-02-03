<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Multi Line</v-subheader>
    <MultiLine />
    <v-subheader>Timeout</v-subheader>
    <Timeout />
    <v-subheader>Vertical</v-subheader>
    <Vertical />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './snackbars/Playground';
import MultiLine from './snackbars/MultiLine';
import Timeout from './snackbars/Timeout';
import Vertical from './snackbars/Vertical';

export default {
  name: 'Snackbars',
  
  components: {
    ExampleWrapper,
    Playground,
    MultiLine,
    Timeout,
    Vertical
  },

  data: () => ({})
};
</script>