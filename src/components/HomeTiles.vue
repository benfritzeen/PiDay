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
        <h2 class="headline font-weight-bold mb-3">Home</h2>
        <v-container>
            <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="card in cards" :key="card.tile">
                <v-card
                    :color="card.color"
                    class="ma-3"
                    raised
                >
                    <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title
                        class="headline"
                        v-text="card.title"
                        ></v-card-title>

                        <v-card-actions>
                        <v-btn :to="card.to" text color="#F0F8FF">Open</v-btn>
                        </v-card-actions>
                    </div>

                    <v-icon size="100">{{card.icon}}</v-icon>
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
export default {
  data: () => ({
    cards: [
      {
        color: "#D3D3D3",
        icon: "cloud",
        title: "Weather",
        to: "/weather"
      },
      {
        color: "#D3D3D3",
        icon: "show_chart",
        title: "Stocks",
        to: "/stocks"
      },
      {
        color: "#D3D3D3",
        icon: "sports_esports",
        title: "Games",
        to: "/games"
      },
      {
        color: "#D3D3D3",
        icon: "format_quote",
        title: "Quotes",
        to: "/quotes"
      }
    ]
  })
};
</script>
