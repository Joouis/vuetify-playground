<template>
  <ExampleWrapper>
    <!-- <v-subheader>Playground</v-subheader>
    <Playground /> -->
    <v-subheader>Dense</v-subheader>
    <Dense />
    <v-subheader>Prominent w/ scroll shrink</v-subheader>
    <ProminentWScrollShrink />
    <v-subheader>Prominent w/ scroll shrink and image</v-subheader>
    <ProminentWScrollShrinkAndImage />
    <v-subheader>Hiding on scroll</v-subheader>
    <HidingOnScroll />
    <v-subheader>Collapsible Bars</v-subheader>
    <CollapsibleBars />
    <v-subheader>Elevate Bar on scroll</v-subheader>
    <ElevateBarOnScroll />
    <v-subheader>Inverted scrolling</v-subheader>
    <InvertedScrolling />
    <v-subheader>Scroll threshold</v-subheader>
    <ScrollThreshold />
    <v-subheader>Prominent w/ scroll shrink and image, fading on scroll</v-subheader>
    <ProminentWScrollShrinkAndImageFadingOnScroll />
    <v-subheader>With menu</v-subheader>
    <WithMenu />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
// import Playground from './app-bars/Playground';
import Dense from './app-bars/Dense';
import ProminentWScrollShrink from './app-bars/ProminentWScrollShrink';
import ProminentWScrollShrinkAndImage from './app-bars/ProminentWScrollShrinkAndImage';
import HidingOnScroll from './app-bars/HidingOnScroll';
import CollapsibleBars from './app-bars/CollapsibleBars';
import ElevateBarOnScroll from './app-bars/ElevateBarOnScroll';
import InvertedScrolling from './app-bars/InvertedScrolling';
import ScrollThreshold from './app-bars/ScrollThreshold';
import ProminentWScrollShrinkAndImageFadingOnScroll from './app-bars/ProminentWScrollShrinkAndImageFadingOnScroll';
import WithMenu from './app-bars/WithMenu';

export default {
  name: 'AppBars',
  
  components: {
    ExampleWrapper,
    // TODO: A better playground for mobile experience?
    // Playground,
    Dense,
    ProminentWScrollShrink,
    ProminentWScrollShrinkAndImage,
    HidingOnScroll,
    CollapsibleBars,
    ElevateBarOnScroll,
    InvertedScrolling,
    ScrollThreshold,
    ProminentWScrollShrinkAndImageFadingOnScroll,
    WithMenu
  },

  data: () => ({})
};
</script>