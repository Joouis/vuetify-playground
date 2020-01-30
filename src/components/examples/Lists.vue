<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Disabled lists</v-subheader>
    <DisabledLists />
    <v-subheader>Shaped lists</v-subheader>
    <ShapedLists />
    <v-subheader>Dense</v-subheader>
    <Dense />
    <v-subheader>Flat</v-subheader>
    <Flat />
    <v-subheader>Rounded</v-subheader>
    <Rounded />
    <v-subheader>Avatar with title and action</v-subheader>
    <AvatarWithTitleAndAction />
    <v-subheader>Icon with 2 lines and action</v-subheader>
    <IconWith2linesAndAction />
    <v-subheader>Avatar with 3 lines</v-subheader>
    <AvatarWith3lines />
    <v-subheader>Avatar with title and action</v-subheader>
    <AvatarWithTitleAndAction2 />
    <v-subheader>Nested lists</v-subheader>
    <NestedLists />
    <v-subheader>Subheadings and dividers</v-subheader>
    <SubheadingsAndDividers />
    <v-subheader>Card image with toolbar and list</v-subheader>
    <CardImageWithToolbarAndList />
    <v-subheader>Title with sub-title, actions and action-text</v-subheader>
    <TitleWithSubtitleActionsAndActionText />
    <v-subheader>Action with title and sub-title</v-subheader>
    <ActionWithTitleAndSubtitle />
    <v-subheader>Expansion Lists</v-subheader>
    <ExpansionLists />
    <v-subheader>Navigation lists</v-subheader>
    <NavigationLists />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './lists/Playground';
import DisabledLists from './lists/DisabledLists';
import ShapedLists from './lists/ShapedLists';
import Dense from './lists/Dense';
import Flat from './lists/Flat';
import Rounded from './lists/Rounded';
import AvatarWithTitleAndAction from './lists/AvatarWithTitleAndAction';
import IconWith2linesAndAction from './lists/IconWith2linesAndAction';
import AvatarWith3lines from './lists/AvatarWith3lines';
import AvatarWithTitleAndAction2 from './lists/AvatarWithTitleAndAction2';
import NestedLists from './lists/NestedLists';
import SubheadingsAndDividers from './lists/SubheadingsAndDividers';
import CardImageWithToolbarAndList from './lists/CardImageWithToolbarAndList';
import TitleWithSubtitleActionsAndActionText from './lists/TitleWithSubtitleActionsAndActionText';
import ActionWithTitleAndSubtitle from './lists/ActionWithTitleAndSubtitle';
import ExpansionLists from './lists/ExpansionLists';
import NavigationLists from './lists/NavigationLists';

export default {
  name: 'Lists',
  
  components: {
    ExampleWrapper,
    Playground,
    DisabledLists,
    ShapedLists,
    Dense,
    Flat,
    Rounded,
    AvatarWithTitleAndAction,
    IconWith2linesAndAction,
    AvatarWith3lines,
    AvatarWithTitleAndAction2,
    NestedLists,
    SubheadingsAndDividers,
    CardImageWithToolbarAndList,
    TitleWithSubtitleActionsAndActionText,
    ActionWithTitleAndSubtitle,
    ExpansionLists,
    NavigationLists
  },

  data: () => ({})
};
</script>