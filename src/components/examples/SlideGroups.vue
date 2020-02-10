<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Custom icons</v-subheader>
    <CustomIcons />
    <v-subheader>Active class</v-subheader>
    <ActiveClass />
    <v-subheader>Multiple</v-subheader>
    <Multiple />
    <v-subheader>Mandatory</v-subheader>
    <Mandatory />
    <v-subheader>Pseudo Carousel</v-subheader>
    <PseudoCarousel />
    <v-subheader>Centered active item</v-subheader>
    <CenteredActiveItem />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './slide-groups/Playground';
import CustomIcons from './slide-groups/CustomIcons';
import ActiveClass from './slide-groups/ActiveClass';
import Multiple from './slide-groups/Multiple';
import Mandatory from './slide-groups/Mandatory';
import PseudoCarousel from './slide-groups/PseudoCarousel';
import CenteredActiveItem from './slide-groups/CenteredActiveItem';

export default {
  name: 'SlideGroups',
  
  components: {
    ExampleWrapper,
    Playground,
    CustomIcons,
    ActiveClass,
    Multiple,
    Mandatory,
    PseudoCarousel,
    CenteredActiveItem
  },

  data: () => ({})
};
</script>
