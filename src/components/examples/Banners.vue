<template>
  <ExampleWrapper>
    <v-subheader>Two-line</v-subheader>
    <TwoLine />
    <v-subheader>Icon Slot</v-subheader>
    <IconSlot />
    <v-subheader>Icon Click Event</v-subheader>
    <IconClickEvent />
    <v-subheader>Actions Slot</v-subheader>
    <ActionsSlot />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import TwoLine from './banners/TwoLine';
import IconSlot from './banners/IconSlot';
import IconClickEvent from './banners/IconClickEvent';
import ActionsSlot from './banners/ActionsSlot';

export default {
  name: 'Banners',
  
  components: {
    ExampleWrapper,
    TwoLine,
    IconSlot,
    IconClickEvent,
    ActionsSlot
  },

  data: () => ({})
};
</script>