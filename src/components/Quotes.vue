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
        <h2 class="headline font-weight-bold mb-3">Quotes</h2>
          <v-container>
          <v-layout row wrap>
            <v-flex xs12 {{card.size}} md4 lg3 v-for="card in cards" :key="card.tile">
              <v-card
                  :color="card.color"
                  class="ma-3"
                  raised
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline"
                        v-text="card.text"
                      ></v-card-title>
                      <v-card-text v-text="card.author"></v-card-text>
                    </div>
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
  name: "Quotes",
  data: () => ({
    cards: [
      {
        color: "#D3D3D3",
        text: "Quote Of The Day",
        author: "No API calls yet",
        size: "sm12"
      },
      {
        color: "#D3D3D3",
        text: "Discipline is just choosing between what you want now, and what you want most.",
        author: "Unknown",
        size: "sm6"
      },
      {
        color: "#D3D3D3",
        text: "A society grows great when old men plant trees in whose shade they know they will never sit.",
        author: "Unknown",
        size: "sm6"
      }
    ]
  })
};
</script>
