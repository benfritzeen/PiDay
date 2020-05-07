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
        <h2 class="headline font-weight-bold mb-3">Stocks</h2>
        <v-data-table
          :headers="this.headers"
          :items="this.stocks"
        >
          <template slot="items" slot-scope="props">
            <tr @click="props.expanded = !props.expanded">
              <td>
                {{ props.item["01. symbol"] }}
              </td>
              <td>
                {{ props.item["05. price"] }}
              </td>
              <td>
                {{ props.item["09. change"] }}
              </td>
              <td>
                <v-btn
                  @click="refreshStock(props.item['01. symbol'])"
                >
                  <span class="mr-0">Refresh</span>
                </v-btn>
              </td>
            </tr>
          </template>
        </v-data-table>
        <div class="text-center pt-2">
        <v-btn
          @click="refreshStocks"
        >
          <span class="mr-0">Refresh All</span>
        </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import _ from "lodash";
const apiKey = process.env.VUE_APP_STOCK_API_KEY;

export default {
  name: "Stocks",
  data: () => ({
    headers: [
      {
        text: "Symbol",
        align: "start",
        sortable: true,
        value: "[01. symbol]"
      },
      { text: "Price", value: "[05. price]", align: "center" },
      { text: "Change", value: "[09. price]", align: "center" },
      { text: "Refresh", align: "center" }
    ],
    stocks: [],
    stockSymbols: ["AAPL", "NVDA", "FB", "AMZN", "SHOP"]
  }),
  methods: {
    async refreshStocks() {
      this.stocks = [];
      var symbol;
      for (symbol in this.stockSymbols) {
        await axios
          .get(
            "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
              this.stockSymbols[symbol] +
              "&apikey=" +
              apiKey
          )
          .then(response => {
            this.stocks.push(response.data["Global Quote"]);
          });
      }
    },
    async refreshStock(symbol) {
      this.stocks = _.remove(this.stocks, function(stock) {
        return stock["01. symbol"] != symbol;
      });
      await axios
        .get(
          "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
            symbol +
            "&apikey=" +
            apiKey
        )
        .then(response => {
          this.stocks.push(response.data["Global Quote"]);
        });
    }
  },
  async created() {
    this.refreshStocks();
  }
};
</script>
