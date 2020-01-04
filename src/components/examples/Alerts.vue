<template>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
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
      <Text />
      <v-subheader>Transition</v-subheader>
      <Transition />
      <v-subheader>Twitter alert</v-subheader>
      <TwitterAlert />
    </v-col>
  </v-row>
</template>

<script>
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
    Type,
    Border,
    ColoredBorder,
    Dense,
    Dismissible,
    Icon,
    Outlined,
    Prominent,
    Text,
    Transition,
    TwitterAlert
  },

  data: () => ({})
};
</script>