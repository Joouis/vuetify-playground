<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Vertical</v-subheader>
    <Vertical />
    <v-subheader>Reverse</v-subheader>
    <Reverse />
    <v-subheader>Onboarding</v-subheader>
    <Onboarding />
    <v-subheader>Account creation</v-subheader>
    <AccountCreation />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './windows/Playground';
import Vertical from './windows/Vertical';
import Reverse from './windows/Reverse';
import Onboarding from './windows/Onboarding';
import AccountCreation from './windows/AccountCreation';

export default {
  name: 'Treeview',
  
  components: {
    ExampleWrapper,
    Playground,
    Vertical,
    Reverse,
    Onboarding,
    AccountCreation,
  },

  data: () => ({})
};
</script>
