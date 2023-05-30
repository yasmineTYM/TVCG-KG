<script setup>
import vegaEmbed from 'vega-embed'
import VueVega from 'vue-vega'
import {ref,onMounted, onUnmounted,watch, onActivated} from 'vue'
// import Vue from 'vue'
// Vue.use(VueVega)
import { createApp } from 'vue'
import App from '../App.vue'
const app = createApp(App)
app.use(VueVega)

const data = ref({
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple donut chart with embedded data.",
  "data": {
    "values": [
      {"category": 1, "value": 4},
      {"category": 2, "value": 6},
      {"category": 3, "value": 10},
      {"category": 4, "value": 3},
      {"category": 5, "value": 7},
      {"category": 6, "value": 8}
    ]
  },
  "mark": {"type": "arc", "innerRadius": 50},
  "encoding": {
    "theta": {"field": "value", "type": "quantitative"},
    "color": {"field": "category", "type": "nominal"}
  }
})
draw()


function draw(){
    vegaEmbed('#vegaDiv', data.value)
}
</script>

<template>
    <div>
      <v-card
      width="400"
      height="300"
      variant = "outlined"
      title="Visualizer">
      <div id="vegaDiv">
      </div>
      </v-card>
      
    </div>
</template>
<style>

</style>

