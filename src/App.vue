<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <router-link to="/" style="text-decoration:none; color: black">PiDay</router-link>
      </v-toolbar-title>
      <v-divider
          class="mx-3"
          inset
          vertical
      ></v-divider>
      <v-toolbar-title class="headline">
        <div style="text-decoration:none; color: black">{{date}}</div>
      </v-toolbar-title>
      <v-divider
          class="mx-3"
          inset
          vertical
      ></v-divider>
      <v-toolbar-title class="headline">
        <div style="text-decoration:none; color: black">{{time}}</div>
      </v-toolbar-title>
      <v-divider
          class="mx-3"
          inset
          vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-btn
          flat
          to="/auth"
      >
        <span class="mr-0">Auth</span>
      </v-btn>
      <v-btn
          flat
          to="/calendar"
      >
        <span class="mr-0">Calendar</span>
      </v-btn>
      <v-btn
          flat
          to="/about"
      >
        <span class="mr-0">About</span>
      </v-btn>
      <v-menu
          offset-y
          transition="slide-y-transition"
      >
        <v-btn
          slot="activator"
          flat
          icon
        >
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <template v-for="(infoItem, index) in infoItems">
            <v-list-tile
                :key="index"
                :to="infoItem.link"
                :@click="infoItem.onClick"
            >
              <v-list-tile-title>{{ infoItem.title }}</v-list-tile-title>
            </v-list-tile>
            <v-divider v-if="infoItem.divider" :key="index + 10"></v-divider>
          </template>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import moment from "moment";

export default {
  name: "App",
  data() {
    return {
      time: moment().format("LT"),
      date: moment().format("l"),
      infoItems: [
        {
          title: "test menu item (to calendar)",
          link: "/calendar",
          divider: true
        },
        {
          title: "Reboot",
          onClick: this.reboot()
        }
      ]
    };
  },
  created() {
    try {
      // NOTE: Google recommends 45 min refresh policy
      window.setInterval(this.$refreshToken().then, 1000 * 60 * 45);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  methods: {
    reboot() {}
  },
  mounted: function() {
    setInterval(() => {
      this.time = moment().format("LT");
    }, 1000);
  }
};
</script>
