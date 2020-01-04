<template>
  <ExampleWrapper>
    <v-subheader>Size</v-subheader>
    <Size />
    <v-subheader>Tile</v-subheader>
    <Tile />
    <v-subheader>Default Slot</v-subheader>
    <DefaultSlot />
    <v-subheader>Profile Card</v-subheader>
    <ProfileCard />
    <v-subheader>Advanced Usage</v-subheader>
    <AdvancedUsage />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Size from './avatars/Size';
import Tile from './avatars/Tile';
import DefaultSlot from './avatars/DefaultSlot';
import ProfileCard from './avatars/ProfileCard';
import AdvancedUsage from './avatars/AdvancedUsage';

export default {
  name: 'Avatars',
  
  components: {
    ExampleWrapper,
    Size,
    Tile,
    DefaultSlot,
    ProfileCard,
    AdvancedUsage
  },

  data: () => ({})
};
</script>