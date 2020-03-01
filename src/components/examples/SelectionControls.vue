<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Checkboxes - Boolean</v-subheader>
    <CheckboxesBoolean />
    <v-subheader>Checkboxes - Array</v-subheader>
    <CheckboxesArray />
    <v-subheader>Checkboxes - States</v-subheader>
    <CheckboxesStates />
    <v-subheader>Checkboxes - Colors</v-subheader>
    <CheckboxesColors />
    <v-subheader>Checkboxes - Inline with a textfield</v-subheader>
    <CheckboxesInlineWithATextfield />
    <v-subheader>Radios - Default</v-subheader>
    <RadiosDefault />
    <v-subheader>Radios - Direction</v-subheader>
    <RadiosDirection />
    <v-subheader>Radios - Colors</v-subheader>
    <RadiosColors />
    <v-subheader>Switches - Boolean</v-subheader>
    <SwitchesBoolean />
    <v-subheader>Switches - Array</v-subheader>
    <SwitchesArray />
    <v-subheader>Switches - States</v-subheader>
    <SwitchesStates />
    <v-subheader>Switches - Colors</v-subheader>
    <SwitchesColors />
    <v-subheader>Switches - Flat</v-subheader>
    <SwitchesFlat />
    <v-subheader>Switches - inset</v-subheader>
    <SwitchesInset />
    <v-subheader>Label slot</v-subheader>
    <LabelSlot />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './selection-controls/Playground';
import CheckboxesBoolean from './selection-controls/CheckboxesBoolean';
import CheckboxesArray from './selection-controls/CheckboxesArray';
import CheckboxesStates from './selection-controls/CheckboxesStates';
import CheckboxesColors from './selection-controls/CheckboxesColors';
import CheckboxesInlineWithATextfield from './selection-controls/CheckboxesInlineWithATextfield';
import RadiosDefault from './selection-controls/RadiosDefault';
import RadiosDirection from './selection-controls/RadiosDirection';
import RadiosColors from './selection-controls/RadiosColors';
import SwitchesBoolean from './selection-controls/SwitchesBoolean';
import SwitchesArray from './selection-controls/SwitchesArray';
import SwitchesStates from './selection-controls/SwitchesStates';
import SwitchesColors from './selection-controls/SwitchesColors';
import SwitchesFlat from './selection-controls/SwitchesFlat';
import SwitchesInset from './selection-controls/SwitchesInset';
import LabelSlot from './selection-controls/LabelSlot';

export default {
  name: 'SelectionControls',
  
  components: {
    ExampleWrapper,
    Playground,
    CheckboxesBoolean,
    CheckboxesArray,
    CheckboxesStates,
    CheckboxesColors,
    CheckboxesInlineWithATextfield,
    RadiosDefault,
    RadiosDirection,
    RadiosColors,
    SwitchesBoolean,
    SwitchesArray,
    SwitchesStates,
    SwitchesColors,
    SwitchesFlat,
    SwitchesInset,
    LabelSlot,
  },

  data: () => ({})
};
</script>