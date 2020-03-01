<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Colors</v-subheader>
    <Colors />
    <v-subheader>Disabled</v-subheader>
    <Disabled />
    <v-subheader>Read-only</v-subheader>
    <ReadOnly />
    <v-subheader>24h format</v-subheader>
    <Format24H />
    <v-subheader>Allowed times</v-subheader>
    <AllowedTimes />
    <v-subheader>Setting picker width</v-subheader>
    <SettingPickerWidth />
    <v-subheader>AM/PM switch in title</v-subheader>
    <AMPMSwitchInTitle />
    <v-subheader>No title</v-subheader>
    <NoTitle />
    <v-subheader>With seconds</v-subheader>
    <WithSeconds />
    <v-subheader>Scrollable</v-subheader>
    <Scrollable />
    <v-subheader>In dialog and menu</v-subheader>
    <InDialogAndMenu />
    <v-subheader>Range</v-subheader>
    <Range />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './time-pickers/Playground';
import Colors from './time-pickers/Colors';
import Disabled from './time-pickers/Disabled';
import ReadOnly from './time-pickers/ReadOnly';
import Format24H from './time-pickers/Format24H';
import AllowedTimes from './time-pickers/AllowedTimes';
import SettingPickerWidth from './time-pickers/SettingPickerWidth';
import AMPMSwitchInTitle from './time-pickers/AMPMSwitchInTitle';
import NoTitle from './time-pickers/NoTitle';
import WithSeconds from './time-pickers/WithSeconds';
import Scrollable from './time-pickers/Scrollable';
import InDialogAndMenu from './time-pickers/InDialogAndMenu';
import Range from './time-pickers/Range';

export default {
  name: 'TimePickers',
  
  components: {
    ExampleWrapper,
    Playground,
    Colors,
    Disabled,
    ReadOnly,
    Format24H,
    AllowedTimes,
    SettingPickerWidth,
    AMPMSwitchInTitle,
    NoTitle,
    WithSeconds,
    Scrollable,
    InDialogAndMenu,
    Range
  },

  data: () => ({})
};
</script>