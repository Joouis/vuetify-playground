<template>
  <ExampleWrapper>
    <v-subheader>Searching an API</v-subheader>
    <SearchingAnAPI />
    <v-subheader>Custom filter on autocomplete</v-subheader>
    <CustomFilterOnAutocomplete />
    <v-subheader>Dense</v-subheader>
    <Dense />
    <v-subheader>Slots</v-subheader>
    <Slots />
    <v-subheader>Asynchronous items</v-subheader>
    <AsynchronousItems />
    <v-subheader>Advanced slots</v-subheader>
    <AdvancedSlots />
    <v-subheader>State selector</v-subheader>
    <StateSelector />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import SearchingAnAPI from './autocompletes/SearchingAnAPI';
import CustomFilterOnAutocomplete from './autocompletes/CustomFilterOnAutocomplete';
import Dense from './autocompletes/Dense';
import Slots from './autocompletes/Slots';
import AsynchronousItems from './autocompletes/AsynchronousItems';
import AdvancedSlots from './autocompletes/AdvancedSlots';
import StateSelector from './autocompletes/StateSelector';

export default {
  name: 'Autocompletes',
  
  components: {
    ExampleWrapper,
    SearchingAnAPI,
    CustomFilterOnAutocomplete,
    Dense,
    Slots,
    AsynchronousItems,
    AdvancedSlots,
    StateSelector
  },

  data: () => ({})
};
</script>