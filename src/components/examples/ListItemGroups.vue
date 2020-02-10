<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>De-emphasized selections</v-subheader>
    <DeEmphasizedSelections />
    <v-subheader>Select multiple items</v-subheader>
    <SelectMultipleItems />
    <v-subheader>Mandatory</v-subheader>
    <Mandatory />
    <v-subheader>Custom active class</v-subheader>
    <CustomActiveClass />
    <v-subheader>Selection controls</v-subheader>
    <SelectionControls />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './list-item-groups/Playground';
import DeEmphasizedSelections from './list-item-groups/DeEmphasizedSelections';
import SelectMultipleItems from './list-item-groups/SelectMultipleItems';
import Mandatory from './list-item-groups/Mandatory';
import CustomActiveClass from './list-item-groups/CustomActiveClass';
import SelectionControls from './list-item-groups/SelectionControls';

export default {
  name: 'Tabs',
  
  components: {
    ExampleWrapper,
    Playground,
    DeEmphasizedSelections,
    SelectMultipleItems,
    Mandatory,
    CustomActiveClass,
    SelectionControls,
  },

  data: () => ({})
};
</script>
