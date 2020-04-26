import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Auth from "./views/Auth";
import Calendar from "./views/Calendar";
import Games from "./views/Games";
import TicTacToe from "./components/TicTacToe";
import Weather from "./components/Weather";
import Stocks from "./components/Stocks";
import Quotes from "./components/Quotes";
import PageNotFound from "./views/PageNotFound";

Vue.use(Router);

const mode = process.env.VUE_APP_ROUTER_MODE;

if (!mode) {
  throw new Error(
    "Has the .env.<env> file been setup? Environment variable not set: VUE_APP_ROUTER_MODE=" +
      mode
  );
}

export default new Router({
  mode,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/auth",
      name: "Auth",
      component: Auth
    },
    {
      path: "/calendar",
      name: "Calendar",
      component: Calendar
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/games",
      name: "Games",
      component: Games
    },
    {
      path: "/games/tictactoe",
      name: "TicTacToe",
      component: TicTacToe
    },
    {
      path: "/weather",
      name: "Weather",
      component: Weather
    },
    {
      path: "/stocks",
      name: "Stocks",
      component: Stocks
    },
    {
      path: "/quotes",
      name: "Quotes",
      component: Quotes
    },
    {
      path: "*",
      component: PageNotFound
    }
  ]
});
