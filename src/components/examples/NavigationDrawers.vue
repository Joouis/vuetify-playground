<template>
  <ExampleWrapper>
    <!--<v-subheader>Playground</v-subheader>
    <Playground />-->
    <v-subheader>Colored drawer</v-subheader>
    <ColoredDrawer />
    <v-subheader>Permanent floating drawer</v-subheader>
    <PermanentFloatingDrawer />
    <v-subheader>Mini</v-subheader>
    <Mini />
    <v-subheader>Temporary</v-subheader>
    <Temporary />
    <v-subheader>Right positioned</v-subheader>
    <RightPositioned />
    <v-subheader>Expand on hover</v-subheader>
    <ExpandOnHover />
    <v-subheader>Backgrounds</v-subheader>
    <Backgrounds />
    <v-subheader>Combined drawers</v-subheader>
    <CombinedDrawers />
    <v-subheader>Bottom drawer</v-subheader>
    <BottomDrawer />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
// import Playground from './navigation-drawers/Playground';
import ColoredDrawer from './navigation-drawers/ColoredDrawer';
import PermanentFloatingDrawer from './navigation-drawers/PermanentFloatingDrawer';
import Mini from './navigation-drawers/Mini';
import Temporary from './navigation-drawers/Temporary';
import RightPositioned from './navigation-drawers/RightPositioned';
import ExpandOnHover from './navigation-drawers/ExpandOnHover';
import Backgrounds from './navigation-drawers/Backgrounds';
import CombinedDrawers from './navigation-drawers/CombinedDrawers';
import BottomDrawer from './navigation-drawers/BottomDrawer';

export default {
  name: 'NavigationDrawers',
  
  components: {
    ExampleWrapper,
    // Playground,
    ColoredDrawer,
    PermanentFloatingDrawer,
    Mini,
    Temporary,
    RightPositioned,
    ExpandOnHover,
    Backgrounds,
    CombinedDrawers,
    BottomDrawer
  },

  data: () => ({})
};
</script>