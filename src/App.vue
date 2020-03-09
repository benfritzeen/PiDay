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
      <v-spacer></v-spacer>
      <v-btn
          flat
          to="/monday"
      >
        <span class="mr-0">Monday</span>
      </v-btn>
      <v-btn
          flat
          to="/tuesday"
      >
        <span class="mr-0">Tuesday</span>
      </v-btn>
      <v-btn
          flat
          to="/wednesday"
      >
        <span class="mr-0">Wednesday</span>
      </v-btn>
      <v-btn
          flat
          to="/thursday"
      >
        <span class="mr-0">Thursday</span>
      </v-btn>
      <v-btn
          flat
          to="/friday"
      >
        <span class="mr-0">Friday</span>
      </v-btn>
      <v-btn
          flat
          to="/saturday"
      >
        <span class="mr-0">Saturday</span>
      </v-btn>
      <v-btn
          flat
          to="/sunday"
      >
        <span class="mr-0">Sunday</span>
      </v-btn>
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
export default {
  name: "App",
  data() {
    return {
      infoItems: [
        {
          title: "test menu item (to monday)",
          link: "/monday",
          divider: true
        }
      ]
    };
  },
  created() {
    try {
      // NOTE: Google recommends 45 min refresh policy
      window.setInterval(this.$gapi.refreshToken(), 1000 * 60 * 45);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }
};
</script>
