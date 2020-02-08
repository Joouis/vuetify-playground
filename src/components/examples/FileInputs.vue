<template>
  <ExampleWrapper>
    <v-subheader>Multiple</v-subheader>
    <Multiple />
    <v-subheader>Accept formats</v-subheader>
    <AcceptFormats />
    <v-subheader>With chips</v-subheader>
    <WithChips />
    <v-subheader>Size displaying</v-subheader>
    <SizeDisplaying />
    <v-subheader>Counter</v-subheader>
    <Counter />
    <v-subheader>Custom icons</v-subheader>
    <CustomIcons />
    <v-subheader>Dense</v-subheader>
    <Dense />
    <v-subheader>Selection slot</v-subheader>
    <SelectionSlot />
    <v-subheader>Validation</v-subheader>
    <Validation />
    <v-subheader>Complex selection slots</v-subheader>
    <ComplexSelectionSlots />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Multiple from './file-inputs/Multiple';
import AcceptFormats from './file-inputs/AcceptFormats';
import WithChips from './file-inputs/WithChips';
import SizeDisplaying from './file-inputs/SizeDisplaying';
import Counter from './file-inputs/Counter';
import CustomIcons from './file-inputs/CustomIcons';
import Dense from './file-inputs/Dense';
import SelectionSlot from './file-inputs/SelectionSlot';
import Validation from './file-inputs/Validation';
import ComplexSelectionSlots from './file-inputs/ComplexSelectionSlots';

export default {
  name: 'FileInputs',
  
  components: {
    ExampleWrapper,
    Multiple,
    AcceptFormats,
    WithChips,
    SizeDisplaying,
    Counter,
    CustomIcons,
    Dense,
    SelectionSlot,
    Validation,
    ComplexSelectionSlots
  },

  data: () => ({})
};
</script>