<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Determinate</v-subheader>
    <Determinate />
    <v-subheader>Indeterminate</v-subheader>
    <Indeterminate />
    <v-subheader>Buffer</v-subheader>
    <Buffer />
    <v-subheader>Query Indeterminate and Determinate</v-subheader>
    <QueryIndeterminateAndDeterminate />
    <v-subheader>Custom colors</v-subheader>
    <CustomColors />
    <v-subheader>Rounded</v-subheader>
    <Rounded />
    <v-subheader>Stream</v-subheader>
    <Stream />
    <v-subheader>Striped</v-subheader>
    <Striped />
    <v-subheader>Toolbar loader</v-subheader>
    <ToolbarLoader />
    <v-subheader>File loader</v-subheader>
    <FileLoader />
    <v-subheader>Slots</v-subheader>
    <Slots />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './progress-linear/Playground';
import Determinate from './progress-linear/Determinate';
import Indeterminate from './progress-linear/Indeterminate';
import Buffer from './progress-linear/Buffer';
import QueryIndeterminateAndDeterminate from './progress-linear/QueryIndeterminateAndDeterminate';
import CustomColors from './progress-linear/CustomColors';
import Rounded from './progress-linear/Rounded';
import Stream from './progress-linear/Stream';
import Striped from './progress-linear/Striped';
import ToolbarLoader from './progress-linear/ToolbarLoader';
import FileLoader from './progress-linear/FileLoader';
import Slots from './progress-linear/Slots';

export default {
  name: 'ProgressLinear',
  
  components: {
    ExampleWrapper,
    Playground,
    Determinate,
    Indeterminate,
    Buffer,
    QueryIndeterminateAndDeterminate,
    CustomColors,
    Rounded,
    Stream,
    Striped,
    ToolbarLoader,
    FileLoader,
    Slots
  },

  data: () => ({})
};
</script>