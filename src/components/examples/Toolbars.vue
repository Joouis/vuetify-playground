<template>
  <ExampleWrapper>
    <!-- <v-subheader>Playground</v-subheader>
    <Playground /> -->
    <v-subheader>Prominent Toolbars</v-subheader>
    <ProminentToolbars />
    <v-subheader>Dense Toolbars</v-subheader>
    <DenseToolbars />
    <v-subheader>Light and Dark</v-subheader>
    <LightAndDark />
    <v-subheader>Variations</v-subheader>
    <Variations />
    <v-subheader>Prominent w/ Background</v-subheader>
    <ProminentWBackground />
    <v-subheader>Extended</v-subheader>
    <Extended />
    <v-subheader>Extension Height</v-subheader>
    <ExtensionHeight />
    <v-subheader>Collapse</v-subheader>
    <Collapse />
    <v-subheader>Flexible Toolbar and Card Toolbar</v-subheader>
    <Flexible />
    <v-subheader>Floating with search</v-subheader>
    <FloatingWithSearch />
    <v-subheader>Contextual Action Bars</v-subheader>
    <ContextualActionBars />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
// import Playground from './toolbars/Playground';
import ProminentToolbars from './toolbars/ProminentToolbars';
import DenseToolbars from './toolbars/DenseToolbars';
import LightAndDark from './toolbars/LightAndDark';
import Variations from './toolbars/Variations';
import ProminentWBackground from './toolbars/ProminentWBackground';
import Extended from './toolbars/Extended';
import ExtensionHeight from './toolbars/ExtensionHeight';
import Collapse from './toolbars/Collapse';
import Flexible from './toolbars/Flexible';
import FloatingWithSearch from './toolbars/FloatingWithSearch';
import ContextualActionBars from './toolbars/ContextualActionBars';

export default {
  name: 'Toolbars',
  
  components: {
    ExampleWrapper,
    // TODO: A better playground for mobile experience?
    // Playground,
    ProminentToolbars,
    DenseToolbars,
    LightAndDark,
    Variations,
    ProminentWBackground,
    Extended,
    ExtensionHeight,
    Collapse,
    Flexible,
    FloatingWithSearch,
    ContextualActionBars
  },

  data: () => ({})
};
</script>