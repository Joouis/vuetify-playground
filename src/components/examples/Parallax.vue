<template>
  <ExampleWrapper>
    <div style="min-height: 150vh;">
    <v-subheader>With content</v-subheader>
    <WithContent />
    <v-subheader>Custom height</v-subheader>
    <CustomHeight />
    </div>
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import WithContent from './parallax/WithContent';
import CustomHeight from './parallax/CustomHeight';

export default {
  name: 'Parallax',
  
  components: {
    ExampleWrapper,
    WithContent,
    CustomHeight
  },

  data: () => ({})
};
</script>