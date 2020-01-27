<template>
  <ExampleWrapper>
    <v-subheader>Without activator</v-subheader>
    <WithoutActivator />
    <v-subheader>Modal</v-subheader>
    <Modal />
    <v-subheader>Scrollable</v-subheader>
    <Scrollable />
    <v-subheader>Overflowed</v-subheader>
    <Overflowed />
    <v-subheader>Form</v-subheader>
    <Form />
    <v-subheader>Loader</v-subheader>
    <Loader />
    <v-subheader>Fullscreen</v-subheader>
    <Fullscreen />
    <v-subheader>Nested dialogs</v-subheader>
    <NestedDialogs />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import WithoutActivator from './dialogs/WithoutActivator';
import Modal from './dialogs/Modal';
import Scrollable from './dialogs/Scrollable';
import Overflowed from './dialogs/Overflowed';
import Form from './dialogs/Form';
import Loader from './dialogs/Loader';
import Fullscreen from './dialogs/Fullscreen';
import NestedDialogs from './dialogs/NestedDialogs';

export default {
  name: 'Dialogs',
  
  components: {
    ExampleWrapper,
    WithoutActivator,
    Modal,
    Scrollable,
    Overflowed,
    Form,
    Loader,
    Fullscreen,
    NestedDialogs
  },

  data: () => ({})
};
</script>