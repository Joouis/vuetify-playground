<template>
  <ExampleWrapper>
    <v-subheader>Large</v-subheader>
    <Large />
    <v-subheader>Custom divider</v-subheader>
    <CustomDivider />
    <v-subheader>Icon dividers</v-subheader>
    <IconDividers />
    <v-subheader>ItemSlot</v-subheader>
    <ItemSlot />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Large from './breadcrumbs/Large';
import CustomDivider from './breadcrumbs/CustomDivider';
import IconDividers from './breadcrumbs/IconDividers';
import ItemSlot from './breadcrumbs/ItemSlot';

export default {
  name: 'Breadcrumbs',
  
  components: {
    ExampleWrapper,
    Large,
    CustomDivider,
    IconDividers,
    ItemSlot
  },

  data: () => ({})
};
</script>