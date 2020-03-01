<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Min & Max values</v-subheader>
    <MinMaxValues />
    <v-subheader>Disabled</v-subheader>
    <Disabled />
    <v-subheader>Readonly</v-subheader>
    <Readonly />
    <v-subheader>Icons</v-subheader>
    <Icons />
    <v-subheader>Vertical sliders</v-subheader>
    <VerticalSliders />
    <v-subheader>Thumb</v-subheader>
    <Thumb />
    <v-subheader>Inverse label</v-subheader>
    <InverseLabel />
    <v-subheader>Custom Range slider</v-subheader>
    <CustomRangeSlider />
    <v-subheader>Ticks</v-subheader>
    <Ticks />
    <v-subheader>Custom colors</v-subheader>
    <CustomColors />
    <v-subheader>Range</v-subheader>
    <Range />
    <v-subheader>Validation</v-subheader>
    <Validation />
    <v-subheader>Slots</v-subheader>
    <Slots />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './sliders/Playground';
import MinMaxValues from './sliders/MinMaxValues';
import Disabled from './sliders/Disabled';
import Readonly from './sliders/Readonly';
import Icons from './sliders/Icons';
import VerticalSliders from './sliders/VerticalSliders';
import Thumb from './sliders/Thumb';
import InverseLabel from './sliders/InverseLabel';
import CustomRangeSlider from './sliders/CustomRangeSlider';
import Ticks from './sliders/Ticks';
import CustomColors from './sliders/CustomColors';
import Range from './sliders/Range';
import Validation from './sliders/Validation';
import Slots from './sliders/Slots';

export default {
  name: 'Sliders',
  
  components: {
    ExampleWrapper,
    Playground,
    MinMaxValues,
    Disabled,
    Readonly,
    Icons,
    VerticalSliders,
    Thumb,
    InverseLabel,
    CustomRangeSlider,
    Ticks,
    CustomColors,
    Range,
    Validation,
    Slots
  },

  data: () => ({})
};
</script>