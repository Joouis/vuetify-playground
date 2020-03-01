<template>
  <ExampleWrapper>
    <v-subheader>Slots</v-subheader>
    <Slots />
    <v-subheader>Expand</v-subheader>
    <Expand />
    <v-subheader>Filter</v-subheader>
    <FilterComp />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Slots from './data-iterators/Slots';
import Expand from './data-iterators/Expand';
import FilterComp from './data-iterators/FilterComp';

export default {
  name: 'DataIterators',
  
  components: {
    ExampleWrapper,
    Slots,
    Expand,
    FilterComp
  },

  data: () => ({})
};
</script>