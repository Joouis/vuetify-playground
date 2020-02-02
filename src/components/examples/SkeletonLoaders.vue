<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Boilerplate component</v-subheader>
    <BoilerplateComponent />
    <v-subheader>Implementation methods</v-subheader>
    <ImplementationMethods />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './skeleton-loaders/Playground';
import BoilerplateComponent from './skeleton-loaders/BoilerplateComponent';
import ImplementationMethods from './skeleton-loaders/ImplementationMethods';

export default {
  name: 'SkeletonLoaders',
  
  components: {
    ExampleWrapper,
    Playground,
    BoilerplateComponent,
    ImplementationMethods
  },

  data: () => ({})
};
</script>