<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Fixed height</v-subheader>
    <FixedHeight />
    <v-subheader>Fixed header</v-subheader>
    <FixedHeader />
    <v-subheader>Dense table</v-subheader>
    <DenseTable />
    <v-subheader>Dark theme</v-subheader>
    <DarkTheme />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './simple-tables/Playground';
import FixedHeight from './simple-tables/FixedHeight';
import FixedHeader from './simple-tables/FixedHeader';
import DenseTable from './simple-tables/DenseTable';
import DarkTheme from './simple-tables/DarkTheme';

export default {
  name: 'SimpleTables',
  
  components: {
    ExampleWrapper,
    Playground,
    FixedHeight,
    FixedHeader,
    DenseTable,
    DarkTheme
  },

  data: () => ({})
};
</script>