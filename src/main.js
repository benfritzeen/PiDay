import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/vue-gapi";
import "./plugins/vue-clipboard-2";
import moment from "moment";

Vue.config.productionTip = false;
Vue.filter("formatDate", function(value) {
  if (value) {
    // eslint-disable-next-line
    return moment(String(value)).format('dddd, MMMM Do YYYY, h:mm:ss a')
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
