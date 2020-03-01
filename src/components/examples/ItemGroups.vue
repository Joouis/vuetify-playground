<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Multiple</v-subheader>
    <Multiple />
    <v-subheader>Mandatory</v-subheader>
    <Mandatory />
    <v-subheader>With active class</v-subheader>
    <WithActiveClass />
    <v-subheader>Custom groups</v-subheader>
    <CustomGroups />
    <v-subheader>Chips</v-subheader>
    <Chips />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './item-groups/Playground';
import Multiple from './item-groups/Multiple';
import Mandatory from './item-groups/Mandatory';
import WithActiveClass from './item-groups/WithActiveClass';
import CustomGroups from './item-groups/CustomGroups';
import Chips from './item-groups/Chips';

export default {
  name: 'ItemGroups',
  
  components: {
    ExampleWrapper,
    Playground,
    Multiple,
    Mandatory,
    WithActiveClass,
    CustomGroups,
    Chips,
  },

  data: () => ({})
};
</script>
