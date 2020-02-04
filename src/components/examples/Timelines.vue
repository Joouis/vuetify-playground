<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Small dots</v-subheader>
    <SmallDots />
    <v-subheader>Icon dots</v-subheader>
    <IconDots />
    <v-subheader>Reverse direction</v-subheader>
    <ReverseDirection />
    <v-subheader>Timeline card</v-subheader>
    <TimelineCard />
    <v-subheader>Dense alert</v-subheader>
    <DenseAlert />
    <v-subheader>Opposite slot</v-subheader>
    <OppositeSlot />
    <v-subheader>Avatar dots</v-subheader>
    <AvatarDots />
    <v-subheader>Colored dots</v-subheader>
    <ColoredDots />
    <v-subheader>Advanced</v-subheader>
    <Advanced />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './timelines/Playground';
import SmallDots from './timelines/SmallDots';
import IconDots from './timelines/IconDots';
import ReverseDirection from './timelines/ReverseDirection';
import TimelineCard from './timelines/TimelineCard';
import DenseAlert from './timelines/DenseAlert';
import OppositeSlot from './timelines/OppositeSlot';
import AvatarDots from './timelines/AvatarDots';
import ColoredDots from './timelines/ColoredDots';
import Advanced from './timelines/Advanced';

export default {
  name: 'Timelines',
  
  components: {
    ExampleWrapper,
    Playground,
    SmallDots,
    IconDots,
    ReverseDirection,
    TimelineCard,
    DenseAlert,
    OppositeSlot,
    AvatarDots,
    ColoredDots,
    Advanced
  },

  data: () => ({})
};
</script>