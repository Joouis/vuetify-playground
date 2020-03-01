<template>
  <ExampleWrapper>
    <v-subheader>Rounded buttons</v-subheader>
    <RoundedButtons />
    <v-subheader>Mandatory</v-subheader>
    <Mandatory />
    <v-subheader>Multiple</v-subheader>
    <Multiple />
    <v-subheader>In toolbar</v-subheader>
    <InToolbar />
    <v-subheader>Selected action</v-subheader>
    <SelectedAction />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import RoundedButtons from './button-groups/RoundedButtons';
import Mandatory from './button-groups/Mandatory';
import Multiple from './button-groups/Multiple';
import InToolbar from './button-groups/InToolbar';
import SelectedAction from './button-groups/SelectedAction';


export default {
  name: 'ButtonGroups',
  
  components: {
    ExampleWrapper,
    RoundedButtons,
    Mandatory,
    Multiple,
    InToolbar,
    SelectedAction,
  },

  data: () => ({})
};
</script>
