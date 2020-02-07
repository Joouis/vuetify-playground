<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Dense mode</v-subheader>
    <DenseMode />
    <v-subheader>Checkbox color</v-subheader>
    <CheckboxColor />
    <v-subheader>Color</v-subheader>
    <Color />
    <v-subheader>Shaped</v-subheader>
    <Shaped />
    <v-subheader>Rounded</v-subheader>
    <Rounded />
    <v-subheader>Disabling nodes</v-subheader>
    <DisablingNodes />
    <v-subheader>Selection type</v-subheader>
    <SelectionType />
    <v-subheader>Selectable</v-subheader>
    <Selectable />
    <v-subheader>Activatable</v-subheader>
    <Activatable />
    <v-subheader>Hoverable</v-subheader>
    <Hoverable />
    <v-subheader>Open-all</v-subheader>
    <OpenAll />
    <v-subheader>Slots</v-subheader>
    <Slots />
    <v-subheader>Searching a directory</v-subheader>
    <SearchingADirectory />
    <v-subheader>Async items</v-subheader>
    <AsyncItems />
    <v-subheader>Custom selectable icons</v-subheader>
    <CustomSelectableIcons />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './treeview/Playground';
import DenseMode from './treeview/DenseMode';
import CheckboxColor from './treeview/CheckboxColor';
import Color from './treeview/Color';
import Shaped from './treeview/Shaped';
import Rounded from './treeview/Rounded';
import DisablingNodes from './treeview/DisablingNodes';
import SelectionType from './treeview/SelectionType';
import Selectable from './treeview/Selectable';
import Activatable from './treeview/Activatable';
import Hoverable from './treeview/Hoverable';
import OpenAll from './treeview/OpenAll';
import Slots from './treeview/Slots';
import SearchingADirectory from './treeview/SearchingADirectory';
import AsyncItems from './treeview/AsyncItems';
import CustomSelectableIcons from './treeview/CustomSelectableIcons';

export default {
  name: 'Treeview',
  
  components: {
    ExampleWrapper,
    Playground,
    DenseMode,
    CheckboxColor,
    Color,
    Shaped,
    Rounded,
    DisablingNodes,
    SelectionType,
    Selectable,
    Activatable,
    Hoverable,
    OpenAll,
    Slots,
    SearchingADirectory,
    AsyncItems,
    CustomSelectableIcons
  },

  data: () => ({})
};
</script>