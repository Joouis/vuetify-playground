<template>
  <ExampleWrapper>
    <v-subheader>Persistent</v-subheader>
    <Persistent />
    <v-subheader>"v-model" control</v-subheader>
    <VModelControl />
    <v-subheader>Inset</v-subheader>
    <Inset />
    <v-subheader>Music Player</v-subheader>
    <MusicPlayer />
    <v-subheader>Open In List</v-subheader>
    <OpenInList />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Persistent from './bottom-sheets/Persistent';
import VModelControl from './bottom-sheets/VModelControl';
import Inset from './bottom-sheets/Inset';
import MusicPlayer from './bottom-sheets/MusicPlayer';
import OpenInList from './bottom-sheets/OpenInList';

export default {
  name: 'BottomSheets',
  
  components: {
    ExampleWrapper,
    Persistent,
    VModelControl,
    Inset,
    MusicPlayer,
    OpenInList
  },

  data: () => ({})
};
</script>