<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Disabled</v-subheader>
    <Disabled />
    <v-subheader>Read-only</v-subheader>
    <ReadOnly />
    <v-subheader>Light theme</v-subheader>
    <LightTheme />
    <v-subheader>Icons</v-subheader>
    <Icons />
    <v-subheader>Multiple</v-subheader>
    <Multiple />
    <v-subheader>Dense</v-subheader>
    <Dense />
    <v-subheader>Customized item text and value</v-subheader>
    <CustomizedItemTextAndValue />
    <v-subheader>Custom menu props</v-subheader>
    <CustomMenuProps />
    <v-subheader>Prepend/Append item slots</v-subheader>
    <PrependAppendItemSlots />
    <v-subheader>Change selection appearance</v-subheader>
    <ChangeSelectionAppearance />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './selects/Playground';
import Disabled from './selects/Disabled';
import ReadOnly from './selects/ReadOnly';
import LightTheme from './selects/LightTheme';
import Icons from './selects/Icons';
import Multiple from './selects/Multiple';
import Dense from './selects/Dense';
import CustomizedItemTextAndValue from './selects/CustomizedItemTextAndValue';
import CustomMenuProps from './selects/CustomMenuProps';
import PrependAppendItemSlots from './selects/PrependAppendItemSlots';
import ChangeSelectionAppearance from './selects/ChangeSelectionAppearance';

export default {
  name: 'Selects',
  
  components: {
    ExampleWrapper,
    Playground,
    Disabled,
    ReadOnly,
    LightTheme,
    Icons,
    Multiple,
    Dense,
    CustomizedItemTextAndValue,
    CustomMenuProps,
    PrependAppendItemSlots,
    ChangeSelectionAppearance
  },

  data: () => ({})
};
</script>