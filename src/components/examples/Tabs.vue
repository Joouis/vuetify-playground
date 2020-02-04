<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Fixed tabs</v-subheader>
    <FixedTabs />
    <v-subheader>Centered active tab</v-subheader>
    <CenteredActiveTab />
    <v-subheader>Grow</v-subheader>
    <Grow />
    <v-subheader>Pagination</v-subheader>
    <Pagination />
    <v-subheader>Custom icons</v-subheader>
    <CustomIcons />
    <v-subheader>Vertical Tabs</v-subheader>
    <VerticalTabs />
    <v-subheader>Icons and text</v-subheader>
    <IconsAndText />
    <v-subheader>Right aligned tabs</v-subheader>
    <RightAlignedTabs />
    <v-subheader>Content</v-subheader>
    <Content />
    <v-subheader>Align tabs with toolbar title</v-subheader>
    <AlignTabsWithToolbarTitle />
    <v-subheader>Dynamic Tabs</v-subheader>
    <DynamicTabs />
    <v-subheader>With search</v-subheader>
    <WithSearch />
    <v-subheader>Desktop tabs</v-subheader>
    <DesktopTabs />
    <v-subheader>With menu</v-subheader>
    <WithMenu />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './tabs/Playground';
import FixedTabs from './tabs/FixedTabs';
import CenteredActiveTab from './tabs/CenteredActiveTab';
import Grow from './tabs/Grow';
import Pagination from './tabs/Pagination';
import CustomIcons from './tabs/CustomIcons';
import VerticalTabs from './tabs/VerticalTabs';
import IconsAndText from './tabs/IconsAndText';
import RightAlignedTabs from './tabs/RightAlignedTabs';
import Content from './tabs/Content';
import AlignTabsWithToolbarTitle from './tabs/AlignTabsWithToolbarTitle';
import DynamicTabs from './tabs/DynamicTabs';
import WithSearch from './tabs/WithSearch';
import DesktopTabs from './tabs/DesktopTabs';
import WithMenu from './tabs/WithMenu';

export default {
  name: 'Tabs',
  
  components: {
    ExampleWrapper,
    Playground,
    FixedTabs,
    CenteredActiveTab,
    Grow,
    Pagination,
    CustomIcons,
    VerticalTabs,
    IconsAndText,
    RightAlignedTabs,
    Content,
    AlignTabsWithToolbarTitle,
    DynamicTabs,
    WithSearch,
    DesktopTabs,
    WithMenu
  },

  data: () => ({})
};
</script>