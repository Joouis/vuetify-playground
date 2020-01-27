<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Weekly</v-subheader>
    <Weekly />
    <v-subheader>Daily</v-subheader>
    <Daily />
    <v-subheader>Slots</v-subheader>
    <Slots />
    <v-subheader>Events</v-subheader>
    <Events />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './calendars/Playground';
import Weekly from './calendars/Weekly';
import Daily from './calendars/Daily';
import Slots from './calendars/Slots';
import Events from './calendars/Events';

export default {
  name: 'Calendars',
  
  components: {
    ExampleWrapper,
    Playground,
    Weekly,
    Daily,
    Slots,
    Events
  },

  data: () => ({})
};
</script>