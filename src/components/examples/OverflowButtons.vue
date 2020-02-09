<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Counter</v-subheader>
    <Counter />
    <v-subheader>Disabled</v-subheader>
    <Disabled />
    <v-subheader>Dense</v-subheader>
    <Dense />
    <v-subheader>Editable</v-subheader>
    <Editable />
    <v-subheader>Filled</v-subheader>
    <Filled />
    <v-subheader>Hint</v-subheader>
    <Hint />
    <v-subheader>Loading</v-subheader>
    <Loading />
    <v-subheader>Menu props</v-subheader>
    <MenuProps />
    <v-subheader>Read-only</v-subheader>
    <ReadOnly />
    <v-subheader>Segmented</v-subheader>
    <Segmented />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './overflow-buttons/Playground';
import Counter from './overflow-buttons/Counter';
import Disabled from './overflow-buttons/Disabled';
import Dense from './overflow-buttons/Dense';
import Editable from './overflow-buttons/Editable';
import Filled from './overflow-buttons/Filled';
import Hint from './overflow-buttons/Hint';
import Loading from './overflow-buttons/Loading';
import MenuProps from './overflow-buttons/MenuProps';
import ReadOnly from './overflow-buttons/ReadOnly';
import Segmented from './overflow-buttons/Segmented';

export default {
  name: 'OverflowButtons',
  
  components: {
    ExampleWrapper,
    Playground,
    Counter,
    Disabled,
    Dense,
    Editable,
    Filled,
    Hint,
    Loading,
    MenuProps,
    ReadOnly,
    Segmented
  },

  data: () => ({})
};
</script>