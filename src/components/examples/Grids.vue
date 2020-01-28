<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Auto sizing columns</v-subheader>
    <AutoSizingColumns />
    <v-subheader>Equal width columns</v-subheader>
    <EqualWidthColumns />
    <v-subheader>One column width</v-subheader>
    <OneColumnWidth />
    <v-subheader>Variable content width</v-subheader>
    <VariableContentWidth />
    <v-subheader>Grow and Shrink</v-subheader>
    <GrowAndShrink />
    <v-subheader>Row and column breakpoints</v-subheader>
    <RowAndColumnBreakpoints />
    <v-subheader>Unique layouts</v-subheader>
    <UniqueLayouts />
    <v-subheader>Vertical alignment</v-subheader>
    <VerticalAlignment />
    <v-subheader>Horizontal alignment</v-subheader>
    <HorizontalAlignment />
    <v-subheader>No gutters</v-subheader>
    <NoGutters />
    <v-subheader>Column wrapping</v-subheader>
    <ColumnWrapping />
    <v-subheader>Order classes</v-subheader>
    <OrderClasses />
    <v-subheader>Order last / first</v-subheader>
    <OrderLastFirst />
    <v-subheader>Offset</v-subheader>
    <Offset />
    <v-subheader>Offset breakpoint</v-subheader>
    <OffsetBreakpoint />
    <v-subheader>Margin utilities</v-subheader>
    <MarginUtilities />
    <v-subheader>Nested grid</v-subheader>
    <NestedGrid />
    <v-subheader>Spacers</v-subheader>
    <Spacers />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './grids/Playground';
import AutoSizingColumns from './grids/AutoSizingColumns';
import EqualWidthColumns from './grids/EqualWidthColumns';
import OneColumnWidth from './grids/OneColumnWidth';
import VariableContentWidth from './grids/VariableContentWidth';
import GrowAndShrink from './grids/GrowAndShrink';
import RowAndColumnBreakpoints from './grids/RowAndColumnBreakpoints';
import UniqueLayouts from './grids/UniqueLayouts';
import VerticalAlignment from './grids/VerticalAlignment';
import HorizontalAlignment from './grids/HorizontalAlignment';
import NoGutters from './grids/NoGutters';
import ColumnWrapping from './grids/ColumnWrapping';
import OrderClasses from './grids/OrderClasses';
import OrderLastFirst from './grids/OrderLastFirst';
import Offset from './grids/Offset';
import OffsetBreakpoint from './grids/OffsetBreakpoint';
import MarginUtilities from './grids/MarginUtilities';
import NestedGrid from './grids/NestedGrid';
import Spacers from './grids/Spacers';

export default {
  name: 'Grids',
  
  components: {
    ExampleWrapper,
    Playground,
    AutoSizingColumns,
    EqualWidthColumns,
    OneColumnWidth,
    VariableContentWidth,
    GrowAndShrink,
    RowAndColumnBreakpoints,
    UniqueLayouts,
    VerticalAlignment,
    HorizontalAlignment,
    NoGutters,
    ColumnWrapping,
    OrderClasses,
    OrderLastFirst,
    Offset,
    OffsetBreakpoint,
    MarginUtilities,
    NestedGrid,
    Spacers
  },

  data: () => ({})
};
</script>