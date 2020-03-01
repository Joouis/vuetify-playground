<template>
  <ExampleWrapper>
    <v-subheader>Playground</v-subheader>
    <Playground />
    <v-subheader>Date pickers - Colors</v-subheader>
    <DatePickersColors />
    <v-subheader>Date pickers - Allowed dates</v-subheader>
    <DatePickersAllowedDates />
    <v-subheader>Date pickers - Setting picker width</v-subheader>
    <DatePickersSettingPickerWidth />
    <v-subheader>Date pickers - react to displayed month/year change</v-subheader>
    <DatePickersReactToDisplayedMonthYearChange />
    <v-subheader>Date pickers - Internationalization</v-subheader>
    <DatePickersInternationalization />
    <v-subheader>Date pickers - icons</v-subheader>
    <DatePickersIcons />
    <v-subheader>Date pickers - read only</v-subheader>
    <DatePickersReadOnly />
    <v-subheader>Date pickers - current date indicator</v-subheader>
    <DatePickersCurrentDateindicator />
    <v-subheader>Month pickers</v-subheader>
    <MonthPickers />
    <v-subheader>Month pickers - Colors</v-subheader>
    <MonthPickersColors />
    <v-subheader>Month pickers - Allowed months</v-subheader>
    <MonthPickersAllowedMonths />
    <v-subheader>Month pickers - Multiple</v-subheader>
    <MonthPickersMultiple />
    <v-subheader>Month pickers - Setting picker width</v-subheader>
    <MonthPickersSettingPickerWidth />
    <v-subheader>Month pickers - Internationalization</v-subheader>
    <MonthPickersInternationalization />
    <v-subheader>Month pickers - icons</v-subheader>
    <MonthPickersIcons />
    <v-subheader>Month pickers - read only</v-subheader>
    <MonthPickersReadOnly />
    <v-subheader>Month pickers - current month indicator</v-subheader>
    <MonthPickersCurrentMonthIndicator />
    <v-subheader>Date pickers - In dialog and menu</v-subheader>
    <DatePickersInDialogAndMenu />
    <v-subheader>Date pickers - formatting date</v-subheader>
    <DatePickersFormattingDate />
    <v-subheader>Date pickers - formatting date using external libs</v-subheader>
    <DatePickersFormattingDateUsingExternalLibs />
    <v-subheader>Date pickers - Multiple</v-subheader>
    <DatePickersMultiple />
    <v-subheader>Date pickers - Range</v-subheader>
    <DatePickersRange />
    <v-subheader>Date pickers - birthday picker</v-subheader>
    <DatePickersBirthdayPicker />
    <v-subheader>Date pickers - Events</v-subheader>
    <DatePickersEvents />
    <v-subheader>Month pickers - In dialog and menu</v-subheader>
    <MonthPickersInDialogAndMenu />
  </ExampleWrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper';
import Playground from './date-pickers/Playground';
import DatePickersColors from './date-pickers/DatePickersColors';
import DatePickersAllowedDates from './date-pickers/DatePickersAllowedDates';
import DatePickersSettingPickerWidth from './date-pickers/DatePickersSettingPickerWidth';
import DatePickersReactToDisplayedMonthYearChange from './date-pickers/DatePickersReactToDisplayedMonthYearChange';
import DatePickersInternationalization from './date-pickers/DatePickersInternationalization';
import DatePickersIcons from './date-pickers/DatePickersIcons';
import DatePickersReadOnly from './date-pickers/DatePickersReadOnly';
import DatePickersCurrentDateindicator from './date-pickers/DatePickersCurrentDateindicator';
import MonthPickers from './date-pickers/MonthPickers';
import MonthPickersColors from './date-pickers/MonthPickersColors';
import MonthPickersAllowedMonths from './date-pickers/MonthPickersAllowedMonths';
import MonthPickersMultiple from './date-pickers/MonthPickersMultiple';
import MonthPickersSettingPickerWidth from './date-pickers/MonthPickersSettingPickerWidth';
import MonthPickersInternationalization from './date-pickers/MonthPickersInternationalization';
import MonthPickersIcons from './date-pickers/MonthPickersIcons';
import MonthPickersReadOnly from './date-pickers/MonthPickersReadOnly';
import MonthPickersCurrentMonthIndicator from './date-pickers/MonthPickersCurrentMonthIndicator';
import DatePickersInDialogAndMenu from './date-pickers/DatePickersInDialogAndMenu';
import DatePickersFormattingDate from './date-pickers/DatePickersFormattingDate';
import DatePickersFormattingDateUsingExternalLibs from './date-pickers/DatePickersFormattingDateUsingExternalLibs';
import DatePickersMultiple from './date-pickers/DatePickersMultiple';
import DatePickersRange from './date-pickers/DatePickersRange';
import DatePickersBirthdayPicker from './date-pickers/DatePickersBirthdayPicker';
import DatePickersEvents from './date-pickers/DatePickersEvents';
import MonthPickersInDialogAndMenu from './date-pickers/MonthPickersInDialogAndMenu';

export default {
  name: 'DatePickers',
  
  components: {
    ExampleWrapper,
    Playground,
    DatePickersColors,
    DatePickersAllowedDates,
    DatePickersSettingPickerWidth,
    DatePickersReactToDisplayedMonthYearChange,
    DatePickersInternationalization,
    DatePickersIcons,
    DatePickersReadOnly,
    DatePickersCurrentDateindicator,
    MonthPickers,
    MonthPickersColors,
    MonthPickersAllowedMonths,
    MonthPickersMultiple,
    MonthPickersSettingPickerWidth,
    MonthPickersInternationalization,
    MonthPickersIcons,
    MonthPickersReadOnly,
    MonthPickersCurrentMonthIndicator,
    DatePickersInDialogAndMenu,
    DatePickersFormattingDate,
    DatePickersFormattingDateUsingExternalLibs,
    DatePickersMultiple,
    DatePickersRange,
    DatePickersBirthdayPicker,
    DatePickersEvents,
    MonthPickersInDialogAndMenu
  },

  data: () => ({})
};
</script>