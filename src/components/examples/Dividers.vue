<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Inset dividers</v-subheader>
    <InsetDividers />
    <v-subheader>Vertical dividers</v-subheader>
    <VerticalDividers />
    <v-subheader>Vertical inset dividers</v-subheader>
    <VerticalInsetDividers />
    <v-subheader>Dividers and subheaders</v-subheader>
    <DividersAndSubheaders />
    <v-subheader>Dividers in Portrait View</v-subheader>
    <DividersInPortraitView />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './dividers/Playground';
import InsetDividers from './dividers/InsetDividers';
import VerticalDividers from './dividers/VerticalDividers';
import VerticalInsetDividers from './dividers/VerticalInsetDividers';
import DividersAndSubheaders from './dividers/DividersAndSubheaders';
import DividersInPortraitView from './dividers/DividersInPortraitView';

export default {
  name: 'Dividers',
  
  components: {
    ExampleWrapper,
    Playground,
    InsetDividers,
    VerticalDividers,
    VerticalInsetDividers,
    DividersAndSubheaders,
    DividersInPortraitView
  },

  data: () => ({})
};
</script>