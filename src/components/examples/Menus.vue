<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Absolute position</v-subheader>
    <AbsolutePosition />
    <v-subheader>Menu with activator and tooltip</v-subheader>
    <MenuWithActivatorAndTooltip />
    <v-subheader>Hover</v-subheader>
    <Hover />
    <v-subheader>Custom transitions</v-subheader>
    <CustomTransitions />
    <v-subheader>Disabled</v-subheader>
    <Disabled />
    <v-subheader>X offset</v-subheader>
    <XOffset />
    <v-subheader>Y offset</v-subheader>
    <YOffset />
    <v-subheader>Close on click</v-subheader>
    <CloseOnClick />
    <v-subheader>Close on content click</v-subheader>
    <CloseOnContentClick />
    <v-subheader>Absolute position without activator</v-subheader>
    <AbsolutePositionWithoutActivator />
    <v-subheader>Menus</v-subheader>
    <WithinMenus />
    <v-subheader>Popover menu</v-subheader>
    <PopoverMenu />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './menus/Playground';
import AbsolutePosition from './menus/AbsolutePosition';
import MenuWithActivatorAndTooltip from './menus/MenuWithActivatorAndTooltip';
import Hover from './menus/Hover';
import CustomTransitions from './menus/CustomTransitions';
import Disabled from './menus/Disabled';
import XOffset from './menus/XOffset';
import YOffset from './menus/YOffset';
import CloseOnClick from './menus/CloseOnClick';
import CloseOnContentClick from './menus/CloseOnContentClick';
import AbsolutePositionWithoutActivator from './menus/AbsolutePositionWithoutActivator';
import WithinMenus from './menus/WithinMenus';
import PopoverMenu from './menus/PopoverMenu';

export default {
  name: 'Menus',
  
  components: {
    ExampleWrapper,
    Playground,
    AbsolutePosition,
    MenuWithActivatorAndTooltip,
    Hover,
    CustomTransitions,
    Disabled,
    XOffset,
    YOffset,
    CloseOnClick,
    CloseOnContentClick,
    AbsolutePositionWithoutActivator,
    WithinMenus,
    PopoverMenu
  },

  data: () => ({})
};
</script>