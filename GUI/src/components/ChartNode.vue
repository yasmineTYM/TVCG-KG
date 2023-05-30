<script setup>
import vegaEmbed from 'vega-embed'
import VueVega from 'vue-vega'
import {ref,onMounted, onUnmounted,watch, onActivated} from 'vue'
// import Vue from 'vue'
// Vue.use(VueVega)
import { createApp } from 'vue'
import App from '../App.vue'
import { NodeResizer } from '@vue-flow/node-resizer'
import { Handle, Position } from '@vue-flow/core'
import {initialize} from '../js/initialize.js'

const app = createApp(App)
app.use(VueVega)

const {cardWidth, cardHeight, resizeEndFunc} = initialize(400, 300)

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
      <NodeResizer @resize="resizeEndFunc" min-width="100" min-height="30"  color="white"/>
      <Handle type="target" :position="Position.Left" />
      <Handle type="source" :position="Position.Right" />
      <v-card
      :width=cardWidth
      :height=cardHeight
      variant = "outlined"
      title="Visualizer">
      <div id="vegaDiv">
      </div>
      </v-card>
      
    </div>
</template>
<style>

</style>

