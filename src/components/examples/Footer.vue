<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Absolute Footer</v-subheader>
    <AbsoluteFooter />
    <v-subheader>Padless Footer</v-subheader>
    <PadlessFooter />
    <v-subheader>Company Footer</v-subheader>
    <CompanyFooter />
    <v-subheader>Indigo Footer</v-subheader>
    <IndigoFooter />
    <v-subheader>Teal Footer</v-subheader>
    <TealFooter />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './footer/Playground';
import AbsoluteFooter from './footer/AbsoluteFooter';
import PadlessFooter from './footer/PadlessFooter';
import CompanyFooter from './footer/CompanyFooter';
import IndigoFooter from './footer/IndigoFooter';
import TealFooter from './footer/TealFooter';

export default {
  name: 'Footer',
  
  components: {
    ExampleWrapper,
    Playground,
    AbsoluteFooter,
    PadlessFooter,
    CompanyFooter,
    IndigoFooter,
    TealFooter
  },

  data: () => ({})
};
</script>