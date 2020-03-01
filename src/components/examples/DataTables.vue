<template>
  <ExampleWrapper>
    <v-subheader>Selectable rows</v-subheader>
    <SelectableRows />
    <v-subheader>Grouped rows</v-subheader>
    <GroupedRows />
    <v-subheader>Sort on multiple columns</v-subheader>
    <SortOnMultipleColumns />
    <v-subheader>Search</v-subheader>
    <Search />
    <v-subheader>Remove default header and footer</v-subheader>
    <RemoveDefaultHeaderAndFooter />
    <v-subheader>Loading state</v-subheader>
    <LoadingState />
    <v-subheader>Dense</v-subheader>
    <Dense />
    <v-subheader>Footer props</v-subheader>
    <FooterProps />
    <v-subheader>Filterable columns</v-subheader>
    <FilterableColumns />
    <v-subheader>Slots</v-subheader>
    <Slots />
    <v-subheader>Simple Checkbox</v-subheader>
    <SimpleCheckbox />
    <v-subheader>Expandable rows</v-subheader>
    <ExpandableRows />
    <v-subheader>Custom filtering</v-subheader>
    <CustomFiltering />
    <v-subheader>Customizing default header</v-subheader>
    <CustomizingDefaultHeader />
    <v-subheader>Customizing default rows</v-subheader>
    <CustomizingDefaultRows />
    <v-subheader>External pagination</v-subheader>
    <ExternalPagination />
    <v-subheader>External sorting</v-subheader>
    <ExternalSorting />
    <v-subheader>Paginate and sort server-side</v-subheader>
    <PaginateAndSortServerSide />
    <v-subheader>Content Editing</v-subheader>
    <ContentEditing />
    <v-subheader>CRUD Actions</v-subheader>
    <CRUDActions />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import SelectableRows from './data-tables/SelectableRows';
import GroupedRows from './data-tables/GroupedRows';
import SortOnMultipleColumns from './data-tables/SortOnMultipleColumns';
import Search from './data-tables/Search';
import RemoveDefaultHeaderAndFooter from './data-tables/RemoveDefaultHeaderAndFooter';
import LoadingState from './data-tables/LoadingState';
import Dense from './data-tables/Dense';
import FooterProps from './data-tables/FooterProps';
import FilterableColumns from './data-tables/FilterableColumns';
import Slots from './data-tables/Slots';
import SimpleCheckbox from './data-tables/SimpleCheckbox';
import ExpandableRows from './data-tables/ExpandableRows';
import CustomFiltering from './data-tables/CustomFiltering';
import CustomizingDefaultHeader from './data-tables/CustomizingDefaultHeader';
import CustomizingDefaultRows from './data-tables/CustomizingDefaultRows';
import ExternalPagination from './data-tables/ExternalPagination';
import ExternalSorting from './data-tables/ExternalSorting';
import PaginateAndSortServerSide from './data-tables/PaginateAndSortServerSide';
import ContentEditing from './data-tables/ContentEditing';
import CRUDActions from './data-tables/CRUDActions';

export default {
  name: 'DataTables',
  
  components: {
    ExampleWrapper,
    SelectableRows,
    GroupedRows,
    SortOnMultipleColumns,
    Search,
    RemoveDefaultHeaderAndFooter,
    LoadingState,
    Dense,
    FooterProps,
    FilterableColumns,
    Slots,
    SimpleCheckbox,
    ExpandableRows,
    CustomFiltering,
    CustomizingDefaultHeader,
    CustomizingDefaultRows,
    ExternalPagination,
    ExternalSorting,
    PaginateAndSortServerSide,
    ContentEditing,
    CRUDActions
  },

  data: () => ({})
};
</script>