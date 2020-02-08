<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Creating rules</v-subheader>
    <CreatingRules />
    <v-subheader>Validation with submit & clear</v-subheader>
    <ValidationWithSubmitAndClear />
    <v-subheader>Vuelidate</v-subheader>
    <Vuelidate />
    <!-- <v-subheader>Vee-validate</v-subheader>
    <VeeValidate /> -->
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './forms/Playground';
import CreatingRules from './forms/CreatingRules';
import ValidationWithSubmitAndClear from './forms/ValidationWithSubmitAndClear';
import Vuelidate from './forms/Vuelidate';
// import VeeValidate from './forms/VeeValidate';

export default {
  name: 'Forms',
  
  components: {
    ExampleWrapper,
    Playground,
    CreatingRules,
    ValidationWithSubmitAndClear,
    Vuelidate,
    // VeeValidate
  },

  data: () => ({})
};
</script>