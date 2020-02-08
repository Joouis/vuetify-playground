<template>
  <ExampleWrapper>
    <v-subheader>Multiple combobox</v-subheader>
    <MultipleCombobox />
    <v-subheader>Dense</v-subheader>
    <Dense />
    <v-subheader>No data with chips</v-subheader>
    <NoDataWithChips />
    <v-subheader>Advanced custom options</v-subheader>
    <AdvancedCustomOptions />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import MultipleCombobox from './combobox/MultipleCombobox';
import Dense from './combobox/Dense';
import NoDataWithChips from './combobox/NoDataWithChips';
import AdvancedCustomOptions from './combobox/AdvancedCustomOptions';

export default {
  name: 'Combobox',
  
  components: {
    ExampleWrapper,
    MultipleCombobox,
    Dense,
    NoDataWithChips,
    AdvancedCustomOptions
  },

  data: () => ({})
};
</script>