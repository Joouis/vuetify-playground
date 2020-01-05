<template>
  <ExampleWrapper>
    <v-subheader>Tabs</v-subheader>
    <Tabs />
    <v-subheader>Show-on-hover</v-subheader>
    <ShowOnHover />
    <v-subheader>Dynamic Notifications</v-subheader>
    <DynamicNotifications />
    <v-subheader>Customization Options</v-subheader>
    <CustomizationOptions />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Tabs from './badges/Tabs';
import ShowOnHover from './badges/ShowOnHover';
import DynamicNotifications  from './badges/DynamicNotifications';
import CustomizationOptions from './badges/CustomizationOptions';

// FIXME: badges do not show up.
export default {
  name: 'Badges',
  
  components: {
    ExampleWrapper,
    Tabs,
    ShowOnHover,
    DynamicNotifications,
    CustomizationOptions
  },

  data: () => ({})
};
</script>