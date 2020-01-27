<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Disabled</v-subheader>
    <Disabled />
    <v-subheader>Readonly</v-subheader>
    <Readonly />
    <v-subheader>Popout</v-subheader>
    <Popout />
    <v-subheader>Inset</v-subheader>
    <Inset />
    <v-subheader>Accordion</v-subheader>
    <Accordion />
    <v-subheader>Focusable</v-subheader>
    <Focusable />
    <v-subheader>External control</v-subheader>
    <ExternalControl />
    <v-subheader>Custom icon</v-subheader>
    <CustomIcon />
    <v-subheader>Advanced</v-subheader>
    <Advanced />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './expansion-panels/Playground';
import Disabled from './expansion-panels/Disabled';
import Readonly from './expansion-panels/Readonly';
import Popout from './expansion-panels/Popout';
import Inset from './expansion-panels/Inset';
import Accordion from './expansion-panels/Accordion';
import Focusable from './expansion-panels/Focusable';
import ExternalControl from './expansion-panels/ExternalControl';
import CustomIcon from './expansion-panels/CustomIcon';
import Advanced from './expansion-panels/Advanced';

export default {
  name: 'ExpansionPanels',
  
  components: {
    ExampleWrapper,
    Playground,
    Disabled,
    Readonly,
    Popout,
    Inset,
    Accordion,
    Focusable,
    ExternalControl,
    CustomIcon,
    Advanced
  },

  data: () => ({})
};
</script>