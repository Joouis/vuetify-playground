<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Editable steps</v-subheader>
    <EditableSteps />
    <v-subheader>Non-editable steps</v-subheader>
    <NoneditableSteps />
    <v-subheader>Optional steps</v-subheader>
    <OptionalSteps />
    <v-subheader>Horizontal steps</v-subheader>
    <HorizontalSteps />
    <v-subheader>Vertical steppers</v-subheader>
    <VerticalSteppers />
    <v-subheader>Linear steppers</v-subheader>
    <LinearSteppers />
    <v-subheader>Non-linear steppers</v-subheader>
    <NonlinearSteppers />
    <v-subheader>Alternate labels</v-subheader>
    <AlternateLabels />
    <v-subheader>Multi-line error state</v-subheader>
    <MultilineErrorState />
    <v-subheader>Alternative label multi-line error state</v-subheader>
    <AlternativeLabelMultilineErrorState />
    <v-subheader>Vertical multi-line error state</v-subheader>
    <VerticalMultilineErrorState />
    <v-subheader>Dynamic steps</v-subheader>
    <DynamicSteps />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './steppers/Playground';
import EditableSteps from './steppers/EditableSteps';
import NoneditableSteps from './steppers/NoneditableSteps';
import OptionalSteps from './steppers/OptionalSteps';
import HorizontalSteps from './steppers/HorizontalSteps';
import VerticalSteppers from './steppers/VerticalSteppers';
import LinearSteppers from './steppers/LinearSteppers';
import NonlinearSteppers from './steppers/NonlinearSteppers';
import AlternateLabels from './steppers/AlternateLabels';
import MultilineErrorState from './steppers/MultilineErrorState';
import AlternativeLabelMultilineErrorState from './steppers/AlternativeLabelMultilineErrorState';
import VerticalMultilineErrorState from './steppers/VerticalMultilineErrorState';
import DynamicSteps from './steppers/DynamicSteps';

export default {
  name: 'Steppers',
  
  components: {
    ExampleWrapper,
    Playground,
    EditableSteps,
    NoneditableSteps,
    OptionalSteps,
    HorizontalSteps,
    VerticalSteppers,
    LinearSteppers,
    NonlinearSteppers,
    AlternateLabels,
    MultilineErrorState,
    AlternativeLabelMultilineErrorState,
    VerticalMultilineErrorState,
    DynamicSteps
  },

  data: () => ({})
};
</script>