<template>
  <ExampleWrapper>
    <v-subheader>Outlined cards</v-subheader>
    <OutlinedCards />
    <v-subheader>Intermediate</v-subheader>
    <Intermediate />
    <v-subheader>Information card</v-subheader>
    <InformationCard />
    <v-subheader>Media with text</v-subheader>
    <MediaWithText />
    <v-subheader>Grids</v-subheader>
    <Grids />
    <v-subheader>Horizontal cards</v-subheader>
    <HorizontalCards />
    <v-subheader>Custom actions</v-subheader>
    <CustomActions />
    <v-subheader>Twitter card</v-subheader>
    <TwitterCard />
    <v-subheader>Loading card</v-subheader>
    <LoadingCard />
    <v-subheader>Weather card</v-subheader>
    <WeatherCard />
    <v-subheader>Advanced</v-subheader>
    <Advanced />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import OutlinedCards from './cards/OutlinedCards';
import Intermediate from './cards/Intermediate';
import InformationCard from './cards/InformationCard';
import MediaWithText from './cards/MediaWithText';
import Grids from './cards/Grids';
import HorizontalCards from './cards/HorizontalCards';
import CustomActions from './cards/CustomActions';
import TwitterCard from './cards/TwitterCard';
import LoadingCard from './cards/LoadingCard';
import WeatherCard from './cards/WeatherCard';
import Advanced from './cards/Advanced';

export default {
  name: 'Cards',
  
  components: {
    ExampleWrapper,
    OutlinedCards,
    Intermediate,
    InformationCard,
    MediaWithText,
    Grids,
    HorizontalCards,
    CustomActions,
    TwitterCard,
    LoadingCard,
    WeatherCard,
    Advanced
  },

  data: () => ({})
};
</script>