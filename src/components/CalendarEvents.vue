<template>
  <!-- <v-container class="events">
    <v-layout
        column
    >
      <v-flex xs12 mb-2>
        Events
      </v-flex>
      <v-flex v-if="events" mb-4>
        <div v-for="(event, idx) in events" :key="idx">
            {{ event.summary }} {{": "}} {{ event.start | formatDate(event.end)}}
        </div>
      </v-flex>
      <v-flex v-else mb-4>
        No upcoming events found.
      </v-flex>
    </v-layout>
  </v-container> -->
  <v-calendar
    ref="calendar"
    :now="today"
    :value="today"
    :events="events"
    type="week"
  ></v-calendar>

</template>

<script>
import moment from "moment";
import { VCalendar } from 'vuetify/lib'

export default {
  name: "CalendarEvents",
  props: {
    googleCalendarApi: {
      type: Object,
      required: true
    },
    calendarId: {
      type: String,
      required: false,
      default: null
    }
  },
  components: { VCalendar },
  data: () => ({
    //events: null,
    today: '2019-01-08',
    events: [
      {
        name: 'Weekly Meeting',
        start: '2019-01-07 09:00',
        end: '2019-01-07 10:00',
      },
      {
        name: 'Thomas\' Birthday',
        start: '2019-01-10',
      },
      {
        name: 'Mash Potatoes',
        start: '2019-01-09 12:30',
        end: '2019-01-09 15:30',
      },
    ],
  }),
  methods: {
    async retrieveEvents() {
      const calendar = this.googleCalendarApi;
      if (calendar) {
        try {
          const today = new Date();
          this.events = await calendar.retrieveEvents(this.calendarId, today);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error("Failed to retrieve events", err);
        }
      }
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    //calendarId: function(newVal, oldVal) {
    //  this.retrieveEvents();
    //}
  },
  async created() {
    //await this.retrieveEvents();
  },
  filters: {
    formatDate: (start, end) => {
      if (start.date && end.date) {
        // eslint-disable-next-line
        return "All Day " + moment(String(start.date)).format('dddd');
      } else {
        // eslint-disable-next-line
        const formattedStart = moment(String(start.dateTime)).format('dddd, h:mm a');
        // eslint-disable-next-line
        const formattedEnd = moment(String(end.dateTime)).format('h:mm a');
        return formattedStart + " to " + formattedEnd;
      }
    }
  }
};
</script>

<style scoped>
.events {
  width: 100vh;
}
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}
.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>
