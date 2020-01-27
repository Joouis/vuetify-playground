<template>
  <ExampleWrapper>
    <v-subheader>Colored</v-subheader>
    <Colored />
    <v-subheader>Icon</v-subheader>
    <Icon />
    <v-subheader>Outlined</v-subheader>
    <Outlined />
    <v-subheader>Label</v-subheader>
    <Label />
    <v-subheader>Sizes</v-subheader>
    <Sizes />
    <v-subheader>Draggable</v-subheader>
    <Draggable />
    <v-subheader>Filter</v-subheader>
    <FilterComp />
    <v-subheader>No ripple</v-subheader>
    <NoRipple />
    <v-subheader>Closable</v-subheader>
    <Closable />
    <v-subheader>Action chips</v-subheader>
    <ActionChips />
    <v-subheader>In selects</v-subheader>
    <InSelects />
    <v-subheader>Custom lists</v-subheader>
    <CustomLists />
    <v-subheader>Additional filtering</v-subheader>
    <AdditionalFiltering />
    <v-subheader>Expandable</v-subheader>
    <Expandable />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Colored from './chips/Colored';
import Icon from './chips/Icon';
import Outlined from './chips/Outlined';
import Label from './chips/Label';
import Sizes from './chips/Sizes';
import Draggable from './chips/Draggable';
import FilterComp from './chips/Filter';
import NoRipple from './chips/NoRipple';
import Closable from './chips/Closable';
import ActionChips from './chips/ActionChips';
import InSelects from './chips/InSelects';
import CustomLists from './chips/CustomLists';
import AdditionalFiltering from './chips/AdditionalFiltering';
import Expandable from './chips/Expandable';

export default {
  name: 'Chips',
  
  components: {
    ExampleWrapper,
    Colored,
    Icon,
    Outlined,
    Label,
    Sizes,
    Draggable,
    FilterComp,
    NoRipple,
    Closable,
    ActionChips,
    InSelects,
    CustomLists,
    AdditionalFiltering,
    Expandable
  },

  data: () => ({})
};
</script>