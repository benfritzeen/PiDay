<template>
  <v-container>
    <v-layout
        text-xs-center
        wrap
    >
      <v-flex
          mb-5
          xs12
      >
        <h2 class="headline font-weight-bold mb-3">Weather</h2>
        <v-container>
          <v-layout row style="overflow:auto">
            <v-flex xs12 sm6 md4 lg3 v-for="(day, index) in byDayWeather" :key="index">
              <v-card
                class="ma-3"
                  raised
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <v-card-text>
                    <div><h2>{{day.date}}</h2></div>
                    <div>
                      {{day.desc}}
                      <img :src="day.icon">
                    </div>
                    <div>Max Temp: {{day.info.temp.max}}</div>
                    <div>Min Temp: {{day.info.temp.min}}</div>
                  </v-card-text>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
const apiKey = process.env.VUE_APP_WEATHER_API_KEY;
const lat = process.env.VUE_APP_LOCATION_LATITUDE;
const long = process.env.VUE_APP_LOCATION_LONGITUDE

export default {
  name: "Weather",
  data: () => ({
    response: "",
    byDayWeather: []
  }),
  methods: {
    async getWeather() {
      await axios
        .get("https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat + "&lon=" + long + "&appid=" + apiKey + "&units=imperial")
        .then(response => {
          this.response = response;
          this.getDailyWeather();
        });
    },
    async getDailyWeather() {
      var dayInfo;
      const today = new Date();
      var idx = 0;
      for (dayInfo in this.response.data.daily) {
        const newDay = new Date();
        newDay.setDate(today.getDate() + idx);
        var day = {
          date: newDay.toLocaleDateString("en-US"),
          info: this.response.data.daily[dayInfo],
          icon: "http://openweathermap.org/img/wn/" + this.response.data.daily[dayInfo].weather[0].icon +"@2x.png",
          desc: this.response.data.daily[dayInfo].weather[0].description
        }
        this.byDayWeather.push(day);
        idx += 1;
      }
    }
  },
  async created() {
    this.getWeather();
    console.log(this.byDayWeather);
  }
};
</script>
