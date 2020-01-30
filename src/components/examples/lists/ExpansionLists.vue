<template>
  <v-card
    max-width="500"
    class="mx-auto"
  >
    <v-toolbar
      color="teal"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Topics</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            action: 'mdi-ticket',
            title: 'Attractions',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'mdi-silverware-fork-knife',
            title: 'Dining',
            active: true,
            items: [
              { title: 'Breakfast & brunch' },
              { title: 'New American' },
              { title: 'Sushi' },
            ],
          },
          {
            action: 'mdi-school',
            title: 'Education',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'mdi-run',
            title: 'Family',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'mdi-medical-bag',
            title: 'Health',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'mdi-content-cut',
            title: 'Office',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'mdi-tag',
            title: 'Promotions',
            items: [
              { title: 'List Item' },
            ],
          },
        ],
      }
    },
  }
</script>