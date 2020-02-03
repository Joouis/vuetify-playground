<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Fill</v-subheader>
    <Fill />
    <v-subheader>Take a break</v-subheader>
    <TakeABreak />
    <v-subheader>Dashboard card</v-subheader>
    <DashboardCard />
    <v-subheader>Custom labels</v-subheader>
    <CustomLabels />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './sparklines/Playground';
import Fill from './sparklines/Fill';
import TakeABreak from './sparklines/TakeABreak';
import DashboardCard from './sparklines/DashboardCard';
import CustomLabels from './sparklines/CustomLabels';

export default {
  name: 'Sparklines',
  
  components: {
    ExampleWrapper,
    Playground,
    Fill,
    TakeABreak,
    DashboardCard,
    CustomLabels
  },

  data: () => ({})
};
</script>