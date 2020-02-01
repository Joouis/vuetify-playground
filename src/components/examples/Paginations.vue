<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Long</v-subheader>
    <Long />
    <v-subheader>Limit</v-subheader>
    <Limit />
    <v-subheader>Circle</v-subheader>
    <CircleComp />
    <v-subheader>Icons</v-subheader>
    <Icons />
    <v-subheader>Disabled</v-subheader>
    <Disabled />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './paginations/Playground';
import Long from './paginations/Long';
import Limit from './paginations/Limit';
import CircleComp from './paginations/CircleComp';
import Icons from './paginations/Icons';
import Disabled from './paginations/Disabled';

export default {
  name: 'Paginations',
  
  components: {
    ExampleWrapper,
    Playground,
    Long,
    Limit,
    CircleComp,
    Icons,
    Disabled
  },

  data: () => ({})
};
</script>