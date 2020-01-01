<template>
  <v-card
    max-width="500"
    class="mx-auto"
  >
    <v-list>
      <v-subheader>UI Components</v-subheader>
      <template v-for="item in menuItems">
        <template v-if="typeof item.items === 'object'">
          <v-list-group :key="item.title" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-title v-text="item.title" />
            </template>
            <v-list-item
                v-for="subItem in item.items"
                :key="subItem.title"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="subItem.title" />
                </v-list-item-content>
              </v-list-item>
          </v-list-group>
        </template>
        <template v-else>
          <v-list-item :key="item.title" :to="getRoutePath(item.title)">
            <v-list-item-icon :key="item.title" />
            <v-list-item-title v-text="item.title" />
          </v-list-item>
        </template>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'UIComponentsList',

  data() {
    return {
      menuItems: [
        {
          title: 'Alerts'
        }, {
          title: 'Avatars'
        }, {
          title: 'Badges'
        }, {
          title: 'Banners'
        }, {
          title: 'Bars',
          items: [
            {
              title: 'App Bars'
            }, {
              title: 'Toolbars'
            }, {
              title: 'System bars'
            }]
        }
      ],
    }
  },

  methods: {
    getRoutePath: (title) => {
      return title.toLowerCase().split(' ').join('-');
    }
  }
};
</script>
