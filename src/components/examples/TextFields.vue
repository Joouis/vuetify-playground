<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Single line</v-subheader>
    <SingleLine />
    <v-subheader>Shaped</v-subheader>
    <Shaped />
    <v-subheader>Disabled and readonly</v-subheader>
    <DisabledAndReadonly />
    <v-subheader>Dense</v-subheader>
    <Dense />
    <v-subheader>Icons</v-subheader>
    <Icons />
    <v-subheader>Clearable</v-subheader>
    <Clearable />
    <v-subheader>Character counter</v-subheader>
    <CharacterCounter />
    <v-subheader>Auto hiding details</v-subheader>
    <AutoHidingDetails />
    <v-subheader>Password input</v-subheader>
    <PasswordInput />
    <v-subheader>Box style</v-subheader>
    <BoxStyle />
    <v-subheader>Solo style</v-subheader>
    <SoloStyle />
    <v-subheader>Outlined style</v-subheader>
    <OutlinedStyle />
    <v-subheader>Custom colors</v-subheader>
    <CustomColors />
    <v-subheader>Masks (using vue-the-mask)</v-subheader>
    <Masks />
    <v-subheader>Hint text</v-subheader>
    <HintText />
    <v-subheader>Prefixes & suffixes</v-subheader>
    <PrefixesSuffixes />
    <v-subheader>Icon events</v-subheader>
    <IconEvents />
    <v-subheader>Icon slots</v-subheader>
    <IconSlots />
    <v-subheader>Label slot</v-subheader>
    <LabelSlot />
    <v-subheader>Validation</v-subheader>
    <Validation />
    <v-subheader>Full-width text field with character counter</v-subheader>
    <FullWidthTextFieldWithCharacterCounter />
    <v-subheader>Progress bar</v-subheader>
    <ProgressBar />
    <v-subheader>Custom validation</v-subheader>
    <CustomValidation />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './text-fields/Playground';
import SingleLine from './text-fields/SingleLine';
import Shaped from './text-fields/Shaped';
import DisabledAndReadonly from './text-fields/DisabledAndReadonly';
import Dense from './text-fields/Dense';
import Icons from './text-fields/Icons';
import Clearable from './text-fields/Clearable';
import CharacterCounter from './text-fields/CharacterCounter';
import AutoHidingDetails from './text-fields/AutoHidingDetails';
import PasswordInput from './text-fields/PasswordInput';
import BoxStyle from './text-fields/BoxStyle';
import SoloStyle from './text-fields/SoloStyle';
import OutlinedStyle from './text-fields/OutlinedStyle';
import CustomColors from './text-fields/CustomColors';
import Masks from './text-fields/Masks';
import HintText from './text-fields/HintText';
import PrefixesSuffixes from './text-fields/PrefixesSuffixes';
import IconEvents from './text-fields/IconEvents';
import IconSlots from './text-fields/IconSlots';
import LabelSlot from './text-fields/LabelSlot';
import Validation from './text-fields/Validation';
import FullWidthTextFieldWithCharacterCounter from './text-fields/FullWidthTextFieldWithCharacterCounter';
import ProgressBar from './text-fields/ProgressBar';
import CustomValidation from './text-fields/CustomValidation';

export default {
  name: 'TextFields',
  
  components: {
    ExampleWrapper,
    Playground,
    SingleLine,
    Shaped,
    DisabledAndReadonly,
    Dense,
    Icons,
    Clearable,
    CharacterCounter,
    AutoHidingDetails,
    PasswordInput,
    BoxStyle,
    SoloStyle,
    OutlinedStyle,
    CustomColors,
    Masks,
    HintText,
    PrefixesSuffixes,
    IconEvents,
    IconSlots,
    LabelSlot,
    Validation,
    FullWidthTextFieldWithCharacterCounter,
    ProgressBar,
    CustomValidation
  },

  data: () => ({})
};
</script>