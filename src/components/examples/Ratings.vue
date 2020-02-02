<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Size variants</v-subheader>
    <SizeVariants />
    <v-subheader>Colors</v-subheader>
    <Colors />
    <v-subheader>Custom length</v-subheader>
    <CustomLength />
    <v-subheader>Incremented</v-subheader>
    <Incremented />
    <v-subheader>Slots</v-subheader>
    <Slots />
    <v-subheader>Card ratings</v-subheader>
    <CardRatings />
    <v-subheader>Advanced usage</v-subheader>
    <AdvancedUsage />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './ratings/Playground';
import SizeVariants from './ratings/SizeVariants';
import Colors from './ratings/Colors';
import CustomLength from './ratings/CustomLength';
import Incremented from './ratings/Incremented';
import Slots from './ratings/Slots';
import CardRatings from './ratings/CardRatings';
import AdvancedUsage from './ratings/AdvancedUsage';

export default {
  name: 'Ratings',
  
  components: {
    ExampleWrapper,
    Playground,
    SizeVariants,
    Colors,
    CustomLength,
    Incremented,
    Slots,
    CardRatings,
    AdvancedUsage
  },

  data: () => ({})
};
</script>