import Vue from 'vue';
import VueRouter from 'vue-router';

import UIComponentsList from '../components/UIComponentsList.vue';
import PageNotFound from '../components/PageNotFound.vue';
import Alerts from '../components/examples/Alerts';
import Avatars from '../components/examples/Avatars';
import Badges from '../components/examples/Badges';
import Banners from '../components/examples/Banners';
import AppBars from '../components/examples/AppBars';
import Toolbars from '../components/examples/Toolbars';
import SystemBars from '../components/examples/SystemBars';
import BottomNavigation from '../components/examples/BottomNavigation';
import BottomSheets from '../components/examples/BottomSheets';
import Breadcrumbs from '../components/examples/Breadcrumbs';
import Buttons from '../components/examples/Buttons';
import FloatingActionButtons from '../components/examples/FloatingActionButtons';
import Calendars from '../components/examples/Calendars';
import Cards from '../components/examples/Cards';
import Carousels from '../components/examples/Carousels';
import Chips from '../components/examples/Chips';
import Dialogs from '../components/examples/Dialogs';
import Dividers from '../components/examples/Dividers';
import ExpansionPanels from '../components/examples/ExpansionPanels';
import Footer from '../components/examples/Footer';
import Grids from '../components/examples/Grids';
import ButtonGroups from '../components/examples/ButtonGroups';
import ChipGroups from '../components/examples/ChipGroups';
import ItemGroups from '../components/examples/ItemGroups';
import ListItemGroups from '../components/examples/ListItemGroups';
import SlideGroups from '../components/examples/SlideGroups';
import Windows from '../components/examples/Windows';
import Hover from '../components/examples/Hover';
import Icons from '../components/examples/Icons';
import Images from '../components/examples/Images';
import Lazy from '../components/examples/Lazy';
import Lists from '../components/examples/Lists';
import Menus from '../components/examples/Menus';
import NavigationDrawers from '../components/examples/NavigationDrawers';
import Overlays from '../components/examples/Overlays';
import Paginations from '../components/examples/Paginations';
import Parallax from '../components/examples/Parallax';
import Ratings from '../components/examples/Ratings';
import Sheets from '../components/examples/Sheets';
import SkeletonLoaders from '../components/examples/SkeletonLoaders';
import Snackbars from '../components/examples/Snackbars';
import Sparklines from '../components/examples/Sparklines';
import Steppers from '../components/examples/Steppers';
import Subheaders from '../components/examples/Subheaders';
import Tabs from '../components/examples/Tabs';
import Timelines from '../components/examples/Timelines';
import Tooltips from '../components/examples/Tooltips';
import Treeview from '../components/examples/Treeview';
import Autocompletes from '../components/examples/Autocompletes';
import Combobox from '../components/examples/Combobox';
import FileInputs from '../components/examples/FileInputs';
import Forms from '../components/examples/Forms';
import Inputs from '../components/examples/Inputs';
import OverflowButtons from '../components/examples/OverflowButtons';
import Selects from '../components/examples/Selects';
import SelectionControls from '../components/examples/SelectionControls';

Vue.use(VueRouter);

// Sync `./routes.js` file if routes below changed.
const routes = [
  { path: '/', component: UIComponentsList },
  { path: '/alerts', component: Alerts },
  { path: '/avatars', component: Avatars },
  { path: '/badges', component: Badges },
  { path: '/banners', component: Banners },
  { path: '/app-bars', component: AppBars },
  { path: '/toolbars', component: Toolbars },
  { path: '/system-bars', component: SystemBars },
  { path: '/bottom-navigation', component: BottomNavigation },
  { path: '/bottom-sheets', component: BottomSheets },
  { path: '/breadcrumbs', component: Breadcrumbs },
  { path: '/buttons', component: Buttons },
  { path: '/floating-action-buttons', component: FloatingActionButtons },
  { path: '/calendars', component: Calendars },
  { path: '/cards', component: Cards },
  { path: '/carousels', component: Carousels },
  { path: '/chips', component: Chips },
  { path: '/dialogs', component: Dialogs },
  { path: '/dividers', component: Dividers },
  { path: '/expansion-panels', component: ExpansionPanels },
  { path: '/footer', component: Footer },
  { path: '/grids', component: Grids },
  { path: '/button-groups', component: ButtonGroups },
  { path: '/chip-groups', component: ChipGroups },
  { path: '/item-groups', component: ItemGroups },
  { path: '/list-item-groups', component: ListItemGroups },
  { path: '/slide-groups', component: SlideGroups },
  { path: '/windows', component: Windows },
  { path: '/hover', component: Hover },
  { path: '/icons', component: Icons },
  { path: '/images', component: Images },
  { path: '/lazy', component: Lazy },
  { path: '/lists', component: Lists },
  { path: '/menus', component: Menus },
  { path: '/navigation-drawers', component: NavigationDrawers },
  { path: '/overlays', component: Overlays },
  { path: '/paginations', component: Paginations },
  { path: '/parallax', component: Parallax },
  { path: '/ratings', component: Ratings },
  { path: '/sheets', component: Sheets },
  { path: '/skeleton-loaders', component: SkeletonLoaders },
  { path: '/snackbars', component: Snackbars },
  { path: '/sparklines', component: Sparklines },
  { path: '/steppers', component: Steppers },
  { path: '/subheaders', component: Subheaders },
  { path: '/tabs', component: Tabs },
  { path: '/timelines', component: Timelines },
  { path: '/tooltips', component: Tooltips },
  { path: '/treeview', component: Treeview },
  { path: '/autocompletes', component: Autocompletes },
  { path: '/combobox', component: Combobox },
  { path: '/file-inputs', component: FileInputs },
  { path: '/forms', component: Forms },
  { path: '/inputs', component: Inputs },
  { path: '/overflow-buttons', component: OverflowButtons },
  { path: '/selects', component: Selects },
  { path: '/selection-controls', component: SelectionControls },
  { path: '*', component: PageNotFound }
];

export default new VueRouter({ routes });
