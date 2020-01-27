<template>
  <ExampleWrapper>
    <v-subheader>Small variant</v-subheader>
    <SmallVariant />
    <v-subheader>Display animation</v-subheader>
    <DisplayAnimation />
    <v-subheader>FAB with speed-dial</v-subheader>
    <FABWithSpeedDial />
    <v-subheader>Lateral screens</v-subheader>
    <LateralScreens />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import SmallVariant from './floating-action-buttons/SmallVariant';
import DisplayAnimation from './floating-action-buttons/DisplayAnimation';
import FABWithSpeedDial from './floating-action-buttons/FABWithSpeedDial';
import LateralScreens from './floating-action-buttons/LateralScreens';

export default {
  name: 'FloatingActionButtons',
  
  components: {
    ExampleWrapper,
    SmallVariant,
    DisplayAnimation,
    FABWithSpeedDial,
    LateralScreens
  },

  data: () => ({})
};
</script>