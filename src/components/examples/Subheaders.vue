<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Inset subheaders</v-subheader>
    <InsetSubheaders />
    <v-subheader>Grid subheaders</v-subheader>
    <GridSubheaders />
    <v-subheader>Menu subheaders</v-subheader>
    <MenuSubheaders />
    <v-subheader>Subheaders with social media</v-subheader>
    <SubheadersWithSocialMedia />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './subheaders/Playground';
import InsetSubheaders from './subheaders/InsetSubheaders';
import GridSubheaders from './subheaders/GridSubheaders';
import MenuSubheaders from './subheaders/MenuSubheaders';
import SubheadersWithSocialMedia from './subheaders/SubheadersWithSocialMedia';

export default {
  name: 'Subheaders',
  
  components: {
    ExampleWrapper,
    Playground,
    InsetSubheaders,
    GridSubheaders,
    MenuSubheaders,
    SubheadersWithSocialMedia
  },

  data: () => ({})
};
</script>