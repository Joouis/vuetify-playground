<template>
  <ExampleWrapper>
    <v-subheader>Column</v-subheader>
    <Column />
    <v-subheader>Mandatory</v-subheader>
    <Mandatory />
    <v-subheader>Multiple</v-subheader>
    <Multiple />
    <v-subheader>Toothbrush card</v-subheader>
    <ToothbrushCard />
    <v-subheader>Blouse product card</v-subheader>
    <BlouseProductCard />
    <v-subheader>Filter results</v-subheader>
    <FilterResults />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Column from './chip-groups/Column';
import Mandatory from './chip-groups/Mandatory';
import Multiple from './chip-groups/Multiple';
import ToothbrushCard from './chip-groups/ToothbrushCard';
import BlouseProductCard from './chip-groups/BlouseProductCard';
import FilterResults from './chip-groups/FilterResults';

export default {
  name: 'ChipGroups',
  
  components: {
    ExampleWrapper,
    Column,
    Mandatory,
    Multiple,
    ToothbrushCard,
    BlouseProductCard,
    FilterResults
  },

  data: () => ({})
};
</script>
