<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Loading</v-subheader>
    <Loading />
    <v-subheader>Hint</v-subheader>
    <Hint />
    <v-subheader>Success</v-subheader>
    <Success />
    <v-subheader>Error</v-subheader>
    <Error />
    <v-subheader>Multiple errors</v-subheader>
    <MultipleErrors />
    <v-subheader>Rules</v-subheader>
    <Rules1 />
    <Rules2 />
    <v-subheader>Slots</v-subheader>
    <Slots />
    <v-subheader>Slot events</v-subheader>
    <SlotEvents />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './inputs/Playground';
import Loading from './inputs/Loading';
import Hint from './inputs/Hint';
import Success from './inputs/Success';
import Error from './inputs/Error';
import MultipleErrors from './inputs/MultipleErrors';
import Rules1 from './inputs/Rules1';
import Rules2 from './inputs/Rules2';
import Slots from './inputs/Slots';
import SlotEvents from './inputs/SlotEvents';

export default {
  name: 'Inputs',
  
  components: {
    ExampleWrapper,
    Playground,
    Loading,
    Hint,
    Success,
    Error,
    MultipleErrors,
    Rules1,
    Rules2,
    Slots,
    SlotEvents
  },

  data: () => ({})
};
</script>