<template>
  <ExampleWrapper>
    <v-subheader>Type</v-subheader>
    <Type />
    <v-subheader>Border</v-subheader>
    <Border />
    <v-subheader>Colored Border</v-subheader>
    <ColoredBorder />
    <v-subheader>Dense</v-subheader>
    <Dense />
    <v-subheader>Dismissible</v-subheader>
    <Dismissible />
    <v-subheader>Icon</v-subheader>
    <Icon />
    <v-subheader>Outlined</v-subheader>
    <Outlined />
    <v-subheader>Prominent</v-subheader>
    <Prominent />
    <v-subheader>Text</v-subheader>
    <TextAlert />
    <v-subheader>Transition</v-subheader>
    <Transition />
    <v-subheader>Twitter Alert</v-subheader>
    <TwitterAlert />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Type from './alerts/Type';
import Border from './alerts/Border';
import ColoredBorder from './alerts/ColoredBorder';
import Dense from './alerts/Dense';
import Dismissible from './alerts/Dismissible';
import Icon from './alerts/Icon';
import Outlined from './alerts/Outlined';
import Prominent from './alerts/Prominent';
import Text from './alerts/Text';
import Transition from './alerts/Transition';
import TwitterAlert from './alerts/TwitterAlert';

export default {
  name: 'Alerts',
  
  components: {
    ExampleWrapper,
    Type,
    Border,
    ColoredBorder,
    Dense,
    Dismissible,
    Icon,
    Outlined,
    Prominent,
    // Do not use built-in or reserved HTML elements as component id
    TextAlert: Text,
    Transition,
    TwitterAlert
  },

  data: () => ({})
};
</script>