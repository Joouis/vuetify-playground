<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Icons</v-subheader>
    <Icons />
    <v-subheader>Auto grow</v-subheader>
    <AutoGrow />
    <v-subheader>Background color</v-subheader>
    <BackgroundColor />
    <v-subheader>Browser autocomplete</v-subheader>
    <BrowserAutocomplete />
    <v-subheader>Clearable</v-subheader>
    <Clearable />
    <v-subheader>Counter</v-subheader>
    <Counter />
    <v-subheader>No resize</v-subheader>
    <NoResize />
    <v-subheader>Rows</v-subheader>
    <Rows />
    <v-subheader>Beautiful Forms</v-subheader>
    <BeautifulForms />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './textareas/Playground';
import Icons from './textareas/Icons';
import AutoGrow from './textareas/AutoGrow';
import BackgroundColor from './textareas/BackgroundColor';
import BrowserAutocomplete from './textareas/BrowserAutocomplete';
import Clearable from './textareas/Clearable';
import Counter from './textareas/Counter';
import NoResize from './textareas/NoResize';
import Rows from './textareas/Rows';
import BeautifulForms from './textareas/BeautifulForms';

export default {
  name: 'Textareas',
  
  components: {
    ExampleWrapper,
    Playground,
    Icons,
    AutoGrow,
    BackgroundColor,
    BrowserAutocomplete,
    Clearable,
    Counter,
    NoResize,
    Rows,
    BeautifulForms,
  },

  data: () => ({})
};
</script>